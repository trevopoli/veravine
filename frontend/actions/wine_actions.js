import * as WineAPIUtil from '../util/wine_api_util';

export const RECEIVE_WINES = "RECEIVE_WINES";
export const RECEIVE_WINE = "RECEIVE_WINE";

export const receiveWines = wines => ({
    type: RECEIVE_WINES,
    wines
})

export const fetchWines = filters => dispatch => (
    WineAPIUtil.fetchWines(filters).then(
        wines => dispatch(receiveWines(wines))
    )
);