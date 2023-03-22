import React from "react";
import s from "./Post.module.css"
import defaultPhoto from "assets/images/default-profile-photo.jpg"
import {UserProfileType} from "redux/profile-reducer";

type PostPropsType = {
  id: string
  profile: UserProfileType
  date: string
  message: string
  likeCount: number
  deletePost: () => void
}

export function Post({profile, deletePost, id, message, date, likeCount}: PostPropsType) {
  return <div className={s.post}>
    <div className={s.item}>
      <div>
        <img src={profile?.photos.small || defaultPhoto}/>
        {date}
      </div>
      <button onClick={deletePost}>x</button>
    </div>
    <div>{message}</div>
    <div><span>____{likeCount} likes____</span></div>
  </div>
}
