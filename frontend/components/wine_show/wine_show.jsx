import React from "react";
import RatingFormContainer from "../rating_form/rating_form_container";
import RatingListContainer from "../rating_list/rating_list_container";

class WineShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount () {
        if (typeof this.props.wine == 'undefined') {
            this.props.fetchWine(this.props.wineId);
        };
        this.props.fetchRatings(this.props.wineId);
    }

    render () {

        let rendering;

        if (typeof this.props.wine !== 'undefined') {
            this.wine = this.props.wine;

            rendering = (
                <div className="wine-show-container">
                    <h3>{this.wine.brand}</h3>
                    <h4>{this.wine.variety}</h4>

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
