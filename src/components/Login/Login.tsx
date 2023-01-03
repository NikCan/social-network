import React, {ComponentType} from 'react';
import {formDataType, LoginForm} from "./LoginForm";
import {stateType} from "../../redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {postAuthData} from "../../redux/auth-reducer";

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: formDataType) => {
        props.postAuthData(formData)
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
    postAuthData: (formData: formDataType) => void
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        userId: state.auth.userId,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {postAuthData}),
    // withAuthRedirect
)(Login)