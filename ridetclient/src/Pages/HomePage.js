import React, {useEffect, useState} from 'react';
import {Button, Menu, notification, Tooltip} from "antd";
import RidesList from "../Components/RidesList";
import Sider from "antd/es/layout/Sider";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import {UserOutlined, PlusOutlined, UnorderedListOutlined} from '@ant-design/icons';
import "./HomePage.css"

async function getRides(page, searchParams = {}) {
    try {
        // TODO: use API and return rides list
        return []
    } catch (e) {
        notification.error({message: "Error", description: "Failed to load rides instances' data"});
        return [];
    }
}


export default function HomePage() {
    const [rideInstances, setRideInstances] = useState([]);
    const [loading, setLoading] = useState(false);


    async function loadRideInstances(page) {
        setLoading(true);
        const oldData = rideInstances.slice();
        const newData = await getRides(page);
        setLoading(false);
        const hasNewData = newData.length !== 0;
        if (hasNewData) {
            setRideInstances(oldData.concat(newData));
        }
        return hasNewData;
    }

    useEffect(() => {
        getRides(0).then(setRideInstances);
    }, [])

    return (
        <>
            <Layout>
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
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
                        <Header className="site-layout-sub-header-background" style={{padding: 0}}/>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            My Info
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UnorderedListOutlined/>}>
                            All Rides
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{padding: 0}}/>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            <RidesList
                                loading={loading}
                                handleLoadMore={loadRideInstances}
                                rideInstances={rideInstances}
                            />
                        </div>
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{textAlign: 'center'}}>kakas C ©2021</Footer>
            <Button style={{float: "right"}} type="primary" shape="round" icon={<PlusOutlined/>} size={"large"}>
                New Ride
            </Button>
        </>
    )
}

