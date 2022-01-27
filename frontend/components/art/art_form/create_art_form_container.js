import { connect } from "react-redux";
import ArtForm from "./art_form";
import { createArt } from "../../../actions/art_actions";
import { fetchTags } from "../../../actions/tag_actions";

const mapStateToProps = state => ({
  art: Object.assign({},
    { title: "", description: "", artistId: state.session.id },
    { artfiles: null },
    { selectedMediums: {} },
    { selectedSubjectMatters: {} }
  ),
  formType: "Create New Artwork",
  medium: state.entities.tags.medium,
  subjectMatter: state.entities.tags.subjectMatter,
});

const mapDispatchToProps = dispatch => ({
  action: art => dispatch(createArt(art)),
  fetchTags: () => dispatch(fetchTags()),
  showModal: modal => dispatch(uiShowModal(modal)),
  hideModal: () => dispatch(uiHideModal),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtForm);