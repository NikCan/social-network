import React from "react";
import s from "./ProfileInfo.module.css"

type ProfileInfoType = {}

export function ProfileInfo() {
    return <div>
        <div><img className={s.profileImg} src="https://i.artfile.ru/2560x1440_1526360_[www.ArtFile.ru].jpg" alt=""/></div>
        <div className={s.descriptionBlock}>ava + description</div>
    </div>
}
