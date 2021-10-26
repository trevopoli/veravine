import React from "react";
import WineListItem from "./wine_list_item";
import { Link } from "react-router-dom";

class WineList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchWines();
    }

    render () {
        const winesArray = Object.values(this.props.wines);
        return (
            <div className="wine-list-container">
                <ul>
                    {winesArray.map(wine => <WineListItem 
                        wine={wine} 
                        key={wine.id}
                        deleteFavorite={this.props.deleteFavorite}
                        createFavorite={this.props.createFavorite}
                     />)}
                </ul>
                <Link to="/wines/new">add a new wine</Link>
            </div>
        )
    }
}

export default WineList;