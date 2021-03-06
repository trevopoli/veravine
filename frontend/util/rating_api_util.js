
export const createRating = rating => (
    $.ajax({
        method: 'POST',
        url: `api/wines/${rating.wine_id}/ratings`,
        data: rating,
        processData: false,
        contentType: false
    })
)

export const fetchRatings = wineId => (
    $.ajax({
        method: 'GET',
        url: `api/wines/${wineId}/ratings`
    })
)

export const destroyRating = ratingId => (
    $.ajax({
        method: 'DELETE',
        url: `api/ratings/${ratingId}`
    })
)

export const fetchRatingsByUser = userId => (
    $.ajax({
        method: 'GET',
        url: 'api/ratings',
        data: { user_id: userId }
    })
)