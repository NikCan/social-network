import React from "react";
import s from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
import {userProfileType} from "../../../redux/profile-reducer";
import defaultPhoto from "../../../assets/images/default-profile-photo.jpg"
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: userProfileType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    return !props.profile ? <Preloader/>
        : <div>
            {/*<div><img className={s.profileImg} src="https://i.artfile.ru/2560x1440_1526360_[www.ArtFile.ru].jpg"*/}
            {/*          alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || defaultPhoto} alt="user-photo"/>
                <ProfileStatus status={"Hello everybody!"}/>
                <h2>{props.profile.fullName}</h2>
                <div>My contacts: {props.profile.contacts.facebook}</div>
            </div>
        </div>
}
