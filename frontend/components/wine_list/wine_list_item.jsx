import React from "react";
import { Link } from "react-router-dom";

const WineListItem = ({wine}) => (
    <li className="wine-list-item">
        <Link to={`/wines/${wine.id}`} >
            {wine.brand}
        </Link>
        <div className="wine-list-item-avg-rating">
            Average rating: {wine.avgRating}
        </div>
    </li>
);

export default WineListItem;
