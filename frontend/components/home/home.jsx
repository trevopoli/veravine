import React from "react";
import WineListContainer from "../wine_list/wine_list_container";
import SimpleSearchContainer from "../simple_search/simple_search_container";

class Home extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount() {
        this.props.fetchWines();
    }

    render() {

        return(
            <div className="one-column">
                <div className="home-container">
                    <div className="home-image-header">
                        <div className="home-image-header-overlay">
                            <h2>Find the Perfect Bottle</h2>
                            <h3>from people you trust</h3>
                        </div>
                    </div>
                    <SimpleSearchContainer />
                    <WineListContainer />
                </div>
            </div>
        )
    }
}

export default Home;