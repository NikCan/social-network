import React, {ComponentType} from 'react';
import {formRegDataType, LoginForm} from "./LoginForm";
import {stateType} from "redux/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = ({login, isAuth, userId, captchaUrl}: LoginPropsType) => {
  const onSubmit = (formData: formRegDataType) => {
    login(formData)
  }
  return isAuth ? <Redirect to={"/profile"}/> : <>
    <h1>Login</h1>
    <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
  </>
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