import * as WineAPIUtil from '../util/wine_api_util';

export const RECEIVE_WINES = "RECEIVE_WINES";
export const RECEIVE_WINE = "RECEIVE_WINE";
export const RECEIVE_WINE_ERRORS = "RECEIVE_WINE_ERRORS";

export const receiveWines = wines => ({
    type: RECEIVE_WINES,
    wines
})

export const receiveWine = wine => ({
    type: RECEIVE_WINE,
    wine
})

export const receiveWineErrors = errors => ({
    type: RECEIVE_WINE_ERRORS,
    errors
})

export const fetchWines = filters => dispatch => (
    WineAPIUtil.fetchWines(filters).then(
        wines => dispatch(receiveWines(wines))
    )
)

export const simpleWineSearch = searchInput => dispatch => (
    WineAPIUtil.simpleWineSearch(searchInput).then(
        wines => dispatch(receiveWines(wines))
    )
)

export const createWine = wine => dispatch => (
    WineAPIUtil.createWine(wine).then(
        wine => dispatch(receiveWine(wine)),
        errors => dispatch(receiveWineErrors(errors.responseJSON))
    )
)

export const fetchWine = wineId => dispatch => (
    WineAPIUtil.fetchWine(wineId).then(
        wine => dispatch(receiveWine(wine))
    )
)