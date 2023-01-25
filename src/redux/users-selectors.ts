import {stateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsers = (state:stateType) => state.usersPage.users
export const getIsFetching = (state:stateType) => state.usersPage.isFetching

// абстрактный пример сложного селектора, для которого мы применяем библиотеку reSelect
export const getUsersSelector = createSelector (getUsers, getIsFetching, (users, isFetching) => {
    return users.filter(u => u.followed === isFetching)
})


export const getPageSize = (state:stateType) => state.usersPage.pageSize
export const getTotalUsersCount = (state:stateType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state:stateType) => state.usersPage.currentPage
export const getFollowingInProgress = (state:stateType) => state.usersPage.followingInProgress
