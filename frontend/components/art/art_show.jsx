import React from "react";
import { FiUserPlus } from "react-icons/fi";
import {FaRegThumbsUp, FaRegEye, FaRegComments } from "react-icons/fa";

class ArtShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // console.log("i mounted")
    this.props.fetchArt(this.props.match.params.artId);
  }

  renderArtpanels() {
    let { art } = this.props;
    return (
      <div>
        {art.artpanels.map((artpanel, i) => <img src={artpanel} key={`artpanel-${i}`} className="artpanel"/>)}
      </div>
    )
  }

  renderDetailsPanel() {
    let { art } = this.props;
    return (
      <div className="details-panel" onClick={this.handleClick}>
        <div className="details-panel-artist-div">
          <img src={art.artist.avatar} className="details-panel-artist-avatar" />
          <div className="details-panel-artist-details">
            <h2 className="details-panel-artist-name">{art.artist.username}</h2>
            <div className="details-panel-artist-association">{art.artist.work}</div>
            <button className="details-panel-follow-button button"><FiUserPlus />Follow</button>
            <button className="details-panel-like-button button"><FaRegThumbsUp />Like</button>
          </div>
        </div>
        <div>
          <h2 className="details-panel-art-title">{art.title}</h2>
          <div className="details-panel-art-description">{art.description}</div>
          <div className="details-panel-art-post-time">{art.created_at}</div>
          <div className="details-panel-likes-views-comments"><FaRegThumbsUp />numLikes <FaRegEye />numViews <FaRegComments />numComments</div>
          <div className="details-panel-softwares">
            <div>3DS Max</div>
            <div>Substance Painter</div>
            <div>Substance Designer</div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    // console.log("i rendered");
    let { art } = this.props;
    // console.log(this.props);

    if (!this.props.art) {
      this.props.fetchArt(this.props.match.params.artId);
    }

    return (
      <div className="art-show-container">
        <div className="art-comments-div">
          <div className="art-div">{art ? this.renderArtpanels() : "Art Panels"}</div>
          <div className="comments-div">{art ? "Comments Panel" : "Comments Panel"}</div>
        </div>
        <div className="details-div">{art ? this.renderDetailsPanel() : "Details Panel"}</div>
      </div>
    )
  }
}

export default ArtShow