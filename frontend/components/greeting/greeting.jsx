import React from "react";
import { Link } from "react-router-dom";

const Greeting = (props) => {

    let greetingContent;

    if (props.currentUser) {
        greetingContent = (
            <div>
                <h3>Welcome, {props.currentUser.username}</h3>
                <button onClick={props.logout}>Logout</button>
            </div>
        )
    } else {
        greetingContent = (
            <div>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        )
    }

    return (
        <div className="greeting">
            {greetingContent}
        </div>
    );
}

export default Greeting;