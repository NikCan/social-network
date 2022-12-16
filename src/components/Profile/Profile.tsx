import React, {ReactNode} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {userProfileType} from "../../redux/profile-reducer";

type PropsType = {
    setUserProfile: (profile: userProfileType) => void
    profile: userProfileType
    children?: ReactNode
}

export function Profile(props: PropsType) {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}
