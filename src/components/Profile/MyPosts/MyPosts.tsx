import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {profilePageType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    profilePage: profilePageType
    addPost: () => void
    updateNewPostText: (newText:string) => void
}

export function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.profilePage.posts
        .map(p => <Post id={p.id} date={p.date} message={p.message}
                        likeCount={p.likeCount}/>)

    const onclickAddHandler = () => {
        props.addPost()
    }
    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div className={s.item}>
            <div>
                <textarea
                    onChange={onPostChangeHandler}
                    value={props.profilePage.newPostText}
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
