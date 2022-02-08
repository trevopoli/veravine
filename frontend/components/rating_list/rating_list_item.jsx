import React from "react";
import { Link } from "react-router-dom";

const RatingListItem = ({ rating, destroyRating, userId }) => (
    <li>
        {rating.wine_brand ? <div className="rating-wine">{rating.wine_brand}, {rating.wine_variety}</div> : null}
        <div className="rating-item-value">{rating.value}</div>
        <div className="rating-item-comment">{rating.comment}</div>
        { (rating.username) ? (
            <div className="rating-item-signature">
                by&nbsp;
                <Link to={`/users/${rating.user_id}`}>
                    <div className="rating-item-user-link">{rating.username}</div>
                </Link>
            </div>
        ) : (null)}
        {(rating.user_id === userId) ? <button onClick={() => destroyRating(rating.id)}>Delete rating</button> : null}
    </li>
);

export default RatingListItem;