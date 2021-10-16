import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import WineListContainer from "./wine_list/wine_list_container";
import { Route } from "react-router";
import { Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
    <div>
        <header>
            <h1>Veravine</h1>
            <GreetingContainer />

            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Switch>
                <Route exact path="/" component={WineListContainer} />
            </Switch>
        </header>
    </div>
);

export default App;