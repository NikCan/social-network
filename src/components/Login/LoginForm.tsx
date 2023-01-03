import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type formDataType = {
    login: string
    password: string
    rememberMe: boolean
}
export const LoginForm = reduxForm<formDataType>({
    form: 'login'
})((props: InjectedFormProps<formDataType>) => {
        return <>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"Login"} name={"login"} component={"input"}/></div>
                <div><Field placeholder={"Password"} name={"password"} component={"input"}/></div>
                <div><Field type={"checkbox"} name={"rememberMe"} component={"input"}/>remember me</div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    }
)