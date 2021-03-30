import {Table, Tooltip} from "antd";
import {UserAddOutlined} from "@ant-design/icons";

const columns = [
    {
        title: 'שם מלא',
        dataIndex: 'full_name',
    },
    {
        title: 'עיר יעד',
        dataIndex: 'city_name',
    },
    {
        title: 'שעת יציאה',
        dataIndex: 'ride_time',
        key: 'ride_time',
        sorter: (a, b) => Date.parse(a) - Date.parse(b),
        sortOrder: (info) => info.columnKey === 'departure_time' && info.order,
        ellipsis: true,
    },
    {
        title: 'מקומות פנויים',
        dataIndex: 'seats',
    },
    {
        title: 'פעולות נוספות',
        dataIndex: 'action',
        render: () => (
            <Tooltip title={"Assign to ride"}>
                <UserAddOutlined onClick={() => {
                    console.log("pressed")
                }}/>
            </Tooltip>)
    }
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        destination: 'New York',
        departure_time: "2021-03-30T16:32:33+03:00",
        available_seats: 1
    },
    {
        key: '2',
        name: 'John Brown2',
        destination: 'New York2',
        departure_time: "2021-03-30T14:32:33+03:00",
        available_seats: 2
    }
];

export default function RidesList(props) {
    const {rideInstances} = props;

    // TODO: change data to rideInstances in the dataSource
    return (
        <>
            <Table pagination={false} columns={columns} dataSource={rideInstances}/>
        </>
    );
};
