const mongoose = require("mongoose");
const Schema = mongoose.Schema; //Schema 首字母大写，一会儿要去 new 它
const bcrypt = require("bcryptjs"); //引入加盐加密

// 创建用户集合（表）对应的模型，
// 里面的每一个属性对应的是数据库里面的每一个key(键值)
const userSchema = new Schema({
  userId: Schema.Types.ObjectId, //Types :生成一个唯一Id
  userName: { unique: true, type: String }, //有多个条件去配置的话，在对象里面
  // 名字是否唯一 unique:true
  password: String,
  createDate: { type: Date, default: Date.now() }
  //用户创建时间，默认值是当前的系统时间
});


// 加盐加密
//在每次进行save方法之前执行next（相当于VUE里的钩子函数） 
userSchema.pre("save", function(next)  {    
    //这里有错找了好久 next => 改成 function(next)
    // 原因是输出this.password为undefined，this指针的问题。
    // console.log('salt');   //没问题
  bcrypt.genSalt(10, (err, salt) => {
    // console.log('salt');  //没问题
    //随机生成盐，10是迭代的次数，10足够了，salt生成的盐
    //如果生成盐过程中发生错误，
    if (err) return next(err);
    //如果生成盐成功，加盐，第一个参数是加盐对象，第二个盐，第三个回调函数
    //如果加盐成功 hash就是加完盐以后的值
    bcrypt.hash(this.password, salt, (err, hash) => {
        // console.log(err); 
      if (err) return next(err);   
      this.password=hash;  //对模型里的password = hash 加完盐以后的值
      next(); //执行下一句
    });
  });
});

// 验证密码
//userSchema模型下面自定义  方法 ，可以定义很多个
userSchema.methods = {
    //比较密码的一个方法  ，comparePassword 方法名，
    // 比较输入密码和加盐加密过的密码是否相等
    comparePassword : (_password,password) =>{
        return new Promise((resolve,reject)=>{  //用Promise对象可以.then
            // console.log(_password,password);//第一个undefined ,
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if(!err) resolve(isMatch) //成功返回isMatch布尔值
                else reject(err)
            })

        })
    }
};



// 建好模型以后，要发布模型,才可以被引用
//第一个参数 发布的名字(唯一的)，第二个参数是对应的模板名字
mongoose.model("User", userSchema);
