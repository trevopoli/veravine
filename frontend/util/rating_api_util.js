import { fetchWine } from "./wine_api_util"

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