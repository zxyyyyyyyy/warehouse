const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//创建 商品表 模型，对应数据库的商品表
const productSchema = new Schema({
    id:Schema.Types.ObjectId,
    name:String,
    img:String,  //是一个url地址，所以也是String类型
    price:Number,
    company:String,
    city:String,
    type:Number,   
    //product.json文件里没有相应分类，
    //要给一个分类值，对应type.json里的typeId分类
    // 分别建type表，和product表，两个表之间有关联关系，
    // product表里有type属性，对应type表里的typeId，进行分类
});
// 发布product模型
mongoose.model('Product',productSchema);