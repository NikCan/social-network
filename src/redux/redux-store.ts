import {combineReducers, createStore} from "redux";
import {addPostActionType, profileReducer, updateNewPostsTextActionType} from "./profile-reducer";
import {
    dialogsReducer,
    sendMessageActionType,
    updateNewMessageTextActionType
} from "./dialogs-reducer";
export type storeType = typeof store
export type stateType = ReturnType<typeof rootReducer>

export type ActionsType =
    addPostActionType
    | updateNewPostsTextActionType
    | updateNewMessageTextActionType
    | sendMessageActionType

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export const store = createStore(rootReducer)