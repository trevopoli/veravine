import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { login, logout, signup } from "./actions/session_actions";
import configureStore from "./store/store";
import { deleteFavorite, createFavorite } from "./actions/favorite_actions";



document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // Testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.deleteFavorite = deleteFavorite;
    window.createFavorite = createFavorite;
    //

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});
