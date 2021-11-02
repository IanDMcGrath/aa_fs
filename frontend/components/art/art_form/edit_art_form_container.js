import { createArt } from "../../../actions/art_actions";
import { createTaggings } from "../../../util/tag_api_util";
import { fetchTags } from "../../../actions/tag_actions";

const mapStateToProps = (state, ownProps) => ({
  art: state.entities.arts[ownProps.match.params.artId],
  formType: "Create New Artwork",
  selectedMediums: {},
  selectedSubjectMatters: {},
  mediums: state.entities.tags.medium,
  subjectMatters: state.entities.tags.subjectMatters,
});

const mapDispatchToProps = dispatch => ({
  action: art => dispatch(createArt(art)),
  fetchTags: () => dispatch(fetchTags()),
  createTaggings: taggings => createTaggings(taggings),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtForm);