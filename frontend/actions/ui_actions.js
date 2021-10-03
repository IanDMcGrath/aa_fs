import { TOGGLE_SIGNIN, SHOW_REPLY, HIDE_REPLY } from "../util/ui_api_util";

export const uiToggleSignin = () => dispatch => (
  dispatch(() => ({type: TOGGLE_SIGNIN}))
);