import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors: { session } }) => ({
    errors: session,
    formType: 'signup'
})

const mapDispatchToProps = dipatch => ({
    processForm: user => dispatch(signup(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm)