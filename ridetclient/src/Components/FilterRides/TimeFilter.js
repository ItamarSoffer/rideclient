import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { withRouter } from "react-router-dom";
import {connect} from "react-redux";
import {getQueryStringParams} from "../../Actions/queryStringActions";
import URLSearchParams from 'url-search-params';
import { useHistory } from "react-router-dom";


const { RangePicker } = DatePicker;

function TimeFilter(){
      let history = useHistory();


    const onChange = (dates, dateStrings) => {
        const pathName = history.location.pathname;
        let currentSearchQuery = getQueryStringParams(history.location.search);
        if (dates === null){
            delete currentSearchQuery['min_time'];
            delete currentSearchQuery['max_time'];
            history.push(
                {pathname: pathName,
                    search: "?" + new URLSearchParams(
                        {...currentSearchQuery}
                    ).toString()
                });
        }
        else{
            currentSearchQuery['min_time'] = dateStrings[0];
            currentSearchQuery['max_time'] = dateStrings[1];
            history.push(
                {pathname: pathName,
                    search: "?" + new URLSearchParams(
                        {...currentSearchQuery}
                    ).toString()

                });
        }
        // TODO: RERENDER
        // this.props.setReRenderTimeline(1);
    };


        const queryParams = getQueryStringParams(history.location.search);
        let defaultPickerQueryValues = null;
        if (queryParams.min_time && queryParams.max_time){
            defaultPickerQueryValues = [moment(queryParams.min_time, "YYYY-MM-DD"), moment(queryParams.max_time, "YYYY-MM-DD")];
        }
        return (
            <RangePicker
                placeholder={['זמן התחלה', 'זמן סיום']}
                showTime
                ranges={{
                    'שעה': [moment(), moment().endOf('day')],
                    'שעתיים': [moment(), moment().add(2, 'hours')],
                    '4 שעות': [moment(), moment().add(4, 'hours')],
                    'היום': [moment(), moment().endOf('day')],
                    'שבוע': [moment().startOf('week'), moment().endOf('week')],
                }}
                onChange={onChange}
                defaultValue={defaultPickerQueryValues}

            />
        )

}
const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return{
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TimeFilter));
