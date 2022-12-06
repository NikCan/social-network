import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {userType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios";
import userAvatar from "../../assets/images/avatar.png"

export const Users = (props: UsersPropsType) => {
    const onClickFollowHandler = (userId: string) => {
        props.follow(userId)
    }
    const onClickUnfollowHandler = (userId: string) => {
        props.unfollow(userId)
    }
    const onClickAddUsersHandler = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    return <div className={s.usersBlock}>
        {
            props.usersPage.users.map(el =>
                <div key={el.id}>
                    <div>
                        <img className={s.userPhoto}
                             src={el.photoUrl != null ? el.photoUrl : userAvatar}/>
                    </div>
                    <div>{!el.followed ? <button className={s.button}
                                                 onClick={() => onClickFollowHandler(el.id)}>follow</button>
                        : <button className={s.button}
                                  onClick={() => onClickUnfollowHandler(el.id)}>unfollow</button>}
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
        <button onClick={onClickAddUsersHandler}>Add users</button>
    </div>
}
