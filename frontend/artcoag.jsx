import React from "react";
import ReactDOM from "react-dom";
import { logout } from "./actions/session_actions";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  let preloadedState = {
    ui: {
      signin: {showSignin: false},
      reply: {showReply: false}
    }
  };
  if (window.currentUser) {
    preloadedState = Object.assign({
      session: { id: window.currentUser.id },
      entities: { users: { [window.currentUser.id]: window.currentUser } }
    }, preloadedState);
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore(preloadedState);
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
});