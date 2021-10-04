import * as CommentApiUtil from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = comments => {
  console.log(comments);
  return ({
  type: RECEIVE_COMMENTS,
  comments
})};

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchComments = artId => dispatch => {
  console.log(artId)
  return (
  CommentApiUtil.fetchComments(artId)
  .then(comments => dispatch(receiveComments(comments)))
)};

export const fetchComment = commentId => dispatch => (
  CommentApiUtil.fetchComment(commentId)
  .then(comment => dispatch(receiveComment(comment)))
);

export const createComment = comment => dispatch => (
  CommentApiUtil.createComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
);

export const updateComment = comment => dispatch => (
  CommentApiUtil.updateComment(comment)
  .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = commentId => dispatch => (
  CommentApiUtil.deleteComment(commentId)
  .then(() => dispatch(removeComment(commentId)))
);