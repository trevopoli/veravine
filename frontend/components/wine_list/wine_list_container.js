import { connect } from "react-redux";
import WineList from "./wine_list";
import { fetchWines } from "../../actions/wine_actions";

const mapStateToProps = ({ entities: { wines } }) => ({
    wines: wines
});

const mapDispatchToProps = dispatch => ({
    fetchWines: (filters) => dispatch(fetchWines(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(WineList)