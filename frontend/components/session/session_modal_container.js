import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import SessionModal from "./session_modal";

const mapStateToProps = state => {
  return {
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.session
  // currentUser: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
  logout: () => dispatch(logout())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionModal);