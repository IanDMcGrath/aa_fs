import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
})

const Auth = ({ loggedIn, exact, path, component: Component }) => (
  <Route exact={exact} path={path} render={props => (
      !loggedIn ? (<Component {...props} />) : (<Redirect to="/" />)
    )}
  />
);

const Protected = ({ loggedIn, exact, path, component: Component }) => (
  <Route exact={exact} path={path} render={props => (
      loggedIn ? (<Component {...props} />) : (<Redirect to="/signin" />)
    )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));