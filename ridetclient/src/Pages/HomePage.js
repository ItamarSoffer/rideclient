import React, {useEffect, useState} from 'react';
import {Button, notification, Layout, ConfigProvider } from "antd";
import RidesList from "../Components/RidesList";
import {PlusOutlined} from '@ant-design/icons';
import "./HomePage.css"
import SideMenuPage from './SideMenuPage'

const { Content, Footer} = Layout;


async function getRides(page, searchParams = {}) {
    try {
        // TODO: use API and return rides list
        return []
    } catch (e) {
        notification.error({message: "Error", description: "נכשל בהעלאת הטרמפים"});
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
    }, []);

    return (
        <ConfigProvider direction="rtl">

            <Layout
                style={{ minHeight: '100vh' }}

            >
               <SideMenuPage/>
                <Layout>
                    {/*<Header className="site-layout-sub-header-background" style={{padding: 0}}/>*/}
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, minHeight: 360}}>
                            <RidesList
                                loading={loading}
                                handleLoadMore={loadRideInstances}
                                rideInstances={rideInstances}
                            />
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Kakas C ©2021</Footer>

                    <Button style={{float: "right", width: '150px'}} type="primary" shape="round" icon={<PlusOutlined/>} size={"large"}>
                        New Ride
                    </Button>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}

