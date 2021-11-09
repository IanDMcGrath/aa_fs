import React from "react";
import { MdClose } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';
import { timeSince } from "../../util/timestamp_util";
import CreateCommentFormContainer from "./create_comment_form_container";
import UpdateCommentFormContainer from "./update_comment_form_container";
import CommentItemContainer from "./comment_item_container";
import CommentListContainer from "./comments_list_container";
import LikeButtonContainer from "../like/like_button_container";
import { StatsNumLikes } from "../widgets/stats";
import { withRouter } from "react-router";

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showUpdateForm: false};
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.handleUpdateComment = this.handleUpdateComment.bind(this);
    this.handleReplyClick = this.handleReplyClick.bind(this);
    this.handleCancelUpdate = this.handleCancelUpdate.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.replies && Object.keys(nextProps.replies).length !== Object.keys(this.props.replies).length) {
  //     return true;
  //   }
  //   return true;
  // }

  showLikeCount(comment) {
    if (!comment.likes) {return ( null
    // <div className="comment-num-likes"></div>
    )}
    return (
      <div className="comment-num-likes">
        <FaRegThumbsUp className="num-likes-icon inline-icon" /> {comment.likes} {comment.likes !== 1 ? "Likes" : "Like"}
      </div>
    )
  }

  handleLikeClick(e, id) {
    e.preventDefault();
    if (this.props.isOwnComment) {
    // console.log(`you liked comment# ${id}`);
    } else {
      this.props.uiToggleSignin({showSignin: true});
    }
  }

  handleReplyClick(e, id) {
    e.preventDefault();
    if (this.props.isSignedIn) {
      // console.log(`you are replying to comment# ${id}`)
      // this.setState({showReply: true, replyId: id})
      this.props.uiToggleReply({showReply: true, commentId: id})
    } else {
      this.props.uiToggleSignin({showSignin: true});
    }
  }

  handleUpdateComment() {
    this.setState({showUpdateForm: true})
  }

  handleCancelUpdate() {
    return () => {this.setState({showUpdateForm: false})}
  }

  handleDeleteComment() {
    this.props.deleteComment(this.props.comment.id);
  }

  renderCommentContents() {
    let { user, comment, isOwnComment, showReply, showCommentFormReply } = this.props;
    return (
      <div className="commenter-main">
        <div className="comment-header">
          <div className="commenter-username" onClick={() => this.props.history.push(`/users/${user.id}`)}>{user.username}</div>
          <div className="comment-edit-delete">
            {isOwnComment ? <button className="comment-edit-buttons" onClick={this.handleUpdateComment}><BsPencil /></button> : null}
            {isOwnComment ? <button className="comment-edit-buttons" onClick={this.handleDeleteComment}><MdClose /></button> : null}</div>
        </div>
        <div className="commenter-work">{user.work}</div>
        <div className="comment-body">{comment.body}</div>
        {this.renderCommentFooter()}
      </div>
    )
  }

  renderCommentFooter() {
    let { user, comment, isOwnComment, showReply, showCommentFormReply } = this.props;
    return (
      <div className="comment-footer">
        <div className="comment-like-reply">
          {/* <LikeButtonContainer style={"small"} likeableId={comment.id} likeableType={"Comment"}/>
          <StatsNumLikes likes={0}/> */}
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
    let { user, comment, replies, isOwnComment, showReply, showReplies, showCommentFormReply, commentableId, commentableType } = this.props;
    if (!comment) {return null};
    // console.log(`comment: ${comment.id} has rendered!`);
    let { showUpdateForm } = this.state;
    // let {uiToggleSignin} = this.props;
    let {uiToggleSignin, uiToggleReply, updateComment, deleteComment } = this.props;
    let style = {'marginLeft': '2.1rem', 'paddingLeft': '1rem', 'borderLeft': 'solid 0.1rem var(--grey2)'}
    // console.log('replies')
    // console.log(replies)
  return (
      <li className="comment">
        <div className="commenter-details">
          <img className="commenter-avatar" src={user.avatar}/>
          {showUpdateForm ? <UpdateCommentFormContainer comment={comment} handleCancelUpdate={this.handleCancelUpdate()}/> : this.renderCommentContents()}
        </div>
        {showReply ? <div className="comment-reply-textarea"><CreateCommentFormContainer parentId={comment.id} commentableId={commentableId} commentableType={commentableType} /></div> : null}
        {!comment.replies || Object.keys(comment.replies).length <= 0 ? null : <div className="reply-list" style={style}><CommentListContainer isReplyList={comment.parentId} parentId={comment.id} commentIds={comment.replies} commentableId={commentableId} commentableType={commentableType} commentType="Comment" /></div>}
      </li>
    )
  }
}

export default withRouter(CommentItem);