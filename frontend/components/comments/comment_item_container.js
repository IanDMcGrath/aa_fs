import { connect } from "react-redux";
import { deleteComment, updateComment } from "../../actions/comment_actions";
import CommentItem from "./comment_item";

const mapStateToProps = (state, ownProps) => {
  // console.log(`comment container ${ownProps.comment.id} printing state ...`);
  // console.log(state);
  return ({
  // isOwnComment: Boolean(commentExists(state, ownProps) && getComment(state, ownProps).commenterId === state.session.id),
  isOwnComment: Boolean(ownProps.comment.commenterId === state.session.id),
  // user: commentExists(state, ownProps) ? state.entities.users[state.entities.comments[ownProps.isReply ? 'replies' : 'rootComments'][ownProps.commentId].commenterId] : null,
  user: state.entities.users[ownProps.comment.commenterId],
  isSignedIn: Boolean(state.session.id),
  showReply: state.ui.reply.showReply && state.ui.reply.commentId === ownProps.comment.id,
  // comment: commentExists(state, ownProps) ? getComment(state, ownProps) : null,
  comment: ownProps.comment,
  // replies: commentExists(state, ownProps) ? getComment(state, ownProps).replies : null,
})};

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