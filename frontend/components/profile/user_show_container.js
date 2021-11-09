import { connect } from 'react-redux';
import { fetchUser, fetchUserArts } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  isOwner: Boolean(state.session.id && ownProps.match.params.userId === state.session.id),
  arts: Object.values(state.entities.arts)
});

const mapDispatchToProps = dispatch => ({
  fetchUserArts: userId => dispatch(fetchUserArts(userId)),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);