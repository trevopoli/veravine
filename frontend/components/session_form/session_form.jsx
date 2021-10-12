import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = { user: this.state };
        this.props.processForm(user);
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render () {
        let formTypeText;
        let errorList;
        let navLink;

        if (this.props.errors.length > 0) {
            errorList = (
                <ul className="session-form-errors">
                    {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
                </ul>
            )
        };

        if (this.props.formType == 'signup') {
            formTypeText = "Sign Up";
            navLink = <Link to="/login" >or log in instead</Link>
        } else {
            formTypeText = "Log In"
            navLink = <Link to="/signup" >or sign up instead</Link>
        };

        return (
            <div className="session-form-container">
                <h3>{formTypeText}</h3>
                <div className="session-nav-link">
                    {navLink}
                </div>
                {errorList}
                <form className="sessionForm" onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input
                        type="text"
                        className="session-form-username"
                        value={this.state.username}
                        onChange={this.handleChange('username')}>
                    </input>

                    <label>Password: </label>
                    <input
                        type="password"
                        className="session-form-password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}>
                    </input>

                    <input 
                        type="submit" 
                        className="session-form-submit"
                        value={formTypeText}>
                    </input>
                </form>
            </div>
        );
    }
}

export default SessionForm;