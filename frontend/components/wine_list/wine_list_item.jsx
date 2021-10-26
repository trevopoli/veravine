import React from "react";
import { Link } from "react-router-dom";

const WineListItem = ({wine, deleteFavorite, createFavorite}) => {
    
    let favoriteIcon;
    if (wine.favorited) {
        favoriteIcon = (
            <span className="favorited-list-icon" 
                onClick={() => deleteFavorite({ wine_id: wine.id })}>★</span>
        )
    } else {
        favoriteIcon = (
            <span className="unfavorited-list-icon" 
            onClick={() => createFavorite({ wine_id: wine.id })}>☆</span>
        )
    }
    
    
    return (
        <li className="wine-list-item">
            <Link to={`/wines/${wine.id}`} >
                {wine.brand}
            </Link>
            {favoriteIcon}
            <div className="wine-list-item-avg-rating">
                Average rating: {wine.avgRating}
            </div>
        </li>
    );
}

export default WineListItem;
