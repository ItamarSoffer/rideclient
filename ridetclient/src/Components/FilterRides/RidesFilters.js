import React from 'react';
import TimeFilter from "./TimeFilter";
import TextSearch from "./TextSearch";
import CitySearch from "./CitySearch";



function RidesFilter(){
    return (
        <div>

        <TimeFilter/>
        <TextSearch/>
        <CitySearch/>
        </div>
    )
}

export default RidesFilter;