import React from 'react';
import {BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom'
import A from "./conmponent/A"
import B from "./conmponent/B"
import C from "./conmponent/C"
import Children from "./conmponent/Children"
import store from './store'
import {add,reduce} from './action'
import {connect} from ''
import Home from "./conmponent/Home"
function App(props) {
  return (
    <div className="App">
      <div>{props}</div>
      <div> HAAH</div>
      <button onClick={()=>{
        console.log('我要修改Num值');
        //通过store.dispatch触发action修改num
        store.dispatch(add(2));
      }}>add</button>
<button onClick={()=>{
        console.log('我要修改Num值');
        //通过store.dispatch触发action修改num
        store.dispatch(reduce());
      }}>reduce</button>


      <hr></hr>
     <Router>
       <Link to="/">首页面</Link>
      ------
       <Link to="/a/5">A页面</Link>
      ------
       <Link to="/b">B页面</Link>
      ------
       <Link to="/c/666">C页面</Link>
      ------
      <Link to="/d">D页面</Link>
      ------
      <Link to="/children">children</Link>
      ------
      <Link to="/e">重定向</Link>



       {/* <Route path="/" component={Home}></Route>
       <Route path="/a" component={A}></Route>
       <Route path="/b" component={B}></Route> */}
         

       {/* <Route exact path="/" component={Home}></Route>
       <Route exact path="/a/:id" component={A}></Route>
       <Route exact path="/b" component={B}></Route>
       <Route exact path="/c/:num" component={C}></Route>
       
       <Route exact path="/d" render={() =>{
         return <h1>render   dddddd</h1>
       }}></Route> */}
        {/* <Route path="/children" children={(props)=>{
          let str = props.match?"1111":"0000";
          console.log(str);

          return <Children str={str}></Children>
        }}></Route>
        */}
     </Router>
    </div>
  )
}
let mapStateToProps =(state) =>{
  return {
    num:state.num
  }
}
export default connect(mapStateToProps)(App);
