import { TOGGLE_SIGNIN, TOGGLE_REPLY } from "../util/ui_api_util";

export const uiToggleSignin = signin => dispatch => (
  dispatch({
    type: TOGGLE_SIGNIN,
    signin
  })
);

export const uiToggleReply = reply => dispatch => (
  dispatch({
    type: TOGGLE_REPLY,
    reply
  })
);