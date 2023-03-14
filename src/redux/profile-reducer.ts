import {ActionsType, AppThunkType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "api/api";
import {v1} from "uuid";
import {FormProfileDataType} from "components/Profile/ProfileInfo/ProfileData/ProfileDataForm";
import {stopSubmit} from "redux-form";
import {findContactsInError} from "utils/helpers/findContactsInError";

const initialState: profilePageType = {
  posts: [
    {id: "1", date: "17.10.2022", message: "HI", likeCount: 2},
    {id: "2", date: "18.10.2022", message: "How are you?", likeCount: 5},
    {id: "3", date: "18.10.2022", message: "I'm Nikita", likeCount: 76},
    {id: "4", date: "18.10.2022", message: "I'm 32", likeCount: 4},
    {id: "5", date: "18.10.2022", message: "I'm from Russia", likeCount: 0},
  ],
  profile: null,
  status: ""
}

export const profileReducer = (state: profilePageType = initialState, action: ActionsType): profilePageType => {
  switch (action.type) {
    case "profile/ADD-POST":
      return {
        ...state, posts: [{
          id: v1(), date: new Date().toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }), message: action.newPost, likeCount: 0
        }, ...state.posts]
      }
    case 'profile/DELETE-POST':
      return {...state, posts: state.posts.filter(p => p.id !== action.id)}
    case "profile/SET-USER-PROFILE":
      return {...state, profile: action.profile}
    case "profile/SET-USER-STATUS":
      return {...state, status: action.status}
    case "profile/SAVE-PHOTO-SUCCESS":
      if (state.profile) return {...state, profile: {...state.profile, photos: action.photos}}
      else return {...state}
    default:
      return state
  }
}

// actions
export const addPostActionCreator = (newPost: string) => ({type: 'profile/ADD-POST', newPost} as const)
export const deletePostAC = (id: string) => ({type: 'profile/DELETE-POST', id} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: 'profile/SET-USER-PROFILE', profile} as const)
export const setUserStatus = (status: string) => ({type: 'profile/SET-USER-STATUS', status} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: 'profile/SAVE-PHOTO-SUCCESS', photos} as const)

// thunks
export const getUser = (userId: number) => async (dispatch: Dispatch) => {
  const data = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(data))
}
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
  const data = await profileAPI.getStatus(userId)
  dispatch(setUserStatus(data))
}
export const updateStatus = (newStatus: string) => async (dispatch: Dispatch) => {
  const data = await profileAPI.updateStatus(newStatus)
  if (data.resultCode === 0)
    dispatch(setUserStatus(newStatus))
}

export const savePhoto = (formData: FormData) => async (dispatch: Dispatch) => {
  const data = await profileAPI.savePhoto(formData)
  if (data.resultCode === 0) dispatch(savePhotoSuccess(data.data.photos))
}

export const updateProfile = (formData: FormProfileDataType): AppThunkType => async (dispatch, getState) => {
  const data = await profileAPI.updateProfile(formData)
  if (data.resultCode === 0) await dispatch(getUser(getState().auth.id || 26918))
  else {
    const field = findContactsInError(data.messages[0]) === 'mainlink' ? 'mainLink' : findContactsInError(data.messages[0]) as string
    dispatch(stopSubmit('profileDataForm', {'contacts': {[field]: data.messages[0]}}))
    return Promise.reject()
  }
}
// types
export type profilePageType = {
  posts: Array<PostsType>
  profile: UserProfileType
  status: string
}

export type PostsType = {
  id: string, date: string, message: string, likeCount: number
}

export type UserProfileType = null | {
  aboutMe?: any;
  contacts: ContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription?: any;
  fullName: string;
  userId: number;
  photos: PhotosType;
}
export type ContactsType = {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
}

type PhotosType = {
  small: string
  large: string
}