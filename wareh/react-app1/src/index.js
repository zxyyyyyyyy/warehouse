import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
//store用来存储状态的
ReactDOM.render(
<Provider store={store}>
<App />

</Provider>


, document.getElementById('root'));


