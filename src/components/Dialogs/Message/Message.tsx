import React from "react";
import s from "./../Message.module.css"

type MessagePropsType = {
    text: string
    id: string
}

export const Message = (props: MessagePropsType) => {
    return <div>
        {props.text}
    </div>
}

