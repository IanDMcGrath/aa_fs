import React from "react";
import SigninFormContainer from "./signin_form_container";
import SignupFormContainer from "./signup_form_container";
import { CgEnter } from "react-icons/cg";
import { MdClose } from 'react-icons/md';
import { BsPencilSquare } from "react-icons/bs";

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
    this.props.clearSessionErrors();
    this.setState({formType: this.otherFormType()});
  }

  otherFormType() {
    return this.isSignIn() ? 'Sign Up' : 'Sign In';
  }

  isSignIn() {
    return this.state.formType === 'Sign In';
  }

  showModal() {
    let {formType} = this.state;

    return (
      <div className="modal-screen" onClick={this.toggleModal(false)}>
        {/* modal screen background */}
        <div className="modal-form animated fadeInTop">
          <div className="session-form-contents">
          <div className="modal-session-close" onClick={this.toggleModal(false)}><MdClose color="grey" className="modal-session-close" onClick={this.toggleModal(false)} /></div>
          {formType === 'Sign In' ? (null) : (<div><div className="logo-title-container"><div className="logo-container"/><h1 className="modal-title artcoag"><div className="artcoag-front">ART</div>COAG</h1></div><div className="signup-welcome">Join the leading showcase platform for art and design.</div></div>)}
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

  toggleModal(showSignin=true, isSignin=true) {
    let formType = isSignin ? "Sign In" : "Sign Up";
    return (e) => {
      if (e.target === e.currentTarget) {
        this.props.uiToggleSignin({showSignin: showSignin});
        return this.setState({formType: formType})
      }
    }
  }

  showSignin() {
    return (
      <div className="session-button modal-show-signin" onClick={this.toggleModal(true, true)}>
        <CgEnter className="icon" size="25"/>SIGN IN
      </div>
    )
  }

  showSignup() {
    return (
      <div className="session-button modal-show-signup" onClick={this.toggleModal(true, false)}>
        <BsPencilSquare className="icon" size="22"/>SIGN UP
      </div>
    )
  }

  renderButtons() {
    return (
      <div className="session-buttons">
        {this.showSignup()}
        {this.showSignin()}
      </div>
    )
  }

  renderUserOptions() {
    let {logout} = this.props
    return (
      <div className="session-button" onClick={() => logout()}>
        SIGN OUT
      </div>
    )
  }

  render() {
    // let {shouldShow} = this.state;
    let {showSignin} = this.props;
    let signedIn = Boolean(this.props.currentUser);

    if (signedIn) { return (
      <div>
          {this.renderUserOptions()}
      </div>
    )} else { return (
      <div>
        {this.renderButtons()}
        {showSignin ? this.showModal() : null}
      </div>
    )}
  }
}

export default SessionModal;