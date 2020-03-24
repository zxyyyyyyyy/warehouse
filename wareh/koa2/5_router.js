const Koa = require ('koa');
const app = new Koa();

const Router = require ('koa-router');   //引入koa-router
const router = new Router();
router.get('/abc',(ctx,next) =>{
    //router.get()方法,第一个参数是URL地址，
    //第二个是请求这个地址后处理的回调函数
    console.log(ctx);
    console.log(next);  //要跳转的那个地方 /abc
    ctx.body = 'zxy';
});

router.get('/test',(ctx,next)=>{
    console.log(ctx);
    console.log(next);
    ctx.body = 'Test';
})

//然后装载进去 ,router.routes()方法，
//因为上面可能配置了很多的路由
app.use(router.routes());
//允许上面的方法，上面的路由/abc 是发送get方法，
//要是发送post就会报错
app.use(router.allowedMethods());

// app.use(async ctx =>{

// })

app.listen(3000,()=>{
    console.log('服务开启啦');
})

//前端发送真实的  登录  请求
//http://192.168.1.12/login
//而这个 /login 就由后端进行路由配置，进行接收参数
//可以配很多路由，如果前端是get，就要配get,若是post,配post
//前后端一定要对上 请求方法。