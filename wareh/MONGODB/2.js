var user1 = {
    name : 'xiaomei',
    age : 90,
    hobby : ["吃饭","树胶","核查"],
    pc:{
        brand:'apple',
        price : 10000,
    }
};
var user2 = {
    name : 'pangpang',
    age : 45,
    hobby : ["把看","法人","不是"],
    pc:{
        brand:'IBM',
        price : 10000,
    }
};
var user3 = {
    name : 'dahuang',
    age : 66,
    hobby : ["哈哈","嘻嘻","嘿嘿"],
    pc:{
        brand:'hh',
        price : 10000,
    }
};
var db =connect ('myapp');
db.users.insert([user1,user2,user3]);  //插入多个用数组插入
print("insert success");