import React from "react";
import { BiRocket } from "react-icons/bi";
import FileUploadModal from "./file_upload_modal";
import MediumCheckbox from "./medium_checkbox";

class ArtForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.art, {artfiles: null}, {selectedMediums: {}});
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  handleFile(e) {
    this.setState({artfiles: e.currentTarget.files[0]})
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('art[artist_id]', this.state.artistId)
    formData.append('art[title]', this.state.title);
    formData.append('art[description]', this.state.description);
    // Object.values(this.state.artfiles).forEach(artfile =>
    //   formData.append('art[artPanels]', artfile)
    // );
    formData.append('art[artpanels]', this.state.artfiles);
    $.ajax({
      url: "/api/arts",
      method:"POST",
      data: formData,
      contentType: false,
      processData: false
    }).then(
      res => console.log(res.message),
      res => console.log(res.responseJSON)
    )
  }

  handleCheckbox(e, medium, disabled) {
    // console.log(medium);
    if (disabled) {return null};
    let nextMediums = {};
    if (this.state.selectedMediums[medium.id]) {
      nextMediums = Object.assign({}, this.state.selectedMediums);
      delete nextMediums[medium.id];
    } else {
      nextMediums = Object.assign({}, this.state.selectedMediums, {[medium.id]: medium.name});
    }
    this.setState({selectedMediums: nextMediums});

  }

  componentDidMount() {
    if (!this.props.mediums) {
      this.props.fetchTags();
    }
  }

  render() {
    console.log(this.state);
    let { formType } = this.props;
    return (
      <div className="art-form-div">
        <form onSubmit={this.handleSubmit.bind(this)} className="art-form">
          <h2>{formType}</h2>
          <h3>{this.state.title.length > 0 ? this.state.title : "Untitled"}</h3>
          <div className="form-section">
            <label><div className="form-section-header">Artwork Title</div>
              <div className="form-section-body"><input type="text" value={this.state.title} onChange={this.handleInput('title')} placeholder="What is your artwork called" className="form-input-text"/></div>
            </label>
          </div>
          <div className="form-section-upload">
            <div className="form-section-header-upload">
              <FileUploadModal buttonName="HQ Images" buttonDetails="JPG, PNG, GIF" />
              <FileUploadModal buttonName="Video Clip" buttonDetails="MP4" />
              <FileUploadModal buttonName="Video" buttonDetails="YouTube, Vimeo" />
              <FileUploadModal buttonName="Sketchfab" buttonDetails="Embed Sketchfab" />
              <FileUploadModal buttonName="Marmoset Viewer" buttonDetails="Up to 50 Mb" />
              <FileUploadModal buttonName="360 Pano" buttonDetails="JPG" />
            </div>
            <div className="form-section-body-upload">
              <label className="form-label"> Upload media files
                <input type="file" multiple onChange={this.handleFile}/>
              </label>
            </div>
          </div>
          <div className="form-section">
            <div className="form-section-header">Artwork Details</div>
            <div className="form-section-body">
              <label ><div className="form-label">Artwork Description</div>
                <textarea value={this.state.description} onChange={this.handleInput('description')} className="form-text-area art" placeholder="Artwork Description"/>
              </label>
            </div>
          </div>
          <div className="form-section">
            <div className="form-section-header">Categorization</div>
            <div className="form-section-body">
              <div className="form-label">Medium</div>
                <div className="form-list">
                  {!this.props.mediums ? null : Object.values(this.props.mediums).map((medium, i) =>
                  <MediumCheckbox key={`medium-${i}`} medium={medium} handleCheckbox={this.handleCheckbox} count={this.state.selectedMediums ? Object.keys(this.state.selectedMediums).length : 0} checked={this.state.selectedMediums[medium.id]}/>)}
                  {/* console.log(medium))} */}

                  {/* <label htmlFor="Digital 2D" className="checkbox-label">
                    <input type="checkbox" value="Digital 2D" name="Digital 2D" onChange={() => this.handleCheckbox('Digital 2D')} className="form-checkbox"/>
                  Digital 2D</label>
                  <label htmlFor="Digital 3D" className="checkbox-label">
                    <input type="checkbox" value="Digital 3D" name="Digital 3D" onChange={() => this.handleCheckbox('Digital 3D')} className="form-checkbox"/>
                  Digital 3D</label>
                  <label htmlFor="Animation" className="checkbox-label">
                    <input type="checkbox" value="Animation" name="Animation" onChange={() => this.handleCheckbox('Animation')} className="form-checkbox"/>
                  Animation</label>
                  <label htmlFor="Real-time" className="checkbox-label">
                    <input type="checkbox" value="Real-time" name="Real-time" onChange={() => this.handleCheckbox('Real-time')} className="form-checkbox"/>
                  Real-time</label> */}
                </div>

              {/* <label ><div className="form-label">Subject Matter</div>
                <textarea value={this.state.description} onChange={this.handleChangeTag('description')} className="form-dropdown"/>
              </label> */}
            </div>
          </div>
          <div className="form-section">
            <div className="form-section-header">Publishing Options</div>
            <div className="form-section-body">
              <button className="form-submit button publish"><BiRocket /> {formType === "Create New Artwork" ? "Publish" : "Commit Changes"}</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ArtForm;