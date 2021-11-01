import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_ART } from "../actions/art_actions";

const repliesReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_ART:
      if (action.art.comments && action.art.comments.replies) {
        return action.art.comments.replies;
      }
      return state;
    case RECEIVE_COMMENT:
      if (!action.comment.parentId) {return state}
      nextState = Object.assign({}, state);
      nextState[action.comment.id] = action.comment;
      if (nextState[action.comment.parentId]) {
        // console.log("SETTING A COMMENT'S REPLIES");
        if (!nextState[action.comment.parentId].replies) { // if no current replies object, set one
          nextState[action.comment.parentId].replies = {};
        }
        nextState[action.comment.parentId].replies[action.comment.id] = {id: action.comment.id};
      }
      return nextState;
    case REMOVE_COMMENT:
      if (!action.comment.parentId) {return state}
      nextState = Object.assign({}, state);
      delete nextState[action.comment.id];
      if (nextState[action.comment.parentId]) {delete nextState[action.comment.parentId].replies[action.comment.id]}
      return nextState;
    default: return state;
  }
};

export default repliesReducer;