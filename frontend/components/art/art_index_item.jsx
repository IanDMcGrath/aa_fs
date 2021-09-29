import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class ArtIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(`you clicked art: ${this.props.art.id}`)
  }

  render() {
    let { art } = this.props
    console.log(art.url)
    return (
      <Link to={`/arts/${art.id}`}>
      <div className="index-thumbnail">
        <img src={art.url} className="index-thumbnail" />
        <div className="index-thumbnail-details-backdrop">
        <div className="index-thumbnail-details" onClick={this.handleClick}>
          <div className="index-thumbnail-artist-avatar"></div>
          <div className="index-thumbnail-title-name-div">
            <h2 className="index-thumbnail-title">{art.title}</h2>
            <div className="index-thumbnail-name">xX_artist_username_Xx</div>
          </div>
        </div>
        </div>
      </div>
      </Link>
    )
  }
}

export default ArtIndexItem;