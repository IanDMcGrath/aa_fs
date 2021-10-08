import { connect } from "react-redux";
import ArtForm from "./art_form";
import { createArt } from "../../../actions/art_actions";
import { fetchTags } from "../../../actions/tag_actions";

const mapStateToProps = state => ({
  art: {title:"", description:"", artistId: state.session.id},
  formType: "Create New Artwork",
  selectedMediums: {},
  selectedSubjectMatters: {},
  mediums: state.entities.tags.medium,
  subjectMatters: state.entities.tags.subjectMatters,
});

const mapDispatchToProps = dispatch => ({
  action: art => dispatch(createArt(art)),
  fetchTags: () => dispatch(fetchTags()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtForm);