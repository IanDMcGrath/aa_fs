import { connect } from "react-redux";
import { fetchArts } from "../../actions/art_actions";
import ArtIndex from "./art_index";

const mapStateToProps = state => ({
  arts: Object.values(state.entities.arts),
  filter: state.ui.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchArts: () => dispatch(fetchArts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtIndex);