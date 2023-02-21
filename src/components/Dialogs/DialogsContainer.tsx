import React, {ComponentType} from "react";
import {
    dialogsPageType,
    sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hocs/withAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: dialogsPageType
}
type mapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessage) => dispatch(sendMessageActionCreator(newMessage))
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)