import React from "react";
import WineListItem from "./wine_list_item";

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
                    {winesArray.map(wine => <WineListItem wine={wine} key={wine.id} />)}
                </ul>
            </div>
        )
    }
}

export default WineList;