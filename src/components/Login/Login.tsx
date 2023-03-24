import React, {ComponentType} from 'react';
import {formRegDataType, LoginForm} from "./LoginForm";
import {stateType} from "redux/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {Separator} from "components/common";
import s from './Login.module.css'

const Login = ({login, isAuth, captchaUrl}: LoginPropsType) => {
  const onSubmit = (formData: formRegDataType) => {
    login(formData)
  }
  return isAuth
    ? <Redirect to={"/profile"}/>
    : <div className={s.loginContainer}>
      <Separator title={'Login'}/>
      <div className={s.loginBlock}>
        <div>
          <p>To log in get registered
            <a href={'https://social-network.samuraijs.com/'}
               target={'_blank'}> here
            </a>
          </p>
          <p>or use common test account credentials:</p>
          <p>Email: free@samuraijs.com</p>
          <p>Password: free</p>
        </div>
        <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
      </div>

    </div>
}

type mapStateToPropsType = {
  userId: number | null
  isAuth: boolean
  captchaUrl: string | null
}
type mapDispatchToPropsType = {
  login: (formData: formRegDataType) => void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => {
  return {
    userId: state.auth.id,
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

export default compose<ComponentType>(
  connect(mapStateToProps, {login}),
  // withAuthRedirect
)(Login)