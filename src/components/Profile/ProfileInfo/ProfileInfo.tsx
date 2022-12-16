import React from "react";
import s from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
import {userProfileType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: userProfileType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return !props.profile ? <Preloader/>
        : <div>
            <div><img className={s.profileImg} src="https://i.artfile.ru/2560x1440_1526360_[www.ArtFile.ru].jpg"
                      alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="user-photo"/>
                <h2>{props.profile.fullName}</h2>
                <div>My contacts: {props.profile.contacts.facebook}</div>
            </div>
        </div>
}
