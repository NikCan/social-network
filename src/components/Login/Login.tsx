import React, {ComponentType} from 'react';
import {formRegDataType, LoginForm} from "./LoginForm";
import {stateType} from "../../redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: formRegDataType) => {
        props.login(formData)
    }
    return <>
        <h1>Login</h1>
        {props.userId && <div>Hello, {props.userId}!</div>}
        <LoginForm onSubmit={onSubmit}/>
    </>
}

type mapStateToPropsType = {
    userId: number | null
}
type mapDispatchToPropsType = {
    login: (formData: formRegDataType) => void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        userId: state.auth.id,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {login}),
    // withAuthRedirect
)(Login)