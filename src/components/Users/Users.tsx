import React from "react";
import s from "./Users.module.css"
import userAvatar from "../../assets/images/avatar.png"
import classNames from "classnames";
import {userType} from "../../redux/users-reducer";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: userType[]
    onClickFollowHandler: (userId: string) => void
    onClickUnfollowHandler: (userId: string) => void
    onPageChanged: (pageNumber: number) => void

}
export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.usersBlock}>
        <div>
            {pages.map((p, i) => {
                    return <span key={i} className={classNames({
                        [s.selectedPage]: p === props.currentPage
                    })} onClick={() => props.onPageChanged(p)}>{p}</span>;
                }
            )}
        </div>
        {
            props.users.map(el =>
                <div key={el.id}>
                    <div>
                        <img className={s.userPhoto} alt={"user photo"}
                             src={el.photoUrl != null ? el.photoUrl : userAvatar}/>
                    </div>
                    <div>{!el.followed ? <button className={s.button}
                                                 onClick={() => props.onClickFollowHandler(el.id)}>follow</button>
                        : <button className={s.button}
                                  onClick={() => props.onClickUnfollowHandler(el.id)}>unfollow</button>}
                    </div>
                    <div>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                        <div>{el.location?.country}</div>
                        <div>{el.location?.city}</div>
                    </div>
                    <hr/>
                </div>
            )
        }
    </div>
}
