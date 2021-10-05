import { RECEIVE_ART } from "../actions/art_actions";
import { RECEIVE_LIKE } from "../actions/like_actions";


const likesReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ART:
      console.log(action);
      return action.art.likes;

    case RECEIVE_LIKE:
      let nextState = Object.assign({}, state);
      nextState[action.like.id] = action.like;
      return nextState;

    default: return state;
  }
}

export default likesReducer;