import {ActionsType} from "./redux-store";

export type addPostActionType = { type: 'ADD-POST' }
export type updateNewPostsTextActionType = {
    type: 'UPDATE-NEW-POSTS-TEXT'
    newPost: string
}
export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export type profilePageType = {
    posts: Array<PostsType>,
    newPostText: string,
    profile: userProfileType
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
    id: number, date: string, message: string, likeCount: number
}

export const addPostActionCreator = (): ActionsType => ({type: 'ADD-POST'})
export const updateNewPostsTextActionCreator = (newPost: string): ActionsType => {
    return {type: 'UPDATE-NEW-POSTS-TEXT', newPost: newPost}
}
export const setUserProfile = (profile: userProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)

const initialState: profilePageType = {
    posts: [
        {id: 1, date: "17.10.2022", message: "HI", likeCount: 2},
        {id: 2, date: "18.10.2022", message: "How are you?", likeCount: 5},
        {id: 3, date: "18.10.2022", message: "I'm Nikita", likeCount: 76},
        {id: 4, date: "18.10.2022", message: "I'm 32", likeCount: 4},
        {id: 5, date: "18.10.2022", message: "I'm from Russia", likeCount: 0},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
}

export const profileReducer = (state: profilePageType = initialState, action: ActionsType): profilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state, posts: [...state.posts, {
                    id: 6, date: "02.11.2022", message: state.newPostText, likeCount: 3
                }], newPostText: ''
            }
        case "UPDATE-NEW-POSTS-TEXT":
            return {...state, newPostText: action.newPost}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}