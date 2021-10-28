
export const createFollow = followed_id => (
    $.ajax({
        method: 'POST',
        url: `/api/follows`,
        data: { followed_id: followed_id }
    })
)

export const deleteFollow = followed_id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/follows`,
        data: { followed_id: followed_id }
    })
)