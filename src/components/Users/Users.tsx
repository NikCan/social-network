import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {userType} from "../../redux/users-reducer";
import s from "./Users.module.css"

export const Users = (props: UsersPropsType) => {
    const onClickFollowHandler = (userId: string) => {
        props.follow(userId)
    }
    const onClickUnfollowHandler = (userId: string) => {
        props.unfollow(userId)
    }
    const onClickAddUsersHandler = (users: userType[]) => {
        props.setUsers(users)
    }
    return <div className={s.usersBlock}>
        {
            props.usersPage.users.map(el =>
                <div key={el.id}>
                    <div>
                        <img className={s.userPhoto} src={el.photoUrl}/>
                    </div>
                    <div>{!el.followed ? <button className={s.button}
                                                 onClick={() => onClickFollowHandler(el.id)}>follow</button>
                        : <button className={s.button}
                                  onClick={() => onClickUnfollowHandler(el.id)}>unfollow</button>}
                    </div>
                    <div>
                        <div>{el.status}</div>
                        <div>{el.location.country}</div>
                        <div>{el.location.city}</div>
                    </div>
                </div>
            )
        }
        <button onClick={() => onClickAddUsersHandler}>Add users</button>
    </div>
}
