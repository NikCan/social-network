import React from "react";
import {addPostActionCreator, updateNewPostsTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

type MyPostsContainerPropsType = {}

export function MyPostsContainer(props: MyPostsContainerPropsType) {
    return <StoreContext.Consumer>
        {(store) => {
            const addPostHandler = () => store.dispatch(addPostActionCreator())
            const updateNewPostHandler = (newText: string) => {
                store.dispatch(updateNewPostsTextActionCreator(newText))
            }

            return <MyPosts
                profilePage={store.getState().profilePage}
                addPost={addPostHandler}
                updateNewPostText={updateNewPostHandler}/>
        }
        }
    </StoreContext.Consumer>
}
