import { connect } from "react-redux";
import { StatsNumComments } from "./stats";

const mapStateToProps = state => ({
  numComments: Object.keys(state.entities.comments.rootComments).length + Object.keys(state.entities.comments.replies).length,
});

export default connect(mapStateToProps, null)(StatsNumComments);