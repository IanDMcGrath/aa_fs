import * as UserApiUtil from "../util/user_api_util";
import { receiveArts } from "./art_actions";

export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_USER_ARTS = "RECEIVE_USER_ARTS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

// const receiveUserArts = arts => ({
//   type: RECEIVE
// })

export const fetchUser = userId => dispatch => (
  UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
);

export const fetchUserArts = userId => dispatch => (
  UserApiUtil.fetchUserArts(userId).then(arts => dispatch(receiveArts(arts)))
);