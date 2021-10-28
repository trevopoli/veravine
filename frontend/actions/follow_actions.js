import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW'
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW'

export const receiveFollow = followedId => ({
    type: RECEIVE_FOLLOW,
    followedId
})

export const removeFollow = followedId => ({
    type: REMOVE_FOLLOW,
    followedId
})

export const createFollow = followedId => dispatch => (
    FollowAPIUtil.createFollow(followedId).then(
        followedId => dispatch(receiveFollow(followedId))
    )
)

export const deleteFollow = followedId => dispatch => (
    FollowAPIUtil.deleteFollow(followedId).then(
        followedId => dispatch(removeFollow(followedId))
    )
)