import React from "react";
import { MdClose } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';
import { timeSince } from "../../util/timestamp_util";
import CreateCommentFormContainer from "./create_comment_form_container";


class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
    this.handleReplyClick = this.handleReplyClick.bind(this);
  }

  showLikeCount(comment) {
    if (!comment.likes) {return ( null
    // <div className="comment-num-likes"></div>
    )}
    return (
    <div className="comment-num-likes">
      <FaRegThumbsUp className="num-likes-icon inline-icon" /> {comment.likes} {comment.likes !== 1 ? "Likes" : "Like"}
    </div>)
  }

  handleLikeClick(e, id) {
    e.preventDefault();
    if (this.props.ownComment) {
    console.log(`you liked comment# ${id}`);
    } else {
      this.props.uiToggleSignin({showSignin: true});
    }
  }

  handleReplyClick(e, id) {
    e.preventDefault();
    if (this.props.ownComment) {
      console.log(`you are replying to comment# ${id}`)
      // this.setState({showReply: true, replyId: id})
      this.props.uiToggleReply({showReply: true, commentId: id})
    } else {
      this.props.uiToggleSignin({showSignin: true});
    }
  }

  deleteComment() {
    console.log('hello')
    this.props.deleteComment(this.props.comment.id)
  }

  renderCommentContents() {
    let { user, comment, ownComment, showReply, showCommentFormReply } = this.props;
    return (
      <div className="commenter-main">
        <div className="comment-header">
          <div className="commenter-username">{user.username}</div>
          <div className="comment-edit-delete">
            {ownComment ? <button className="comment-edit-button" onClick={() => console.log('stop editting me')}><BsPencil /></button> : null}
            {ownComment ? <button className="comment-delete-button" onClick={this.deleteComment}><MdClose /></button> : null}</div>
        </div>
        <div className="commenter-work">{user.work}</div>
        <div className="comment-body">{comment.body}</div>
        {this.renderCommentFooter()}
      </div>
    )
  }

  renderCommentFooter() {
    let { user, comment, ownComment, showReply, showCommentFormReply } = this.props;
    return (
      <div className="comment-footer">
        <div className="comment-like-reply">
          <div className="comment-like" onClick={(e) => this.handleLikeClick(e, comment.id)}>Like</div>
          {this.showLikeCount(comment)}
          <div className="comment-reply" onClick={(e) => this.handleReplyClick(e, comment.id)}>Reply</div>
        </div>
        <div className="comment-timestamps">
          {comment.updatedAt !== comment.createdAt ? (<div className="comment-edited">edited</div>) : null}
          <div className="comment-created">{timeSince(comment.updatedAt)}</div>
        </div>
      </div>
    )
  }

  render() {
    let { user, comment, ownComment, showReply, showCommentFormReply } = this.props;
    console.log(showReply);
    console.log(showCommentFormReply)
    return (
      <li className="comment">
        <div className="commenter-details">
          <img className="commenter-avatar" src={user.avatar}/>
          {showEdit ? <UpdateCommentFormContainer comment={comment}/> : this.renderCommentContents()}
        </div>
        {showReply ? <div className="comment-reply-textarea" ><CreateCommentFormContainer commentableId={comment.commentableId} parentId={comment.id} /></div> : null}
      </li>
    )
  }
}

export default CommentItem;