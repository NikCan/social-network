import React from "react";
import {
    addPostActionCreator,
    deletePostAC,
    PostsType,
    profilePageType,
    UserProfileType
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {stateType} from "../../../redux/store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: Array<PostsType>
    profile: UserProfileType
}
type mapDispatchToPropsType = {
    addPost: (newPost: string) => void
    deletePost: (id:string) => void
}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPost) => dispatch(addPostActionCreator(newPost)),
        deletePost: (id) => dispatch(deletePostAC(id))
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)