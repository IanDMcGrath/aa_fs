import React from "react";
import SigninFormContainer from "./signin_form_container";
import SignupFormContainer from "./signup_form_container";
import { MdClose } from 'react-icons/md';

class SessionModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {formType: 'Sign In', shouldShow: false};

    this.changeFormType = this.changeFormType.bind(this);
    this.otherFormType = this.otherFormType.bind(this);
    this.showSignin = this.showSignin.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.isSignIn = this.isSignIn.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.renderUserOptions = this.renderUserOptions.bind(this);
  }

  changeFormType() {
    this.setState({formType: this.otherFormType()})
  }

  otherFormType() {
    return this.isSignIn() ? 'Sign Up' : 'Sign In';
  }

  isSignIn() {
    return this.state.formType === 'Sign In';
  }

  showModal() {
    let {formType} = this.state;
    let {errors} = this.props;

    return (
      <div className="modal-screen" onClick={this.toggleModal(false, false)}>
        {/* modal screen background */}
        <div className="modal-session-form">
          <div className="session-form-contents">
          <div className="modal-session-close" onClick={this.toggleModal(false, false)}><MdClose color="grey" className="modal-session-close" onClick={this.toggleModal(false, false)} /></div>
          {formType === 'Sign In' ? (null) : (<div><h1 className="artcoag"><div className="artcoag-front">ART</div>COAG</h1><div className="signup-welcome">Join the leading showcase platform for art and design.</div></div>)}
          {formType === 'Sign In' ? (<SigninFormContainer/>) : (<SignupFormContainer/>)}
          <div className="member-yet"><div>{formType === "Sign Up" ? "Already have an account?" : "Not a member yet?"}</div><div onClick={this.changeFormType} className="other-form">{formType === "Sign Up" ? "Sign in" : "Sign up"}</div></div>
          {/* <ul>
            {errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)}
          </ul> */}
          </div>
        </div>
      </div>
    )
  }

  toggleModal(toggle, isSignin) {
    let formType = isSignin ? "Sign In" : "Sign Up"
    return (e) => {
      if (e.target === e.currentTarget) {
        return this.setState({shouldShow: toggle, formType: formType})
      }
    }
  }

  showSignin() {
    return (
      <div className="modal-show-signin" onClick={this.toggleModal(true, true)}>
        SIGN IN
      </div>
    )
  }

  showSignup() {
    return (
      <div className="modal-show-signup" onClick={this.toggleModal(true, false)}>
        SIGN UP
      </div>
    )
  }

  renderButtons() {
    return (
      <div>
        {this.showSignin()}
        {this.showSignup()}
      </div>
    )
  }

  renderUserOptions() {
    let {logout} = this.props
    return (
      <div onClick={() => logout()}>
        SIGN OUT
      </div>
    )
  }

  render() {
    let {shouldShow} = this.state;
    let signedIn = Boolean(this.props.currentUser);
    return (
      <div>
        <div className="session-buttons">
          { signedIn ? (this.renderUserOptions()) : (this.renderButtons())}
        </div>
        {shouldShow === true && !signedIn ? (this.showModal()) : (null)}
      </div>
    )
  }
}

export default SessionModal;