import { RECEIVE_COMMENT } from "../actions/comment_actions";
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { TOGGLE_SIGNIN } from "../util/ui_api_util";

const uiReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = {};
  // console.log(action)
  switch (action.type) {
    case RECEIVE_COMMENT:
      nextState = Object.assign({}, state);
      // nextState.reply = Object.assign({showReply: false}, nextState.reply);
      nextState.reply.showReply = false;
      return nextState;

    case RECEIVE_CURRENT_USER: case LOGOUT_CURRENT_USER:
      nextState = Object.assign({}, state);
      // nextState.signin = Object.assign({showSignin: false}, nextState.signin);
      nextState.signin.showSignin = false;
      return nextState;

    case TOGGLE_SIGNIN:
      nextState = Object.assign({}, state, {ui:{}});
      nextState.signin.showSignin = !nextState.signin.showSignin;
      return nextState;

    default: return state;
  }
}

export default uiReducer;