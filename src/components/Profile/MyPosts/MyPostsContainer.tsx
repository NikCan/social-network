import React from "react";
import {addPostActionCreator, updateNewPostsTextActionCreator} from "../../../redux/profile-reducer";
import {storeType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";

type MyPostsContainerPropsType = {
    store:storeType
}

export function MyPostsContainer(props: MyPostsContainerPropsType) {
    const addPostHandler = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const updateNewPostHandler = (newText: string) => {
        props.store.dispatch(updateNewPostsTextActionCreator(newText))
    }

    return <MyPosts
        profilePage={props.store.getState().profilePage}
        addPost={addPostHandler}
        updateNewPostText={updateNewPostHandler}
    />
}
