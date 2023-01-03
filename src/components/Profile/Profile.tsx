import React, {ReactNode} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {userProfileType} from "../../redux/profile-reducer";

type PropsType = {
    profile: userProfileType
    status: string
    updateStatus: (newStatus: string) => void
    children?: ReactNode
}

export function Profile(props: PropsType) {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}
