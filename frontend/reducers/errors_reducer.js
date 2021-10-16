import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import wineErrorsReducer from "./wine_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    wine: wineErrorsReducer
});

export default errorsReducer;