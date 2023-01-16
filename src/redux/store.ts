import {addPostActionType, profileReducer} from "./profile-reducer";
// import {dialogsReducer, sendMessageActionType, updateNewMessageTextActionType} from "./dialogs-reducer";
//
// type dialogsPageType = {
//     messages: Array<MessagesType>
//     dialogs: Array<DialogsType>
//     newMessageText: string
// }
// type profilePageType = {
//     posts: Array<PostsType>,
//     newPostText: string
// }
// type DialogsType = {
//     id: number, name: string
// }
// type MessagesType = {
//     id: number, text: string
// }
// type PostsType = {
//     id: number, date: string, message: string, likeCount: number
// }
// type StateType = {
//     profilePage: profilePageType
//     dialogsPage: dialogsPageType
// }
// type ActionsType =
//     addPostActionType
//     | updateNewPostsTextActionType
//     | updateNewMessageTextActionType
//     | sendMessageActionType
//
// type storeType = {
//     _state: StateType
//     _rerender: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionsType) => void
// }
//
// const store: storeType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, date: "17.10.2022", message: "HI", likeCount: 2},
//                 {id: 2, date: "18.10.2022", message: "How are you?", likeCount: 5},
//                 {id: 3, date: "18.10.2022", message: "I'm Nikita", likeCount: 76},
//                 {id: 4, date: "18.10.2022", message: "I'm 32", likeCount: 4},
//                 {id: 5, date: "18.10.2022", message: "I'm from Russia", likeCount: 0},
//             ],
//             newPostText: 'it-kamasutra.com'
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, text: "Hello"},
//                 {id: 2, text: "How are you?"},
//                 {id: 3, text: "Good bye"},
//             ],
//             dialogs: [
//                 {id: 1, name: "Nikita"},
//                 {id: 2, name: "Dasha"},
//                 {id: 3, name: "Asya"},
//                 {id: 4, name: "..."},
//             ],
//             newMessageText: ''
//         }
//     },
//     _rerender() {
//     },
//     subscribe(observer) {
//         this._rerender = observer
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._rerender()
//     }
// }
//
//
