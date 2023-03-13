import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {v1} from "uuid";

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
      return {...state, profile: {...state.profile, photos: action.photos}}
    default:
      return state
  }
}

// actions
export const addPostActionCreator = (newPost: string) => ({type: 'profile/ADD-POST', newPost} as const)
export const deletePostAC = (id: string) => ({type: 'profile/DELETE-POST', id} as const)
export const setUserProfile = (profile: userProfileType) => ({type: 'profile/SET-USER-PROFILE', profile} as const)
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
  if (data.resultCode === 0)
    dispatch(savePhotoSuccess(data.data.photos))
}
// types
export type addPostActionType = ReturnType<typeof addPostActionCreator>
export type deletePostActionType = ReturnType<typeof deletePostAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export type setUserStatusActionType = ReturnType<typeof setUserStatus>
export type savePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>
export type profilePageType = {
  posts: Array<PostsType>
  profile: userProfileType
  status: string
}
export type userProfileType = null | {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: PhotosType
}
export type PostsType = {
  id: string, date: string, message: string, likeCount: number
}

type PhotosType = {
  small: string
  large: string
}