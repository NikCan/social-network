import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {FormControl} from "components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "utils/validators/validator";

export type AddMessageFormPropsType = {
  newMessageBody: string
}
const maxLength15 = maxLengthCreator(15)
export const AddMessageForm = reduxForm<AddMessageFormPropsType>({form: 'dialogAddMessageForm'})
((props: InjectedFormProps<AddMessageFormPropsType>) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={FormControl} name={"newMessageBody"} placeholder={"Enter your message"}
             validate={[required, maxLength15]} typeofform={"textarea"}/>
    </div>
    <div>
      <button>Send</button>
    </div>
  </form>
})