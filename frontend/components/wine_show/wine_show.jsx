import React from "react";
import RatingFormContainer from "../rating_form/rating_form_container";
import RatingListContainer from "../rating_list/rating_list_container";

class WineShow extends React.Component {
    constructor(props) {
        super(props);

        this.favorite = this.favorite.bind(this);
        this.unfavorite = this.unfavorite.bind(this);

    }

    componentDidMount () {
        if (typeof this.props.wine == 'undefined') {
            this.props.fetchWine(this.props.wineId).then(
                wine => this.setState({ favorited: wine.favorited })
            );
        };
        this.props.fetchRatings(this.props.wineId);
    }

    favorite() {
        this.props.createFavorite({ wine_id: this.props.wine.id }).then(
            () => this.setState({ favorited: true })
        )
    }

    unfavorite() {
        this.props.deleteFavorite({ wine_id: this.props.wine.id }).then(
            () => this.setState({ favorited: false })
        )
    }

    render () {

        let rendering;
        if (typeof this.props.wine !== 'undefined') {
            this.wine = this.props.wine;

            // Favorite Icon Creation
            let favoriteIcon;
            if (this.wine.favorited) {
                favoriteIcon = (
                    <span className="favorited-show-icon"
                        onClick={this.unfavorite}>★</span>
                )
            } else {
                favoriteIcon = (
                    <span className="unfavorited-show-icon"
                        onClick={this.favorite}>☆</span>
                )
            }
            //

            rendering = (
                <div className="wine-show-container">
                    <h3>{this.wine.brand}</h3>
                    <h4>{this.wine.variety}</h4>
                    <div className="favorite-show-icon-container">
                        {favoriteIcon}
                    </div>
                    <div className="wine-show-avg-rating">
                        Average rating: {this.wine.avgRating}
                    </div>

                    {/* Check logged_in? then show message if not*/}
                    <div className="rating-form-with-title">
                        <h4>Rate this wine</h4>
                        <RatingFormContainer wineId={this.props.wineId} />
                    </div>
                    <div className="rating-list-with-title">
                        <h4>Recent ratings</h4>
                        <RatingListContainer />
                    </div>
                </div>

            )
        } else {
            rendering = <div className="null-holder"></div>
        }

        return (
            <div>
                {rendering}
            </div>
        )
    }
}

export default WineShow;
