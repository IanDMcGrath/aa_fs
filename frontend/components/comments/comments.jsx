import React from "react";
import { FaRegComments } from "react-icons/fa";
import { timeSince } from "../../util/timestamp_util";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  renderComments() {
    let {comments} = this.props;
    return (
      <ul>
        <h3><FaRegComments color="#00B2FF"/>{comments.length} Comments</h3>
        {comments.map(comment =>
          <li className="comment">
            <div className="commenter-details">
              <img className="commenter-avatar" src={comment.commenter.avatar}/>
              <div className="commenter-main">
                <div className="commenter-username">{comment.commenter.username}</div>
                <div className="commenter-work">{comment.commenter.work}</div>
                <div className="comment-body">{comment.body}</div>
                <div className="comment-timestamps">
                  {comment.updated_at === comment.created_at ? (<div className="comment-edited">edited</div>) : null}
                  <div className="comment-created">{timeSince(comment.updated_at)}</div>
                </div>
              </div>
            </div>
          </li>
        )}
      </ul>
    )
  }

  render() {
    let { comments } = this.props;
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <p>-----------------------</p>
        <p>| Create Comment Form |</p>
        <p>-----------------------</p>
        {comments.length > 0 ? this.renderComments() : null}
      </div>
    )
  }
}

export default Comments;