import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    let currentLike = null;
    for (let i=0; i<Object.values(props.likes).length && !currentLike; i++) { if (Object.values(props.likes)[i].likerId === props.currentUser) {currentLike = Object.values(props.likes)[i]}};
    this.state = {currentLike: currentLike};
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    let { likes, currentUser } = this.props;
    console.log('is this art liked by current user?: ')
    console.log(Object.values(likes).some(like => {return like.likerId === currentUser}));
  }

  handleLike(e) {
    let { currentUser, likes} = this.props;
    e.stopPropagation();
    console.log(`you ${Boolean(this.state['currentLike']) ? "unliked" : "liked"} ${this.props.likeableType}# ${this.props.likeableId}`);
    if (currentUser) {
      if (Boolean(this.state['currentLike'])) {
        this.props.deleteLike(this.state.currentLike.id)
        .then(this.setState({currentLike: null}));
      } else {
        this.props.createLike({likerId: this.props.currentUser, likeableId: this.props.likeableId, likeableType: this.props.likeableType})
        .then(like => {console.log(like);this.setState({currentLike: like})});
      }
    } else {
      this.props.uiToggleSignin({showSignin: true})
    }
  }

  render() {
    let liked = Boolean(this.state.currentLike);
    return (
      // <div className="details-panel-buttons">
      <button className={`details-panel-like-button button ${liked ? "liked" : "unliked"}`} onClick={this.handleLike}>{liked ? <BsCheck /> : <FaRegThumbsUp />}{liked ? "Liked" : "Like"}</button>
      // </div>
    )
  }
}

export default LikeButton;