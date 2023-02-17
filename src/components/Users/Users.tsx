import React from "react";
import s from "./Users.module.css"
import {userType} from "../../redux/users-reducer";
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
export const Users = ({
                          users,
                          followingInProgress,
                          followThunk,
                          unfollowThunk,
                          totalUsersCount,
                          pageSize,
                          onPageChanged,
                          currentPage
                      }: PropsType) => {

    return <div className={s.usersBlock}>
        <Paginator totalUsersCount={totalUsersCount}
                   onPageChanged={onPageChanged}
                   currentPage={currentPage}
                   pageSize={pageSize}/>
        {users.map(user =>
            <User user={user}
                  followingInProgress={followingInProgress}
                  followThunk={() => followThunk(user.id)}
                  unfollowThunk={() => unfollowThunk(user.id)}
                  key={user.id}/>
        )}
    </div>
}
