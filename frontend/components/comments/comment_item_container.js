import { connect } from "react-redux";
import { deleteComment, updateComment } from "../../actions/comment_actions";
import CommentItem from "./comment_item";

const mapStateToProps = (state, ownProps) => ({
  isOwnComment: Boolean(commentExists(state, ownProps) && getComment(state, ownProps).commenterId === state.session.id),
  user: commentExists(state, ownProps) ? state.entities.users[state.entities.comments[ownProps.isReply ? 'replies' : 'rootComments'][ownProps.commentId].commenterId] : null,
  isSignedIn: Boolean(state.session.id),
  showReply: state.ui.reply.showReply && state.ui.reply.commentId === ownProps.commentId,
  comment: commentExists(state, ownProps) ? getComment(state, ownProps) : null,
  replies: commentExists(state, ownProps) ? getComment(state, ownProps).replies : null,
});

const mapDispatchToProps = dispatch => ({
  // updateComment: (comment) => dispatch(updateComment(comment)),
  // deleteComment: commentId => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, null)(CommentItem);

const commentExists = (state, ownProps) => {
  return Boolean(state.entities.comments[ownProps.isReply ? 'replies' : 'rootComments'][ownProps.commentId])
}

const getComment = (state, ownProps) => {
  return state.entities.comments[ownProps.isReply ? 'replies' : 'rootComments'][ownProps.commentId]
}