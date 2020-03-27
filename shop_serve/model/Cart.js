const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;    //唯一ID

//购物车模型
const cartSchema = new Schema({
    ID:ObjectId,     //购物车自己的id
    productId :{
        type:ObjectId,
        ref:'Product',  //指向联合查询的model
    },
    userId : ObjectId,
    // count:Number,
    createDate:{type:Date,default:Date.now()}, //默认值时当前时间
    // 创建的这条数据的时间，不是中国时间，中国在东八区，要加8
})

//发布模型
mongoose.model('Cart',cartSchema);