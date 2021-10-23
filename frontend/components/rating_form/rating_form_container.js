import { connect } from "react-redux";
import RatingForm from "./rating_form";
import { createRating } from "../../actions/rating_actions";
import { withRouter } from "react-router";

const mapStateToProps = ({ errors, session}) => ({
    userId: session.id
});

const mapDispatchToProps = dispatch => ({
    createRating: rating => dispatch(createRating(rating))
});


export default connect(mapStateToProps, mapDispatchToProps)(RatingForm);