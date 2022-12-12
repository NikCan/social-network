import {ActionsType} from "./redux-store";
import {v1} from "uuid";

export type followActionType = ReturnType<typeof followAC>
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>

export type usersPageType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
}
export type userType = {
    id: string
    photoUrl: string
    name: string
    status: string
    location: { city: string, country: string }
    followed: boolean
}

export const followAC = (userId: string) => ({type: 'FOLLOW', userId: userId} as const)
export const unfollowAC = (userId: string) => ({type: 'UNFOLLOW', userId: userId} as const)
export const setUsersAC = (users: Array<userType>) => ({type: 'SET_USERS', users: users} as const)

const initialState: usersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
}

export const usersReducer = (state = initialState, action: ActionsType): usersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}