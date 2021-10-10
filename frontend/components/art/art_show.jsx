import React from "react";
import { FiUserPlus } from "react-icons/fi";
import {FaRegThumbsUp, FaRegEye, FaRegComments } from "react-icons/fa";
import CommentsListContainer from "../comments/comments_list_container";
import { timeSince } from "../../util/timestamp_util";
import { AllStats, StatsNumComments } from "../widgets/stats";
import CreateCommentFormContainer from "../comments/create_comment_form_container";
import LikeButtonContainer from "../like/like_button_container";
import { userIcon1 } from "../../util/images_user_icons";
import userIcon from '/public/assets/artcoag.png';

class ArtShow extends React.Component {
  constructor(props) {
    super(props)

    // this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    // console.log("i mounted")
    if (!this.props.art) {
      this.props.fetchArt(this.props.match.params.artId);
    }
  }

  renderArtpanels() {
    let { art } = this.props;
    if (!art.artpanels) {return null};
    return (
      <ul>
        {art.artpanels.map((artpanel, i) => <li className="artpanel-div" key={i}><img src={artpanel} key={`artpanel-${i}`} className="artpanel"/></li>)}
      </ul>
    )
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   let np = Object.assign({}, nextProps);
  //   let tp = Object.assign({}, this.props);
  //   delete np.likes;
  //   delete tp.likes;
  //   let result = JSON.stringify(np) === JSON.stringify(tp);
  //   return !result;
  // }

  // handleLike(e) {
  //   let { art, currentUser, likes} = this.props;
  //   e.stopPropagation();
  //   console.log(`you liked art# ${this.props.art.id}`);
  //   if (currentUser) {
  //     if (Object.values(likes).some(like => {return like.likerId === currentUser})) {
  //       this.props.deleteLike(Object.values(likes) => (like => {return like.likerId === currentUser}));
  //     } else {
  //       this.props.createLike({likerId: this.props.currentUser, likeableId: this.props.art.id, likeableType: "Art"})
  //     }
  //   } else {
  //     this.props.uiToggleSignin({showSignin: true})
  //   }
  // }

  renderDetailsPanel() {
    let { art, comments} = this.props;
    let likes = art.likes
    // console.log(likes)
    return (
      <div className="details-panel" onClick={this.handleClick}>
        <div className="details-panel-artist-div">
          {console.log('load art show user icon')}
          <img src={require('/public/assets/artcoag.png')} className="details-panel-artist-avatar" />
          <div className="details-panel-artist-details">
            <h2 className="details-panel-artist-name">{art.artist.username}</h2>
            <div className="details-panel-artist-association">{art.artist.work}</div>
          </div>
        </div>
        <div className="details-panel-buttons">
          <LikeButtonContainer style={"big"} likeableId={art.id} likeableType={"Art"}/>
          <button className="details-panel-follow-button button"><FiUserPlus />  Follow</button>
        </div>
        <div>
          <h2 className="details-panel-art-title">{art.title}</h2>
          <div className="details-panel-art-description">{art.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusamus libero tenetur consequatur reprehenderit dolorem maxime et veritatis molestiae rerum perspiciatis dolore dignissimos magni alias aperiam fugiat quam saepe architecto, culpa temporibus vel consectetur eaque quaerat? Natus eius tempore voluptate, officiis, earum blanditiis dolorum, culpa ipsum id porro ducimus eaque? </div>
          <div className="details-panel-art-post-time">Posted {timeSince(art.createdAt)}</div>
          <AllStats comments={comments} views={0} likes={likes} show={true}/>
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
    console.log('ArtShow has re-rendered!');
    if (!this.props.art) {
      this.props.fetchArt(this.props.match.params.artId);
    }

    return (
      <div className="art-show-container">
        <div className="art-comments-div">
          <div className="art-div">{art ? this.renderArtpanels() : "Art Panels"}</div>
          <div className="comments-div">
            {art ? <CreateCommentFormContainer commentableId={art.id} commentableType={"Art"}/> : null }
            {art ? <StatsNumComments comments={comments} /> : null}
            {art ? <CommentsListContainer isReplyList={false} commentIds={null} parentId={null} commentableId={art.id} commentableType="Art" commentType="Art" /> : "Comments Panel"}
          </div>
        </div>
        <div className="details-div">{art ? this.renderDetailsPanel() : "Details Panel"}</div>
      </div>
    )
  }
}

export default ArtShow