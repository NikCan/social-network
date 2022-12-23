import React from "react";
import s from "./Users.module.css"
import userAvatar from "../../assets/images/avatar.png"
import classNames from "classnames";
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
        <div className={s.selectPageBlock}>
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
                        <NavLink to={'/profile/' + el.id}>
                            <img className={s.userPhoto} alt={"user photo"}
                                 src={el.photos.small ? el.photos.small : userAvatar}/>
                        </NavLink>
                    </div>
                    <div> {!el.followed
                        ? <button className={s.button}
                                  onClick={() => {
                                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                          withCredentials: true,
                                          headers: {
                                              "API-KEY": "08432b91-d4bc-4747-ad4e-b220e331fd94"
                                          }
                                      })
                                          .then((res) => {
                                              console.log(res.data)
                                              if (res.data.resultCode === 0) props.onClickFollowHandler(el.id)
                                          })
                                  }}>follow</button>
                        : <button className={s.button}
                                  onClick={() => {
                                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                          withCredentials: true,
                                          headers: {
                                              "API-KEY": '08432b91-d4bc-4747-ad4e-b220e331fd94'
                                          }
                                      })
                                          .then((res) => {
                                              if (res.data.resultCode === 0) props.onClickUnfollowHandler(el.id)
                                          })
                                  }}>unfollow</button>}
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
