import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import {
 
  Row,
  Col,

} from "antd"
import NavLeft from './component/NavLeft'

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={4} >
          <NavLeft></NavLeft>
        </Col>
        <Col span={20}>right</Col>

      </Row>
    </div>
  );
}

export default App;
