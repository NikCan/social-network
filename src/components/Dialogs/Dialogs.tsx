import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs
        .map((dialog, index) => <DialogItem name={dialog.name} id={dialog.id} key={index}/>)

    const messagesElements = props.dialogsPage.messages
        .map((message, index) => <Message text={message.text} id={message.id} key={index}/>)

    const onClickSendHandler = () => props.sendMessage()
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }
    return <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
            <div><textarea
                placeholder={'Enter your message'}
                value={props.dialogsPage.newMessageText}
                onChange={onChangeHandler}>
            </textarea></div>
            <div>
                <button onClick={onClickSendHandler}>Send</button>
            </div>
        </div>
    </div>
}

