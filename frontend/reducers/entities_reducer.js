import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import winesReducer from "./wines_reducer";
import ratingsReducer from "./ratings_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    wines: winesReducer,
    ratings: ratingsReducer
});

export default entitiesReducer;