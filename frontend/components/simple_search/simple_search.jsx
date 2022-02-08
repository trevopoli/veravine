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
        if (this.state.searchInput.length > 0) {
            this.props.simpleWineSearch(this.state.searchInput);
        }
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
                        onKeyUp={(e) => e.key == 'Enter' ? this.handleSubmit(e) : null}
                    />
                </div>
                <div className="simple-search-sumbit">
                    <button 
                        className="simple-search-submit-button"
                        onClick={this.handleSubmit}>
                    Search
                    </button>
                </div>
            </div>
        )
    }
}

export default SimpleSearch;