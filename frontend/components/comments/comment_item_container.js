import { connect } from "react-redux";
import { deleteComment, updateComment } from "../../actions/comment_actions";
import CommentItem from "./comment_item";

const mapStateToProps = (state, ownProps) => ({
  ownComment: ownProps.comment.commenterId === state.session.id,
  user: state.entities.users[ownProps.comment.commenterId],
  showReply: state.ui.reply.showReply && state.ui.reply.commentId === ownProps.comment.id,
  replies: getComments(state, ownProps.comment.replies)
});
// replies: getComments(state, ownProps.comment.replies)

const mapDispatchToProps = dispatch => ({
  // updateComment: (comment) => dispatch(updateComment(comment)),
  // deleteComment: commentId => dispatch(deleteComment(commentId)),
});

const getComments = (state, ids) => {
  if (!ids || ids.length === 0) return null;
  // return {};
  console.log(ids);
  let comments = {};
  for (let i=0; i<ids.length; i++) {
    Object.assign(comments, {[ids[i]]: state.entities.comments[ids[i]]});
  }
  return comments;
}

export default connect(mapStateToProps, null)(CommentItem);