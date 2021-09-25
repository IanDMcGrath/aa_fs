import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect, Route } from "react-router";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
})

const Auth = ({ loggedIn, path, exact=false, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
);

const Protected = ({loggedIn, path, component: Component}) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))