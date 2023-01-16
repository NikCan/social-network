import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

export type AddMessageFormPropsType = {
    newMessageBody: string
}

export const AddMessageForm = reduxForm<AddMessageFormPropsType>({form: 'dialogAddMessageForm'})
((props: InjectedFormProps<AddMessageFormPropsType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
})