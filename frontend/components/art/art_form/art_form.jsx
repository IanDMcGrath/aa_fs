import React from "react";

class ArtForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.art, {artfiles: null});
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleInput(field) {
    console.log(this.state);
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  handleFile(e) {
    this.setState({artfiles: e.currentTarget.files[0]})
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
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

  render() {
    let { formType } = this.props;
    return (
      <div className="art-form-div">
        <form onSubmit={this.handleSubmit.bind(this)} className="art-form">
          <h2>{formType}</h2>
          <h3>{this.state.title.length > 0 ? this.state.title : "Untitled"}</h3>
          <label><div className="label-artwork-title">Artwork Title</div>
            <div className="artwork-title-container"><input type="text" value={this.state.title} onChange={this.handleInput('title')} placeholder="What is your artwork called" className="artwork-title-input"/></div>
          </label>
          <label className="label-artwork-files"> Upload media files
            <input type="file" multiple onChange={this.handleFile}/>
          </label>
          <label ><div className="label-artwork-details">Artwork Details</div>
            <label ><div className="label-artwork-description">Artwork Description</div>
              <textarea value={this.state.description} onChange={this.handleInput('description')} className="input text-area art" />
            </label>
          </label>
          <button className="button submit">{formType}</button>
        </form>
      </div>
    )
  }
}

export default ArtForm;