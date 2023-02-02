import React from "react";
import s from "./Users.module.css"
import userAvatar from "../../assets/images/avatar.png"
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: userType[]
    followingInProgress: number[]
    onPageChanged: (pageNumber: number) => void
    followThunk: (id: number) => void
    unfollowThunk: (id: number) => void
}
export const Users = (props: PropsType) => {
    return <div className={s.usersBlock}>
        <Paginator totalUsersCount={props.totalUsersCount} onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage} pageSize={props.pageSize}/>
        {props.users.map(el =>
            <User user={el} followingInProgress={props.followingInProgress} followThunk={() => props.followThunk(el.id)}
                  unfollowThunk={() => props.unfollowThunk(el.id)} key={el.id}/>
        )}
    </div>
}
