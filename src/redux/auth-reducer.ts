import {ActionsType, AppThunkType} from "./redux-store";
import {authAPI} from "../api/api";
import {formRegDataType} from "../components/Login/LoginForm";

const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isFetching: true,
    isAuth: false,
}
export const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

// actions
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'SET-AUTH-USER-DATA', payload: {id, login, email, isAuth}
} as const)

// thunks
export const getAuthUserData = (): AppThunkType => (dispatch) => {
    authAPI.me().then((data) => {
        if (data.resultCode === 0) {
            const {id, login, email} = data.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    })
}
export const login = (formData: formRegDataType): AppThunkType => (dispatch) => {
    authAPI.login(formData).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}
export const logout = (): AppThunkType => (dispatch) => {
    authAPI.logout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

// types
export type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
}
