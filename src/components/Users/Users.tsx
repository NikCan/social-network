import React from "react";
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
    const onClickFollowHandler = (userId: string) => {
        props.follow(userId)
    }
    const onClickUnfollowHandler = (userId: string) => {
        props.unfollow(userId)
    }
    return <ul>
        {props.usersPage.users.map(el =>
            <li>{el.name}
                {!el.followed && <button style={{marginLeft: "10px"}} onClick={() => onClickFollowHandler(el.id)}>follow</button>}
                {el.followed && <button style={{marginLeft: "10px"}} onClick={() => onClickUnfollowHandler(el.id)}>unfollow</button>}
            </li>
        )}
    </ul>
}
