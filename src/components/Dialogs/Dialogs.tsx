import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType, MessagesType} from "../../redux/state";

type DialogsPropsType = {
    state: {
        dialogs: Array<DialogsType>,
        messages: Array<MessagesType>
    }
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.state. dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.state. messages
        .map(message => <Message text={message.text} id={message.id}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>()
    const onClickSendHandler = () => {
        let m = newMessage.current?.value
        alert(m)
    }

    return <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {dialogsElements}
                    </div>
        <div className={s.messages}>
            {messagesElements}
            <textarea ref={newMessage}></textarea>
            <button onClick={onClickSendHandler}>Send</button>
        </div>
            </div>
}

