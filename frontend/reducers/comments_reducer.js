import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_ART } from "../actions/art_actions";
import { sortComments } from "../util/comment_api_util";

const commentsReducer = (state={}, action) => {
  // console.log(action)
  Object.freeze(state);
  let nextState = {};
  let comments = null;

  switch (action.type) {
    case RECEIVE_COMMENTS:
      comments = Object.values(action.comments);
      comments = sortComments(comments);
      return comments;

    case RECEIVE_COMMENT:
      nextState = Object.assign({}, state);
      nextState[action.comment.id] = action.comment;
      return nextState;

    case REMOVE_COMMENT:
      nextState = Object.assign({}, state);
      delete nextState.comments[action.commentId];
      return nextState;

    case RECEIVE_ART:
      if (!action.art.comments) return state;
      comments = action.art.comments;

      return comments;

    default: return state;
  }
}

export default commentsReducer;