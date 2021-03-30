import React from 'react';
import {ConfigProvider, Layout, Form, Input,} from "antd";
import SideMenuPage from "./SideMenuPage";
import DetailsForm from "../Components/DetailsForm/DetailsForm"

/*
car company
car color
car seats

contact platform
contact info

city
 */

export default function MyDetailsPage(){

    return (        <ConfigProvider direction="rtl">
            <Layout
                style={{ minHeight: '100vh' }}

            >
                <SideMenuPage/>
                <DetailsForm/>
            </Layout>


        </ConfigProvider>
)
}


