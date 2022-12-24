import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, userProfileType} from "../../redux/profile-reducer";
import {stateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUser} from "../../api/api";


type PathParamsType = {
    userId: string
}
type ProfilePropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId || this.props.meId
        getUser(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

type mapStateToPropsType = {
    profile: userProfileType
    meId: number | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: userProfileType) => void
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    meId: state.auth.id
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent)

