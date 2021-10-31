import React from "react";

class WineSearch extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchText: ""
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleBrandClick = this.handleBrandClick.bind(this);
    }

    handleSearchChange(e) {
        this.setState({
            searchText: e.target.value
        })
        // setState async
        this.props.getBrandSearchResults(e.target.value)
    };

    handleBrandClick(e) {

    }

    render() {

        return(
            <div className="wine-search-container">
                <input
                    value={this.state.searchText}
                    className="wine-search-input"
                    placeholder="Search wine brands"
                    onChange={this.handleSearchChange}>
                </input>
                <ul className="wine-brand-autocomplete">
                    {
                        this.props.search.map((brand, idx) => <li onClick={this.handleBrandClick} key={idx}>{brand}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default WineSearch;