import { connect } from "react-redux";
import ArtForm from "./art_form";
import { fetchArt, updateArt } from "../../../actions/art_actions";
import { createTaggings } from "../../../util/tag_api_util";
import { fetchTags } from "../../../actions/tag_actions";

const mapStateToProps = (state, ownProps) => {
  console.log(state.entities.arts[ownProps.match.params.artId])
  return ({
  // art: state.entities.arts[ownProps.match.params.artId],
    art: state.entities.arts[ownProps.match.params.artId] ? Object.assign({},
    state.entities.arts[ownProps.match.params.artId],
    { artfiles: null },
    { selectedMediums: state.entities.arts[ownProps.match.params.artId].tags.mediums },
    { selectedSubjectMatters: state.entities.arts[ownProps.match.params.artId].tags.subjectMatters }
  ) : {},
  formType: "Editing Artwork",
  mediums: state.entities.tags.medium,
  subjectMatters: state.entities.tags.subjectMatter,
})};

const mapDispatchToProps = (dispatch, ownProps) => ({
  action: art => dispatch(updateArt(art)),
  fetchArt: (artId) => dispatch(fetchArt(artId)),
  fetchTags: () => dispatch(fetchTags()),
  updateTaggings: taggings => updateTaggings(taggings),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtForm);