import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {api} from "../api/api";

export type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>

export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
}

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: 'SET-AUTH-USER-DATA',
    data: {id, login, email}
} as const)

const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const getMyProfile = () => {
    return (dispatch: Dispatch) => {
        api.getMyProfile().then((data) => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
    }
}