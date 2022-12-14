import {combineReducers, createStore} from "redux";
import {addPostActionType, profileReducer, updateNewPostsTextActionType} from "./profile-reducer";
import {dialogsReducer, sendMessageActionType, updateNewMessageTextActionType} from "./dialogs-reducer";
import {
    followActionType,
    setCurrentPageActionType, setTotalUsersCountActionType,
    setUsersActionType,
    unfollowActionType,
    usersReducer
} from "./users-reducer";

export type storeType = typeof store
export type stateType = ReturnType<typeof rootReducer>

export type ActionsType =
    addPostActionType
    | updateNewPostsTextActionType
    | updateNewMessageTextActionType
    | sendMessageActionType
    | followActionType
    | unfollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer)