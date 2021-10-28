import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
        case RECEIVE_FOLLOW:
            const followedState = Object.assign({}, state);
            followedState[action.followedId].following = true;
            return followedState;
        case REMOVE_FOLLOW:
            const unfollowedState = Object.assign({}, state);
            unfollowedState[action.followedId].following = false;
            return unfollowedState;
        default:
            return state;
    }
}

export default usersReducer;