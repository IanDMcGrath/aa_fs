import { connect } from "react-redux";
import Comments from "./comments";
import { fetchComments } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => ({
  comments: state.entities.comments,
  users: state.entities.users
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: () => dispatch(fetchComments(ownProps.commentableId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);