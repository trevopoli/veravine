import React from "react";
import { Link } from "react-router-dom";

const Greeting = (props) => {

    let greetingContent;

    if (props.currentUser) {
        greetingContent = (
            <div className="greeting">
                <div className="user-greeting">
                    Welcome, {props.currentUser.username}
                </div>
                <button onClick={props.logout}>Logout</button>
            </div>
        )
    } else {
        greetingContent = (
            <div className="greeting">
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        )
    }

    return (
        <div>
            {greetingContent}
        </div>
    );
}

export default Greeting;