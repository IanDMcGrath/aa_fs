import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Redirect } from "react-router";
import { CgEnter } from "react-icons/cg";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: "", email: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputUsername = this.inputUsername.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputPassword = this.inputPassword.bind(this);
    this.inputsSignin = this.inputsSignin.bind(this);
    this.inputsSignup = this.inputsSignup.bind(this);
    this.inputDemoUser = this.inputDemoUser.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
    <ul className="errors">
      {this.props.errors.map((error, i) => <li key={`error-${i}`} className="error">{error}</li>)}
    </ul>
    )
  }

  inputUsername() {
    return (
      <ul className="name">
        <li className="input-label"> Your name </li>
        <li>
          <input className="form-input-text"
          type="text"
          value={this.state.username}
          placeholder="username"
          onChange={this.handleInput('username')} />
        </li>
      </ul>
    )
  }

  inputPassword() {
    return (
      <ul className="password">
        <li className="input-label"> Password </li>
        <li>
          <input className="form-input-text"
          type="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.handleInput('password')} />
        </li>
      </ul>
    )
  }

  inputEmail() {
    return (
      <ul className="email">
        <li className="input-label"> Email </li>
        <li>
          <input className="form-input-text" type="email" value={this.state.email} placeholder="email@email.com" onChange={this.handleInput('email')} />
        </li>
      </ul>
    )
  }

  inputDemoUser() {
    return (
      <button className="session-form-button" onClick={this.loginDemoUser}>Demo Login</button>
    )
  }

  loginDemoUser(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.login({username:"DemoUser0", password:"password"});
  }

  inputsSignin() {
    return (
      <div>
        {this.inputUsername()}
        {this.inputPassword()}
      </div>
    )
  }

  inputsSignup() {
    return (
      <div>
        {this.inputEmail()}
        {this.inputUsername()}
        {this.inputPassword()}
      </div>
    )
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.formType === "Sign In" ? <h1 className="h1-sign-in">Sign In</h1> : null}
        {this.props.formType === 'Sign In' ? this.inputsSignin() : this.inputsSignup()}
        <button type="submit" className="session-form-button" ><div><CgEnter color="#00B2FF" size="17" /></div>{this.props.formType === "Sign Up" ? "Sign up" : "Sign in"}</button>
        {this.inputDemoUser()}
        {this.renderErrors()}
      </form>
    )
  }
}

export default SessionForm;