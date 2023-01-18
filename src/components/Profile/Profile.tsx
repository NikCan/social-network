import React, {ReactNode} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {userProfileType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";

type PropsType = {
    profile: userProfileType
    status: string
    updateStatus: (newStatus: string) => void
    children?: ReactNode
    isAuth: boolean
}

export function Profile(props: PropsType) {
    return !props.isAuth ? <Redirect to={"/login"}/> : <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}
