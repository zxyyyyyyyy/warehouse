const Koa = require ('koa');
const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');
const fs =require('fs');  
//fs 对象 用于读取数据，不需要安装，可以直接使用
// 作用：通过Node对文件或者目录进行读写操作
// fs下面的方法 ：readFile()进行读操作，writeFile()进行写操作
//第一个参数是‘读的文件的路径’，第二个参数是‘编码：以什么方法去读(utf-8)’，
// 第三个参数是一个函数，里面的data是读的每一条数据（string）

//插入商品/insertProductInfo
router.get('/insertProductInfo',async (ctx)=>{
    fs.readFile('./data/product.json','utf-8',(err,data)=>{
        // 把.json数据里的数据（string型）转化成 对象，用JSON.parse
        data = JSON.parse(data);
        console.log(data);
        let count = 0 ; //计数器，记录读取的条数
        // 引入模型
        const  Product = mongoose.model('Product');
        // map循环遍历每一条数据，把它写入到数据库里面
        data.map((value,index)=>{  //第一个参数是对应的值，第二个参数是索引
            console.log(value);
            let product = new Product(value);
            //对type进行随机赋值(1-8),对应的是type.json的typeId（1-8）
            product.type = Math.floor(Math.random()*8)+1;
            product.save().then(()=>{
                count++;
                console.log('成功'+count);
            }).catch(err=>{
                console.log('失败啦：'+err);
            });
        });

    });
    //写入文件完成后，返回值
    ctx.body='导入数据';
});

//获取分类商品
router.get('/getProductsByType', async (ctx)=>{
    const Product = mongoose.model('Product');
    //query:在get请求中把json格式转化为对象 ，
    //skip()分页，参数是从哪条数据开始的，但是ctx.query.start获取的是一个字符串，
    // 但是skip()需要一个Number型,用parseInt转化一下
    // limit()每页限制的条数parseInt(ctx.query.limit)
    await Product.find({type:ctx.query.typeId}).skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then(res=>{
        ctx.body = res;   //把返回值给前端
    }).catch(err=>{
        console.log(err);
    })
});

//获取商品详情
router.get('/getDetail',async (ctx)=>{
    const Product = mongoose.model('Product');
    await Product.findOne({_id:ctx.query.id}).exec().then(res=>{
        ctx.body = res;
    }).catch(err=>{
        console.log(err)
    })
});

//导出 router ,允许调用
module.exports = router;