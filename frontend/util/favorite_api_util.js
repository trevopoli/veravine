
export const createFavorite = wine_id => (
    $.ajax({
        method: 'POST',
        url: '/api/favorites',
        data: wine_id
    })
)

export const deleteFavorite = wine_id => (
    $.ajax({
        method: 'DELETE',
        url: '/api/favorites',
        data: wine_id
    })
)