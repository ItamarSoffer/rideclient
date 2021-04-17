import React, {useEffect, useState} from 'react';
import {Button, notification, Layout, ConfigProvider} from "antd";
import RidesList from "../Components/RidesList";
import {PlusOutlined} from '@ant-design/icons';
import "./HomePage.css"
import SideMenuPage from './SideMenuPage';
import RidesFilter from '../Components/FilterRides/RidesFilters';
import {apiGetRides} from "../Actions/apiActions";
import {useHistory, withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import LoadingComponent from "../Components/LoadingComponent/LoadingComponent";
import {checkJwt} from "../Actions/jwtActions";
import {controlNewRideModalAction} from "../Actions/ModalsActions";
import modalsReducer from "../Reducers/modalsReducer";
import NewLiftModal from "../Components/NewLiftModal/NewLiftModal";




const {Content, Footer} = Layout;


async function getRides(page, searchParams = {}) {
    try {
        // TODO: use API and return rides list
        return []
    } catch (e) {
        notification.error({message: "Error", description: "נכשל בהעלאת הטרמפים"});
        return [];
    }
}


function HomePage(props) {
    const [rideInstances, setRideInstances] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    async function loadRideInstances(page) {
        setIsLoaded(true);
        const oldData = rideInstances.slice();
        const newData = await getRides(page);
        setIsLoaded(false);
        const hasNewData = newData.length !== 0;
        if (hasNewData) {
            setRideInstances(oldData.concat(newData));
        }
        return hasNewData;
    }


    // the hook on the changes of the URL
    const history = useHistory() ;

    useEffect(() => {
        return history.listen((location) => {
            if (location.pathname === '/'){
                setIsLoaded(false);
                loadData();
                // TODO: if the location has not changed- no (click on the menu)
            }
        })
    },[history]);

    useEffect(() => {
        loadData()
    }, []);

    const loadData =() => {
        apiGetRides()
            .then((results) => (setRideInstances(results)) )
            .then(() => setIsLoaded(true));
    }

    return (
        <ConfigProvider direction="rtl">

            <Layout style={{minHeight: '100vh'}}>
                <SideMenuPage selectedTab={['2']}/>
                <Layout>
                    {/*<Header className="site-layout-sub-header-background" style={{padding: 0}}/>*/}
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, minHeight: 360}}>
                            <RidesFilter/>
                            <br/>
                            <br/>
                            {isLoaded?
                                <RidesList
                                    handleLoadMore={loadRideInstances}
                                    rideInstances={rideInstances}
                                />
                                :
                                <LoadingComponent/>
                            }
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Kakas C ©2021</Footer>
                    <Button style={{float: "right", width: '150px'}}
                            type="primary"
                            shape="round"
                            icon={<PlusOutlined/>}
                            size={"large"}
                            onClick={() => props.showNewRideModalAction()}
                    >
                        New Ride
                    </Button>
                    <NewLiftModal/>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}


const mapStateToProps = state => {
    return {
                showNewRideModal: state.modalsReducer.showNewRideModal,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        showNewRideModalAction: () => {dispatch(controlNewRideModalAction(true))},

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
