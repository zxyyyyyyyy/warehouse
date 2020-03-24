function getTel(){
    var prefixArr = ['130','131','132','133','135','136','137','138','139','181'];
    //先从10个里去一个电话头
    //从数组里通过随机生成0-9里面的整数作为数组索引，取到电话头
    var tel = prefixArr[parseInt(Math.random()*10)];
    for(var i=0;i<8;i++){
        //拼接后面八位随机数 ，向下取整
        tel += Math.floor(Math.random()*10);
    }
    return tel;
}
//以上可以取到一个随机生成的电话号
var startTime = (new Date()).getTime();  //getTime返回的是从1970-1-1
var db = connect('myapp');
var temInfo = [];
for (var i=0;i<1000000;i++){
    temInfo.push({
        logintime : new Date(),
        tel:getTel()
    });
}
db.tel.insert(temInfo); //先生成100万数据，然后一次插入，这样效率更高
//看代码的运行时间，用结束时间减去开始时间，可以测试代码的执行效率
var runTime = new Date().getTime() - startTime;
print('run time is' + runTime + 'ms');