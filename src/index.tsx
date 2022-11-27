import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";


let rerender = () => {
    ReactDOM.render(
        <App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    )
}
rerender()
store.subscribe(rerender)