import React from "react";

const RatingListItem = ({ rating, destroyRating, userId }) => (
    <li>
        <div className="rating-item-value">{rating.value}</div>
        <div className="rating-item-comment">{rating.comment}</div>
        {(rating.user_id === userId) ? <button onClick={() => destroyRating(rating.id)}>Delete rating</button> : null}
    </li>
);

export default RatingListItem;