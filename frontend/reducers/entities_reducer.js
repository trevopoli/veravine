import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import winesReducer from "./wines_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    wines: winesReducer
});

export default entitiesReducer;