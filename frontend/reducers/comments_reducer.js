import {RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from "../actions/comment_actions";
import {sortComments} from "../util/comment_api_util";

const commentsReducer = (state={}, action) => {
  console.log(action)
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_COMMENTS:
      let comments = Object.values(action.comments);
      comments = sortComments(comments);
      return comments;

    case RECEIVE_COMMENT:
      return action.comment;

    case REMOVE_COMMENT:
      nextState = Object.assign({}, state);
      delete nextState.comments[action.commentId];
      return nextState;

    default: return state;
  }
}

export default commentsReducer;