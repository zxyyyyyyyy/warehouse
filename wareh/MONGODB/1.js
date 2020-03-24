var userName = 'erpangzi';
var time = Date.parse(new Date());
var data = {
    "username":userName,
    "registTime":time,
};
var db = connect('myapp');  //连接数据库 ，数据库名称
db.users.insert(data);  //在表名为users里插入data数据
print('insert success'); //输出插入成功