import React from "react";
import s from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
import {userProfileType} from "../../../redux/profile-reducer";
import defaultPhoto from "../../../assets/images/default-profile-photo.jpg"
import {ProfileStatusFunc} from "./ProfileStatusFunc";

type ProfileInfoPropsType = {
    profile: userProfileType
    updateStatus: (newStatus: string) => void
    status: string
}

export function ProfileInfo({profile, status, updateStatus}: ProfileInfoPropsType) {
    return !profile ? <Preloader/>
        : <div>
            {/*<div><img className={s.profileImg} src="https://i.artfile.ru/2560x1440_1526360_[www.ArtFile.ru].jpg"*/}
            {/*          alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || defaultPhoto} alt="user-avatar"/>
                <ProfileStatusFunc status={status} updateStatus={updateStatus}/>
                <h2>{profile.fullName}</h2>
                <div>My contacts: {profile.contacts.facebook}</div>
            </div>
        </div>
}
