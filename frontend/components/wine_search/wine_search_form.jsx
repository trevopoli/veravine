import React from "react";

class WineSearchForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchText: "",
            category: "",
            variety: "",
            location: "",
            vintage: "",
            minRating: 1,
            followingOnly: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(field) {
        return e => {
            if (field === "followingOnly") {
                this.setState({
                    [field]: !this.state.followingOnly
                })
            } else {
                this.setState({
                    [field]: e.target.value
                })
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        // const searchFormData = new FormData();
        // searchFormData.append('filters[brand]', this.state.searchText);
        // searchFormData.append('filters[category]', this.state.category);
        // searchFormData.append('filters[variety]', this.state.variety);
        // searchFormData.append('filters[location]', this.state.location);
        // searchFormData.append('filters[vintage]', this.state.vintage);
        // searchFormData.append('filters[min_rating]', this.state.minRating);
        // searchFormData.append('filters[following_only]', this.state.followingOnly);

        const filterParams = {
            filters: {
                brand: this.state.searchText,
                category: this.state.category,
                variety: this.state.variety,
                location: this.state.location,
                vintage: this.state.vintage,
                min_rating: this.state.minRating,
                following_only: this.state.followingOnly
            }
        }

        this.props.fetchWines(filterParams);
    }


    render() {

        return(
            <div className="wine-search-form-container">
                <div className="wine-search-brand-container">
                    <input
                        value={this.state.searchText}
                        className="wine-search-brand-input"
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

                <form className="wine-search-form" onSubmit={this.handleSubmit}>
                    
                    
                    <label className="wine-search-category">Category </label>
                    <select
                        size="7"
                        value={this.state.category}
                        onChange={this.handleChange('category')}
                        className="wine-search-category"
                    >
                        <option value="">All</option>
                        <option value="Red">Red</option>
                        <option value="White">White</option>
                        <option value="Rose">Ros&eacute;</option>
                        <option value="Sparkling">Sparkling</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Fortified">Fortified</option>
                    </select>

                    <label className="wine-search-variety">Variety </label>
                    <input
                        type="text"
                        value={this.state.variety}
                        onChange={this.handleChange('variety')}
                        className="wine-search-variety"
                        />

                    <label className="wine-search-vintage">Vintage </label>
                    <input
                        type="number"
                        min="1773"
                        value={this.state.vintage}
                        onChange={this.handleChange('vintage')}
                        className="wine-search-vintage"
                        />

                    <label className="wine-search-min-rating">Minimum Rating</label>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        step="0.1"
                        value={this.state.minRating}
                        onChange={this.handleChange('minRating')}
                        className="wine-search-min-rating"
                        />

                    <label className="wine-search-following-only">Only show ratings from people your following </label>
                    <input
                        type="checkbox"
                        onChange={this.handleChange('followingOnly')}
                        checked={this.state.followingOnly}
                        />

                    <input type="submit" value="Search" className="wine-search-submit"/>

                </form>
            </div>
        )
    }
}

export default WineSearchForm;