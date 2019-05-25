import axios from 'axios'

import dispach from 'store'
export let add =(count) =>{
    // console.log('触发了add action')
    // return{
    //     type:'ADD',
    //     xx:count
    // }
    return ()=>{
        console.log('action....')
        axios.get('/test.json')
        .then((result)=>{
            console.log(result.data);

            //dispach 触发 {对象}  传到reducer
            store.dispach({
                type:"ADD",
                payload:result.data.data,
            })
        })
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