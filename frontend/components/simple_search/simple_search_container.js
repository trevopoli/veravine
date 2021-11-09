import { connect } from "react-redux";
import { simpleWineSearch } from "../../actions/wine_actions";
import SimpleSearch from "./simple_search";

const mapStateToProps = ({}) => ({

})

const mapDispatchToProps = dispatch => ({
    simpleWineSearch: searchInput => dispatch(simpleWineSearch(searchInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSearch)