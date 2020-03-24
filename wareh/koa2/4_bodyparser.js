const Koa = require ('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
app.use(bodyparser());  //bodyparser()加括号，因为是个方法

app.use(async ctx =>{
    let data = ctx.request.body;

    ctx.body=data;
})

app.listen(3000,()=>{
    console.log('服务开启3000');
})