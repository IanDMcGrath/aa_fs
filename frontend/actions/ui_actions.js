import { TOGGLE_SIGNIN, TOGGLE_REPLY, CHANGE_FILTER } from "../util/ui_api_util";

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

export const uiChangeFilter = tag => dispatch => (
  dispatch({
    type: CHANGE_FILTER,
    tag
  })
)