//手动简单实现一个EventEmitter
class EventEmitter{
    constructor(){   //构造函数，当类被New的一瞬间率先被执行的方法
        this.handler={};
    }
    on(eventName,callback){  //监听事件名
        if(!this.handlers){  //事件可多个，判断存不存在，不存在，赋个空对象
            this.handlers={};
        }
        if(!this.handlers[eventName]){ //对象里有很多事件名，如果事件名不存在，赋个空数组，存无数事件名
            this.handlers[eventName]=[];
        }
        //如果eventName事件名存在，推给回调，让回调执行
        this.handlers[eventName].push(callback);  
    }
    emit(eventName,...arg){  //发送事件    ...arg 用于es6里传多个参
        if(this.handlers[eventName]){  //事件名是否存在，存在应是个数组
            for(var i=0;i<this.handlers[eventName].length;i++){
                this.handlers[eventName][i](...arg);
            }
        }
    }
}
//es5中，没有class关键字，也没有constructor关键字，所以既是类名又是函数名
//function EventEmitter(){}

let event= new EventEmitter;
event.on('say',function(str){
    console.log(str);
})
event.emit('say','hahahahaha')