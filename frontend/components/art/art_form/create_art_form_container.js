import { connect } from "react-redux";
import ArtForm from "./art_form";
import { createArt } from "../../../actions/art_actions";
import { createTaggings } from "../../../util/tag_api_util";
import { fetchTags } from "../../../actions/tag_actions";

const mapStateToProps = state => ({
  art: Object.assign({},
    { title: "", description: "", artistId: state.session.id },
    { artfiles: null },
    { selectedMediums: {} },
    { selectedSubjectMatters: {} }
  ),
  formType: "Create New Artwork",
  mediums: state.entities.tags.medium,
  subjectMatters: state.entities.tags.subjectMatters,
});

const mapDispatchToProps = dispatch => ({
  action: art => dispatch(createArt(art)),
  fetchTags: () => dispatch(fetchTags()),
  createTaggings: taggings => createTaggings(taggings),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtForm);