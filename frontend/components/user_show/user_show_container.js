import UserShow from "./user_show";
import { connect } from "react-redux";
import { fetchUser, updateUserAbout } from "../../actions/user_actions";
import { createFollow, deleteFollow } from "../../actions/follow_actions";
import { fetchRatingsByUser } from "../../actions/rating_actions";

const mapStateToProps = ({ entities: { users }, session }, { match }) => ({
    userId: match.params.userId,
    user: users[match.params.userId],
    currentUserId: session.id,
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchRatingsByUser: userId => dispatch(fetchRatingsByUser(userId)),
    createFollow: followedId => dispatch(createFollow(followedId)),
    deleteFollow: followedId => dispatch(deleteFollow(followedId)),
    updateUserAbout: (userId, about) => dispatch(updateUserAbout(userId, about))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);