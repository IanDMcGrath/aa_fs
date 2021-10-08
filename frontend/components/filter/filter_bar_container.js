import { connect } from "react-redux";
import { fetchTags } from "../../actions/tag_actions";
import { uiChangeFilter } from "../../actions/ui_actions";
import FilterBar from "./filter_bar";


const mapStateToProps = state => ({
  tags: state.entities.tags.tagMediums,
  currentFilter: state.ui.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags()),
  changeFilter: tag => dispatch(uiChangeFilter(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);