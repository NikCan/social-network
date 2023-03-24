import React from "react";
import s from "./Users.module.css"
import {userType} from "../../redux/users-reducer";
import {Paginator, Separator} from "components/common";
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

  const pageUsers = users.map(user =>
    <User user={user}
          followingInProgress={followingInProgress}
          followThunk={() => followThunk(user.id)}
          unfollowThunk={() => unfollowThunk(user.id)}
          key={user.id}/>
  )

  return <div className={s.usersContainer}>
    <Separator title={'Users'}/>
    <div className={s.usersBlock}>
      <Paginator totalItemsCount={totalUsersCount}
                 onPageChanged={onPageChanged}
                 currentPage={currentPage}
                 pageSize={pageSize}/>
      {pageUsers}
    </div>
  </div>
}
