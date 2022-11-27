import {ActionsType, dialogsPageType} from "./redux-store";

export type updateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextActionCreator>
export type sendMessageActionType = ReturnType<typeof sendMessageActionCreator>

export const updateNewMessageTextActionCreator = (newMessageText: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: newMessageText} as const
}
export const sendMessageActionCreator = () => ({type: 'SEND-MESSAGE'} as const)

const initialState: dialogsPageType = {
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
    newMessageText: ''
}
export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsType): dialogsPageType => {
    if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newMessageText
    } else if (action.type === 'SEND-MESSAGE') {
        state.messages.push({id: 4, text: state.newMessageText})
        state.newMessageText = ''
    }
    return state
}