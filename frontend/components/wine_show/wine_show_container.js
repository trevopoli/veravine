import { connect } from "react-redux";
import WineShow from "./wine_show";
import { fetchWine } from "../../actions/wine_actions";
import { fetchRatings } from "../../actions/rating_actions";
import { createFavorite, deleteFavorite } from "../../actions/favorite_actions";

const mapStateToProps = ({ entities: { wines } }, { match }) => ({
    wineId: match.params.wineId,
    wine: wines[match.params.wineId]
});

const mapDispatchToProps = dispatch => ({
    fetchWine: wineId => dispatch(fetchWine(wineId)),
    fetchRatings: wineId => dispatch(fetchRatings(wineId)),
    createFavorite: wineId => dispatch(createFavorite(wineId)),
    deleteFavorite: wineId => dispatch(deleteFavorite(wineId))
});

export default connect(mapStateToProps, mapDispatchToProps)(WineShow);