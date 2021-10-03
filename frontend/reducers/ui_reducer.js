import { RECEIVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const uiReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_COMMENT:
      nextState = Object.assign({}, state);
      nextState.reply = Object.assign({showReply: false}, nextState.reply);
      return nextState;

    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, state);
      nextState.signin = Object.assign({showSignin: false}, nextState.signin);
      return nextState;


    default: return state;
  }
}

export default uiReducer;