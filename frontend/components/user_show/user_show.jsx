import React from "react";

class UserShow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            following: false
        }

        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);
    }

    componentDidMount() {
        if (typeof this.props.user == 'undefined') {
            this.props.fetchUser(this.props.userId).then(
                user => this.setState({ following: user.following })
            )
        };
    }

    follow() {
        this.props.createFollow(this.props.userId).then(
            () => this.setState({ following: true })
        )
    }

    unfollow() {
        this.props.deleteFollow(this.props.userId).then(
            () => this.setState({ following: false })
        )
    }


    render() {
        this.user = this.props.user;

        let rendering;
        if (typeof this.user !== 'undefined'){

            rendering = (
                <div className="user-show-container">
                    <h3>{this.user.username}'s Profile</h3>
                    {/* Follow Button */}
                    <button
                        className={this.user.following ? "unfollow-button" : "follow-button"}
                        onClick={this.user.following ? this.unfollow : this.follow}
                    >
                        {this.user.following ? "Unfollow" : "Follow"}
                    </button>
                    {/*  */}
                </div>
            )
        } else {
            rendering = <div className="user-show-null-holder"></div>
        }

        return(
            <div>
                {rendering}
            </div>
        )
    }

}

export default UserShow;