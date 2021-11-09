import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { receiveUser, receiveUserErrors } from "../../actions/user_actions";
import UserEditForm from './user_edit_form';

const mapStateToProps = (state, ownProps) => ({
  user: Object.assign(
    {
      username: 'username',
      work: 'work',
      avatar: ["https://artcoag-seeds.s3.us-west-1.amazonaws.com/avatars/fsp_icons_new_user.png"],
      didChangeAvatar: false,
    },
    state.entities.users[ownProps.match.params.userId]
  ),
  isOwner: Boolean(state.session.id && (ownProps.match.params.userId == state.session.id)),
  currentUser: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  receiveUser: user => dispatch(receiveUser(user)),
  receiveUserErrors: errors => dispatch(receiveUserErrors(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm);