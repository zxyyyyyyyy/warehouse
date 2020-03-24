var startTime = (new Date()).getTime();  //getTime返回的是从1970-1-1
var db = connect('myapp');
//查询某一条数据，看它查找时间  916ms
var result = db.tel.find({tel:'13258410049'});
result.forEach(res=>printjson(res));

var runTime = new Date().getTime() - startTime;
print('run time is' + runTime + 'ms');

// 建索引  可以提高查询效率
//当前某一字段需要频繁查询，就建索引 
//比如说：电商网站的产品名称
db.tel.ensureIndex({tel:1});
//建完索引同一查找只要   54ms ，而且每次查询这一个会越来越快
// 但是索引不要去随便创建，就100，或者几千条数据，没必要
// 查询性能并不是很明显，还会增加硬盘的消耗，因为索引是占内存空间的
//如果是男和女，不要建索引，占百分之50，每次查找都占到数据库一半的数据量了，
// 所以大多数数据都满足的情况下，也不要建索引
// 所以要在适当的情况下去用索引

db.tel.getIndex(); //查询索引
db.tel.dropIndex({tel:1}); //删除索引
