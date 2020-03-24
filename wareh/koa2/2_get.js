const Koa = require ('koa');
const app = new Koa();
 
app.use (async ctx =>{
    let url = ctx.url;    //返回后面的url地址 /?username=zxy&age=13
    let query = ctx.query;  //返回的是对象  {"username":"zxy","age":"13"}
    let queryString = ctx.querystring; //返回的是字符串 username=zxy&age=13

    ctx.body = {
        url,
        query,
        queryString     
    };
})

app.listen(3000,()=>{    //相当于 一会执行这个文件，开启一个3000的端口
    console.log('服务开启在3000端口')
})