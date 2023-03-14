import {UserProfileType} from "redux/profile-reducer";
import s from "../ProfileInfo.module.css";
import {Contact} from "./Contact/Contact";
import React from "react";

type PropsType = {
  profile: UserProfileType
  isOwner: boolean
  goToEditMode: () => void
}
export const ProfileData = ({profile, isOwner, goToEditMode}: PropsType) => {
  return profile && <>
    {isOwner && <div>
        <button onClick={goToEditMode}>edit data</button>
    </div>}
      <h2>{profile.fullName}</h2>
      <div><b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'not'}</div>
      <div><b>My professional skills: </b>{profile.lookingForAJobDescription}</div>
      <div><b>About me: </b>{profile.aboutMe}</div>
      <div><b>My contacts: </b>
          <div className={s.contacts}>
            {(Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>)
              .map((key, i) => <Contact key={i} title={key} value={profile.contacts[key]}/>)}</div>
      </div>
  </>
}