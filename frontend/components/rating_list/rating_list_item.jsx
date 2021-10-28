import React from "react";
import { Link } from "react-router-dom";

const RatingListItem = ({ rating, destroyRating, userId }) => (
    <li>
        <div className="rating-item-value">{rating.value}</div>
        <div className="rating-item-comment">{rating.comment}</div>
        <Link to={`/users/${rating.user_id}`}>
            <div className="rating-item-signature">by {rating.username}</div>
        </Link>
        {(rating.user_id === userId) ? <button onClick={() => destroyRating(rating.id)}>Delete rating</button> : null}
    </li>
);

export default RatingListItem;