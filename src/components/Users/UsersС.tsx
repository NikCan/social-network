import React from "react";
import s from "./Users.module.css";
import userAvatar from "../../assets/images/avatar.png";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    onClickFollowHandler = (userId: string) => {
        this.props.follow(userId)
    }
    onClickUnfollowHandler = (userId: string) => {
        this.props.unfollow(userId)
    }

    render() {
        return <div className={s.usersBlock}>
            <div>
                <span className={s.selectedPage}>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            {
                this.props.users.map(el =>
                    <div key={el.id}>
                        <div>
                            <img className={s.userPhoto}
                                 src={el.photoUrl != null ? el.photoUrl : userAvatar}/>
                        </div>
                        <div>{!el.followed ? <button className={s.button}
                                                     onClick={() => this.onClickFollowHandler(el.id)}>follow</button>
                            : <button className={s.button}
                                      onClick={() => this.onClickUnfollowHandler(el.id)}>unfollow</button>}
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
}