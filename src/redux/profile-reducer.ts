import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {v1} from "uuid";

export type addPostActionType = ReturnType<typeof addPostActionCreator>
export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export type setUserStatusActionType = ReturnType<typeof setUserStatus>
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
    photos: {
        small: string
        large: string
    }
}
export type PostsType = {
    id: string, date: string, message: string, likeCount: number
}

export const addPostActionCreator = (newPost: string) => ({type: 'ADD-POST', newPost} as const)
export const setUserProfile = (profile: userProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setUserStatus = (status: string) => ({type: 'SET-USER-STATUS', status} as const)

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
        case "ADD-POST":
            return {
                ...state, posts: [{
                    id: v1(), date: "02.11.2022", message: action.newPost, likeCount: 3
                }, ...state.posts]
            }
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-USER-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export const getUser = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}
export const getStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data))
        })
    }
}

export const updateStatus = (newStatus: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(newStatus).then(data => {
            if (data.resultCode === 0)
                dispatch(setUserStatus(newStatus))
        })
    }
}