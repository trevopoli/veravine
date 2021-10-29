import React from "react";
// import { logoutCurrentUser } from "../../actions/session_actions";
import RatingListContainer from "../rating_list/rating_list_container";
import UserShowAbout from "./user_show_about";

class UserShow extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            following: false,
            about: ""
        }

        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);
    }

    componentDidMount() {
        if (typeof this.props.user == 'undefined') {
            this.props.fetchUser(this.props.userId).then(
                user => this.setState({ following: user.following, about: user.about })
            )
        };
        this.props.fetchRatingsByUser(this.props.userId);
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
                    <UserShowAbout 
                        currentUserId={this.props.currentUserId} 
                        user={this.user}
                        updateUserAbout={this.props.updateUserAbout}
                    />
                    {/* Follow Button */}
                    <button
                        className={this.user.following ? "unfollow-button" : "follow-button"}
                        onClick={this.user.following ? this.unfollow : this.follow}
                    >
                        {this.user.following ? "Unfollow" : "Follow"}
                    </button>
                    {/*  */}
                    <h4>Recent ratings by {this.user.username}</h4>
                    <div className="user-recent-rating-list">
                        <RatingListContainer />
                    </div>
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