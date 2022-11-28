import {combineReducers, createStore} from "redux";
import {addPostActionType, profileReducer, updateNewPostsTextActionType} from "./profile-reducer";
import {
    dialogsReducer,
    sendMessageActionType,
    updateNewMessageTextActionType
} from "./dialogs-reducer";
export type storeType = typeof store
export type DialogsType = {
    id: number, name: string
}
export type MessagesType = {
    id: number, text: string
}
export type dialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
export type profilePageType = {
    posts: Array<PostsType>,
    newPostText: string
}
export type PostsType = {
    id: number, date: string, message: string, likeCount: number
}
export type ActionsType =
    addPostActionType
    | updateNewPostsTextActionType
    | updateNewMessageTextActionType
    | sendMessageActionType

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export const store = createStore(reducers)