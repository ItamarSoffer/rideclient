import React, {useState} from 'react'
import {Button, Form, Input, message, Radio, Select} from "antd";
import {Option} from "antd/es/mentions";
import CitySelect from "../loginForm/CitySelect/CitySelect";
import { connect } from 'react-redux';

import {apiSignUp} from "../../Actions/apiActions";
import {Header} from "antd/es/layout/layout";


const data = {
    name: "ענבר",
    phoneNumber: "0546801485",
    defaultDestination: "קדימה",
    platform: "lync",
    carColor: "אדום",
    carCompany: "Toyota",
    carSeats: 3
}


function DetailsForm(props) {
    const [city, setCityId] = useState(data.defaultDestination);

    const formItemLayout = {
        wrapperCol: {span: 40},
    };

    const onFinish = (details) => {
        console.log(JSON.stringify(details));

        apiSignUp(props.jwtToken, details.car_company, details.car_color,
            details.car_seats, details.platform, details.platform_info, city)
        .then((response) => {
                if (response.status ===! 200){
                    message.warning(response.data)
                }
                else if (response.status === 200){
                    message.success(response.data.message, 1.5)
                }
        });
        // details["default-destination"] = city;
        // message.success("עודכן בהצלחה!")
        // TODO: send to backend

    };

    const handleCityChange = value => {
        setCityId(value);
        console.log("Selected city", value)
    };

    return (
        <>
            <h2 style={{paddingTop: "20px", paddingRight: "20px"}}>
                הפרטים שלי
            </h2>
            <Form
                style={{paddingTop: "90px"}}
                name="details"
                onFinish={onFinish}
                initialValues={{
                    'name': data.name,
                    'phone_number': data.phoneNumber,
                    'platform': data.platform,
                    'car_color': data.carColor,
                    'car_company': data.carCompany,
                    'car_seats': data.carSeats,
                }}
            >
                <Form.Item
                    {...formItemLayout}
                    name="name"
                    label="שם"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="phone_number"
                    label="טלפון"
                >
                    <Input style={{width: '100%'}}/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="platform"
                    label="תשתית תקשורת מועדפת"
                >
                    <Select placeholder="בחר">
                        <Option value="lync">לינק</Option>
                        <Option value="phone">טלפון</Option>
                        <Option value="mail">מייל</Option>
                        <Option value="mattermost">mattermost</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="default-destination"
                    label="מקום מועדף"
                >
                    <CitySelect handleCityChange={handleCityChange} defaultCity={data.defaultDestination}/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="car_color"
                    label="צבע"
                >
                    <Input style={{width: '100%'}}/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="car_company"
                    label="חברה"
                >
                    <Input style={{width: '100%'}}/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="car_seats"
                    label="כמות מקומות ברכב"
                >
                    <Radio.Group>
                        <Radio.Button value={1}>1</Radio.Button>
                        <Radio.Button value={2}>2</Radio.Button>
                        <Radio.Button value={3}>3</Radio.Button>
                        <Radio.Button value={4}>4</Radio.Button>
                        <Radio.Button value={5}>5</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Button type="primary" form="details" key="submit" htmlType="submit">
                    עדכן!
                </Button>
            </Form>
        </>
    )
}

const mapStateToProps = state => {
    return {
        jwtToken: state.usersReducer.jwtToken,

    }
};

export default connect(mapStateToProps, null)(DetailsForm);

