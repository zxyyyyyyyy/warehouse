const Koa = require('koa');   //加载koa模块
const app = new Koa();   // new 一个koa的 app 实例

app.use(async ctx =>{             //使用async异步加载
    ctx.body = 'Hello World';     //响应的内容是什么
});

app.listen(3000,()=>{   //监听3000端口，如果成功，执行回调函数
    console.log('服务开启成功在3000端口');   
    //在终端执行 node index.js后返回"服务开启成功在3000端口"
    //是打印在控制台里，不是浏览器的console里
    //因为现在做的是后端，服务端的
});   