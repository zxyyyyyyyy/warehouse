const mongoose = require('mongoose');
const db = 'mongodb://localhost/shop'   //创建数据库连接地址，如果是真实地址就写真实地址
//不写端口号，默认是27017 端口 ，然后后面是项目用到的数据库的名字

// 引入模型  先安装glob
const glob = require ('glob');
const path = require ('path');  //不用安装path,自带的
exports.initSchemas = () =>{   //暴露导出 ，初始化的Schema
    glob.sync(path.resolve(__dirname,'./model','*.js')).forEach(require);  
    //__dirname:获取当前项目的绝对地址,下的./model文件夹，下面的所有*.js文件
    // .forEach(require)：都把它请求进来
    // 引入所有的Schema

}

exports.connect = ()=>{
    //用 mongoose 自带的方法connect 连接数据库
    mongoose.connect(db,{useNewUrlParser:true});
    // mongoose可以监听下面的事件 mongoose.connection.on
    //监听数据库连接，失败重新连接，
    // 如果是完整的大型项目，可以做一个计数器，如果数据库服务down掉了，也不能一直连接，
    // 计数几次之后，给用户提示数据库连接失败，然后可以去修，有提示会更友好一些
    mongoose.connection.on('disconnected',()=>{
        mongoose.connect(db);
    });
    //监听如果数据库发生错误的时候,连接一个数据库返回一个错误的话
    mongoose.connection.on('err',err=>{
        console.log(err);   //打印错误
        mongoose.connect(db);  //重新连接
    });
    //数据库连接的时候
    mongoose.connection.once('open',()=>{
        console.log('mongodb connected success');
    })
}