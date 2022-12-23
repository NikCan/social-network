import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";

type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.resultCode === 0) {
                    const {id, login, email} = res.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

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
    setAuthUserData: (id: number, login: string, email: string) => void
}
const mapStateToProps = (state: stateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
})

export default connect(mapStateToProps, {
    setAuthUserData: setAuthUserData
})(HeaderContainer)