import {creatStore} from 'redux'
//creatStore创建store  第一个参数是reducer  第二个参数初始化状态
let initialState = {
    num:0,
}
let store = creatStore(()=>{

},initialState);
export default store;