import React from "react";
import { FaRegThumbsUp, FaRegEye, FaRegComments } from "react-icons/fa";

export const StatsNumLikes = props => {
  let { likes, show } = props;
  // let count = likes ? Object.keys(likes).length : 0;
  if (likes === 0 && !show) {return null};
  return (
    <div className="art-stats-num-likes">
      {show ? <FaRegThumbsUp className="num-likes-icon inline-icon"/> : null}{likes} Likes
    </div>
  )
}

export const StatsNumViews = props => {
  let { views } = props;
  return (
    <div className="art-stats-num-views">
      <FaRegEye className="num-views-icon inline-icon"/>{views ? views.length : 0} Views
    </div>
  )
}

export const StatsNumComments = props => {
  let { comments } = props;
  return (
    <div className="art-stats-num-comments">
      <FaRegComments className="num-comments-icon inline-icon"/>{comments ? Object.keys(comments).length : 0} Comments
    </div>
  )
}


export const AllStats = props => {
  return (
    <div className="art-stats">
      {StatsNumLikes(props)}
      {StatsNumViews(props)}
      {StatsNumComments(props)}
    </div>
  )
}