import React, { useState } from 'react';
import { Typography, Modal, Button, Form, DatePicker, TimePicker, ConfigProvider, Input, Radio, message } from 'antd';
import CitySelect from "../loginForm/CitySelect/CitySelect";
import {apiNewLift} from "../../Actions/apiActions";
import { connect } from 'react-redux';
import {checkJwt} from "../../Actions/jwtActions";
import {withRouter} from "react-router";

const {Text} = Typography;

const { TextArea } = Input;



const NewLiftModal = (props) => {
    const formRef = React.createRef();


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [rideSeats, setRideSeats] = useState();
    const [cityId, setcityId] = useState();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const onReset = () => {
        // console.log("RESET");
        formRef.current.resetFields();
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = values => {

        // console.log(props.jwtToken, values.datetime.format('YYYY-MM-DD HH:mm'), rideSeats, cityId, values.comments);
        apiNewLift(props.jwtToken, values.datetime.format('YYYY-MM-DD HH:mm'), rideSeats, cityId, values.comments)
        .then((response) => {
                if (response.status ===! 200){
                    message.warning(response.data)
                }
                else if (response.status === 200){
                    message.success(response.data.message, 1.5)
                }
            }).then(() => {
            onReset();
        });
    };
        // onReset();




    const onFinishFailed = () => {
        console.log("ERROR")
    };

    const handleCityChange = value => {
        setcityId(value);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>

            <ConfigProvider direction="rtl">
                <Modal title="טרמפ חדש"
                       visible={isModalVisible}
                       onOk={handleOk}
                       onCancel={handleCancel}
                       footer=
                           {[
                               <Button type="default"  key="close" onClick={handleCancel}>
                                   סגור
                               </Button>,
                               <Button type="primary" form="add_lift" key="submit" htmlType="submit">
                                   הצע!
                               </Button>
                           ]}
                       style={{borderRadius: '16px',}}


                >
                    <Form
                        id={"add_lift"}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        ref={formRef}
                    >
                        <div>
                            <Form.Item
                                className="link-form"
                                //label="תאריך"
                                name="datetime"
                                rules={[{
                                    required: true,
                                    message: 'Event date' }]}
                            >
                                <DatePicker showTime autoComplete='off' placeholder={"תאריך"}
                                />
                            </Form.Item>
                            {/*<Form.Item*/}
                            {/*    className="link-form"*/}
                            {/*    //label="שעה"*/}
                            {/*    name="hour"*/}
                            {/*>*/}
                            {/*    <TimePicker autoComplete='off' placeholder={"שעה"} format={'HH:mm'}*/}
                            {/*    />*/}
                            {/*</Form.Item>*/}

                            <Form.Item
                                className="link-form"
                                name="seats"
                                required
                            >
                                <Text>מקומות ברכב:</Text>
                                <br/>
                                <Radio.Group onChange={(e) => {setRideSeats(e.target.value)}}

                                >

                                    <Radio.Button value="1">1</Radio.Button>
                                    <Radio.Button value="2">2</Radio.Button>
                                    <Radio.Button value="3">3</Radio.Button>
                                    <Radio.Button value="4">4</Radio.Button>
                                    <Radio.Button value="5">5</Radio.Button>
                                </Radio.Group>
                            </Form.Item>


                            <Form.Item
                                className="link-form"
                                name="dst_city"
                            >
                                <CitySelect handleCityChange={handleCityChange} />
                            </Form.Item>

                            <Form.Item
                                className="link-form"
                                name="comments"
                                rules={[{
                                    message: 'Event content' }]}
                            >
                                <TextArea rows={3} placeholder={"הערות"} />

                            </Form.Item>

                        </div>

                    </Form>
                </Modal>
            </ConfigProvider>
        </>
    );
};

const mapStateToProps = state => {
    return {
        jwtToken: state.usersReducer.jwtToken,

    }
};


export default connect(mapStateToProps, null)(NewLiftModal);
