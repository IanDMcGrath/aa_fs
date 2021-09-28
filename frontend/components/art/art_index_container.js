import { connect } from "react-redux";
import ArtIndex from "./art_index";

const mapStateToProps = state => ({
  arts: Object.values(state.entities.arts)
})

const mapDispatchToProps = state => ({
  fetch
})