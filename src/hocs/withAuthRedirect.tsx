import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {stateType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsType = {
  isAuth: boolean
}
const mapStateToProps = (state: stateType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: mapStateToPropsType) => {
    const {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to={'/login'}/>
    return <Component {...restProps as T}/>
  }

  const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedRedirectComponent
}
