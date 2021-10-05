import React from "react";

class likeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
  }

  render() {
    return (
      <button className="details-panel-like-button button" onClick={this.handleLike}><FaRegThumbsUp />Like</button>
    )
  }
}

export default likeButton