export let add =(count) =>{
    console.log('触发了add action')
    return{
        type:'ADD',
        xx:count
    }
}
export let reduce =() =>{
    console.log('reduce')
    return {
        type:'REDUCE'
    }
}
//只能暴露一个
// export default add;