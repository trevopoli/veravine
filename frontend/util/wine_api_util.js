

export const fetchWines = filters => (
    $.ajax({
        method: 'GET',
        url: '/api/wines',
        data: filters
    })
)

export const simpleWineSearch = searchInput => (
    $.ajax({
        method: 'GET',
        url: '/api/simple_search',
        data: { search_input: searchInput }
    })
)

export const fetchWine = wineId => (
    $.ajax({
        method: 'GET',
        url: `/api/wines/${wineId}`,
    })
)

export const createWine = wine => (
    $.ajax({
        method: 'POST',
        url: '/api/wines',
        data: wine,
        processData: false,
        contentType: false
    })
)