import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsContainerPropsType = {}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    return <StoreContext.Consumer>
        {(store) => {
            const sendMessageHandler = () => store.dispatch(sendMessageActionCreator())
            const updateNewMessageTextHandler = (newMessageText: string) => {
                store.dispatch(updateNewMessageTextActionCreator(newMessageText))
            }
            return <Dialogs dialogsPage={store.getState().dialogsPage}
                            updateNewMessageText={updateNewMessageTextHandler}
                            sendMessage={sendMessageHandler}/>
        }
        }
    </StoreContext.Consumer>
}
