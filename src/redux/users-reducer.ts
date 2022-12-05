import {ActionsType} from "./redux-store";
import {v1} from "uuid";

export type followActionType = ReturnType<typeof followAC>
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>

export type usersPageType = {
    users: Array<userType>,
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
    users: [
        {
            id: v1(),
            photoUrl: "https://funart.pro/uploads/posts/2022-05/1652743715_2-funart-pro-p-belochka-svoimi-rukami-zhivotnie-krasivo-f-2.jpg",
            name: "Nikita",
            status: "I'm worker",
            location: {city: "Novgorod", country: "Russia"},
            followed: true
        },
        {
            id: v1(),
            photoUrl: "https://funart.pro/uploads/posts/2022-05/1652743715_2-funart-pro-p-belochka-svoimi-rukami-zhivotnie-krasivo-f-2.jpg",
            name: "Dasha",
            status: "I'm happy!",
            location: {city: "Novgorod", country: "Russia"},
            followed: true
        },
        {
            id: v1(),
            photoUrl: "https://funart.pro/uploads/posts/2022-05/1652743715_2-funart-pro-p-belochka-svoimi-rukami-zhivotnie-krasivo-f-2.jpg",
            name: "Asya",
            status: "I'm a child",
            location: {city: "Novgorod", country: "Russia"},
            followed: true
        },
        {
            id: v1(),
            name: "Chloya",
            photoUrl: "https://funart.pro/uploads/posts/2022-05/1652743715_2-funart-pro-p-belochka-svoimi-rukami-zhivotnie-krasivo-f-2.jpg",
            status: "Mao",
            location: {city: "Novgorod", country: "Russia"},
            followed: false
        },
    ],
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