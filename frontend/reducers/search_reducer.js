import { CLEAR_SEARCH_RESULTS, RECEIVE_BRAND_RESULTS } from "../actions/search_actions";

const searchReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BRAND_RESULTS:
            return action.brandResults;
        case CLEAR_SEARCH_RESULTS:
            return [];
        default:
            return state;
    }
}

export default searchReducer;