import { TOGGLE_SIGNIN, SHOW_REPLY, HIDE_REPLY } from "../util/ui_api_util";

const toggleSignin = () => ({
  type: TOGGLE_SIGNIN
});

export const uiToggleSignin = () => dispatch => (
  dispatch({
    type: TOGGLE_SIGNIN
  })
);