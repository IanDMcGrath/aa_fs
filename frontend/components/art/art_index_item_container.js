import { connect } from "react-redux";
import {fetchArt} from "../../actions/art_actions";
import ArtIndexItem from "./art_index_item";


const mapStateToProps = (state, ownProps) => ({
  art: state.entities.arts[ownProps.id]
})


const mapDispatchToProps = dispatch => ({
  fetchArt: artId => dispatch(fetchArt(artId))
  // fetchUser: artistId => dispatch()
})

export default connect(null, mapDispatchToProps)(ArtIndexItem);