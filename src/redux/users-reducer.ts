import {ActionsType} from "./redux-store";

export type followActionType = ReturnType<typeof followAC>
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetchingAC>

export type InitialStateType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
export const setUsersAC = (users: Array<userType>) => ({type: 'SET-USERS', users: users} as const)
export const setCurrentPageAC = (pageNumber:number) => ({type: 'SET-CURRENT-PAGE', pageNumber} as const)
export const setTotalUsersCountAC = (totalCount:number) => ({type: 'SET-TOTAL-COUNT', totalCount} as const)
export const toggleIsFetchingAC = (isFetching:boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)

const initialState: InitialStateType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.pageNumber}
        case "SET-TOTAL-COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}