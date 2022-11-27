import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, StateType} from "./redux/redux-store";
import {storeType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: storeType
    state: StateType
    dispatch: (action: ActionsType) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={"/profile"} render={() => <Profile store={props.store}
                    />}></Route>
                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer store={props.store}
                           />}></Route>
                    <Route path={"/news"} render={() => <News/>}></Route>
                    <Route path={"/music"} render={() => <Music/>}></Route>
                    <Route path={"/settings"} render={() => <Settings/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
