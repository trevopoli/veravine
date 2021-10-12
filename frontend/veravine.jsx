import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { login, logout, signup } from "./util/session_api_util";
import configureStore from "./store/store";

window.login = login;
window.logout = logout;
window.signup = signup;

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    // Testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    //

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});