import React from "react";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
}

export const DialogItem = ({name}: DialogItemPropsType) => {
    return <div>
        <NavLink to={"/dialogs/" + name}>{name}</NavLink>
    </div>
}
