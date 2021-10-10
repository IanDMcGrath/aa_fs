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
      nextState[action.comment.parentId ? "replies" : "rootComments"][action.comment.id] = action.comment;
      if (action.comment.parentId) {
        // find parentComment (if any) to add to its replies list
        let parentComment = null;
        parentComment = nextState.rootComments[action.comment.parentId] ? nextState.rootComments[action.comment.parentId] : nextState.replies[action.comment.parentId]
        //  set the new reply // checking if parentComment's replies attribute exists first
        if (parentComment.replies) {parentComment.replies[action.comment.id] = {id: action.comment.id}} else {parentComment.replies = {replies: {id: action.comment.id}}}
        // put the mutated parentComment back into state
        nextState[nextState.rootComments[action.comment.parentId] ? "rootComments" : "replies"][parentComment.id] = parentComment;
      }
      return nextState;

    case REMOVE_COMMENT:
      nextState = Object.assign({}, state);
      // remove the comment from state
      if (nextState.replies[action.comment.id]) {
        delete nextState.replies[action.comment.id];
      } else {
        delete nextState.rootComments[action.comment.id];
      }
      // remove the comment from parentComment's (if any) replies list
      // console.log('checking if removed comment has a parent...')
      if (action.comment.parentId) {
        // console.log('removeing replies id:')
        if (nextState.rootComments[action.comment.parentId]) {
          // console.log(nextState.rootComments[action.comment.parentId].replies[action.comment.id])
          delete nextState.rootComments[action.comment.parentId].replies[action.comment.id];
        } else {
          // console.log(nextState.replies[action.comment.parentId].replies[action.comment.id])
          delete nextState.replies[action.comment.parentId].replies[action.comment.id];
        }
      }
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