import { connect } from "react-redux";
import ArtForm from "./art_form";
import { fetchArt, updateArt } from "../../../actions/art_actions";
import { createTaggings } from "../../../util/tag_api_util";
import { fetchTags } from "../../../actions/tag_actions";

const mapStateToProps = (state, ownProps) => ({
  art: state.entities.arts[ownProps.match.params.artId],
  formType: "Create New Artwork",
  selectedMediums: state.tags.tagMediums,
  selectedSubjectMatters: state.tags.subjectMatters,
  mediums: state.entities.tags.medium,
  subjectMatters: state.entities.tags.subjectMatters,
});

const mapDispatchToProps = dispatch => ({
  action: art => dispatch(updateArt(art)),
  fetchArt: artId => dispatch(fetchArt(artId)),
  fetchTags: () => dispatch(fetchTags()),
  updateTaggings: taggings => updateTaggings(taggings),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtForm);