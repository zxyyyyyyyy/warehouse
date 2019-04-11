const path = require('path');
const HtmlPlugin =require('html-webpack-plugin') 
const ExtractTextPlugin= require('extract-text-webpack-plugin')
const glob = require('glob');
const PurifyCSSPlugin = require("purifycss-webpack");
const webpack = require('webpack');
// const entry = require("./webpack_config/entry_webpack.js");
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports ={
    mode:'development',  //production   上线打包
    // entry:entry,
    entry:{
        index:'./src/index.js',
        // index1:'./src/index1.js'  可以多个入口文件
    },
    output:{
        path:path.resolve(__dirname,'dist'),   //绝对路径
        filename:'[name].js',
        // publicPath:'http://localhost:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{importLoaders:1}
                    },'postcss-loader'],
                })
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/',
                    }
                }]
            },
            {
                test:/\.(htm|html)$/i,
                use:'html-withimg-loader',
            },
            {
                test:/\.scss$/,
                // use:['style-loader','css-loader','sass-loader'],
                use:ExtractTextPlugin.extract({
                    use:["css-loader","sass-loader"],
                    fallback:"style-loader",
                })
            },
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }],
                exclude:/node_modules/,  //忽略node_module文件夹 不转es5
            },

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
        new ExtractTextPlugin("css/index.css"),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname,'src/*.html')),
        }),
        new webpack.BannerPlugin('翻版必究！'),
        new webpack.ProvidePlugin({
            $:"jquery",
        }),
        new CopyWebpackPlugin([{
            from:__dirname + '/src/public',
            to:'./public',
        }])
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        // compress:true,       压缩
        port:8081,
        open:true,        // 直接打开浏览器
    }
}


