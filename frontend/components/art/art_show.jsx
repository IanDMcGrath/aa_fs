import React from "react";
import { FiUserPlus } from "react-icons/fi";
import {FaRegThumbsUp, FaRegEye, FaRegComments } from "react-icons/fa";
import CommentsContainer from "../comments/comments_container";
import { timeSince } from "../../util/timestamp_util";
import { ArtStats } from "../widgets/art_stats";

class ArtShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // console.log("i mounted")
    if (!this.props.art) {
      this.props.fetchArt(this.props.match.params.artId);
    }
  }

  renderArtpanels() {
    let { art } = this.props;
    return (
      <ul>
        {art.artpanels.map((artpanel, i) => <li className="artpanel-div" key={i}><img src={artpanel} key={`artpanel-${i}`} className="artpanel"/></li>)}
      </ul>
    )
  }

  renderDetailsPanel() {
    let { art, comments} = this.props;
    console.log(this.props);
    return (
      <div className="details-panel" onClick={this.handleClick}>
        <div className="details-panel-artist-div">
          <img src={art.artist.avatar} className="details-panel-artist-avatar" />
          <div className="details-panel-artist-details">
            <h2 className="details-panel-artist-name">{art.artist.username}</h2>
            <div className="details-panel-artist-association">{art.artist.work}</div>
          </div>
        </div>
        <div className="details-panel-buttons">
          <button className="details-panel-like-button button"><FaRegThumbsUp />  Like</button>
          <button className="details-panel-follow-button button"><FiUserPlus />  Follow</button>
        </div>
        <div>
          <h2 className="details-panel-art-title">{art.title}</h2>
          <div className="details-panel-art-description">{art.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusamus libero tenetur consequatur reprehenderit dolorem maxime et veritatis molestiae rerum perspiciatis dolore dignissimos magni alias aperiam fugiat quam saepe architecto, culpa temporibus vel consectetur eaque quaerat? Natus eius tempore voluptate, officiis, earum blanditiis dolorum, culpa ipsum id porro ducimus eaque? </div>
          <div className="details-panel-art-post-time">Posted {timeSince(art.created_at)}</div>
          <ArtStats comments={comments}/>
          <h3 className="details-panel-softwares-used">Software Used</h3>
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
    let { art, comments } = this.props;
    // console.log(this.props);

    if (!this.props.art) {
      this.props.fetchArt(this.props.match.params.artId);
    }

    return (
      <div className="art-show-container">
        <div className="art-comments-div">
          <div className="art-div">{art ? this.renderArtpanels() : "Art Panels"}</div>
          <div className="comments-div">{art ? <CommentsContainer comments={comments} commentableId={art.id}/> : "Comments Panel"}</div>
        </div>
        <div className="details-div">{art ? this.renderDetailsPanel() : "Details Panel"}</div>
      </div>
    )
  }
}

export default ArtShow