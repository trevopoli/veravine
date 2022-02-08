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
                    <div className="wine-show-title-info">
                        <div className="wine-show-title-brand">{this.wine.brand}</div>
                        <div className="wine-show-title-variety">{this.wine.variety}</div>
                    </div>
                    <div className="favorite-show-icon-container">
                        {favoriteIcon}
                    </div>
                    <div className="wine-show-avg-rating">
                        Average rating: {this.wine.avgRating}
                    </div>

                    {/* Check logged_in? then show message if not*/}
                    <div className="rating-form-with-title">
                        <div className="rating-form-title">Rate this wine</div>
                        <RatingFormContainer wineId={this.props.wineId} />
                    </div>
                    <div className="rating-list-with-title">
                        <div className="recent-ratings-title">Recent ratings</div>
                        <RatingListContainer />
                    </div>
                </div>
            )
        } else {
            rendering = <div className="null-holder"></div>
        }

        return (
            <div className="one-column">
                {rendering}
            </div>
        )
    }
}

export default WineShow;
