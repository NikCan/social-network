import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUser, updateStatus, userProfileType} from "../../redux/profile-reducer";
import {stateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
type ProfilePropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        // need to fix
        let userId = +this.props.match.params.userId || this.props.meId || 26918
        this.props.getUser(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <div>
            <Profile profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus} isAuth={this.props.isAuth}/>
        </div>
    }
}

type mapStateToPropsType = {
    profile: userProfileType
    meId: number | null
    status: string
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getUser: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (newStatus: string) => void
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    meId: state.auth.id,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUser, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)


