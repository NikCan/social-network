import {AppThunkType} from "./store";
import {getAuthUserData} from "./auth-reducer";

const initialState: AppInitialStateType = {
    initialized: false
}
export const appReducer = (state = initialState, action: ActionsType): AppInitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state, initialized: action.initialized}
        default:
            return state
    }
}

// actions
export const initializedSuccess = (initialized: boolean) => ({
    type: 'INITIALIZED-SUCCESS', initialized
} as const)

// thunks
export const initializeApp = (): AppThunkType => (dispatch) => {
    dispatch(getAuthUserData()).then(()=>{
        dispatch(initializedSuccess(true))
    })
}

// types
export type initializedSuccessActionType = ReturnType<typeof initializedSuccess>
export type AppInitialStateType = {
    initialized: boolean
}
type ActionsType =
    | initializedSuccessActionType