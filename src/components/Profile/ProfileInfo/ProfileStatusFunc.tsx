import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
  status: string
  updateStatus: (newStatus: string) => void
}

export const ProfileStatusFunc = (props: ProfileStatusPropsType) => {
  const [status, setStatus] = useState<string>(props.status)
  const [editMode, setEditMode] = useState<boolean>(false)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)
  const activateEditMode = () => setEditMode(true)
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") deactivateEditMode()
  }

  return <>
    <div>
      {editMode
        ? <input value={status || ""} onKeyPress={onKeyPressHandler}
                 onChange={onChangeHandler}
                 onBlur={deactivateEditMode} autoFocus/>
        : <span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>}
    </div>
  </>
}
