import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            email: ""
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
            <div className="one-column">
                <div className="session-form-container">
                    <h3>{formTypeText}</h3>
                    <div className="session-nav-link">
                        {navLink}
                    </div>
                    {errorList}
                    <form className="sessionForm" onSubmit={this.handleSubmit}>
                        <div className="session-form-username">
                            <label>Username: </label>
                            <input
                                type="text"
                                className="session-form-username-container"
                                value={this.state.username}
                                onChange={this.handleChange('username')}>
                            </input>
                        </div>

                        <div className="session-form-email-container">
                            <label>Email: </label>
                            <input
                                type="text"
                                className="session-form-email"
                                value={this.state.email}
                                onChange={this.handleChange('email')}>
                            </input>
                        </div>
                        
                        <div className="session-form-password-container">
                            <label>Password: </label>
                            <input
                                type="password"
                                className="session-form-password"
                                value={this.state.password}
                                onChange={this.handleChange('password')}>
                            </input>
                        </div>

                        <div className="session-form-submit-container">
                            <input
                                type="submit" 
                                className="session-form-submit"
                                value={formTypeText}>
                            </input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SessionForm;