import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";

export type formDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const maxLength30 = maxLengthCreator(30)
export const LoginForm = reduxForm<formDataType>({
    form: 'login'
})((props: InjectedFormProps<formDataType>) => {
        return <>
            <form onSubmit={props.handleSubmit}>
                <div><Field typeOfForm={"input"} placeholder={"Login"} name={"login"} component={FormControl} validate={[required, maxLength30]}/></div>
                <div><Field typeOfForm={"input"} placeholder={"Password"} name={"password"} component={FormControl} validate={[required, maxLength30]}/></div>
                <div><Field typeOfForm={"input"} type={"checkbox"} name={"rememberMe"} component={FormControl}/>remember me</div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    }
)