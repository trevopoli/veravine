import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import WineListContainer from "./wine_list/wine_list_container";
import WineFormContainer from "./wine_form/wine_form_container";
import WineShowContainer from "./wine_show/wine_show_container";
import UserShowContainer from  "./user_show/user_show_container";
import { Route } from "react-router";
import { Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        <header>
            <div className="main-header">
                <div className="header-wrapper">
                <Link to="/">
                    <h1>Veravine</h1>
                </Link>
                <GreetingContainer />
                </div>
            </div>

            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Switch>
                <ProtectedRoute exact path="/wines/new" component={WineFormContainer} />
                <Route exact path="/wines/:wineId" component={WineShowContainer} />
                <Route exact path="/users/:userId" component={UserShowContainer} />
                <Route exact path="/" component={WineListContainer} />
            </Switch>
        </header>
    </div>
);

export default App;