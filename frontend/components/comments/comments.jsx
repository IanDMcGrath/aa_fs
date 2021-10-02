import React from "react";
import { FaRegComments } from "react-icons/fa";
import { timeSince } from "../../util/timestamp_util";
import CreateCommentFormContainer from "./create_comment_form_container";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchComments();
  }

  renderComments() {
    let {comments, postId} = this.props;
    let numComments = comments.length
    if (!numComments) {numComments = 0};
    return (
      <ul>
        <CreateCommentFormContainer postId={postId}/>
        <h3><FaRegComments color="#00B2FF" className="comments-h3-icon"/>{numComments} {numComments === 1 ? "Comment" : "Comments"}</h3>
        {Object.values(comments).length <= 0 ? null : Object.values(comments).reverse().map(comment =>
          <li className="comment" key={`comment-${comment.id}`}>
            <div className="commenter-details">
              <img className="commenter-avatar" src={comment.commenter.avatar}/>
              <div className="commenter-main">
                <div className="commenter-username">{comment.commenter.username}</div>
                <div className="commenter-work">{comment.commenter.work}</div>
                <div className="comment-body">{comment.body}</div>
                <div className="comment-timestamps">
                  {comment.updatedAt !== comment.createdAt ? (<div className="comment-edited">edited</div>) : null}
                  <div className="comment-created">{timeSince(comment.updatedAt)}</div>
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
    return (
      <div className="comments-div-inner">
        {this.renderComments()}
      </div>
    )
  }
}

export default Comments;