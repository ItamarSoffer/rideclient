import React from 'react';
import { connect } from 'react-redux';
import {
    withRouter
} from "react-router-dom";

import LoginForm from '../Components/loginForm/loginForm';
import {loginAction} from '../Actions/usersActions';
import {checkJwt} from "../Actions/jwtActions";

class LoginPage extends React.Component{

    componentWillMount() {
        document.title = "Ride";
        // console.log("props",this.props);
        if(this.props.isLogged === true) {
            this.props.history.push({pathname: `/`,})
            // this.props.history.push('/');
        }
    }

    handlerLogin = (email,password) => {
        this.props.login(email,password);
        if(this.props.isLogged === true) {
            this.props.history.push({pathname: `/`,})
        }
        //this.props.history.push('/'); //? FIX!
    };

    render() {
        return (
            <div className="login-page">
                <LoginForm handlerLogin={this.handlerLogin} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogged: checkJwt(state.usersReducer.jwtToken),

    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email,password) => {
            dispatch(loginAction(email,password));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));