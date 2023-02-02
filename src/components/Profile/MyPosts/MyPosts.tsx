import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {NewPostForm, newPostPropsType} from "./NewPostForm";

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts
        .map((p, index) => {
            const deletePost = () => {
                props.deletePost(p.id)
            }
            return <Post id={p.id} date={p.date} message={p.message}
                         likeCount={p.likeCount} key={index} deletePost={deletePost}/>
        })

    const addNewPost = (values: newPostPropsType) => {
        props.addPost(values.newPost)
    }

    return <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div className={s.item}>
            <div>
                <NewPostForm onSubmit={addNewPost}/>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
};
