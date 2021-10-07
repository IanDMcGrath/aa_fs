import { RECEIVE_TAGS } from "../actions/tag_actions";

const tagsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;

    default: return state;
  }
}

export default tagsReducer;