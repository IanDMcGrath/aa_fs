import React from "react";
import { BiRocket } from "react-icons/bi";
import { Redirect } from "react-router";
import FileUploadModal from "./file_upload_modal";
import MediumCheckbox from "./medium_checkbox";

class ArtForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.art, {artfiles: null}, {selectedMediums: {}});
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
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
    }).then(res => {
      // console.log('this is the response:');
      // console.log(res);
      // let taggings = Object.values(this.state.selectedMediums).map(medium => ({tag_id: medium.id, taggable_id: Object.keys(res)[0], taggable_type: "Art"}));
      // console.log(taggings);
      // this.props.createTaggings(taggings);
      let medium = Object.values(this.state.selectedMediums)[0];
      let tagging = {tag_id: medium.id, taggable_id: Object.keys(res)[0], taggable_type: "Art"}
      // console.log(tagging);
      $.ajax({
        url: "/api/taggings",
        method: "POST",
        data: {tagging},
      }).then(() => {
          if (Object.values(this.state.selectedMediums).length < 2) {
            return null;
          } else {this.handleSuccess();}
          let medium = Object.values(this.state.selectedMediums)[1];
          let tagging = {tag_id: medium.id, taggable_id: Object.keys(res)[0], taggable_type: "Art"}
          // console.log(tagging);
          $.ajax({
            url: "/api/taggings",
            method: "POST",
            data: {tagging},
          }).then(() => {
              if (Object.values(this.state.selectedMediums).length < 3) {
                return null;
              } else {this.handleSuccess();}
              let medium = Object.values(this.state.selectedMediums)[2];
              let tagging = {tag_id: medium.id, taggable_id: Object.keys(res)[0], taggable_type: "Art"}
              // console.log(tagging);
              $.ajax({
                url: "/api/taggings",
                method: "POST",
                data: {tagging},
              }).then(() => (this.handleSuccess()))
            })})});
  }

  handleSuccess() {
    return (
      <Route to="/"/>
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
      nextMediums = Object.assign({}, this.state.selectedMediums, {[medium.id]: medium});
    }
    this.setState({selectedMediums: nextMediums});

  }

  componentDidMount() {
    if (!this.props.mediums) {
      this.props.fetchTags();
    }
  }

  render() {
    // console.log(this.state);
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
                </div>
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