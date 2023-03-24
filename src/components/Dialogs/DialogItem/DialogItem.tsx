import React from "react";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return <div>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}
