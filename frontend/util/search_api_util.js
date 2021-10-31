
export const getBrandSearchResults = brandSearch => (
    $.ajax({
        method: 'GET',
        url: '/api/wine_brand_search',
        data: { brand_search: brandSearch }
    })
)