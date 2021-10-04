import { connect } from "react-redux";
import { deleteComment, updateComment } from "../../actions/comment_actions";
import CommentItem from "./comment_item";

const mapStateToProps = (state, ownProps) => ({
  ownComment: ownProps.comment.commenterId === state.session.id,
  user: state.entities.users[ownProps.comment.commenterId],
  showReply: state.ui.reply.showReply && state.ui.reply.commentId === ownProps.comment.id
});

const mapDispatchToProps = dispatch => ({
  // updateComment: (comment) => dispatch(updateComment(comment)),
  // deleteComment: commentId => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, null)(CommentItem);