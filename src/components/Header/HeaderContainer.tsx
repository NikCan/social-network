import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";

type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    render() {
        return <Header {...this.props}/>
    }
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
    id: number | null
}
type mapDispatchToPropsType = {
    logout: () => void
}
const mapStateToProps = (state: stateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
})

export default connect(mapStateToProps, {logout})(HeaderContainer)