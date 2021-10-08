import { RECEIVE_ARTS } from "../actions/art_actions";
import { RECEIVE_TAGS } from "../actions/tag_actions";

const tagsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;

    case RECEIVE_ARTS:
      // nextState = Object.assign({}, state, )
      return action.tags;

    default: return state;
  }
}

export default tagsReducer;