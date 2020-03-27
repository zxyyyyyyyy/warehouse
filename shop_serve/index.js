const Koa = require("koa");
const app = new Koa();


// 解决跨域问题
const cors = require('koa2-cors');
app.use(cors({   //指定那些源头可以请求后端
    origin:['http://localhost:8080'],
    credentials:true,    //要带证书
}));

// 接收前端的post请求,解码
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

//加载路由
const Router = require('koa-router');
let router = new Router();

// 配置user路由
let user = require ('./controller/user.js');
router.use('/user',user.routes());  // '/user'对应的是controller下的user控制器
// '/user'参数，与前端发过来的 'user/registUser' 里的user是一样的
// 在user 控制器下面定义一个相应的方法registUser，表示注册用户

// 配置product路由
let product = require('./controller/product.js');
router.use('/product',product.routes());

//配置type路由
let type = require('./controller/type.js');
router.use('/type',type.routes());

// 配置cart路由
let cart = require('./controller/cart.js');
router.use('/cart',cart.routes());

app.use(router.routes());
app.use(router.allowedMethods());  
//allowedMethods()配置什么请求就只能接收什么请求


//引入 init.js 里暴露出的 connect 方法，
// 调用方法进行连接数据库
const { connect, initSchemas } = require("./init.js");
(async () => {
  await connect();
  initSchemas();
})();

app.use(async ctx => {
  ctx.body = "hello shop ";
});

app.listen(3000, () => {
  console.log("start shop server");
});
