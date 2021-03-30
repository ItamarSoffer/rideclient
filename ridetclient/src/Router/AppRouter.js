import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import LoginPage from "../Pages/LoginPage/LoginPage"
import MyDetailsPage from "../Pages/MyDetailsPage/MyDetailsPage"
import NewLiftPage from "../Pages/NewLiftPage/NewLiftPage"
import HomePage from "../Pages/HomePage/HomePage"


export default function AppRouter(props) {

        return(
            <Router>
                    <Switch>

                        {
                            ! props.isLogged ?

                                <div>
                                    <Route path="/" component={LoginPage}/>
                                </div> :
                                <div>

                                    {/* TODO: adapt url */}
                                    <Route path="/login" component={LoginPage}/>

                                    <Route path="/details" component={MyDetailsPage}/>

                                    <Route path="/new" component={NewLiftPage}/>

                                    <Route exact={true} path="/" component={HomePage}/>

                                </div>
                        }
                    </Switch>

            </Router>
        )

}
