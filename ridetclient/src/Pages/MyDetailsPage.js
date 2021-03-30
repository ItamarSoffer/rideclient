import React from 'react';
import {ConfigProvider, Layout, Form, Input,} from "antd";
import SideMenuPage from "./SideMenuPage";
import DetailsForm from "../Components/DetailsForm/DetailsForm"


export default function MyDetailsPage() {
    return (<ConfigProvider direction="rtl">
            <Layout style={{minHeight: '100vh'}}>
                <SideMenuPage selectedTab={['1']}/>
                <DetailsForm/>
            </Layout>
        </ConfigProvider>
    )
}


