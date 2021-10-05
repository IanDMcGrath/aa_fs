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
import { RiUploadLine } from "react-icons/ri";
import CreateArtFormContainer from "./art/art_form/create_art_form_container";

const App = () => (
  <div>
    <header className="header">
      <div className="sticky-header">
        {/* <ArtCoag /> */}
        <Link to="/"><h1 className="artcoag"><div className="artcoag-front">ART</div>COAG</h1></Link>
        {/* <WelcomeContainer /> */}
        <Link to={"/arts/new"} ><div className="upload-button"><RiUploadLine /></div></Link>
        <SessionModalContainer />
      </div>
      <nav><div className="nav-bar-content">[ nav bar ]<div>nav1</div><div>nav2</div><div>nav3</div>[ nav bar ]</div></nav>
    </header>
    <div className="body-div">
      <Switch>
        <Route path={"/arts/new"} component={CreateArtFormContainer} />
        <Route path={"/arts/:artId"} component={ArtShowContainer} />
        <Route exact path="/" component={ArtIndexContainer} />
      </Switch>
      {/* <AuthRoute exact path="/signin" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

      {/* <SiPlaystation /> */}
    </div>
  </div>
);

export default App;