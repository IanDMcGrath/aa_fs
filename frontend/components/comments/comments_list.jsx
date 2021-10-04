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



  showLikeCount(comment) {
    if (!comment.likes) {return ( null
    // <div className="comment-num-likes"></div>
    )}
    return (
    <div className="comment-num-likes">
      <FaRegThumbsUp className="num-likes-icon inline-icon" /> {comment.likes} {comment.likes !== 1 ? "Likes" : "Like"}
    </div>)
  }

  renderComments() {
    let {comments, users, commentableId, uiToggleSignin, uiToggleReply, updateComment, deleteComment} = this.props;
    let numComments = comments.length
    if (!numComments) {numComments = 0};
    return (
      <ul>
        <CreateCommentFormContainer commentableId={commentableId} parentId=""/>
        <h3><FaRegComments color="#00B2FF" className="comments-h3-icon"/>{numComments} {numComments === 1 ? "Comment" : "Comments"}</h3>
        {Object.values(comments).length <= 0 ? null : Object.values(comments).reverse().map(comment => <CommentItemContainer key={comment.id} comment={comment} uiToggleSignin={uiToggleSignin} uiToggleReply={uiToggleReply} updateComment={updateComment} deleteComment={deleteComment} showCommentFormReply={comment.id === this.state.replyId}/>)}
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