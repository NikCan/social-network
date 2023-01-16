import React, {ReactNode} from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

type PropsType = {
    children?: ReactNode
    isAuth: boolean
    login: string | null
}

export function Header(props: PropsType) {
    return <header className={s.header}>
        <img src="https://kachaem-torrent.com/wp-content/uploads/2018/05/Grand-Theft-Auto-5-2-768x142.jpg"/>
        <div className={s.loginBlock}>
            <NavLink to={'/login'}>our login</NavLink>
            {props.isAuth ? props.login :
                <NavLink to={'/login'}>login</NavLink>}
        </div>
    </header>
}

