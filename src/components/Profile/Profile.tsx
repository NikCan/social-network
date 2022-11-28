import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {}

export function Profile(props: ProfilePropsType) {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer/>
    </div>
}
