import { connect } from "react-redux";
import Comments from "./comments";
import { fetchComments } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
  comments: state.entities.comments
}}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: () => dispatch(fetchComments(ownProps.artId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);