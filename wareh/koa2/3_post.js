const Koa = require ('koa');
const app = new Koa();

app.use(async ctx =>{
    //定义一个data空字符串,作用是叠加post请求发过来的数据
    let data = '';
    // console.log(ctx);  看看ctx是什么
    //监听data事件，这个事件每次在收到表单提交数据的时候就会执行
    ctx .req.on('data',chunk =>{
        //把传过来的参数 chunk 叠加到 data 里面去
        data += chunk ;   //chunk 是一个二进制的数据
        console.log(chunk);
    });

    //监听一个end 事件 ，这个事件在接收每次表单提交数据完成后执行
    ctx.req.on('end',()=>{
        //把叠加的数据进行解码 ， decodeURI()函数
        data = decodeURI(data);
        console.log(data);
    });

    ctx.body = 123; 
    // ctx.body = {    
    //     //ctx.body 一定要写，没写的话页面是 Not Found
    //     //错误码是404，相当于当前的请求没有返回
    //     //ctx.body 可以随便给个值，但是一定要有 ctx.body
    //     //相当于服务器给的返回值,返回的会渲染在前端页面上
    // }
})

app.listen(3000,()=>{
    console.log('服务开启成功在3000端口上')
})