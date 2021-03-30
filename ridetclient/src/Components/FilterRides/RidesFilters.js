import React from 'react';
import TimeFilter from "./TimeFilter";
import TextSearch from "./TextSearch";
import CitySearch from "./CitySearch";
import {Space} from "antd";


function RidesFilter(){
    return (
        <div>
            <Space>
        <TimeFilter/>
        <TextSearch/>
        <CitySearch/>
            </Space>
        </div>
    )
}

export default RidesFilter;