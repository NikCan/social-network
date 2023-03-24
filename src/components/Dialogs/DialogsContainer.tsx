import React, {ComponentType} from "react";
import {
  dialogsPageType,
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {stateType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hocs/withAuthRedirect";

type mapStateToPropsType = {
  dialogsPage: dialogsPageType,
  name: string
}
type mapDispatchToPropsType = {
  sendMessage: (newMessage: string, name: string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage,
    name: state.auth.login as string
  }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    sendMessage: (newMessage, name) => dispatch(sendMessageActionCreator(newMessage,name))
  }
}

export default compose<ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)