import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";
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
        case RECEIVE_FAVORITE:
            const favoritedState = Object.assign({}, state);
            favoritedState[action.favorite.wine_id].favorited = true;
            return favoritedState
        case REMOVE_FAVORITE:
            const unfavoritedState = Object.assign({}, state);
            unfavoritedState[action.wineId].favorited = false;
            return unfavoritedState;
        default:
            return state;
    }
}

export default winesReducer;