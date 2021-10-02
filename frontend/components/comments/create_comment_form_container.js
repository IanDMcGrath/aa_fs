import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
  comment: {body: "", commenter_id: state.session.id, parent_id: null, commentable_id: ownProps.commentable_id, commentable_type: 'art'},
  formType: "Post Comment"
}};

const mapDispatchToProps = dispatch => ({
  action: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);