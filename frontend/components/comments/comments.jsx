import React from "react";
import { FaRegComments, FaRegThumbsUp } from "react-icons/fa";
import { timeSince } from "../../util/timestamp_util";
import CreateCommentFormContainer from "./create_comment_form_container";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showReply: false, replyId: null};
  }

  componentDidMount() {
    // this.props.fetchComments();
  }

  handleLikeClick(e, id) {
    e.preventDefault();
    console.log(`you liked comment# ${id}`)
  }

  handleReplyClick(e, id) {
    e.preventDefault();
    console.log(`you are replying to comment# ${id}`)
    this.setState({showReply: true, replyId: id})
  }

  renderComments() {
    let {comments, users, commentableId} = this.props;
    let numComments = comments.length
    if (!numComments) {numComments = 0};
    return (
      <ul>
        <CreateCommentFormContainer commentableId={commentableId} parentId=""/>
        <h3><FaRegComments color="#00B2FF" className="comments-h3-icon"/>{numComments} {numComments === 1 ? "Comment" : "Comments"}</h3>
        {Object.values(comments).length <= 0 ? null : Object.values(comments).reverse().map(comment =>
          <li className="comment" key={`comment-${comment.id}`}>
            <div className="commenter-details">
              <img className="commenter-avatar" src={users[comment.commenterId].avatar}/>
              <div className="commenter-main">
                <div className="commenter-username">{users[comment.commenterId].username}</div>
                <div className="commenter-work">{users[comment.commenterId].work}</div>
                <div className="comment-body">{comment.body}</div>
                <div className="comment-footer">
                  <div className="comment-like-reply">
                    <div className="comment-like" onClick={(e) => this.handleLikeClick(e, comment.id)}>Like</div>
                    <div className="comment-num-likes"><FaRegThumbsUp className="num-likes-icon inline-icon" /> {comment.likes} {comment.likes !== 1 ? "Likes" : "Like"}</div>
                    <div className="comment-reply" onClick={(e) => this.handleReplyClick(e, comment.id)}>Reply</div>
                  </div>
                  <div className="comment-timestamps">
                    {comment.updatedAt !== comment.createdAt ? (<div className="comment-edited">edited</div>) : null}
                    <div className="comment-created">{timeSince(comment.updatedAt)}</div>
                  </div>
                </div>
              </div>
            </div>
            {this.state.showReply && this.state.replyId === comment.id ? <div className="comment-reply-textarea" ><CreateCommentFormContainer commentableId={commentableId} parentId={comment.id} /></div> : null}
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