import {ActionsType} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type followActionType = ReturnType<typeof follow>
export type unfollowActionType = ReturnType<typeof unfollow>
export type setUsersActionType = ReturnType<typeof setUsers>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type toggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>

export type InitialStateType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number []
}
export type userType = {
    id: number
    photoUrl: string
    name: string
    status: string
    location: { city: string, country: string }
    followed: boolean
    photos: {
        small: string
        large: string
    }
}

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: Array<userType>) => ({type: 'SET-USERS', users: users} as const)
export const setCurrentPage = (pageNumber: number) => ({type: 'SET-CURRENT-PAGE', pageNumber} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET-TOTAL-COUNT', totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleFollowingProgress = (id: number, followingInProgress: boolean) => ({
    type: 'TOGGLE-FOLLOWING-PROGRESS',
    id, followingInProgress
} as const)

const initialState: InitialStateType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.pageNumber}
        case "SET-TOTAL-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-FOLLOWING-PROGRESS":
            return action.followingInProgress ? {
                    ...state,
                    followingInProgress: [...state.followingInProgress, action.id]
                }
                : {...state, followingInProgress: state.followingInProgress.filter(el => el !== action.id)}
        default:
            return state
    }
}
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const followThunk = (id: number) => {
    return (dispatch: Dispatch) => {
       dispatch(toggleFollowingProgress(id, true))
        usersAPI.follow(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(toggleFollowingProgress(id, false))
        })
    }
}

export const unfollowThunk = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(id, true))
        usersAPI.unfollow(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollow(id))
            }
            dispatch(toggleFollowingProgress(id, false))
        })
    }
}