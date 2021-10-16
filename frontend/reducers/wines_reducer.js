import { RECEIVE_WINES, RECEIVE_WINE } from "../actions/wine_actions";

const winesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_WINES:
            let winesState = {};
            const winesArray = Object.values(action.wines);
            winesArray.forEach(wine => {
                winesState[wine.id] = wine;
            });
            return winesState;
        case RECEIVE_WINE:
            return Object.assign({}, state, {[action.wine.id]: action.wine});
        default:
            return state;
    }
}

export default winesReducer;