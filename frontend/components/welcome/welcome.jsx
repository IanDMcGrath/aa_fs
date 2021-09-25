import React from "react";
import { Link } from "react-router-dom";

const Welcome = props => {
  const {logout, currentUser} = props;

  const welcomeTag = () => (
    <div>
      <h3>{currentUser.username}</h3>
      <button onClick={() => logout()}>Sign Out</button>
    </div>
  );

  const signinButton = () => (
    <div>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );

  return currentUser ? welcomeTag() : signinButton()

}

export default Welcome;