import { connect } from "react-redux";
import WineList from "./wine_list";
import { fetchWines } from "../../actions/wine_actions";
import { createFavorite, deleteFavorite } from "../../actions/favorite_actions";

const mapStateToProps = ({ entities: { wines } }) => ({
    wines: wines
});

const mapDispatchToProps = dispatch => ({
    fetchWines: (filters) => dispatch(fetchWines(filters)),
    createFavorite: wineId => dispatch(createFavorite(wineId)),
    deleteFavorite: wineId => dispatch(deleteFavorite(wineId))
});

export default connect(mapStateToProps, mapDispatchToProps)(WineList)