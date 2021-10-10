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
    // console.log(`you clicked art: ${this.props.art.id}`)
    // increment views here ?
  }

  render() {
    let { art } = this.props
    // console.log(art.artpanels[0])
    return (
      <Link to={`/arts/${art.id}`}>
      <div className="index-thumbnail">
        <img src={art.artpanels[0]} className="index-thumbnail" />
        <div className="index-thumbnail-details-backdrop">
        <div className="index-thumbnail-details" onClick={this.handleClick}>
          <img src={art.artist.avatar} className="index-thumbnail-artist-avatar" />
          <div className="index-thumbnail-title-name-div">
            <h2 className="index-thumbnail-title">{art.title}</h2>
            <div className="index-thumbnail-name">{art.artist.username}</div>
          </div>
        </div>
        </div>
      </div>
      </Link>
    )
  }
}

export default ArtIndexItem;