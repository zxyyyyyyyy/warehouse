const Koa = require ('koa');
const app = new Koa();

app.use(async ctx=>{
    if( ctx.url === '/zxy'){
        ctx.cookies.set(  //设置cookie,    cookies有s啊
            //第一个参数相当于cookie的 Key,第二个参数相当于它的 value
            //第三个参数对应一个对象，在对象里面就可以设置cookie的每一个参数
            'name','zxy',{
                doamin:'localhost',
                path:'/zxy',
                maxAge:24 * 60 * 60 * 1000,  //一天
                espires:new Date('2020-7-1'),
                httpOnly: false,
                overwrite:false,
            }
        );
        ctx.body = 'cookie success ';
    }else{
        ctx.body = 'no cookie';
    }
})



app.listen(3000,()=>{
    console.log('开启服务');
})