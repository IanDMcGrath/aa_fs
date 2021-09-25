import React from "react";
import LoginFormContainer from "./session/signin_form_container";
import SignupFormContainer from "./session/signup_form_container";
import WelcomeContainer from "./welcome/welcome_container";
import { Route } from "react-router";
import { AuthRoute } from "../util/route_util";
import {SiPlaystation} from "react-icons/si" // react-icons proof

const App = () => (
  <div>
    <header>
      <h1>Art Coag</h1>
      <WelcomeContainer />
      <img src="/assets/images/user_icons/fsp_icons_0003_Layer-1.png" />
      <nav>nav bar</nav>
    </header>
      <AuthRoute exact path="/signin" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <SiPlaystation />
  </div>
);

export default App;