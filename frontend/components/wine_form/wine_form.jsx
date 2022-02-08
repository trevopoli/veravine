import React from "react";

class WineForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            brand: "",
            category: "Red",
            variety: "",
            location: "",
            vintage: 2021
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();

        const wineFormData = new FormData();
        wineFormData.append('wine[brand]', this.state.brand);
        wineFormData.append('wine[category]', this.state.category);
        wineFormData.append('wine[variety]', this.state.variety);
        wineFormData.append('wine[location]', this.state.location);
        wineFormData.append('wine[vintage_year]', this.state.vintage);
        wineFormData.append('wine[user_id]', this.props.userId);

        this.props.createWine(wineFormData).then(
            () => this.props.history.push("/")
        );
    }

    handleChange(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    render() {
        let errorList = null;

        if (this.props.errors) {
            errorList = <ul className="wine-form-errors">
                {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
            </ul>
        }
        return (
            <div className="one-column">
            <div className="wine-form-container">
                <div className="new-wine-form-title">Add a new wine</div>
                {errorList}

                <form className="new-wine-form" onSubmit={this.handleSubmit}>
                    <label className="new-wine-brand">Brand </label>
                    <input
                        type="text"
                        value={this.state.brand}
                        onChange={this.handleChange('brand')}
                        className="new-wine-brand"
                    />

                    <label className="new-wine-category">Category </label>
                    <select
                        size="6"
                        value={this.state.category}
                        onChange={this.handleChange('category')}
                        className="new-wine-category"
                    >
                        <option value="Red">Red</option>
                        <option value="White">White</option>
                        <option value="Rose">Ros&eacute;</option>
                        <option value="Sparkling">Sparkling</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Fortified">Fortified</option>
                    </select>

                    <label className="new-wine-variety">Variety </label>
                    <input
                        type="text"
                        value={this.state.variety}
                        onChange={this.handleChange('variety')}
                        className="new-wine-variety"
                    />

                    <label className="new-wine-location">Location </label>
                    <input
                        type="text"
                        value={this.state.location}
                        onChange={this.handleChange('location')}
                        className="new-wine-location"
                    />

                    <label className="new-wine-vintage">Vintage </label>
                    <input
                        type="number"
                        min="1773"
                        value={this.state.vintage}
                        onChange={this.handleChange('vintage')}
                        className="new-wine-vintage"
                    />

                    <input type="submit" value="Add Wine" className="new-wine-submit" />
                </form>
            </div>
            </div>
        )
    }
}

export default WineForm;