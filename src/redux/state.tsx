export type messagesPage = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
export type profilePage = {
    posts: Array<PostsType>,
    newPostText: string
}
export type DialogsType = {
    id: number, name: string
}
export type MessagesType = {
    id: number, text: string
}
export type PostsType = {
    id: number, date: string, message: string, likeCount: number
}
export type StateType = {
    profilePage: profilePage
    messagesPage: messagesPage
}
export type ActionsType = addPostActionType | updateNewPostsTextActionType
type addPostActionType = {
    type: 'ADD-POST'
}
type updateNewPostsTextActionType = {
    type: 'UPDATE-NEW-POSTS-TEXT'
    newPost: string
}
// type addPostActionType = ReturnType<typeof addPostActionCreator>
// type updateNewPostsTextActionType = ReturnType<typeof updateNewPostsTextActionCreator>
export type storeType = {
    _state: StateType
    _rerender: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export const store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, date: "17.10.2022", message: "HI", likeCount: 2},
                {id: 2, date: "18.10.2022", message: "How are you?", likeCount: 5},
                {id: 3, date: "18.10.2022", message: "I'm Nikita", likeCount: 76},
                {id: 4, date: "18.10.2022", message: "I'm 32", likeCount: 4},
                {id: 5, date: "18.10.2022", message: "I'm from Russia", likeCount: 0},
            ],
            newPostText: 'it-kamasutra.com'
        },
        messagesPage: {
            messages: [
                {id: 1, text: "Hello"},
                {id: 2, text: "How are you?"},
                {id: 3, text: "Good bye"},
            ],
            dialogs: [
                {id: 1, name: "Nikita"},
                {id: 2, name: "Dasha"},
                {id: 3, name: "Asya"},
                {id: 4, name: "..."},
            ],
        }
    },
    _rerender() {
    },
    subscribe(observer) {
        this._rerender = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostsType = {
                id: 6,
                date: "02.11.2022",
                message: this._state.profilePage.newPostText,
                likeCount: 3
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerender()
        } else if (action.type === 'UPDATE-NEW-POSTS-TEXT') {
            this._state.profilePage.newPostText = action.newPost
            this._rerender()
        }
    }
}
export const addPostActionCreator = (): ActionsType => ({type: 'ADD-POST'}) //as const)
export const updateNewPostsTextActionCreator = (newPost: string): ActionsType => {
    return {type: 'UPDATE-NEW-POSTS-TEXT', newPost: newPost} //as const
}
