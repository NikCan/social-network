import React, {ComponentType} from 'react';
import {formRegDataType, LoginForm} from "./LoginForm";
import {stateType} from "../../redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: formRegDataType) => {
        props.login(formData)
    }
    return props.isAuth ? <Redirect to={"/profile"}/> : <>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </>
}

type mapStateToPropsType = {
    userId: number | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    login: (formData: formRegDataType) => void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        userId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {login}),
    // withAuthRedirect
)(Login)