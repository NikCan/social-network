import {applyMiddleware, combineReducers, legacy_createStore, compose} from "redux";
import {
  addPostActionType, deletePostActionType,
  profileReducer, savePhotoSuccessActionType,
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
import {FormAction} from "redux-form/lib/actions";
import {appReducer} from "./app-reducer";

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
  | deletePostActionType
  | savePhotoSuccessActionType

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
