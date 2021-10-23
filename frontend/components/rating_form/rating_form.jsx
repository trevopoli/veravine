import React from "react";

class RatingForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: 10,
            comment: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();

        const ratingFormData = new FormData();
        ratingFormData.append('rating[wine_id]', this.props.wineId);
        ratingFormData.append('rating[user_id]', this.props.userId);
        ratingFormData.append('rating[value]', this.state.value);
        ratingFormData.append('rating[comment]', this.state.comment);

        this.props.createRating(ratingFormData).then(
            () => this.setState({
                value: this.state.value,
                comment: ""
            })
        );
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    render(){

        return (
            <div className="rating-form-container">
                <form className="rating-form" onSubmit={this.handleSubmit}>
                    <input
                        type="number"
                        className="rating-form-value"
                        min="1"
                        max="10"
                        value={this.state.value}
                        onChange={this.handleChange('value')}
                    />

                    <textarea
                        className="rating-form-comment"
                        value={this.state.comment}
                        onChange={this.handleChange('comment')}
                    />

                    <input 
                        type="submit"
                        className="rating-form-submit"
                        value="Submit Rating"
                    />    
                </form>
            </div>
        )
    }
}

export default RatingForm;