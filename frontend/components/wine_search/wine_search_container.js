import { connect } from "react-redux";
import { clearSearchResults, getBrandSearchResults } from "../../actions/search_actions";
import { fetchWines } from "../../actions/wine_actions";
import WineSearch from "./wine_search";

const mapStateToProps = ({ entities: { search } }) => ({
    search: search
})

const mapDispatchToProps = dispatch => ({
    getBrandSearchResults: searchText => dispatch(getBrandSearchResults(searchText)),
    clearSearchResults: () => dispatch(clearSearchResults()),
    fetchWines: filters => dispatch(fetchWines(filters))
})

export default connect(mapStateToProps, mapDispatchToProps)(WineSearch);
