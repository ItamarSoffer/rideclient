import {Table, Tooltip} from "antd";
import {UserAddOutlined} from "@ant-design/icons";
import moment from "moment";

function getUniqValues(data, field) {
        /*
        gets an array of objects (data), and returns a uniq list of field values
        data- array of objects.
        field- the field to filter by.
        if null in, removes it.
         */
        let iconsList = data.map( record => record[field]);
        let uniq = [...new Set(iconsList)];
        if (uniq.indexOf(null) > -1){
            delete uniq[uniq.indexOf(null)]
        }
        if (uniq.indexOf('') > -1){
            delete uniq[uniq.indexOf('')]
        }
        return uniq
}

export default function RidesList(props) {
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
        render: rideTime => moment.unix(rideTime).format("YYYY-MM-DD HH:mm"),
        sorter: (a, b) => a.ride_time -b.ride_time,
        ellipsis: true,
    },
    {
        title: 'מקומות פנויים',
        dataIndex: 'seats',
            onFilter: (value, record) => record.seats === value,
filters: getUniqValues(props.rideInstances, 'seats').map(
                        function(seats){
                            return (
                                {text: seats, value: seats}
                            )
                        }
                    ),
    },
    {
        title: 'הערות',
        dataIndex: 'comments',
    },
    {
        title: 'פעולות נוספות',
        dataIndex: 'action',
        render: () => (
            <Tooltip title={"הירשם לטרמפ"}>
                <UserAddOutlined onClick={() => {
                    console.log("pressed")
                }}/>
            </Tooltip>)
    }
];

        const {rideInstances} = props;
        const paginationConfig= {
            total: rideInstances.length,
            showSizeChanger: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} מתוך ${total}`,
            position: ["topLeft"]
        };


    return (
        <>
            <Table
                pagination={paginationConfig}
                columns={columns}
                dataSource={rideInstances}/>
        </>
    );
};
