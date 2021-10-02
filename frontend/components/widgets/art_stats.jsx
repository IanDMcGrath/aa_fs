import React from "react";
import { FaRegThumbsUp, FaRegEye, FaRegComments } from "react-icons/fa";

export const ArtStats = props => {
  const numLikes = () => {
    let { likes } = props;
    return (
      <div className="art-stats-num-likes">
        <FaRegThumbsUp className="num-likes-icon inline-icon"/>{likes ? likes.length : 0} Likes
      </div>
    )
  }

  const numViews = () => {
    let { views } = props;
    return (
      <div className="art-stats-num-views">
        <FaRegEye className="num-views-icon inline-icon"/>{views ? views.length : 0} Views
      </div>
    )
  }

  const numComments = () => {
    let { comments } = props;
    return (
      <div className="art-stats-num-comments">
        <FaRegComments className="num-comments-icon inline-icon"/>{comments ? Object.keys(comments).length : 0} Comments
      </div>
    )
  }
  return (
    <div className="art-stats">
      {numLikes()}
      {numViews()}
      {numComments()}
    </div>
  )
}