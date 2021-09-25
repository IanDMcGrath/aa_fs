import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_SESSION_ERRORS:
            // const nextState = Object.assign({}, state);
            // nextState[session.errors] = action.errors;
            // return nextState;
            return action.errors;
        default:
            return state;
    }
}

export default sessionErrorsReducer;