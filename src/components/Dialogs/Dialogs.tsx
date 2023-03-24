import React from "react";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageForm, AddMessageFormPropsType} from "./AddMessageForm";
import {Separator} from "components/common";

export const Dialogs = ({dialogsPage, sendMessage, name}: DialogsPropsType) => {
  const dialogsElements = dialogsPage.dialogs
    .map((dialog, index) => <DialogItem name={dialog.name} id={dialog.id} key={index}/>)

  const messagesElements = dialogsPage.messages
    .map((message, index) => <Message text={message.text} id={message.id} key={index}/>)

  const addNewMessage = (values: AddMessageFormPropsType) => {
    sendMessage(values.newMessageBody, name)
  }
  return <div className={s.dialogContainer}>
    <Separator title={'Messages'}/>
    <div className={s.dialogBlock}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
    <div className={s.addMessage}>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  </div>
}

