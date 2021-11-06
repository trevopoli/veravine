import { connect } from "react-redux";
import { clearSearchResults, getBrandSearchResults } from "../../actions/search_actions";
import { fetchWines } from "../../actions/wine_actions";
import WineSearchForm from "./wine_search_form";

const mapStateToProps = ({ entities: { search } }) => ({
    search: search
})

const mapDispatchToProps = dispatch => ({
    getBrandSearchResults: searchText => dispatch(getBrandSearchResults(searchText)),
    clearSearchResults: () => dispatch(clearSearchResults()),
    fetchWines: filters => dispatch(fetchWines(filters))
})

export default connect(mapStateToProps, mapDispatchToProps)(WineSearchForm);
