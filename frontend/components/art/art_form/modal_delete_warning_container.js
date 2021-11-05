import { connect } from 'react-redux';
import Modal from "./modal_delete_warning";
import { uiHideModal } from '../../../actions/ui_actions';
import { deleteArt } from '../../../actions/art_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(uiHideModal()),
  deleteArt: artId => dispatch(deleteArt(artId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);