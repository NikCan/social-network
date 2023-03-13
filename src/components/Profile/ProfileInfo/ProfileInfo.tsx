import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css"
import {Preloader} from "components/common/Preloader/Preloader";
import {userProfileType} from "redux/profile-reducer";
import defaultPhoto from "assets/images/default-profile-photo.jpg"
import {ProfileStatusFunc} from "./ProfileStatusFunc";

type ProfileInfoPropsType = {
  profile: userProfileType
  updateStatus: (newStatus: string) => void
  status: string
  isOwner: boolean
  savePhoto: (formData: FormData) => void
}

export function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto}: ProfileInfoPropsType) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      const formData = new FormData();
      formData.append('image', file);
      savePhoto(formData)
    }
  }
  return !profile ? <Preloader/>
    : <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || defaultPhoto} alt="user-avatar"/>
        {isOwner && <div><input type="file" onChange={(e) => onChangeHandler(e)}/></div>}
        <ProfileStatusFunc status={status} updateStatus={updateStatus}/>
        <h2>{profile.fullName}</h2>
        <div>My contacts: {profile.contacts.facebook}</div>
      </div>
    </div>
}
