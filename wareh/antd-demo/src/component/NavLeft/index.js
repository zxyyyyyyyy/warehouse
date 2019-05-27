import React ,{Component } from 'react'
import {Menu,Icon} from 'antd';
import menuList from './../../config/menuconfig'
import "./index.css"
const {SubMenu} = Menu;

export default  class NavLeft extends Component{
    createMenu = (menuList) => {
        return menuList.map((elem) =>{
            if(elem.children){
                return(
                    <SubMenu title={<span><Icon type={elem.icon}></Icon>{elem.title}</span>} key ={elem.path}>
                        {/* 递归调用  循环生成子菜单 */}
                        {this.createMenu(elem.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={elem.path}>
                    {elem.icon?<Icon type={elem.icon}></Icon>:null}
                    {elem.title}
                </Menu.Item>
            )
        })
        
    }
    componentWillMount = () =>{
        //取到map循环出来的数组
        let list = this.createMenu(menuList);
        this.setState({
            list
        })
        
    }
    render(){
        return(
            <div>
                <div className="logobox">
                    <img src="/imgs/logo.png"/>
                </div>
                <Menu theme="dark" mode="inline">
                    {this.state.list}
                </Menu>
            </div>
        )
    }
}