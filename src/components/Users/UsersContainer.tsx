import React from "react";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {
    follow, setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    userType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            console.log(data)
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
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
        this.props.toggleIsFetching(true)
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users} onClickFollowHandler={this.onClickFollowHandler}
                   onClickUnfollowHandler={this.onClickUnfollowHandler} onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}/>
        </>
    }
}

type mapStateToPropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<any>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer)
