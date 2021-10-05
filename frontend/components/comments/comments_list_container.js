import { connect } from "react-redux";
import CommentsList from "./comments_list";
import { deleteComment, fetchComments } from "../../actions/comment_actions";
import { uiToggleReply, uiToggleSignin } from "../../actions/ui_actions";

const mapStateToProps = (state, ownProps) => ({
  // comments: ownProps.comments,
  users: state.entities.users,
  commentIds: (ownProps.commentIds ? ownProps.commentIds : getCommentIds(state, ownProps.commentableId, ownProps.commentableType))
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: () => dispatch(fetchComments(ownProps.commentableId)),
  uiToggleSignin: signin => dispatch(uiToggleSignin(signin)),
  uiToggleReply: reply => dispatch(uiToggleReply(reply)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);

const getCommentIds = (state, commentableId, commentableType) => {
  let commentIds = [];
  let { comments } = state.entities;
  Object.values(comments).forEach(comment => {
    if (!comment.parentId && comment.commentableId === commentableId && comment.commentableType === commentableType) {
      commentIds.push(comment.id);
    }
  })
  // console.log('found commentIds:');
  // console.log(commentIds);
  return commentIds;
}