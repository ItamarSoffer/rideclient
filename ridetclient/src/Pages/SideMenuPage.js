import React, {useEffect, useState} from 'react';
import {Button, Menu, notification, Tooltip, Layout, ConfigProvider } from "antd";
import RidesList from "../Components/RidesList";
import {UserOutlined, PlusOutlined, UnorderedListOutlined} from '@ant-design/icons';
import "./HomePage.css"
import {withRouter} from "react-router-dom";
import { useHistory } from "react-router-dom";
import ThemeSwitch from "../Components/ThemeSwitch/ThemeSwitch";


const { Sider, Content, Footer, Header } = Layout;


function SideMenuPage() {
    let history = useHistory();

    return (
        <Sider
            style={{ overflow: 'auto',
                       height: '100vh',
                       position: 'sticky',
                       top: 0,
                       left: 0,
                   background: "white"
                       // background: this.props.darkMode? null: 'white',
                   }}

                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo"/>
                    <Menu mode="inline" defaultSelectedKeys={['2']}>
                        <Header className="site-layout-sub-header-background" style={{padding: 0}}/>
                        <Menu.Item key="1"
                                   icon={<UserOutlined/>}
                                   onClick={() => {history.push({
                            pathname: `/details`,});
                        }}
                        >
                            המידע שלי
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UnorderedListOutlined/>}
                        onClick={() => {history.push({
                            pathname: `/`,});
                        }}
                        >
                            כל הטרמפים
                        </Menu.Item>
                                        {/* DARK MODE SWITCH*/}
                <div style={{display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', width: '100%'}}>
                    <ThemeSwitch/>
                </div>
                    </Menu>
                </Sider>)


}

export default withRouter(SideMenuPage);


