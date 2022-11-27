import {ActionsType, PostsType, profilePageType} from "./redux-store";

export type addPostActionType = { type: 'ADD-POST' }
export type updateNewPostsTextActionType = {
    type: 'UPDATE-NEW-POSTS-TEXT'
    newPost: string
}
export const addPostActionCreator = (): ActionsType => ({type: 'ADD-POST'})
export const updateNewPostsTextActionCreator = (newPost: string): ActionsType => {
    return {type: 'UPDATE-NEW-POSTS-TEXT', newPost: newPost}
}
const initialState: profilePageType = {
    posts: [
        {id: 1, date: "17.10.2022", message: "HI", likeCount: 2},
        {id: 2, date: "18.10.2022", message: "How are you?", likeCount: 5},
        {id: 3, date: "18.10.2022", message: "I'm Nikita", likeCount: 76},
        {id: 4, date: "18.10.2022", message: "I'm 32", likeCount: 4},
        {id: 5, date: "18.10.2022", message: "I'm from Russia", likeCount: 0},
    ],
    newPostText: 'it-kamasutra.com'
}
export const profileReducer = (state: profilePageType = initialState, action: ActionsType): profilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 6,
                date: "02.11.2022",
                message: state.newPostText,
                likeCount: 3
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POSTS-TEXT":
            state.newPostText = action.newPost
            return state
        default:
            return state
    }
}