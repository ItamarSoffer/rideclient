import React from 'react';
import { withRouter } from "react-router-dom";
// import {setReRenderTimelineAction} from "../../../Actions/siteActions";
import {connect} from "react-redux";
import {getQueryStringParams} from "../../Actions/queryStringActions";
import { useHistory } from "react-router-dom";

import URLSearchParams from "url-search-params";
import CitySelect from "../loginForm/CitySelect/CitySelect";


import {Form} from "antd";

function TagsSearch (){
    let history = useHistory();


    const onSearch = (value) => {
        const pathName = history.location.pathname;
        let currentSearchQuery = getQueryStringParams(history.location.search);
        console.log("SEARCH VAL", value);
        if (value === null || value === undefined || value === ''|| value.length === 0){
            delete currentSearchQuery['city'];
            history.push(
                {pathname: pathName,
                    search: "?" + new URLSearchParams(
                        {...currentSearchQuery}
                    ).toString()
                });
        }
        else{
            currentSearchQuery['city'] = value;
            history.push(
                {pathname: pathName,
                    search: "?" + new URLSearchParams(
                        {...currentSearchQuery}
                    ).toString()

                });
        }
        // props.setReRenderTimeline(1);
    };


    const pathName = history.location.pathname;
    const queryParams = getQueryStringParams(history.location.search);
    let defaultQueryValues = null;
    if (queryParams.tags){
        defaultQueryValues = queryParams.tags.split(",");
    }


    return (
        <CitySelect
            handleCityChange={onSearch}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TagsSearch));
