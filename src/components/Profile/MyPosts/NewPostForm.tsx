import React, { FormEvent } from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../common";
import s from '../ProfileInfo/ProfileInfo.module.css'

export type newPostPropsType = {
  newPost: string
}
export const NewPostForm = reduxForm<newPostPropsType>({form: 'newPost'})
(({handleSubmit,reset}: InjectedFormProps<newPostPropsType>) => {
    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      reset()
      // @ts-ignore
      handleSubmit()
    }
    return <>
      <form onSubmit={submitHandler}>
        <div><Field style={{width: '300px', height: '100px'}} placeholder={"type your post"} name={"newPost"}
                    component={FormControl} typeofform={"textarea"}/></div>
        <div>
          <button style={{marginTop: '14px'}} className={s.button}>Add post</button>
        </div>
      </form>
    </>
  }
)