import './App.css';
import AppRouter from './Structure/AppRouter'
import React from "react";
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {ThemeSwitcherProvider} from "react-css-theme-switcher";

const themes = {
    dark: `${process.env.PUBLIC_URL}/themes/dark-theme.css`,
    light: `${process.env.PUBLIC_URL}/themes/light-theme.css`,
};


function App(props) {
    const currentTheme = props.darkMode? 'dark': 'light';



    return (
        <ThemeSwitcherProvider themeMap={themes} defaultTheme={currentTheme}>
            <AppRouter
                isLogged={checkJwt(props.jwtToken)}
            />
        </ThemeSwitcherProvider>


    );
}


const mapStateToProps = state => {
    return {
        jwtToken: state.usersReducer.jwtToken,
                darkMode: state.sitesReducer.darkMode

    }
};

export default connect(mapStateToProps, null)(App);
