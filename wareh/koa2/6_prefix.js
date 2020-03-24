const Koa = require ('koa');
const app = new Koa();

const Router = require ('koa-router');   //引入koa-router
const router = new Router({
    //Router 里有一个对象这样的参数 prefix
    // 设置了prefix参数后，会在配置的每个路由前面加一个路由前缀
    prefix:"/zxy",
});
router.get('/abc',(ctx,next) =>{
    ctx.body = 'zxy';
});

router.get('/test',(ctx,next)=>{
    ctx.body = 'Test';
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('服务开启啦');
})

