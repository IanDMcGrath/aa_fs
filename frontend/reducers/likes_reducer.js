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
      nextState = Object.assign({}, state);
      console.log(nextState);
      nextState[action.like.id] = action.like;
      return nextState;

    case REMOVE_LIKE:
      nextState = Object.assign({}, state);
      delete nextState[action.likeId];
      return nextState;

    default: return state;
  }
}

export default likesReducer;