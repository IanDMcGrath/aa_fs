import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/like_actions";
import { uiToggleSignin } from "../../actions/ui_actions";
import LikeButton from "./like_button";

const mapStateToProps = (state, ownProps) => ({
  likes: state.entities.likes,
  currentUser: state.session.id,
  // like: getLike(state.entities.likes, state.session.id),
  like: getLike(state, ownProps.likeableType, ownProps.likeableId),
});

const mapDispatchToProps = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  deleteLike: likeId => dispatch(deleteLike(likeId)),
  uiToggleSignin: signin => dispatch(uiToggleSignin(signin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);

// const getLike = (likes, currentUser) => {
//   let currentLike = null;
//   for (let i=0; i<Object.values(likes).length && !currentLike; i++) {
//     if (Object.values(likes)[i].likerId === currentUser) {
//       currentLike = Object.values(likes)[i]
//     }
//   };
//   return currentLike;
// }

const getLike = (state, likeableType, likeableId) => {
  let entitiesType = state.entities[`${likeableType}s`.toLowerCase()];
  console.log(`${likeableType}s`.toLowerCase())
  console.log('found type:')
  console.log(entitiesType)
  if (entitiesType) {
    let key = entitiesType[likeableId];
    console.log('found key:')
    console.log(key)
    if (key) {
      let likedEntity = state.entities.likes[key.commentableId];
      console.log('found like:')
      console.log(likedEntity)
      return likedEntity;
    }
  }
  console.log('failed to find like')
  return null;
}