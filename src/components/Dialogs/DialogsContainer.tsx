import React, {ChangeEvent} from "react";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {storeType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: storeType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    const sendMessageHandler = () => props.store.dispatch(sendMessageActionCreator())
    const updateNewMessageTextHandler = (newMessageText: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newMessageText))
    }

    return <Dialogs dialogsPage={props.store.getState().dialogsPage}
                    updateNewMessageText={updateNewMessageTextHandler}
                    sendMessage={sendMessageHandler}/>
}

