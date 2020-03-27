const koa = require('koa');
const mongoose = require('mongoose');
const Router = require ('koa-router');
let router = new Router();
const fs = require('fs');

//加入购物车
router.post('/addCart', async (ctx)=>{
    const Cart = mongoose.model('Cart');
    const cart = new Cart(ctx.request.body);  //接收前端发送的参数
    await cart.save().then(res=>{
        ctx.body = {
            code:200,      //200,500是自己规定的
            message:'添加成功',
        }
    }).catch(err=>{
        console.log(err);
        ctx.body = {
            code:500,
            message:err,
        }
    })

})

// 获取购物车信息
router.get('/getCart',async (ctx)=>{
    const Cart = mongoose.model('Cart');
    // populate('productId '):是联合查询，参数是通过那个字段去关联的
    await Cart.find({userId:ctx.query.userId}).populate('productId ').exec().then(res=>{
        ctx.body = res;
    }).catch(err=>{
        console.log(err);
    })
})

module.exports = router;