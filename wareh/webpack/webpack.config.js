const path = require('path');
const HtmlPlugin =require('html-webpack-plugin') 
const ExtractTextPlugin= require('extract-text-webpack-plugin')
module.exports ={
    mode:'development',
    entry:{
        index:'./src/index.js',
        // index1:'./src/index1.js'  可以多个入口文件
    },
    output:{
        path:path.resolve(__dirname,'dist'),   //绝对路径
        filename:'[name].js',
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader",
                })
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            // filename:'xx.html',   //打包出去的文件名
            // minify:{
            //     removeAtrributeQuotes:true,   //去掉属性的双引号
            //     collapseWhitespace:true,   //折叠空白区域
            // }
            template:'./src/index.html',  //要打包的绝对路径和文件名
            // hast:true,     //避免缓存
        }),
        //多个页面打包  继续new 一个新的
        new ExtractTextPlugin("css/index.css")
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        // compress:true,       压缩
        port:8081,
        open:true,        // 直接打开浏览器
    }
}


