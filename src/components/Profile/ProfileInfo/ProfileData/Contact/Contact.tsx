import React from "react";

type PropsType = {
  title: string,
  value: string
}
export const Contact = ({value, title}: PropsType) => {
  return <div><b>{title}: </b>{value || 'absent'}</div>
}