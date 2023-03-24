import React, {ReactNode} from "react";
import s from "./Header.module.css"
import style from "../Profile/ProfileInfo/ProfileInfo.module.css"
import {NavLink} from "react-router-dom";

type PropsType = {
  children?: ReactNode
  isAuth: boolean
  login: string | null
  logout: () => void
}

export const Header = ({logout, login, isAuth}: PropsType) => {
  return <header className={s.header}>
    {
      isAuth
        ? <div className={s.loginBlock}>
          {login}
          <button className={style.button} onClick={logout}>logout</button>
        </div>
        : <div className={s.loginButton}><NavLink to={'/login'}>login</NavLink></div>
    }
  </header>
}

