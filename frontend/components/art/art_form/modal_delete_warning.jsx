import React from "react";
import { withRouter } from "react-router";
import { GrFormClose } from "react-icons/gr";
import { BiTrash } from "react-icons/bi";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteArt(this.props.artId);
    this.props.history.push('/');
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    return (
      <div className="modal-container">
        <div className="modal-screen" onClick={this.closeModal} />
        <div className="modal animated fadeInTop">
          <div className="close" onClick={this.closeModal}><GrFormClose /></div>
          <div className="modal-header">
            <h3>Warning!</h3>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this Artwork? It cannot be undone!
          </div>
          <div className="modal-footer justify-center">
            <button className="button subtle" onClick={this.handleDelete}><BiTrash className="blue"/><div className="white">Delete Artwork</div></button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Modal);