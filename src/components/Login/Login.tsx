import React from 'react';
import {formDataType, LoginForm} from "./LoginForm";

export const Login = () => {
    const onSubmit = (formData: formDataType) => {
        console.log(formData)
    }
    return <>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </>
}
