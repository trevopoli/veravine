import React from "react";

const WineListItem = ({wine}) => (
    <li className="wine-list-item">
        {wine.brand}
    </li>   
);

export default WineListItem;
