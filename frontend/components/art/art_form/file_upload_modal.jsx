import React from "react";
import { ImSpinner11 } from "react-icons/im";
import { FaRegQuestionCircle, FaRegImage, FaRegPlayCircle } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { BiCube } from "react-icons/bi";
import { FiAperture } from "react-icons/fi";
import { MdPanoramaWideAngle } from "react-icons/md";

class FileUploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.getIcon = this.getIcon.bind(this);
  }

  renderButton() {
    let { buttonName, buttonDetails } = this.props;
    let icon = this.getIcon(buttonName);
    return (
      <div className="form-upload-button" onClick={this.handleToggleModal}>
        <div className="icon-blue">{icon}</div>
        <div className="upload-button-name">{buttonName}</div>
        <div className="upload-button-details">{buttonDetails}</div>
      </div>
    )
  }

  getIcon(buttonName) {
    switch (buttonName) {
      case "HQ Images":       return <FaRegImage />;
      case "Video Clip":      return <FaRegPlayCircle />;
      case "Video":           return <BsCameraVideo />;
      case "Sketchfab":       return <BiCube />;
      case "Marmoset Viewer": return <FiAperture />;
      case "360 Pano":        return <MdPanoramaWideAngle />;
      default:                return <FaRegQuestionCircle />;
    }
  }

  renderModal() {
    let { buttonName } = this.props;
    return (
      <div className="modal-screen" onClick={this.handleToggleModal}>
        <div className="modal-input">
          <div className="modal-header">Upload {buttonName}</div>
          <div className="modal-body">
            <div className="tip left-blue">
              <div className="tip-media">

              </div>
              <div className="tip-content">
                Sorry! This is a planned feature, please use the standard HTML upload button.
              </div>
            </div>
            <div className="form-section-upload">

            </div>
            <div className="modal-footer">
              <button className="upload-add-button">Add {buttonName}</button>
              <button className="button-secondary"><ImSpinner11 />Discard</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleToggleModal(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({show: !this.state.show});
    // if (e.currentTarget === e.target) {
    // }
  }

  render() {
    let { show, buttonName } = this.state;
    return (
      <div>
        {this.renderButton()}
        {show && buttonName !== "HQ Images" ? this.renderModal() : null}
      </div>
    )
  }
}

export default FileUploadModal;