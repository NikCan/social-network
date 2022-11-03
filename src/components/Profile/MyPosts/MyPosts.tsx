import React, {RefObject} from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

export function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.posts
        .map(p => <Post id={p.id} date={p.date} message={p.message}
                        likeCount={p.likeCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onclickAddHandler = () => {
        let text = newPostElement.current?.value
        props.addPost(text ? text : "")
    }

    return <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div className={s.item}>
            <div><textarea ref={newPostElement}></textarea></div>
            <div>
                <button onClick={onclickAddHandler}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}
