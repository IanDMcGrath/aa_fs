import { RECEIVE_COMMENT } from "../actions/comment_actions";

const uiReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_COMMENT:
      nextState = Object.assign({}, state);
        nextState.reply = Object.assign({showReply: false}, nextState.reply);
      return nextState;
    default: return state;
  }
}

export default uiReducer;