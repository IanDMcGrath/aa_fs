import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_ART } from "../actions/art_actions";
import { sortComments } from "../util/comment_api_util";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

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
      delete nextState[action.commentId];
      return nextState;

    case RECEIVE_ART:
      if (!action.art.comments) return state;
      comments = action.art.comments;
      // comments = sortComments(comments);
      return comments;

    // case RECEIVE_LIKE:
    //   if (action.like.likeableType === "Comment") {
    //     nextState = Object.assign({}, state, {[action.like.likeableId]: {likes: (action.like.likeableId.likes + 1)}});
    //     return nextState;
    //   }
    //   return state;

    // case REMOVE_LIKE:
    //   if (action.likeableType === "Comment") {
    //     nextState = Object.assign({}, state, {[action.like.likeableId]: {likes: (action.like.likeableId.likes - 1)}});
    //     return nextState;
    //   }
    //   return state;

    default: return state;
  }
}

export default commentsReducer;