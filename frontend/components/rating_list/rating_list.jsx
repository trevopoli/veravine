import { Link } from "react-router-dom";
import React from "react";
import RatingListItem from "./rating_list_item";

const RatingList = ({ ratings, destroyRating, userId }) => {
    let ratingsList;

    if (typeof ratings == 'undefined') {
        ratingsList = <div className="no-ratings">no ratings yet</div>
    } else {
        const ratingsArray = Object.values(ratings);
        ratingsList = (
            <ul>
                {ratingsArray.map(rating => <RatingListItem rating={rating} 
                    destroyRating={destroyRating} 
                    userId={userId}
                    key={rating.id} />)}
            </ul>
        )
    }

    return (
        <div className="rating-list-container">
            {ratingsList}
        </div>
    )
}

export default RatingList;