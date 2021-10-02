import React from "react";

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
    this.props.action(this.state);
  }

  render() {
    let { formType } = this.props;
    if (!this.props.comment.commenter_id) { return null };
    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        <textarea value={this.state.body} onChange={this.updateBody} className="input text-area" placeholder="Share your feedback and comments!"/>
        {this.state.body.length > 0 ? (<button className="comment-form-button button">{formType}</button>) : <div className="comment-form-button-div">{formType}</div>}
      </form>
    )
  }
}

export default CommentForm;