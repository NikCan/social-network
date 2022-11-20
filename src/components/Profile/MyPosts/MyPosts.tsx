import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {
    ActionsType,
    addPostActionCreator,
    PostsType,
    storeType,
    updateNewPostsTextActionCreator
} from "../../../redux/state";

type MyPostsPropsType = {
    store: storeType
    posts: Array<PostsType>
}

export function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.posts
        .map(p => <Post id={p.id} date={p.date} message={p.message}
                        likeCount={p.likeCount}/>)

    const onclickAddHandler = () => props.store.dispatch(addPostActionCreator())
    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewPostsTextActionCreator(e.currentTarget.value))
    }

    return <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div className={s.item}>
            <div>
                <textarea
                    onChange={onPostChangeHandler}
                    value={props.store.getState().profilePage.newPostText}
                />
            </div>
            <div>
                <button onClick={onclickAddHandler}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}
