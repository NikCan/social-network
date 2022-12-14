import React from "react";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC, setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import axios from "axios";

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }
    onClickFollowHandler = (userId: string) => {
        this.props.follow(userId)
    }
    onClickUnfollowHandler = (userId: string) => {
        this.props.unfollow(userId)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users users={this.props.users} onClickFollowHandler={this.onClickFollowHandler}
                      onClickUnfollowHandler={this.onClickUnfollowHandler} onPageChanged={this.onPageChanged}
                      currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}/>
    }
}

type mapStateToPropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<any>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
}
type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
