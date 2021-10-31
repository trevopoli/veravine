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
        if (e.target.value.length > 0) {
            this.props.getBrandSearchResults(e.target.value)
        } else {
            this.props.clearSearchResults();
        }
    };

    handleBrandClick(e) {
        this.setState({
            searchText: e.target.innerText
        })
        this.props.clearSearchResults();
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
                        this.props.search.map((brand, idx) => 
                            <li onClick={this.handleBrandClick} 
                                className="wine-brand-result"
                                key={idx}>{brand}
                            </li>)
                    }
                </ul>
            </div>
        )
    }
}

export default WineSearch;