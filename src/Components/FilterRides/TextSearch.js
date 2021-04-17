import React from 'react';
import { Input } from 'antd';
import { withRouter } from "react-router-dom";
// import {setReRenderTimelineAction} from "../../../Actions/siteActions";
import {connect} from "react-redux";
import {getQueryStringParams} from "../../Actions/queryStringActions";
import URLSearchParams from "url-search-params";
import { useHistory } from "react-router-dom";



const { Search } = Input;
function TextSearch (){
    let history = useHistory();

    const onSearch =(value) => {
        const pathName = history.location.pathname;
        let currentSearchQuery = getQueryStringParams(history.location.search);
        if (value === null || value === ''){
            delete currentSearchQuery['search_string'];
            history.push(
                {pathname: pathName,
                    search: "?" + new URLSearchParams(
                        {...currentSearchQuery}
                    ).toString()
                });
        }
        else{
            currentSearchQuery['search_string'] = value;
            history.push(
                {pathname: pathName,
                    search: "?" + new URLSearchParams(
                        {...currentSearchQuery}
                    ).toString()

                });
        }
        // this.props.setReRenderTimeline(1);
    };


        const queryParams = getQueryStringParams(history.location.search);
        let defaultQueryValues = null;
        if (queryParams.search_string){
            defaultQueryValues = queryParams.search_string;
        }

        return (
            <Search
                allowClear
                placeholder="חיפוש חופשי"
                onSearch={onSearch}
                style={{ width: 350 }}
                defaultValue={defaultQueryValues}
            />

        )
}
const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return{
        // setReRenderTimeline: (index) => {dispatch(setReRenderTimelineAction(index))}
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TextSearch));
