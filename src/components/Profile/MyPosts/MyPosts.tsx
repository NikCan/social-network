import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {NewPostForm, newPostPropsType} from "./NewPostForm";

export const MyPosts = ({posts, deletePost, addPost, profile}: MyPostsPropsType) => {

  const postsElements = posts
    .map((p, index) => <Post
      key={index}
      profile={profile}
      id={p.id}
      date={p.date}
      message={p.message}
      likeCount={p.likeCount}
      deletePost={() => deletePost(p.id)}
    />)

  const addNewPost = (values: newPostPropsType) => {
    addPost(values.newPost)
  }

  return <div className={s.postsBlock}>
    <h2>My posts</h2>
    <div className={s.item}>
      <NewPostForm onSubmit={addNewPost}/>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
};
