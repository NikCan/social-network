import {ActionsType, AppThunkType} from "./store";
import {authAPI, securityAPI} from "api/api";
import {formRegDataType} from "components/Login/LoginForm";
import {stopSubmit} from "redux-form";

const initialState: AuthStateType = {
  id: null,
  login: null,
  email: null,
  isFetching: true,
  isAuth: false,
  captchaUrl: null,
}

export const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
  switch (action.type) {
    case "auth/SET-AUTH-USER-DATA":
    case "auth/GET-CAPTCHA-URL-SUCCESS":
      return {...state, ...action.payload}

    default:
      return state
  }
}

// actions
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
  type: 'auth/SET-AUTH-USER-DATA', payload: {id, login, email, isAuth}
} as const)
export const getCaptchaUrlSuccess = (captchaUrl: string | null) => ({
  type: 'auth/GET-CAPTCHA-URL-SUCCESS', payload: {captchaUrl}
} as const)

// thunks
export const getAuthUserData = (): AppThunkType<Promise<any>> => async (dispatch) => {
  const data = await authAPI.me()
  if (data.resultCode === 0) {
    const {id, login, email} = data.data
    dispatch(setAuthUserData(id, login, email, true))
  }
}
export const login = (formData: formRegDataType): AppThunkType => async (dispatch) => {
  const data = await authAPI.login(formData)
  if (data.resultCode === 0) {
    await dispatch(getAuthUserData())
    dispatch(getCaptchaUrlSuccess(null))
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    dispatch(stopSubmit('login', {
      email: data.messages.length > 0 ? data.messages[0] : "Error",
      password: data.messages.length > 0 ? data.messages[0] : "Error"
    },))
  }
}
export const logout = (): AppThunkType => async (dispatch) => {
  const data = await authAPI.logout()
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = (): AppThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl()
  dispatch(getCaptchaUrlSuccess(data.url))
}

// types
export type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export type AuthStateType = {
  id: number | null
  login: string | null
  email: string | null
  isFetching: boolean
  isAuth: boolean
  captchaUrl: string | null
}
