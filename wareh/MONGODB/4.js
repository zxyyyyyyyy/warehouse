var db = connect('myapp');
var userList = db.users.find();
//逐条打印  循环遍历打印出每一条数据
userList.forEach(function(user) {
    //可以写业务逻辑
    //查到以后，可以操作每个数据然后传给前端可以写业务逻辑
    printjson(user);
});