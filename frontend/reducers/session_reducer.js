import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const DEFAULT_SESSION_STATE = {id: null}

const sessionReducer = (state = DEFAULT_SESSION_STATE, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.user.id};
        case LOGOUT_CURRENT_USER:
            return {id: null};
        default:
            return state;
    }
};

export default sessionReducer;