import React from "react";
import s from "./Header.module.css"
type HeaderType = {}

export function Header() {
    return <header className={s.header}>
        <img src="https://kachaem-torrent.com/wp-content/uploads/2018/05/Grand-Theft-Auto-5-2-768x142.jpg"/>
    </header>
}
