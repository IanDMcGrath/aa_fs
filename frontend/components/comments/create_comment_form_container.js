import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
  comment: {body: "", commenterId: state.session.id, parentId: ownProps.parentId, commentableId: ownProps.commentableId, commentableType: ownProps.commentableType},
  formType: "Post Comment"
}};

const mapDispatchToProps = dispatch => ({
  action: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);