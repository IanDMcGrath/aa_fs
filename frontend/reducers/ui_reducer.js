import { RECEIVE_COMMENT } from "../actions/comment_actions";
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { TOGGLE_SIGNIN, TOGGLE_REPLY, CHANGE_FILTER } from "../util/ui_api_util";

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
      nextState.reply.showReply = false;
      return nextState;

    case TOGGLE_SIGNIN:
      nextState = Object.assign({}, state, {signin: action.signin});
      return nextState;

    case TOGGLE_REPLY:
      nextState = Object.assign({}, state, {reply: action.reply});
      return nextState;

    case CHANGE_FILTER:
      nextState = Object.assign({}, state, {filter: action.tag})
      return nextState;

    default: return state;
  }
}

export default uiReducer;