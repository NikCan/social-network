// import React from "react";
// import {
//     dialogsPageType,
//     sendMessageActionCreator,
//     updateNewMessageTextActionCreator
// } from "../../redux/dialogs-reducer";
// import {Users} from "./Dialogs";
// import {connect} from "react-redux";
// import {stateType} from "../../redux/redux-store";
// import {Dispatch} from "redux";
//
// type mapStateToPropsType = {
//     dialogsPage: dialogsPageType
// }
// type mapDispatchToPropsType = {
//     updateNewMessageText: (newText: string) => void
//     sendMessage: () => void
// }
// export type DialogsPropsType = mapStateToPropsType&mapDispatchToPropsType
//
//
// const mapStateToProps = (state:stateType):mapStateToPropsType => {
//     return {
//         dialogsPage: state.dialogsPage
//     }
// }
// const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
//     return {
//         updateNewMessageText: (newMessageText) => dispatch(updateNewMessageTextActionCreator(newMessageText)),
//         sendMessage: () => dispatch(sendMessageActionCreator())
//     }
// }
//
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)