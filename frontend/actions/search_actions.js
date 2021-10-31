import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_BRAND_RESULTS = "RECEIVE_BRAND_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const receiveBrandResults = brandResults => ({
    type: RECEIVE_BRAND_RESULTS,
    brandResults
});

export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
})

export const getBrandSearchResults = brandSearch => dispatch => {
    SearchAPIUtil.getBrandSearchResults(brandSearch).then(
        brandResults => dispatch(receiveBrandResults(brandResults))
    )
};