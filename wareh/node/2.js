console.log('script start');
let promise1 = new Promise(function(resolve){
    console.log('prommise1');
    resolve();
    console.log('promise1 end');
}).then(function(){
    console.log('promise2')
})
setTimeout(function(){
    console.log('settimeout')
})
console.log("script end");

process.nextTick(function(){
    console.log("nexttick");
})