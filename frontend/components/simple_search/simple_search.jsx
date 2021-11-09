import React from "react";

class SimpleSearch extends React.Component  {
    constructor(props){
        super(props);

        this.state = {
            searchInput: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState(
            { searchInput: e.target.value }
        );
    }

    handleSubmit(e) {
        this.props.simpleWineSearch(this.state.searchInput);
    }

    render() {

        return (
            <div className="simple-search-container">
                <div className="simple-search-box">
                    <input
                        type="text"
                        className="simple-search-input"
                        onChange={this.handleChange}
                        placeholder="Try something like 'La Crema Chardonnay'"
                    />
                </div>
                <div className="simple-search-sumbit">
                    <button 
                        className="sumple-search-submit-button"
                        onClick={this.handleSubmit}>
                    Search
                    </button>
                </div>
            </div>
        )
    }
}

export default SimpleSearch;