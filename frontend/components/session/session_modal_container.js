import { connect } from "react-redux";
import { clearSessionErrors, logout } from "../../actions/session_actions";
import { uiToggleSignin } from "../../actions/ui_actions";
import SessionModal from "./session_modal";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  isSignedIn: Boolean(state.session.id),
  currentUserId: state.session.id,
  errors: state.errors.session,
  showSignin: state.ui.signin.showSignin,
  // currentUser: state
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  uiToggleSignin: signin => dispatch(uiToggleSignin(signin)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  fetchCurrentUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionModal);