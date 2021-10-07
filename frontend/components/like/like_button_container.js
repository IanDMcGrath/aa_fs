import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/like_actions";
import { uiToggleSignin } from "../../actions/ui_actions";
import LikeButton from "./like_button";

const mapStateToProps = (state, ownProps) => ({
  like: getLike(state, ownProps.likeableType, ownProps.likeableId),
  currentUser: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  deleteLike: likeId => dispatch(deleteLike(likeId)),
  uiToggleSignin: signin => dispatch(uiToggleSignin(signin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);


const getLike = (state, likeableType, likeableId) => {
  let likeType = state.entities.likes[`${likeableType.toLowerCase()}Likes`];
  // console.log(`${likeableType}s`.toLowerCase());
  // console.log('found type:');
  // console.log(entitiesType);
  if (likeType) {
    let like = likeType[likeableId];
    // console.log('found key:');
    // console.log(key);
    if (like) {
      return like;
    }
  }
  // console.log('failed to find like');
  return null;
}