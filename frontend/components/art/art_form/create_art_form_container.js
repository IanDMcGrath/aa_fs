import { connect } from "react-redux";
import ArtForm from "./art_form";
import { createArt } from "../../../actions/art_actions";

const mapStateToProps = state => ({
  art: {title:"", description:"", artistId: state.session.id},
  formType: "Create New Artwork",
});

const mapDispatchToProps = dispatch => ({
  action: art => dispatch(createArt(art)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtForm);