import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/like_actions";
import { uiToggleSignin } from "../../actions/ui_actions";
import LikeButton from "./like_button";

const mapStateToProps = state => ({
  likes: state.entities.likes,
  currentUser: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  deleteLike: likeId => dispatch(deleteLike(likeId)),
  uiToggleSignin: signin => dispatch(uiToggleSignin(signin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);