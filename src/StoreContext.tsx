import React from "react";
import {store, storeType} from "./redux/redux-store";

export const StoreContext = React.createContext({} as storeType)

type ProviderPropsType = {
    store: storeType
    children: React.ReactChild
}
export const Provider = (props: ProviderPropsType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}