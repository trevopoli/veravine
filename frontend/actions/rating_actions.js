import * as RatingAPIUtil from '../util/rating_api_util';

export const RECEIVE_RATINGS = "RECEIVE_RATINGS";
export const RECEIVE_RATING = "RECEIVE_RATING";
export const DELETE_RATING = "DELETE_RATING";
    
export const receiveRatings = ratings => ({
    type: RECEIVE_RATINGS,
    ratings
})

export const receiveRating = rating => ({
    type: RECEIVE_RATING,
    rating
})

export const deleteRating = ratingId => ({
    type: DELETE_RATING,
    ratingId
})

export const createRating = rating => dispatch => (
    RatingAPIUtil.createRating(rating).then(
        rating => dispatch(receiveRating(rating))
    )
);

export const fetchRatings = wineId => dispatch => (
    RatingAPIUtil.fetchRatings(wineId).then(
        ratings => dispatch(receiveRatings(ratings))
    )
);

export const destroyRating = ratingId => dispatch => (
    RatingAPIUtil.destroyRating(ratingId).then(
        ratingId => dispatch(deleteRating(ratingId))
    )
);