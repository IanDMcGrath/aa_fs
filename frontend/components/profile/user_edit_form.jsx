import React from "react";
import regeneratorRuntime from "regenerator-runtime";
import { BiRocket } from "react-icons/bi";

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleAvatarFile = this.handleAvatarFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.tryNotOwnerRedirect = this.tryNotOwnerRedirect.bind(this);
  }

  componentDidMount() {
    if (!this.props.user) {
      this.props.fetchUser(this.props.match.params.userId);
    }
    this.tryNotOwnerRedirect();
  }

  componentDidUpdate(prevProps, prevState) {
    this.tryNotOwnerRedirect();
  }

  tryNotOwnerRedirect() {
    if (!this.props.isOwner) {
      this.props.history.push(`/users/${this.props.currentUser}`);
    }
  }

  handleAvatarFile(e) {
    this.setState({ avatar: e.currentTarget.files[0], didChangeAvatar: true });
  }

  handleSubmit(e) {
    let { id, username, work, avatar } = this.state;
    const { receiveUser, receiveUserErrors } = this.props;

    if (!work) {
      work = '';
    }

    const formData = new FormData();
    // formData.append('user[user_id]', id);
    formData.append('user[username]', username);
    formData.append('user[work]', work);

    console.log('PRE SUBMISSION ID:...');
    console.log(this.props.avatarId);

    // if (this.state.didChangeAvatar) {
    //   formData.append('avatar[avatar_img]', this.state.avatar);
    // }

    $.ajax({
      url: `/api/users/${this.props.match.params.userId}`,
      method: "PATCH",
      data: formData,
      contentType: false,
      processData: false
    }).then(res => {
      receiveUser(res);

      if (!this.state.didChangeAvatar) {
        console.log('AVATAR DID NOT CHANGE, REDIRECT TO SHOW PAGE');
        this.props.history.push(`/users/${this.props.match.params.userId}`);
      }

      console.log('AVATAR CHANGED, PUSHING NEW AVATAR');

      const formData = new FormData();
      formData.append('avatar[avatar_img]', this.state.avatar);
      formData.append('avatar[user_id]', this.props.match.params.userId);

      console.log(!this.props.avatarId ? "POST" : "PATCH");
      console.log(this.props.avatarId);

      $.ajax({
        url: (!this.props.avatarId ? "/api/avatars" : `/api/avatars/${this.props.avatarId}`),
        method: (!this.props.avatarId ? "POST" : "PATCH"),
        data: formData,
        contentType: false,
        processData: false
      }).then(res => {
        this.props.history.push(`/users/${this.props.match.params.userId}`);
      })
    });
    // .catch(err => {
    //   receiveUserErrors(err)
    // })
  }

  handleInput(field) {
    return (e) => {this.setState({ [field]: e.currentTarget.value })};
  }

  render() {
    // const { user } = this.props;
    const user = this.state;
    if (!user) { return null }
    // console.log(this.props.avatarId);
    return (
      <div className="user-edit-form">
        <div className="user-show-header">
          <img className="user-show-background" src="https://artcoag-seeds.s3.us-west-1.amazonaws.com/banners/default_banner.png" />
          <div className="user-show-details">
            <div className="user-show avatar-container" >
              <img className="user-show avatar" src={this.state.didChangeAvatar ? URL.createObjectURL(new Blob([user.avatar])) : this.props.user.avatar} />
            </div>
            <h3 className="username">{user.username}</h3>
            <div className="user-profession">{user.summary}</div>
            <div className="user-location">{user.work}</div>
          </div>
        </div>
        <div className="user-form-container">
          <form className="user-form">
            <div className="form-section">
              <div className="form-section-header">
                Username
              </div>
              <div className="form-section-body">
                <input type="text" placeholder="username" className="form-input-text" value={this.state.username} onChange={this.handleInput('username')} />
              </div>
            </div>
            <div className="form-section">
              <div className="form-section-header">
                Profession
              </div>
              <div className="form-section-body">
                <input type="text" placeholder="profession or current work position" className="form-input-text" value={this.state.work ? this.state.work : ''} onChange={this.handleInput('work')} />
              </div>
            </div>
            <div className="form-section-upload">
              <div className="form-section-body-upload">
                <label className="form-label row"> <div className="margin-right">Upload avatar file</div>
                  <input type="file" onChange={this.handleAvatarFile} />
                </label>
                {this.state.didChangeAvatar ? <div className="tip left-blue">After submission, please allow some time for your avatar to update, then refresh the page</div> : null}
              </div>
            </div>
            <div className="form-section">
              <div className="form-section-header">Commit Options</div>
              <div className="form-section-body">
                <button className={`form-submit publish enabled`} onClick={this.handleSubmit}><BiRocket />Commit Changes</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default UserEditForm;