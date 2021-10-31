import { connect } from "react-redux";
import { getBrandSearchResults } from "../../actions/search_actions";
import WineSearch from './wine_search';

const mapStateToProps = ({ entities: { search }}) => ({
    search: search
})

const mapDispatchToProps = dispatch => ({
    getBrandSearchResults: searchText => dispatch(getBrandSearchResults(searchText))
})

export default connect(mapStateToProps, mapDispatchToProps)(WineSearch);