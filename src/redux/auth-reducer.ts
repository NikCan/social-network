import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/api";
import {formDataType} from "../components/Login/LoginForm";

export type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export type postAuthUserDataActionType = ReturnType<typeof postAuthUserData>

export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
    userId: number | null
}

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: 'SET-AUTH-USER-DATA',
    data: {id, login, email}
} as const)
export const postAuthUserData = (userId: number) => ({
    type: 'POST-AUTH-USER-DATA',
    userId
} as const)

const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false,
    userId: null
}

export const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        case "POST-AUTH-USER-DATA":
            return {...state, userId: action.userId}
        default:
            return state
    }
}

export const getMyProfile = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then((data) => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
    }
}
export type regDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export const postAuthData = (formData: formDataType) => {
    const regData: regDataType = {
        email:formData.login,
        password: formData.password,
        rememberMe: formData.rememberMe
    }
    return (dispatch: Dispatch) => {
        authAPI.login(regData).then((data) => {
            if (data.resultCode === 0) {
                dispatch(postAuthUserData(data.data.userId))
            }
        })
    }
}