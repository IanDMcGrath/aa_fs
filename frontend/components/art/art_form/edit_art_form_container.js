import { connect } from "react-redux";
import ArtForm from "./art_form";
import { fetchArt, deleteArt, updateArt } from "../../../actions/art_actions";
import { fetchTags } from "../../../actions/tag_actions";
import { uiHideModal, uiShowModal } from "../../../actions/ui_actions";

const mapStateToProps = (state, ownProps) => {
  console.log(state.entities.arts[ownProps.match.params.artId]);
  return ({
  // art: state.entities.arts[ownProps.match.params.artId],
    art: state.entities.arts[ownProps.match.params.artId] ? Object.assign({},
    state.entities.arts[ownProps.match.params.artId],
      { artfiles: state.entities.arts[ownProps.match.params.artId] ? Object.assign({}, state.entities.arts[ownProps.match.params.artId].artpanels) : {} },
    { selectedMediums: state.entities.arts[ownProps.match.params.artId].tags.medium },
    { selectedSubjectMatters: state.entities.arts[ownProps.match.params.artId].tags.subjectMatter }
  ) : {},
  formType: "Editing Artwork",
  medium: state.entities.tags.medium,
  subjectMatter: state.entities.tags.subjectMatter,
  modal: state.ui.modal,
})};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArt: (artId) => dispatch(fetchArt(artId)),
  fetchTags: () => dispatch(fetchTags()),
  updateTaggings: taggings => updateTaggings(taggings),
  deleteArt: artId => dispatch(deleteArt(artId)),
  showModal: modal => dispatch(uiShowModal(modal)),
  updateArt: (artId, formData) => dispatch(updateArt(artId, formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtForm);