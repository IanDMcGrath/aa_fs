import { connect } from "react-redux";
import CommentsList from "./comments_list";
import { deleteComment, fetchComments } from "../../actions/comment_actions";
import { uiToggleReply, uiToggleSignin } from "../../actions/ui_actions";

const mapStateToProps = (state, ownProps) => ({
  // comments: ownProps.comments,
  users: state.entities.users,

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: () => dispatch(fetchComments(ownProps.commentableId)),
  uiToggleSignin: signin => dispatch(uiToggleSignin(signin)),
  uiToggleReply: reply => dispatch(uiToggleReply(reply)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);