import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {
    addPostActionType,
    profileReducer,
    setUserProfileActionType, setUserStatusActionType,
    updateNewPostsTextActionType,
} from "./profile-reducer";
import {dialogsReducer, sendMessageActionType, updateNewMessageTextActionType} from "./dialogs-reducer";
import {
    followActionType,
    setCurrentPageActionType, setTotalUsersCountActionType,
    setUsersActionType, toggleIsFetchingActionType, toggleFollowingProgressActionType,
    unfollowActionType,
    usersReducer, getUsers
} from "./users-reducer";
import {authReducer, postAuthUserDataActionType, setAuthUserDataActionType} from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";

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
    | toggleIsFetchingActionType
    | setUserProfileActionType
    | setAuthUserDataActionType
    | toggleFollowingProgressActionType
    | setUserStatusActionType
    | postAuthUserDataActionType

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
//@ts-ignore
window.store = store