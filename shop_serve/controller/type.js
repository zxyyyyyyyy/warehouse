const koa= require('Koa');
const mongoose = require('mongoose');
const Router = require('koa-router');
let router = new Router();
const fs = require('fs');

//写入type.json里的数据到数据库
router.get ('/insertType',async (ctx)=>{
    fs.readFile('./data/type.json',"utf-8",(err,data)=>{
        data = JSON.parse(data);
        console.log(data);
        let count = 0;
        const Type = mongoose.model('Type');
        data.map((value,index)=>{
            console.log(value);
            let type = new Type(value);
            type.save().then(()=>{
                count++;
                console.log("成功"+count)
            }).catch(err=>{
                console.log("出错"+err);
            })
        })
        
    });
    ctx.body="导入数据成功";
});

//去数据库里面读取 分类返回给前端
router.get('/getTypes',async(ctx)=>{
    const Type =mongoose.model('Type');
    //.find()查询多个，返回的是一个数组；.findOne()返回的是 一个 对象
    await Type.find({}).exec().then(res=>{
        ctx.body = res;
    })
})

module.exports = router;