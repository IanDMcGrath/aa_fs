import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Redirect } from "react-router";

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
  }

  handleInput(field) {
    return (e) => {this.setState({[field]: e.currentTarget.value})}
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
    <ul>
      {this.props.errors.map((error, i) => <li key={`error-${i}`}>{error}</li>)}
    </ul>
    )
  }

  inputUsername() {
    return (
      <label>Username
        <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
      </label>
    )
  }

  inputPassword() {
    return (
      <label>Password
        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
      </label>
    )
  }

  inputEmail() {
    return (
      <label>Email
        <input type="email" value={this.state.email} onChange={this.handleInput('email')} />
      </label>
    )
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
    // let redirect = currentUser ? <Redirect to="/" /> : null;
    const otherForm = this.props.formType === 'Sign In' ? 'signup' : 'signin';

    return (
      <form onSubmit={this.handleSubmit}>
        {/* {redirect} */}
        <h1>{this.props.formType}</h1>
        {this.renderErrors()}
        <Link to={`/${otherForm}`}>{otherForm}</Link>
        {this.props.formType === 'Sign In' ? this.inputsSignin() : this.inputsSignup()}
        <input type="submit" value={this.props.formType} />
      </form>
    )
  }
}

export default SessionForm;