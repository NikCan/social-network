import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {
  addPostActionCreator,
  deletePostAC,
  profileReducer,
  savePhotoSuccess,
  setUserProfile,
  setUserStatus,
} from "./profile-reducer";
import {dialogsReducer, sendMessageActionType} from "./dialogs-reducer";
import {
  followActionType,
  setCurrentPageActionType,
  setTotalUsersCountActionType,
  setUsersActionType,
  toggleFollowingProgressActionType,
  toggleIsFetchingActionType,
  unfollowActionType,
  usersReducer
} from "./users-reducer";
import {authReducer, setAuthUserDataActionType} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {FormAction} from "redux-form/lib/actions";
import {appReducer} from "./app-reducer";

export type storeType = typeof store
export type stateType = ReturnType<typeof rootReducer>

export type ActionsType =
  | sendMessageActionType
  | followActionType
  | unfollowActionType
  | setUsersActionType
  | setCurrentPageActionType
  | setTotalUsersCountActionType
  | toggleIsFetchingActionType
  | setAuthUserDataActionType
  | toggleFollowingProgressActionType
  | ReturnType<typeof setUserStatus>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof deletePostAC>
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof savePhotoSuccess>

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

// for Profiler ext
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, stateType, unknown, ActionsType | FormAction>
