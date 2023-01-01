import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUser, userProfileType} from "../../redux/profile-reducer";
import {stateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string
}
type ProfilePropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId || this.props.meId || 2
            this.props.getUser(userId)
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

type mapStateToPropsType = {
    profile: userProfileType
    meId: number | null
}
type mapDispatchToPropsType = {
    getUser: (userId: number) => void
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    meId: state.auth.id,
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {
    getUser
})(WithUrlDataContainerComponent)

