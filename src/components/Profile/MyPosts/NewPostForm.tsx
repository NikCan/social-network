import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {FormControl} from "../../common/FormsControls/FormsControls";

export type newPostPropsType = {
    newPost: string
}
const maxLength10 = maxLengthCreator(10)
export const NewPostForm = reduxForm<newPostPropsType>({form: 'newPost'})
((props: InjectedFormProps<newPostPropsType>) => {
        return <>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"it-kamasutra.com"} name={"newPost"} component={FormControl}
                            validate={[required, maxLength10]} typeOfForm={"textarea"}/></div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        </>
    }
)