import React from "react";
import s from "./User.module.css"
import style from "../../Profile/ProfileInfo/ProfileInfo.module.css"
import userAvatar from "../../../assets/images/avatar.png"
import {userType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
  user: userType
  followingInProgress: number[]
  followThunk: () => void
  unfollowThunk: () => void
}
export const User = ({user, unfollowThunk, followThunk, followingInProgress}: PropsType) => {
  return <div className={s.userContainer}>
    <div>
      <NavLink to={'/profile/' + user.id}>
        <img className={s.userPhoto} alt={"user photo"}
             src={user.photos.small ? user.photos.small : userAvatar}/>
      </NavLink>
    </div>
    <div className={s.infoBlock}>
      <div style={{overflowWrap: 'anywhere'}}>{user.name}</div>
      <div>{user.status}</div>
      <div>{user.location?.country}</div>
      <div>{user.location?.city}</div>
    </div>
    <div> {!user.followed
      ? <button className={style.button}
                onClick={() => {
                  followThunk()
                }}
                disabled={followingInProgress.some(id => id === user.id)}>follow</button>
      : <button className={style.button}
                onClick={() => {
                  unfollowThunk()
                }}
                disabled={followingInProgress.some(id => id === user.id)}>unfollow</button>}
    </div>
  </div>
}
