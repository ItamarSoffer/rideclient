import './App.css';
import AppRouter from './Structure/AppRouter'
import React from "react";
import 'antd/dist/antd.css';
import {checkJwt} from "./Actions/jwtActions";
import {connect} from 'react-redux';

function App() {

        return (
                <AppRouter
                    isLogged={true}
                />

        );
    }


const mapStateToProps = state => {
    return {
        jwtToken: state.usersReducer.jwtToken,
    }
};



export default connect(mapStateToProps, null)(App);
