import { RECEIVE_RATINGS, RECEIVE_RATING, DELETE_RATING } from "../actions/rating_actions";
import { RECEIVE_WINES } from "../actions/wine_actions";

const ratingsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_RATINGS:
            return action.ratings;
        case RECEIVE_RATING:
            return Object.assign({}, state, { [action.rating.id]: action.rating});
        case RECEIVE_WINES:
            return {};
        case DELETE_RATING:
            let newRatingsState = Object.assign({}, state);
            delete newRatingsState[action.ratingId];
            return newRatingsState;
        default:
            return state;
    };
}

export default ratingsReducer;