import {ActionsType} from "./store";
import {v1} from "uuid";

export type sendMessageActionType = ReturnType<typeof sendMessageActionCreator>
export type dialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
export type DialogsType = {
    id: string, name: string
}
export type MessagesType = {
    id: string, text: string
}

export const sendMessageActionCreator = (newMessage: string) => ({type: 'SEND-MESSAGE', newMessage} as const)

const initialState: dialogsPageType = {
    messages: [
        {id: "1", text: "Hello"},
        {id: "2", text: "How are you?"},
        {id: "3", text: "Good bye"},
    ],
    dialogs: [
        {id: "1", name: "Nikita"},
        {id: "2", name: "Dasha"},
        {id: "3", name: "Asya"},
        {id: "4", name: "..."},
    ],
}

export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsType): dialogsPageType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            return {...state, messages: [...state.messages, {id: v1(), text: action.newMessage}]}
        default:
            return state
    }

}