import { RECEIVE_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_ART, RECEIVE_ARTS } from "../actions/art_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ART:
      let nextState = Object.assign({}, state, action.art.commenters);
      // console.log(action);
      return nextState;

    case RECEIVE_USER:
      console.log(action);
      return {[action.user.id]: action.user};

    case RECEIVE_COMMENT:
      nextState = Object.assign({}, state);
      nextState[action.comment.commenterId].avatar = action.comment.avatar;
      return nextState;

    case RECEIVE_ART:
      nextState = Object.assign({}, state, action.commenters);
      return nextState;

    // case RECEIVE_ARTS:
    //   nextState = Object.assign({}, state, action.artists);
    //   return nextState;

    default:
      return state;
  }
}

export default usersReducer;