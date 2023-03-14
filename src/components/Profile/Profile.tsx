import React, {ReactNode} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "redux/profile-reducer";
import {Redirect} from "react-router-dom";
import {FormProfileDataType} from "./ProfileInfo/ProfileData/ProfileDataForm";

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

export function Profile({profile, status, updateStatus, isAuth, isOwner, savePhoto, updateProfile}: PropsType) {
  return !isAuth ? <Redirect to={"/login"}/> : <div>
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
}
