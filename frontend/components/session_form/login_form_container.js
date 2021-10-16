import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors: {session} }) => ({
    errors: session,
    formType: 'login'
})

const mapDispatchToProps = dipatch => ({
    processForm: user => dispatch(login(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm)