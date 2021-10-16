import React from "react";
import { Link } from "react-router-dom";

const WineListItem = ({wine}) => (
    <Link to={`/wines/${wine.id}`} >
        <li className="wine-list-item">
            {wine.brand}
        </li>
    </Link>
);

export default WineListItem;
