import React, {ChangeEvent, useState} from "react";
import s from "./ProfileInfo.module.css"
import {Preloader} from "components/common/Preloader/Preloader";
import {UserProfileType} from "redux/profile-reducer";
import defaultPhoto from "assets/images/default-profile-photo.jpg"
import {ProfileData} from "./ProfileData/ProfileData";
import {FormProfileDataType, ProfileDataForm} from "./ProfileData/ProfileDataForm";
import {ProfileStatusFunc} from "./ProfileStatus/ProfileStatusFunc";

type ProfileInfoPropsType = {
  profile: UserProfileType
  updateStatus: (newStatus: string) => void
  status: string
  isOwner: boolean
  savePhoto: (formData: FormData) => void
  updateProfile: (formData: FormProfileDataType) => Promise<string>
}

export function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto, updateProfile}: ProfileInfoPropsType) {
  const [editMode, setEditMode] = useState<boolean>(false)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      const formData = new FormData();
      formData.append('image', file);
      savePhoto(formData)
    }
  }
  const saveDataHandler = (formData: FormProfileDataType) => {
    updateProfile(formData).then(()=>{
      setEditMode(false)
    })
  }
  return !profile ? <Preloader/>
    : <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || defaultPhoto} alt="user-avatar"/>
        {isOwner && <div><input type="file" onChange={(e) => onChangeHandler(e)}/></div>}
        <ProfileStatusFunc status={status} updateStatus={updateStatus}/>
        {editMode
          ? <ProfileDataForm initialValues={profile} onSubmit={saveDataHandler}/>
          : <ProfileData isOwner={isOwner} profile={profile} goToEditMode={() => setEditMode(true)}/>}
      </div>
    </div>
}