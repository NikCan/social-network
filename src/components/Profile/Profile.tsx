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

export function Profile({profile, status, updateStatus, isAuth, children}: PropsType) {
    return !isAuth ? <Redirect to={"/login"}/> : <div>
        <ProfileInfo profile={profile}
                     status={status}
                     updateStatus={updateStatus}/>
        <MyPostsContainer/>
    </div>
}
