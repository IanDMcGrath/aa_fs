import React from "react";
import { MdClose } from 'react-icons/md';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody(e) {
    e.preventDefault();
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === "Post Comment") {this.props.action(this.state)} else {
    this.props.action(this.state)
    .then(() => {
      if (this.props.formType === "Post Comment") {this.setState({body: ""})};
      if (this.props.handleCancelUpdate) {this.props.handleCancelUpdate()};
    })}; // reset the body text on comment success
  }

  render() {
    let { formType } = this.props;
    if (!this.props.comment.commenterId) { return null };
    return (
      <form className="comment-form">
        <textarea value={this.state.body} onChange={this.updateBody} className="input text-area" placeholder="Share your feedback and comments!"/>
        <div className="comment-form-buttons">
          {this.state.body.length > 0 ? (<button className="comment-form-button comment-form-create button" onClick={this.handleSubmit} >{formType}</button>) : <div className="comment-form-button-div">{formType}</div>}
          {formType === "Update Comment" ? <button className="comment-form-button comment-form-update button" onClick={this.props.handleCancelUpdate}><MdClose /> Cancel </button> : null}
        </div>
          {formType === "Update Comment" ? <button className="comment-form-button comment-form-delete button" onClick={this.props.handleCancelUpdate}><MdClose /></button> : null}
      </form>
    )
  }
}

export default CommentForm;