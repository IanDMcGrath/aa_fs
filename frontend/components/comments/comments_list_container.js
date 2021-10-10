import { connect } from "react-redux";
import CommentsList from "./comments_list";
import { deleteComment, fetchComments } from "../../actions/comment_actions";
import { uiToggleReply, uiToggleSignin } from "../../actions/ui_actions";

const mapStateToProps = (state, ownProps) => ({
  // comments: ownProps.comments,
  users: state.entities.users,
  commentKeys: (ownProps.commentIds ? ownProps.commentIds : getCommentKeys(state, ownProps.commentableId, ownProps.commentableType)),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: () => dispatch(fetchComments(ownProps.commentableId)),
  uiToggleSignin: signin => dispatch(uiToggleSignin(signin)),
  uiToggleReply: reply => dispatch(uiToggleReply(reply)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);

const getCommentKeys = (state, commentableId, commentableType) => {
  if (!state.entities.comments || Object.keys(state.entities.comments).length <= 0) {return null};
  let commentIds = {};
  let { rootComments } = state.entities.comments;
  Object.values(rootComments).forEach(comment => {
    if (!comment.parentId && comment.commentableId === commentableId && comment.commentableType === commentableType) {
      commentIds[comment.id] = {id: comment.id};
      // console.log(commentIds)
    }
  })
  // console.log('found commentIds:');
  // console.log(commentIds);
  return commentIds;
}