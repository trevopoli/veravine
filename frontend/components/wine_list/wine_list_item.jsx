import React from "react";
import { Link } from "react-router-dom";

const WineListItem = ({wine}) => (
    <li className="wine-list-item">
        {wine.brand}
    </li>   
);

export default WineListItem;
