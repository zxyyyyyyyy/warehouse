import { createStore ,applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
//createStore创建store  第一个参数是reducer  第二个参数初始化状态
let initialState = {
    num:0,
}
let store = createStore(reducer,createStore,applyMiddleware(thunk));
export default store;