import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { uiToggleSignin } from "../../actions/ui_actions";
import SessionModal from "./session_modal";

const mapStateToProps = state => {
  return {
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.session,
  showSignin: state.ui.signin.showSignin,
  // currentUser: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
  logout: () => dispatch(logout()),
  uiToggleSignin: () => dispatch(uiToggleSignin())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionModal);