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

  render() {
    let { isReplyList, comments, commentKeys, users, commentableId, commentableType, uiToggleSignin, uiToggleReply, updateComment, deleteComment, commentType } = this.props;
    // console.log(`comment-list ${this.props.parentId ? 'replies' : 'root'} ${this.props.parentId ? this.props.parentId : ''} rendered!`);
    // console.log('printing comments');
    // console.log(comments);
    // console.log('first comment: ...');
    // console.log(comments[Object.keys(commentKeys)[0]]);
    // let numComments = commentKeys ? Object.keys(commentKeys.length) : 0;
    // if (!numComments) {numComments = 0};
    // console.log(commentIds)
    // console.log("check commentKeys")
    // console.log(commentKeys);
    if (!commentKeys || Object.values(commentKeys).length <= 0) { return null; }
    return (
      <ul>
        {/* <h3><FaRegComments color="#00B2FF" className="comments-h3-icon"/>{numComments} {numComments === 1 ? "Comment" : "Comments"}</h3> */}
        {Object.keys(commentKeys).map(commentKey =>
          <div key={commentKey}>
            <CommentItemContainer key={commentKey} isReply={isReplyList} comment={comments[commentKey]} showReplies={true} uiToggleSignin={uiToggleSignin} uiToggleReply={uiToggleReply} updateComment={updateComment} deleteComment={deleteComment} showCommentFormReply={commentKey === this.state.replyId} commentableId={commentableId} commentableType={commentableType} />
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
}

export default Comments;