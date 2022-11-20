import React from "react";
import s from "./../Message.module.css"

type MessagePropsType = {
    text: string
    id: number
}

export const Message = (props: MessagePropsType) => {
    return <div>
        {props.text}
    </div>
}

