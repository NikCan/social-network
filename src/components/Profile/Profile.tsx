import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {store, storeType} from "../../redux/state";

type ProfilePropsType = {
    store: storeType
}

export function Profile(props: ProfilePropsType) {

    return <div>
        <ProfileInfo/>
        <MyPosts
            store={store}
            posts={props.store.getState().profilePage.posts}
        />
    </div>
}
