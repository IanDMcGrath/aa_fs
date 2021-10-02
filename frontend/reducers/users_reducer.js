import { RECEIVE_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_ART } from "../actions/art_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ART:
      let nextState = Object.assign({}, state, action.art.commenters);
      // console.log(action);
      return nextState;
    default:
      return state;
  }
}

export default usersReducer;