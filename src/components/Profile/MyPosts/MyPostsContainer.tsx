import React from "react";
import {addPostActionCreator, profilePageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {stateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    profilePage: profilePageType
}
type mapDispatchToPropsType = {
    addPost: (newPost: string) => void
}
export type MyPostsPropsType = mapStateToPropsType&mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPost) => dispatch(addPostActionCreator(newPost))
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)