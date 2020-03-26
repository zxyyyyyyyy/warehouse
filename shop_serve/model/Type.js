const mongoose = require('mongoose');
const Schema = mongoose.Schema;  //注意这里不要new 

//然后创建Type表的模型
const typeSchema = new Schema({
    id:Schema.Types.ObjectId,
    typeId : Number,
    typeName : String ,
});

//发布Type模型
mongoose.model('Type',typeSchema);