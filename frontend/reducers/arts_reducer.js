import { RECEIVE_ARTS, RECEIVE_ART, REMOVE_ART } from "../actions/art_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const artsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_ARTS:

      return action.arts;

    case RECEIVE_ART:
      nextState = Object.assign({}, state);
      nextState[Object.values(action.art)[0].id] = Object.values(action.art)[0];
      nextState[Object.values(action.art)[0].id].tags = action.art.tags;
      return nextState;
      // return action.art;

    // LIKELY NEEDS TO BE IN A NEW REDUCER FOR STAT TRACKING WIDGET
    // case RECEIVE_LIKE:
    //   if (action.like.likeableType === "Art") {
    //     nextState = Object.assign({}, state, {[action.like.likeableId]: {likes: (action.like.likeableId.likes + 1)}});
    //     return nextState;
    //   }
    //   return state;

    // case REMOVE_LIKE:
    //   if (action.likeableType === "Art") {
    //     nextState = Object.assign({}, state, {[action.like.likeableId]: {likes: (action.like.likeableId.likes - 1)}});
    //     return nextState;
    //   }
    //   return state;

    case REMOVE_ART:
      nextState = Object.assign({}, state);
      delete nextState[action.artId];
      return nextState;

    default: return state;
  }
};

export default artsReducer;