import React from "react";
import LoginFormContainer from "./session/signin_form_container";
import SignupFormContainer from "./session/signup_form_container";
import WelcomeContainer from "./welcome/welcome_container";
import { Route } from "react-router";
import { AuthRoute } from "../util/route_util";
// import {SiPlaystation} from "react-icons/si" // react-icons proof
import SessionModal from "./session/session_modal";
import SessionModalContainer from "./session/session_modal_container";
import { Link, Switch } from "react-router-dom";
// import ArtCoag from '../../app/assets/images/artcoag.png';
import ArtIndexContainer from "./art/art_index_container";
import ArtShowContainer from "./art/art_show_container";

const App = () => (
  <div>
    <header>
      <div className="sticky-header">
        {/* <ArtCoag /> */}
        <Link to="/"><h1 className="artcoag"><div className="artcoag-front">ART</div>COAG</h1></Link>
        {/* <WelcomeContainer /> */}
        <SessionModalContainer />
      </div>
      <nav>[ nav bar ]</nav>
    </header>
      <Switch>
        <Route path={`/arts/:artId`} component={ArtShowContainer} />
        <Route exact path="/" component={ArtIndexContainer} />
      </Switch>
      {/* <AuthRoute exact path="/signin" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

      {/* <SiPlaystation /> */}
  </div>
);

export default App;