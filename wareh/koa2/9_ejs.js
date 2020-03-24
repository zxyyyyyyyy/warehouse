const Koa = require ('koa');
const app = new Koa();
const views = require('koa-views');
const path = require ('path');   //webpack基于node 里的

//加载模板引擎  views方法第一个参数path.join(__dirname,'./views')
// __dirname指的是文件的当前路径 ，'./views'指的是模板在基于views文件夹下
// views方法第二个参数是一个对象
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'   //对应的模板，除了ejs模板，还有很多其他模板
    // node 的express 或者 koa 框架用 ejs模板 比较多
}))

app.use(async ctx =>{
    // 把 title 写死了 ，真正项目的话可以是业务逻辑操作
    let title = 'hello zxy';
    // 去前端渲染 views文件夹下的 index模板 里的 title
    await ctx.render('index',{
        title ,   //只写一个 title，就可以了，是es6里面对象的简写方式
        //传递数组
        list:[    //里面的数据可能是业务逻辑从数据库里读取的
            {name:'html',age: 20},
            {name:'css',age : 30},
            {name:'javascript',age :40},
            {name:'koa2',age:'50'}
        ]
    })
});

app.listen(3000,()=>{
    console.log("开启");
})