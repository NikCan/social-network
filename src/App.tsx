import React, {Suspense} from 'react';
import './App.css';
import {HeaderContainer, Login, Music, Navbar, News, Settings} from "./components";
import {ProfileContainer} from "./components/Profile";
import {UsersContainer} from "./components/Users";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {stateType, store} from "./redux/store";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

type PropsType = mapStateToPropsType & mapDispatchToPropsType

class App extends React.Component<PropsType> {
  catchAllUnhandledErrors = (error: PromiseRejectionEvent) => {
    alert(error)
    console.error(error)
  }

  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  render() {
    return !this.props.initialized ? <Preloader/> : (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Switch>
            <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
            <Route exact path={"/"} render={() => <Redirect to={'/profile'}/>}/>
            <Route path="/dialogs"
                   render={() => <Suspense fallback={<Preloader/>}><DialogsContainer/></Suspense>}/>
            <Route path={"/news"} render={() => <News/>}/>
            <Route path={"/music"} render={() => <Music/>}/>
            <Route path={"/settings"} render={() => <Settings/>}/>
            <Route path={"/users"} render={() => <UsersContainer/>}/>
            <Route path={"/login"} render={() => <Login/>}/>
            <Route path={"*"} render={() => <div>404 NOT FOUND</div>}/>
          </Switch>
        </div>
      </div>
    );
  }
}

type mapStateToPropsType = {
  initialized: boolean
}
type mapDispatchToPropsType = {
  initializeApp: () => void,
}
const mapStateToProps = (state: stateType): mapStateToPropsType => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App)

const MainApp = () => {
  return <HashRouter>
    {/*return <BrowserRouter>*/}
    <Provider store={store}>
      <AppContainer/>
    </Provider>
    {/*</BrowserRouter>*/}
  </HashRouter>
}
export default MainApp