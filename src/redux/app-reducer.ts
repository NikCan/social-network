import {AppThunkType} from "./redux-store";

const initialState: InitialStateType = {
    initialized: false
}
export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
export const initialize = (): AppThunkType => (dispatch) => {

}

// types
export type initializedSuccessActionType = ReturnType<typeof initializedSuccess>
type InitialStateType = {
    initialized: boolean
}
type ActionsType =
    | initializedSuccessActionType