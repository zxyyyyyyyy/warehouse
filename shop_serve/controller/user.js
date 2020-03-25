const Router = require ('koa-router');
let router = new Router;
const mongoose = require('mongoose');

//注册
//看前端发送什么请求，就用什么请求接收
// 第一个参数名字是与前端的发送请求/registUser的接口对应的
router.post('/registUser',async (ctx)=>{
    // console.log('请求成功');   //后端服务器输出
    // ctx.body="请求成功了"   //返回给前端

    // 获取model
    const User = mongoose.model('User'); //'User'是在model里发布的名字对应
    //接收前端Post请求，封装成user对象
    let newUser = new User(ctx.request.body);
    // console.log(newUser);
    //使用save方法(mongoose自带方法) 保存用户信息
    await newUser.save().then(()=>{    //.save()方法存储数据
        ctx.body = {   //如果成功，返回给前端状态码200，和信息
            code:200,
            message:"注册成功",
        }
    }).catch(err=>{
        ctx.body = {
            code:500,
            message:err,  //如果错误的话返回状态码500把错误信息返给前端
        }
    })

})

//登录
router.post('/loginUser',async (ctx)=>{
    //接收前端发送的数据
    let loginUser = ctx.request.body;
    let userName = loginUser.userName;
    let password = loginUser.password;
    //引入model
    const User = mongoose.model('User');
    //查询用户名是否存在，存在再去比较密码
    //第一个userName是数据库里的key，第二个是前端传的
    //exec()执行前面的语句，返回的也是Promise对象
    await User.findOne({userName:userName}).exec().then(async (result)=>{
        if(result){   //如果result存在，当前用户名存在，比较密码
            //result 返回的是名字匹配到的那一条数据
            let newUser = new User();  
            //因为comparePassword是实例化方法，只有new一个实例化才能调用它,返回一个promise对象
            // 第一个password是传进来的password
            await newUser.comparePassword(password,result.password)
            .then(isMatch =>{
                //isMatch 是true 登陆成功
                if(isMatch){
                    ctx.body ={
                        code:200,
                        message:'登录成功'
                    }
                }else{
                    ctx.body={
                        code:201,
                        message:'登录失败'
                    }
                }
            })

        }else{   //用户名不存在
            ctx.body={
                code:201,  //错误码是自己规定的
                message:'用户名不存在'
            }
        }
    })

})

module.exports = router ; //导出 router，才可以被index引入使用