import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Welcome from "./welcome";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
  // currentUser: state
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);