import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageForm, AddMessageFormPropsType} from "./AddMessageForm";

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs
        .map((dialog, index) => <DialogItem name={dialog.name} id={dialog.id} key={index}/>)

    const messagesElements = props.dialogsPage.messages
        .map((message, index) => <Message text={message.text} id={message.id} key={index}/>)

    const addNewMessage = (values: AddMessageFormPropsType) => {
        props.sendMessage(values.newMessageBody)
    }
    return <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    </div>
}

