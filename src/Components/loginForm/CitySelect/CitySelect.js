import {React, useState, useEffect} from 'react';

import {Select} from 'antd';
import {apiGetCities} from "../../../Actions/apiActions";

const { Option } = Select;

// needs to get a function to store the value


const CitySelect = (props) =>{
    const [data, setData] = useState([]);
    const [isFetched, setIsFetched] = useState(false);


    useEffect(() => {
        apiGetCities()
            // .then(res => res.data)
            // .then((results) => setData({cities: results.cities}))
            .then((results) => setData({cities: results}))
            .then(() => setIsFetched(true))
    }, []);


    if (isFetched) {
        return (
            <Select
                defaultValue={props.defaultValue}
                showSearch
                allowClear
                placeholder={"עיר"}
                style={{width: 150}}
                onChange={value => props.handleCityChange(value)}
                optionFilterProp='cityName'
                defaultValue={props.defaultCity ? props.defaultCity: null}
            >
                {
                    data.cities.map(
                        function (cityData) {
                            return (
                                <Option value={cityData.id}
                                        name={cityData.city_name}
                                        cityName={cityData.city_name}
                                >
                                    {cityData.city_name}
                                </Option>
                            )
                        }
                    )
                }

            </Select>

        )
    }
    else {
        return <p>fetching</p>
    }

};


export default CitySelect;
