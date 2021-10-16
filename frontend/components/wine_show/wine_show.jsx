import React from "react";

class WineShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount () {
        if (typeof this.props.wine == 'undefined') {
            this.props.fetchWine(this.props.wineId);
        };
    }

    render () {

        let rendering;

        if (typeof this.props.wine !== 'undefined') {
            this.wine = this.props.wine;

            rendering = (
                <div className="wine-show-container">
                    <h3>{this.wine.brand}</h3>
                    <h4>{this.wine.variety}</h4>
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
