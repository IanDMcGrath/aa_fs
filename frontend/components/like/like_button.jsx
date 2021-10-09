import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    // let currentLike = null;
    // for (let i=0; i<Object.values(props.likes).length && !currentLike; i++) { if (Object.values(props.likes)[i].likerId === props.currentUser) {currentLike = Object.values(props.likes)[i]}};
    // this.state = {currentLike: currentLike};
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    // let { likes, currentUser } = this.props;
    // console.log('is this art liked by current user?: ')
    // console.log(Object.values(likes).some(like => {return like.likerId === currentUser}));
  }

  handleLike(e) {
    let { currentUser, like} = this.props;
    e.stopPropagation();
    // console.log(`you ${Boolean(like) ? "unliked" : "liked"} ${this.props.likeableType}# ${this.props.likeableId}`);
    if (currentUser) {
      if (like) {
        this.props.deleteLike(like.id);
      } else {
        this.props.createLike({likerId: this.props.currentUser, likeableId: this.props.likeableId, likeableType: this.props.likeableType});
      }
    } else {
      this.props.uiToggleSignin({showSignin: true})
    }
  }

  renderSmallButton() {
    let { like, style } = this.props;
    let liked = Boolean(like);
    return (
      <button className={`inline-like-button ${liked ? "liked" : "unliked"}`} onClick={this.handleLike}>{liked ? <BsCheck /> : null}{liked ? "Liked" : "Like"}</button>
    )
  }

  renderBigButton() {
    let { like, style, likedObject } = this.props;
    let liked = Boolean(like);
    return (
      <button
        className={`details-panel-like-button button ${liked ? "liked" : "unliked"}`}
        onClick={this.handleLike}>
        {liked ? <BsCheck /> : <FaRegThumbsUp />}
        {liked ? "Liked" : "Like"}
      </button>
    )
  }

  render() {
    let { like, style } = this.props;
    let liked = Boolean(like);
    console.log(like);
    return (
      style === "small" ? this.renderSmallButton() : this.renderBigButton()
      );
  }
}

export default LikeButton;