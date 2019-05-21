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

import Home from "./conmponent/Home"
function App() {
  return (
    <div className="App">
      HAAH
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

         

       <Route exact path="/" component={Home}></Route>
       <Route exact path="/a/:id" component={A}></Route>
       <Route exact path="/b" component={B}></Route>
       <Route exact path="/c/:num" component={C}></Route>
       
       <Route exact path="/d" render={() =>{
         return <h1>render   dddddd</h1>
       }}></Route>
        <Route path="/children" children={(props)=>{
          let str = props.match?"1111":"0000";
          console.log(str);

          return <Children str={str}></Children>
        }}></Route>
       
     </Router>
    </div>
  );
}

export default App;
