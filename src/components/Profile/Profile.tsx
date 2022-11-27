import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, profilePageType, storeType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: storeType
}

export function Profile(props: ProfilePropsType) {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            store={props.store}
        />
    </div>
}
