import { connect } from "react-redux";
import RatingList from "./rating_list";
import { destroyRating } from "../../actions/rating_actions";

const mapStateToProps = ({ entities: { ratings }, session }) => ({
    ratings,
    userId: session.id
})

const mapDispatchToProps = dispatch => ({
    destroyRating: ratingId => dispatch(destroyRating(ratingId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RatingList)