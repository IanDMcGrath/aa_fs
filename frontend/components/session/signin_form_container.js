import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Sign In"
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);