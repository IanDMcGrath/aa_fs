import { connect } from "react-redux";
import ArtShow from "./art_show";
import { fetchArt } from "../../actions/art_actions";

const mapStateToProps = (state, ownProps) => ({
  art: state.entities.arts[ownProps.match.params.artId],
  comments: state.entities.comments
});

const mapDispatchToProps = dispatch => ({
  fetchArt: artId => dispatch(fetchArt(artId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtShow);