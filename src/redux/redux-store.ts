import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {
    addPostActionType,
    profileReducer,
    setUserProfileActionType, setUserStatusActionType,
} from "./profile-reducer";
import {dialogsReducer, sendMessageActionType} from "./dialogs-reducer";
import {
    followActionType,
    setCurrentPageActionType, setTotalUsersCountActionType,
    setUsersActionType, toggleIsFetchingActionType, toggleFollowingProgressActionType,
    unfollowActionType,
    usersReducer
} from "./users-reducer";
import {authReducer, setAuthUserDataActionType} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";

export type storeType = typeof store
export type stateType = ReturnType<typeof rootReducer>

export type ActionsType =
    addPostActionType
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

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, stateType, unknown, ActionsType>


//@ts-ignore
window.store = store