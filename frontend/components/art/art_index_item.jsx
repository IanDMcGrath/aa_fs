import React from "react";
import { Redirect, withRouter } from "react-router";
import { Link } from "react-router-dom";

class ArtIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    window.scrollTo(0,0);
    e.stopPropagation();
    e.preventDefault();
    this.props.history.push(`/arts/${this.props.art.id}`);
  }

  render() {
    let { art } = this.props;
    // console.log(art.artpanels[0])
    return (
      <div className="index-thumbnail">
        <img src={art.artpanels[0]} className="index-thumbnail" />
        <div className="index-thumbnail-details-backdrop" onClick={this.handleClick}>
        <div className="index-thumbnail-details">
          <div className="avatar-cover"><img src={art.artist.avatar} className="index-thumbnail-artist-avatar" /></div>
          <div className="index-thumbnail-title-name-div">
            <h2 className="index-thumbnail-title">{art.title}</h2>
            <div className="index-thumbnail-name">{art.artist.username}</div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ArtIndexItem);