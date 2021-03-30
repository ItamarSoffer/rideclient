import React, {useState} from 'react'
import {Button, Form, Input, message, Radio, Select} from "antd";
import {Option} from "antd/es/mentions";
import CitySelect from "../loginForm/CitySelect/CitySelect";
import {Header} from "antd/es/layout/layout";


const data = {
    name: "ענבר",
    phoneNumber: "0546801485",
    defaultDestination: "קדימה",
    platform: ["lync", "phone"],
    carColor: "אדום",
    carCompany: "Toyota",
    carSeats: 3
}


function DetailsForm() {
    const [city, setCityId] = useState(data.defaultDestination);

    const formItemLayout = {
        wrapperCol: {span: 40},
    };

    const onFinish = (details) => {
        details["default-destination"] = city;
        message.success("עודכן בהצלחה!")
        // TODO: send to backend
    }

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
                    'phone-number': data.phoneNumber,
                    'platform': data.platform,
                    'car-color': data.carColor,
                    'car-company': data.carCompany,
                    'car-seats': data.carSeats,
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
                    name="phone-number"
                    label="טלפון"
                >
                    <Input style={{width: '100%'}}/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="platform"
                    label="תשתית תקשורת מועדפת"
                    rules={[{type: "array"}]}
                >
                    <Select mode="multiple" placeholder="בחר">
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
                    name="car-color"
                    label="צבע"
                >
                    <Input style={{width: '100%'}}/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="car-company"
                    label="חברה"
                >
                    <Input style={{width: '100%'}}/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="car-seats"
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

export default DetailsForm