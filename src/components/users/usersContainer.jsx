import React from "react";
import { connect } from "react-redux";
import Users from "./users";
import { WithAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { follow, unFollow, setCurrentPage, requestUsers, followUser, unFollowUser } from "../../REDUX/reducers/usersReducer";
import { getUsers, getPageSize, getPortionSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProgress } from "../../REDUX/selectors/usersSelectors";

class UserContainer extends React.Component {

    componentDidMount() {
        const { currentPage, pageSize, requestUsers } = this.props;
        requestUsers(currentPage, pageSize); // запрашиваем пользователей для текущей страницы
    }

    onPageChange = (page) => {
        const { setCurrentPage, pageSize, requestUsers } = this.props;
        setCurrentPage(page);         // устанавливаем текущую страницу
        requestUsers(page, pageSize); // запрашиваем пользователей для текущей страницы
    }

    render() {

        return (
            <>
                < Users {...this.props} onPageChange={this.onPageChange} />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        portionSize: getPortionSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
};

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unFollow,
            setCurrentPage,
            requestUsers,
            unFollowUser,
            followUser
        }),
    WithAuthRedirect, //если нет аутентификации - переходим на /login
)(UserContainer)


