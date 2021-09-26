import React from "react";
import LoginFormContainer from "./session/signin_form_container";
import SignupFormContainer from "./session/signup_form_container";
import WelcomeContainer from "./welcome/welcome_container";
import { Route } from "react-router";
import { AuthRoute } from "../util/route_util";
import {SiPlaystation} from "react-icons/si" // react-icons proof
import SessionModal from "./session/session_modal";
import SessionModalContainer from "./session/session_modal_container";
import { Link } from "react-router-dom";

const App = () => (
  <div>
    <header>
      <Link to="/"><h1 className="artcoag"><div className="artcoag-front">ART</div>COAG</h1></Link>
      {/* <WelcomeContainer /> */}
      <nav>[ nav bar ]</nav>
    </header>
      {/* <AuthRoute exact path="/signin" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
      <SessionModalContainer />

      <SiPlaystation />
  </div>
);

export default App;