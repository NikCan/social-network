import React, {ReactNode} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "redux/profile-reducer";
import {Redirect} from "react-router-dom";
import {FormProfileDataType} from "./ProfileInfo/ProfileData/ProfileDataForm";
import s from './Profile.module.css'
import {Separator} from "../common/Separator/Separator";

type PropsType = {
  profile: UserProfileType
  status: string
  updateStatus: (newStatus: string) => void
  children?: ReactNode
  isAuth: boolean
  isOwner: boolean
  savePhoto: (formData: FormData) => void
  updateProfile: (formData: FormProfileDataType) => Promise<string>
}

export const Profile = ({profile, status, updateStatus, isAuth, isOwner, savePhoto, updateProfile}: PropsType) => {
  return (
    !isAuth
      ? <Redirect to={"/login"}/>
      : <>
        <Separator title={'Profile'}/>
        <div className={s.profileContainer}>
          <ProfileInfo
            updateProfile={updateProfile}
            savePhoto={savePhoto}
            isOwner={isOwner}
            profile={profile}
            status={status}
            updateStatus={updateStatus}
          />
          <MyPostsContainer/>
        </div>
      </>

  )
}
