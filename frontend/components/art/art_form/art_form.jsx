import React from "react";

class ArtForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.art, {artFile: null});
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({[field]: e.currentTarget.value});
  }

  handleFile(e) {
    this.setState({artFile: e.currentTarget.files})
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('art[artistId]', this.state.artistId)
    formData.append('art[title]', this.state.title);
    formData.append('art[description]', this.state.description);
    formData.append('art[artPanels]', this.state.artFile);
    $.ajax({
      url: "/api/arts",
      method:"POST",
      data: formData,
      contentType: false,
      processData: false
    }).then(res => console.log(res.message), res => console.log(res.responseJSON))
  }

  render() {
    let { formType } = this.props;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h2>formType</h2>
        <h3>{this.state.title.length > 0 ? this.state.title : "Untitled"}</h3>
        <label>Artwork Title
          <input type="text" value={this.state.title} onChange={this.handleInput('title')} />
        </label>
        <label> Upload media files
          <input type="file" multiple onChange={this.handleFile}/>
        </label>
        <label>Artwork Details
          <label>Artwork Description
            <textarea value={this.state.description} onChange={this.handleInput('description')} className="input text-area art" />
          </label>
        </label>
        <button className="button submit">{formType}</button>
      </form>
    )
  }
}

export default ArtForm;