import React from 'react';
import { Menu,Icon } from 'antd';
import MenuConfig from './../../config/menuConfig';
import './index.less';
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component{
   componentWillMount(){
       const MenuTreeNode=this.renderMenu(MenuConfig);
       this.setState({
           MenuTreeNode
       })
    } 
    //    菜单渲染,利用递归的方法
    renderMenu=(data)=>{
       return data.map((item)=>{
           if(item.children){
            // return this.renderMenu(item.children);
            return(
                <SubMenu title={item.title} key={item.key}>
                    {this.renderMenu(item.children)}
                </SubMenu>
            )
           }
           return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
       })
    }
    render(){
       return(
           <div>
              <div className="logo">
                 <img src="/assets/logo-ant.svg" alt=""/>
                 <h1>ACM管理系统</h1>
              </div>
              <Menu 
                 theme="dark"
              >
               {this.state.MenuTreeNode}
              </Menu>    
           </div>
       )
   }
}