import { connect } from "react-redux";
import { updateComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mapStateToProps = (state, ownProps) => ({
  comment: ownProps.comment,
  formType: "Update Comment"
});

const mapDispatchToProps = dispatch => ({
  action: comment => dispatch(updateComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);