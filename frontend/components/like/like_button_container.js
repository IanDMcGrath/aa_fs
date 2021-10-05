import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/like_actions";
import { uiToggleSignin } from "../../actions/ui_actions";
import LikeButton from "./like_button";

const mapStateToProps = state => ({
  likes: state.entities.likes,
  currentUser: state.session.id,
  like: getLike(state.entities.likes, state.session.id),
});

const mapDispatchToProps = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  deleteLike: likeId => dispatch(deleteLike(likeId)),
  uiToggleSignin: signin => dispatch(uiToggleSignin(signin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);

const getLike = (likes, currentUser) => {
  let currentLike = null;
  for (let i=0; i<Object.values(likes).length && !currentLike; i++) {
    if (Object.values(likes)[i].likerId === currentUser) {
      currentLike = Object.values(likes)[i]
    }
  };
  return currentLike;
}
