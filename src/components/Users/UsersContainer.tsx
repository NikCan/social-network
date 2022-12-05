import React from "react";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, usersPageType, userType} from "../../redux/users-reducer";
import {Users} from "./Users";

type mapStateToPropsType = {
    usersPage: usersPageType
}
type mapDispatchToPropsType = {
    follow: (userId:string) => void
    unfollow: (userId:string) => void
    setUsers: (users: Array<userType>) => void
}
export type UsersPropsType = mapStateToPropsType&mapDispatchToPropsType

const mapStateToProps = (state:stateType):mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)