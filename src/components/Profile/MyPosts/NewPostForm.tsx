import React, {ChangeEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type newPostPropsType = {
    newPost: string
}
export const NewPostForm = reduxForm<newPostPropsType>({form: 'newPost'})
((props: InjectedFormProps<newPostPropsType>) => {
        return <>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"it-kamasutra.com"} name={"newPost"} component={"textarea"}/></div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        </>
    }
)