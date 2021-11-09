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
    if (!Object.keys(this.state.selectedMediums).length > 0) {
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
    const { artfiles } = this.state;
    // const selectedMediums = Object.values(this.state.selectedMediums);

    // for (let i = 0; i < artfiles.length; i++) {
    //   if (typeof artfiles[i] !== 'string') {
    //     formData.append("art[artpanels][]", artfiles[i]);
    //   }
    // }

    // console.log(this.state);
    $.ajax({
      url: `/api/arts/${this.state.id}`,
      method: "PATCH",
      data: formData,
      contentType: false,
      processData: false
    }).then(res => {
      // return null;
      // console.log('this is the response:');
      // console.log(res);
      // let taggings = Object.values(this.state.selectedMediums).map(medium => ({tag_id: medium.id, taggable_id: Object.keys(res)[0], taggable_type: "Art"}));
      // console.log(taggings);
      // this.props.createTaggings(taggings);
      let medium = Object.values(this.state.selectedMediums)[0];
      let tagging = { tag_id: medium.id };
      console.log('newprintingfoo')
      console.log(medium);
      $.ajax({
        url: `/api/taggings/${Object.values(this.state.tags.medium)[0].taggingId}`,
        method: "PATCH",
        data: { tagging },
      }).then(() => {
        if (Object.values(this.state.selectedMediums).length < 2) {
          return null;
        } else { this.handleSuccess(res); }
        let medium = Object.values(this.state.selectedMediums)[1];
        let tagging = { tag_id: medium.id };
        // console.log(tagging);
        $.ajax({
          url: `/api/taggings/${Object.values(this.state.tags.medium)[1].taggingId}`,
          method: "PATCH",
          data: { tagging },
        }).then(() => {
          if (Object.values(this.state.selectedMediums).length < 3) {
            return null;
          } else { this.handleSuccess(res) }
          let medium = Object.values(this.state.selectedMediums)[2];
          let tagging = { tag_id: medium.id };
          // console.log(tagging);
          $.ajax({
            url: `/api/taggings/${Object.values(this.state.tags.medium)[2].taggingId}`,
            method: "PATCH",
            data: { tagging },
          }).then(() => (this.handleSuccess(res)));
        });
      });
    });
  }

  submitCreate(formData) {
    let { artfiles } = this.state;
    artfiles = Object.values(artfiles);
    // const selectedMediums = Object.values(this.state.selectedMediums);
    // Object.values(this.state.artfiles).forEach(artfile =>
    //   formData.append('art[artPanels]', artfile)
    // );
    // formData.append('art[artpanels]', this.state.artfiles);

    // console.log('ART FILE OBJECT...');
    // console.log(artfiles[0]);
    // console.log('END OF ARTFILE.');

    // return null;

    for (let i = 0; i < artfiles.length; i++) {
      formData.append("art[artpanels][]", artfiles[i]);
    }

    console.log('SUBMITTED... ARTPANEL...')
    console.log(formData.get("art[artpanels][]"));

    // return null;

    // console.log(formData.get('art[artpanels][]'));
    // for (let i = 0; i < artfiles.length; i++) {
    //   // formData.append("art[tags][]", { tag: { tag_id: selectedMediums[i].id, taggable_tpe: "Art" } });
    //   formData.append(`tagging[tags][${i}][tag_id]`, selectedMediums[i].id);
    //   formData.append(`tagging[tags][${i}][taggable_type]`, 'Art');
    // }

    // console.log("FORM DATA OBJECT...");
    // console.log(formData.getAll('art[artpanels][]'));
    // console.log(formData.getAll('art[tags][1][taggable_type]'));
    // console.log('END OF FORMDATA');
    $.ajax({
      url: "/api/arts",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false
    }).then(res => {
      // return null;
      // console.log('this is the response:');
      // console.log(res);
      // let taggings = Object.values(this.state.selectedMediums).map(medium => ({tag_id: medium.id, taggable_id: Object.keys(res)[0], taggable_type: "Art"}));
      // console.log(taggings);
      // this.props.createTaggings(taggings);
      let medium = Object.values(this.state.selectedMediums)[0];
      let tagging = {tag_id: medium.id, taggable_id: Object.keys(res)[0], taggable_type: "Art"};
      // console.log(tagging);
      $.ajax({
        url: "/api/taggings",
        method: "POST",
        data: { tagging },
      }).then(() => {
        if (Object.values(this.state.selectedMediums).length < 2) {
          return null;
        } else {this.handleSuccess(res);}
        let medium = Object.values(this.state.selectedMediums)[1];
        let tagging = {tag_id: medium.id, taggable_id: Object.keys(res)[0], taggable_type: "Art"};
        // console.log(tagging);
        $.ajax({
          url: "/api/taggings",
          method: "POST",
          data: { tagging },
        }).then(() => {
          if (Object.values(this.state.selectedMediums).length < 3) {
            return null;
          } else {this.handleSuccess(res)}
          let medium = Object.values(this.state.selectedMediums)[2];
          let tagging = {tag_id: medium.id, taggable_id: Object.keys(res)[0], taggable_type: "Art"};
          // console.log(tagging);
          $.ajax({
            url: "/api/taggings",
            method: "POST",
            data: { tagging },
          }).then(() => (this.handleSuccess(res)));
        });
      });
    });
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
    if (this.props.formType === "Editing Artwork" && (!this.props.art.title)) {
      this.props.history.push(`/arts/${this.props.match.params.artId}`);
      // this.props.fetchArt(this.props.match.params.artId);
      return;
    }
    // if (this.props.formType === "Editing Artwork") {
    //   console.log('HERE ARE YOUR ARTFILES AS BLOBS:...');
    //   console.log(this.props.art.artfiles);
    //   console.log('LETS TURN THEM INTO FILES...');
    //   // const urlToObject = (image) => {
    //   //   // const response = await fetch(image);
    //   //   // const blob = await response.blob();
    //   //   // const file = new File([blob], 'image.jpg', {type: blob.type});
    //   //   // console.log(file);
    //   //   const file = new File([image], 'image.jpg', { type: image.type });
    //   //   // console.log(file);
    //   //   return file;

    //   //   // fetchch(image)
    //   //   // .then((res) => {
    //   //   //   return res.blob()
    //   //   // })
    //   //   // .then((blob) => {
    //   //   //   console.log(blob);
    //   //   // })
    //   // }
    //   const urlToObject = async (image) => {
    //     // const file = new File([image], 'image.jpg', { type: image.type });
    //     // return file;
    //     $.ajax({
    //       url: image,
    //       method: "GET"
    //     }).then(res => res.blob()).then(blob => {
    //       let objectURL = URL.createObjectURL(blob);
    //       return objectURL;
    //     })
    //   }
    //   let newArtfiles = {};
    //   Object.values(this.props.art.artfiles).forEach((artfile, i) => {
    //     let newArtfile = urlToObject(artfile);
    //     newArtfiles[i] = newArtfile;
    //   });
    //   console.log('ART FILES...');
    //   console.log(newArtfiles);
    //   this.setState({ artfiles: Object.assign({}, newArtfiles) });
    // }
    if (!this.props.medium) {
      this.props.fetchTags();
    }
  }

  handleDelete(e) {
    e.preventDefault();
    // this.props.deleteArt(this.props.art.id);
    // this.props.history.push('/');
    this.props.showModal('art-delete-warning');
  }

  render() {
    // console.log(this.state);
    // console.log(this.props.formType);
    // console.log(this.state);
    if (this.props.formType === "Editing Artwork" && (!this.props.art.title)) {
      // console.log('does not have art');
      return null;
    }
    let isEditing = false;
    if (this.props.formType === "Editing Artwork") {
      isEditing = true;
    }
    // console.log('has art');
    // return null;
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
                  <MediumCheckbox key={`medium-${i}`} medium={medium} handleCheckbox={this.handleCheckbox} count={this.state.selectedMediums ? Object.keys(this.state.selectedMediums).length : 0} checked={Boolean(this.state.selectedMediums[medium.id])}/>
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