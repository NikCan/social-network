import {stateType} from "./redux-store";

export const getUsers = (state:stateType) => state.usersPage.users
export const getPageSize = (state:stateType) => state.usersPage.pageSize
export const getTotalUsersCount = (state:stateType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state:stateType) => state.usersPage.currentPage
export const getIsFetching = (state:stateType) => state.usersPage.isFetching
export const getFollowingInProgress = (state:stateType) => state.usersPage.followingInProgress
