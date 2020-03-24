async function timeout(){
    return '1'
}
console.log(timeout());    //输出  Promise { '1' }
timeout().then(result =>{
    console.log(result);
});
console.log('2');
// 输出  2 1

function timeout(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(1);
            resolve();
        },2000);
    });
}

async function fn(){
    await timeout();
    console.log(2);
}
fn();
// async的异步操作：
// 先调用fn()方法，然后执行await 后面的方法timeout();
// 然后进入timeout()方法，等方法都执行完，再执行await下面的语句
// 输出 1  2