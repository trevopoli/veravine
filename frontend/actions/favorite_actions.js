import * as FavoriteAPIUtil from '../util/favorite_api_util';

export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";

export const receiveFavorite = favorite => ({
    type: RECEIVE_FAVORITE,
    favorite
})

export const removeFavorite = wineId => ({
    type: REMOVE_FAVORITE,
    wineId
})

export const deleteFavorite = wineId => dispatch => (
    FavoriteAPIUtil.deleteFavorite(wineId).then(
        wineId => dispatch(removeFavorite(wineId))
    )
)

export const createFavorite = wineId => dispatch => (
    FavoriteAPIUtil.createFavorite(wineId).then(
        favorite => dispatch(receiveFavorite(favorite))
    )
)