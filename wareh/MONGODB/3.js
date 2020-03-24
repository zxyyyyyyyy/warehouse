var modify = {
    findAndModify : 'users',
    query : {name:'dahuang'},
    update:{$set:{age:32}},
    new :true,   
//true返回的是修改以后的结果，false是修改之前的结果
};

var result = db.runCommand(modify);
printjson(result);

db.users.find(
    {age:{$gte:20,$lte:30}},  
    //找 age 大于20小于30的数据，但是打印出数据的所有字段
    {name:true,age:true,_id:false}, 
    //只显示 name age 也不显示 id , true 也可以用 1
)
db.users.find(
    {age:{$in:[20,30]}},   //找 age 在20-30的数据
    {name:true,age:true,_id:false}
)
db.users.find({   //对象包裹
    $or:[        
        //$or 或命令查找  $and 与命令都满足 $not 非命令 ，不满足的
        {age:{$in:[20,30]}},  
        {'pc.brand':'IBM'},   // 找pc对象下的brand属性值为 IBM的
    ]},
    //找到后，只显示 name age 
    {name:true,age:true,_id:false}, 
)
// 数组
db.users.find(
    {hobby:['吃饭']} , //找hobby 数组里只有 '吃饭'数据
    {hobby:'吃饭'},   
    //找hobby 数组里只要有'吃饭'的所有数据，没有数组框
)
db.users.find(
    {hobby:{$all:['吃饭','睡觉']}} , //找hobby数组里都有'吃饭','睡觉'的数据
    {hobby:{$in:['吃饭','睡觉']}} ,//数组里只要有一个就可以的数据
    {hobby:{$size:3}} ,  //根据数组的长度去查询
)
// 分页
db.users.find(
    {},  //查找所有数据
    {name:true,age:true,_id:false},
).limit(1).skip(0).sort({age:-1})
//limit：限制查询条数；skip：限制跳过条数；sort排序（-1降序，1升序）
// 比如说查询查询10条数据，第一次skip(0)，第二次skip(10)，第三次skip(30)
// 前端分页的做法，每次10条，之后再来10条（商品列表）
//把limit(1).skip(0)的值传回后端，后端去数据库里拿结果