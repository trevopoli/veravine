import { connect } from "react-redux";
import { createWine } from "../../actions/wine_actions";
import WineForm from "./wine_form";

const mapStateToProps = ({ errors, session }) => ({
    errors: errors.wine,
    userId: session.id
})

const mapDispatchToProps = dispatch => ({
    createWine: wine => dispatch(createWine(wine))
})

export default connect(mapStateToProps, mapDispatchToProps)(WineForm);