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
        <li className={`list-item-${wine.category}`}>
            <Link to={`/wines/${wine.id}`} >
            <div className="wine-list-item">
                <div className="wine-list-item-brand">{wine.brand}</div>
                {favoriteIcon}
                <div className="wine-list-item-avg-rating">
                    Average rating: {wine.avgRating}
                </div>
            </div>
            </Link>
        </li>
    );
}

export default WineListItem;
