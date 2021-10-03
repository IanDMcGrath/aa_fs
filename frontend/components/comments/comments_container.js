import { connect } from "react-redux";
import Comments from "./comments";
import { fetchComments } from "../../actions/comment_actions";
import { uiToggleSignin } from "../../actions/ui_actions";

const mapStateToProps = (state, ownProps) => ({
  comments: state.entities.comments,
  users: state.entities.users,
  signedIn: Boolean(state.session.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: () => dispatch(fetchComments(ownProps.commentableId)),
  uiToggleSignin: () => dispatch(uiToggleSignin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);