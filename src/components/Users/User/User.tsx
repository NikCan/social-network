import React from "react";
import s from "./User.module.css"
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
    return <div>
        <div>
            <NavLink to={'/profile/' + user.id}>
                <img className={s.userPhoto} alt={"user photo"}
                     src={user.photos.small ? user.photos.small : userAvatar}/>
            </NavLink>
        </div>
        <div> {!user.followed
            ? <button className={s.button}
                      onClick={() => {
                          followThunk()
                      }}
                      disabled={followingInProgress.some(id => id === user.id)}>follow</button>
            : <button className={s.button}
                      onClick={() => {
                          unfollowThunk()
                      }}
                      disabled={followingInProgress.some(id => id === user.id)}>unfollow</button>}
        </div>
        <div>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>{user.location?.country}</div>
            <div>{user.location?.city}</div>
        </div>
        <hr/>
    </div>
}
