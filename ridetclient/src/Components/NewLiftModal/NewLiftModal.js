import React, { useState } from 'react';
import { Typography, Modal, Button, Form, DatePicker, TimePicker, ConfigProvider, Input, Radio } from 'antd';
import CitySelect from "../loginForm/CitySelect/CitySelect";

const {Text} = Typography;

const { TextArea } = Input;



const NewLiftModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [rideSeats, setRideSeats] = useState();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = values => {
        console.log("FINISH", values);
        console.log("Seats", rideSeats);


    };

    const onFinishFailed = () => {
        console.log("ERROR")
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
                        // ref={this.formRef}
                    >
                        <div>
                            <Form.Item
                                className="link-form"
                                //label="תאריך"
                                name="date"
                                rules={[{
                                    required: true,
                                    message: 'Event date' }]}
                            >
                                {/* TODO: onDateChange */}
                                <DatePicker autoComplete='off' placeholder={"תאריך"}
                                    // onChange={onDateChange}
                                />
                            </Form.Item>
                            <Form.Item
                                className="link-form"
                                //label="שעה"
                                name="hour"
                            >
                                {/* TODO: onTimeChange */}
                                <TimePicker autoComplete='off' placeholder={"שעה"} format={'HH:mm'}
                                />
                            </Form.Item>

                            <Form.Item
                                className="link-form"
                                name="seats"
                                required
                            >
                                <Text>מקומות ברכב:</Text>
                                <br/>
                                <Radio.Group onChange={(e) => {setRideSeats(e.target.value)}}

                                    // onChange={onCarSeatsChange}
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
                                <Input placeholder={"עיר יעד"} autoComplete='off' />

                                {/*<CitySelect/>*/}
                            </Form.Item>

                            <Form.Item
                                className="link-form"
                                name="text"
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

export default NewLiftModal;