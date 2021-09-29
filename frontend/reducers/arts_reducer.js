import { RECEIVE_ARTS, RECEIVE_ART } from "../actions/art_actions";

const artsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_ARTS:

      return action.arts;

    case RECEIVE_ART:
      return action.art;

    default: return state;
  }
}

export default artsReducer;