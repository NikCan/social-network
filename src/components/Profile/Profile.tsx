import React, {ReactNode} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {userProfileType} from "redux/profile-reducer";
import {Redirect} from "react-router-dom";

type PropsType = {
  profile: userProfileType
  status: string
  updateStatus: (newStatus: string) => void
  children?: ReactNode
  isAuth: boolean
  isOwner: boolean
  savePhoto: (formData: FormData) => void
}

export function Profile({profile, status, updateStatus, isAuth, isOwner, savePhoto}: PropsType) {
  return !isAuth ? <Redirect to={"/login"}/> : <div>
    <ProfileInfo
      savePhoto={savePhoto}
      isOwner={isOwner}
      profile={profile}
      status={status}
      updateStatus={updateStatus}
    />
    <MyPostsContainer/>
  </div>
}
