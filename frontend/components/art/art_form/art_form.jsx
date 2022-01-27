import React from "react";
import regeneratorRuntime from "regenerator-runtime";
import { Redirect, withRouter } from "react-router";
import FileUploadModal from "./file_upload_modal";
import MediumCheckbox from "./medium_checkbox";
import { BiRocket, BiTrash } from "react-icons/bi";
import ModalDeleteWarningContainer from "./modal_delete_warning_container";

class ArtForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.art;
    this.handleInput = this.handleInput.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.submitCreate = this.submitCreate.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
    this.firstLetterDown = this.firstLetterDown.bind(this);
    this.firstLetterUp = this.firstLetterUp.bind(this);
    this.renderArtPanel = this.renderArtPanel.bind(this);
    this.removeArtPanel = this.removeArtPanel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  handleFiles(e) {
    // console.log(e.currentTarget.files);
    let currentFiles = this.state.artfiles ? this.state.artfiles : {};
    currentFiles = Object.values(currentFiles).concat(Object.values(e.currentTarget.files));
    this.setState({artfiles: Object.assign({}, currentFiles)});
  }

  removeArtPanel(e, panelId) {
    let nextStateFiles = Object.assign({}, this.state.artfiles);
    delete nextStateFiles[panelId];
    this.setState({ artfiles: nextStateFiles });
  }

  renderArtPanel() {
    if (this.formType === "Editing Artwork") {
      // if (this.state.artfiles)
    } else {
      if (this.state.artfiles && Object.keys(this.state.artfiles).length > 0) {
        let { artfiles } = this.state;
        // console.log(artfiles);
        return ( //<img src={URL.createObjectURL(artfiles[0])} />
          <ul className="artfiles">
            {Object.values(artfiles).map((artfile, i) =>
              <li key={`artfile-${i}`} className="artfile-panel">
                <div className="delete corner red" onClick={(e) => this.removeArtPanel(e, i)}><BiTrash /></div>
                {(typeof artfile === 'string')
                ?
                  <img className="artfile" src={artfile} />
                :
                  <img className="artfile" src={URL.createObjectURL(new Blob([artfile], { type: "application/zip"}))} />}
              </li>
            )}
          </ul>
        );
      }
    }
    return null;
  }

  handleSubmit(e) {
    e.stopPropagation();
    if (Object.keys(this.state.selectedMediums).length === 0) {
      return;
    }

    const { artistId, title, description } = this.state;
    const selectedMediums = Object.values(this.state.selectedMediums);

    const formData = new FormData();
    formData.append('art[artist_id]', artistId);
    formData.append('art[title]', title);
    formData.append('art[description]', description);

    if (this.props.formType === "Editing Artwork") {
      this.submitUpdate(formData);
    } else {
      this.submitCreate(formData);
    }
  }

  submitUpdate(formData) {
    const { artfiles, selectedMediums } = this.state;
    const { updateArt, art } = this.props;
    const currentTaggings = art.tags.medium;

    const newTags = {};

    let i=0;
    const cts = Object.values(currentTaggings);
    for (let tag in selectedMediums) { // tag in the for statement is the KEY not the VALUE of the object
      if (cts[i]) {
        newTags[cts[i].id] = { // data for updating tagging
          tagging_id: currentTaggings[cts[i].id].taggingId,
          tag_id: parseInt(tag),
          taggable_id: art.id,
          taggable_type: "Art",
          actiontype: 'update',
        };
      } else {
        newTags[tag] = { // data for new tagging // note: no tagging id
          tag_id: parseInt(tag),
          taggable_id: art.id,
          taggable_type: "Art",
          actiontype: 'create',
        };
      }
      i++;
    }

    for (let tag in currentTaggings) { // mark extra tags for delete
      if (!newTags[tag]) {
        newTags[tag] = {
          tagging_id: currentTaggings[tag].taggingId,
          actiontype: 'delete'
        };
      }
    }

    const taggings = Object.values(newTags);

    $.ajax({
      url: `/api/taggings/${taggings[0]}`,
      method: "PATCH",
      data: { taggings },
    }).then(res => { // this call returns nothing

      // update all other art data
      updateArt(art.id, formData);
      // this call returns the new art

      window.scrollTo(0, 0);
      this.props.history.push(`/arts/${art.id}`);

    });
  }



  submitCreate(formData) {
    const { artfiles, selectedMediums } = this.state;
    const { action } = this.props;

    for (const k in artfiles) {
      formData.append("art[artpanels][]", artfiles[k]);
    }

    console.log('SUBMITTED... ARTPANEL...');
    console.log(formData.get("art[artpanels][]"));

    for (const k in selectedMediums) {
      formData.append("art[taggings][]", {
        // data for new tagging // note: no tagging id
        tag_id: parseInt(k),
        taggable_type: "Art",
        actiontype: "create"
      });
    }
    console.log('FINAL CREATE FORMDATA============');
    console.log(formData);
    console.log('END CREATE FORMDATA============');
    action(formData);
    // end of submitCreate
  }

  handleSuccess(res) {
    window.scrollTo(0, 0);
    this.props.history.push(`/arts/${Object.keys(res)[0]}`);
  }

  firstLetterDown(string) {
    return string[0].toLowerCase().concat(string.slice(1));
  }

  firstLetterUp(string) {
    return string[0].toUpperCase().concat(string.slice(1));
  }

  handleCheckbox(e, medium, disabled) {
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
    if (this.props.formType === "Editing Artwork" && (!this.props.art.title)) {
      this.props.history.push(`/arts/${this.props.match.params.artId}`);
      // this.props.fetchArt(this.props.match.params.artId);
      return;
    }

    if (!this.props.medium || Object.keys(this.props.medium).length < 11) {
      this.props.fetchTags();
    }
    if (!this.props.medium) {
      this.props.fetchTags();
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.showModal('art-delete-warning');
  }

  render() {
    if (this.props.formType === "Editing Artwork"
    && (!this.props.art.title)) {
      return null;
    }

    let isEditing = false;
    if (this.props.formType === "Editing Artwork") {
      isEditing = true;
    }

    let { formType } = this.props;
    return (
      <div className="art-form-div">
        {this.props.modal === 'art-delete-warning' ? <ModalDeleteWarningContainer artId={this.props.match.params.artId} /> : null}
        <form onSubmit={this.handleSubmit.bind(this)} className="art-form">
          <h2>{formType}</h2>
          <h3>{this.state.title.length > 0 ? this.state.title : "Untitled"}</h3>
          <div className="form-section">
            <label><div className="form-section-header">Artwork Title</div>
              <div className="form-section-body"><input type="text" value={this.state.title} onChange={this.handleInput('title')} placeholder="What is your artwork called" className="form-input-text"/></div>
            </label>
          </div>
          {isEditing ? null :
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
                  <input type="file" multiple onChange={this.handleFiles}/>
                </label>
              </div>
            </div>
          }
          {isEditing ? null :
            <div className="form-section-body-files">
              {this.renderArtPanel()}
            </div>
          }
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
              <div className="form-label big">Medium</div>
              <div className="form-description">
                What mediums did you use to create this project? (Choose up to 3)
              </div>
              <div className="form-list">
                {!this.props.medium ? null : Object.values(this.props.medium).map((medium, i) =>
                  <MediumCheckbox
                    key={`medium-${i}`}
                    medium={medium}
                    handleCheckbox={this.handleCheckbox}
                    count={this.state.selectedMediums
                      ? Object.keys(this.state.selectedMediums).length
                      : 0} checked={Boolean(this.state.selectedMediums[medium.id])}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="form-section">
            <div className="form-section-header">Publishing Options</div>
            <div className="form-section-body">
              <button className={`form-submit publish ${(Object.keys(this.state.selectedMediums).length > 0) ? 'enabled' : 'disabled'}`}><BiRocket /> {formType === "Create New Artwork" ? "Publish" : "Commit Changes"}</button>
            </div>
          </div>
          {this.props.formType === "Editing Artwork" ?
            <div className="form-section">
              <div className="form-section-header">Danger Zone</div>
              <div className="form-section-body">
                <button className="button subtle" onClick={this.handleDelete}><BiTrash className="blue"/><div className="white">Delete Project</div></button>
              </div>
            </div>
          : null}
        </form>
      </div>
    )
  }
}

export default withRouter(ArtForm);