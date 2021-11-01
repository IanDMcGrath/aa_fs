import { RECEIVE_ART } from "../actions/art_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const rootCommentsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_ART:
      if (action.art.comments && action.art.comments.rootComments) {
        return action.art.comments.rootComments;
      }
      return state;
    case RECEIVE_COMMENT:
      nextState = Object.assign({}, state);
      if (action.comment.parentId && nextState[action.comment.parentId]) { // find parent comment's reply list and append the new id
        // console.log("SETTING A COMMENT'S REPLIES");
        if (!nextState[action.comment.parentId].replies) { // if no current replies object, set replies
          nextState[action.comment.parentId].replies = {};
        }
        nextState[action.comment.parentId].replies[action.comment.id] = {id: action.comment.id};
        return nextState;
      }
      nextState[action.comment.id] = action.comment;
      return nextState;
    case REMOVE_COMMENT:
      nextState = Object.assign({}, state);
      if (action.comment.parentId && nextState[action.comment.parentId]) { // find parent comment's reply list and remove the id
        delete nextState[action.comment.parentId].replies[action.comment.id];
        return nextState;
      }
      delete nextState[action.comment.id];
      return nextState;
    default: return state;
  }
};

export default rootCommentsReducer;