import { RECEIVE_ART } from "../actions/art_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";


const likesReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_ART:
      // console.log(action);
      if (!action.art.likes) return state;
      return action.art.likes;

    case RECEIVE_LIKE:
      nextState = Object.assign({}, state, {[`${action.like.likeableType.toLowerCase()}Likes`]: {[action.like.likeableId]: action.like}});
      // console.log(nextState[`${action.like.likeableType.toLowerCase()}Likes`]);
      nextState[`${action.like.likeableType.toLowerCase()}Likes`][action.like.likeableId] = action.like;
      return nextState;

    case REMOVE_LIKE:
      nextState = Object.assign({}, state);
      // console.log(action);
      delete nextState[`${action.like.likeableType.toLowerCase()}Likes`][action.like.likeableId];
      return nextState;

    default: return state;
  }
}

export default likesReducer;