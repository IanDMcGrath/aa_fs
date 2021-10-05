import React from "react";
import { FaRegComments, FaRegThumbsUp } from "react-icons/fa";
import { timeSince } from "../../util/timestamp_util";
import CreateCommentFormContainer from "./create_comment_form_container";
import { MdClose } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';
import CommentItemContainer from "./comment_item_container";


class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showReply: false, replyId: null};
  }

  componentDidMount() {
    // this.props.fetchComments();
  }

  renderComments() {
    let {commentIds, users, commentableId, commentableType, uiToggleSignin, uiToggleReply, updateComment, deleteComment, commentType} = this.props;
    let numComments = commentIds ? commentIds.length : 0;
    // if (!numComments) {numComments = 0};
    // console.log(commentIds)
    return (
      <ul>
        {/* <h3><FaRegComments color="#00B2FF" className="comments-h3-icon"/>{numComments} {numComments === 1 ? "Comment" : "Comments"}</h3> */}
        {Object.values(commentIds).map(commentId =>
          <div key={commentId}>
            <CommentItemContainer key={commentId} commentId={commentId} showReplies={true} uiToggleSignin={uiToggleSignin} uiToggleReply={uiToggleReply} updateComment={updateComment} deleteComment={deleteComment} showCommentFormReply={commentId === this.state.replyId} commentableId={commentableId} commentableType={commentableType}/>
            {/* { !comment.replies ? null : Object.values(comment.replies).map(reply =>
            <div className="comment-indent">
            <CommentItemContainer key={reply.id} comment={reply} uiToggleSignin={uiToggleSignin} uiToggleReply={uiToggleReply} updateComment={updateComment} deleteComment={deleteComment} showCommentFormReply={reply.id === this.state.replyId}/>
            </div>
            )} */}
          </div>
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