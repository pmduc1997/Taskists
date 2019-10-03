import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default class SiderStyle extends React.Component{
    render(){
        return(
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
        <Icon type="folder" />
          <span className="nav-text">Projects</span>
        </Menu.Item>
        <Menu.Item key="2">
        <Icon type="user" />
          <span className="nav-text">People</span>
        </Menu.Item>
      </Menu>
    </Sider>
        )
    }
}
