import UserShow from "./user_show";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { createFollow, deleteFollow } from "../../actions/follow_actions";

const mapStateToProps = ({ entities: { users }, session }, { match }) => ({
    userId: match.params.userId,
    user: users[match.params.userId],
    currentUser: users[session.id],
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    createFollow: followedId => dispatch(createFollow(followedId)),
    deleteFollow: followedId => dispatch(deleteFollow(followedId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);