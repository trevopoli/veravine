import { RECEIVE_WINE, RECEIVE_WINE_ERRORS } from "../actions/wine_actions";

const wineErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_WINE_ERRORS:
            return action.errors;
        case RECEIVE_WINE:
            return [];
        default:
            return state;
    }
}

export default wineErrorsReducer;