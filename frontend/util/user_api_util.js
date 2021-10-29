
export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
)

export const updateUserAbout = (userId, about) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}`,
        data: { about: about }
    })
)