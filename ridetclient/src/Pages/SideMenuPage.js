import React from 'react';
import {Menu, Layout } from "antd";
import {UserOutlined, UnorderedListOutlined} from '@ant-design/icons';
import "./HomePage.css"
import {withRouter} from "react-router-dom";
import { useHistory } from "react-router-dom";
import ThemeSwitch from "../Components/ThemeSwitch/ThemeSwitch";
import {connect} from "react-redux";


const { Sider,  Header } = Layout;


function SideMenuPage(props) {
    let history = useHistory();

    return (
        <Sider
            selectable={false}

            style={{ overflow: 'auto',
                height: '100vh',
                position: 'sticky',
                top: 0,
                left: 0,
                background: props.darkMode? null: 'white',
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

                <Menu.Item key="3" icon={<UnorderedListOutlined/>}

                >
                    היסטוריה
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

const mapStateToProps = state => {
    return {
        darkMode: state.sitesReducer.darkMode

    }
};

export default connect(mapStateToProps, null)(withRouter(SideMenuPage));




