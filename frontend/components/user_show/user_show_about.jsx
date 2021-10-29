import React from 'react';

class UserShowAbout extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            editing: false,
            about: this.props.user.about
        }

        this.updateUserAbout = this.updateUserAbout.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.aboutChange = this.aboutChange.bind(this);
    }

    updateUserAbout() {
        this.props.updateUserAbout(this.props.user.id, this.state.about).then(
            this.setState({
                editing: false
            })
        )
    }

    toggleEdit() {
        if (this.state.editing) {
            this.setState({
                editing: false,
                about: this.props.user.about
            })
        } else {
            this.setState({
                editing: true
            })
        }
    }

    aboutChange(e) {
        this.setState({
            about: e.target.value
        })
    }

    render() {
        const isCurrrentUser = (this.props.user.id == this.props.currentUserId);
        const editButton = (
            <button className="edit-about-toggle" onClick={this.toggleEdit}>
                {this.state.editing ? "Cancel" : "Edit"}
            </button>
        )
        let rendering;

        if (isCurrrentUser) {
            if (this.state.editing) {
                rendering = (
                    <div>
                        <textarea onChange={this.aboutChange} value={this.state.about}>
                        </textarea>
                        <button className="edit-about-toggle" onClick={this.updateUserAbout}>
                            Submit
                        </button>
                        {editButton}
                    </div>
                )
            } else {
                rendering = (
                    <div>
                        {this.props.user.about}
                        {editButton}
                    </div>
                );
            }
        } else {
            rendering = this.props.user.about
        }

        return (
            <div className="user-show-about">
                {rendering}
            </div>
        )
    }
}

export default UserShowAbout;