import React from "react";
import User from "./user";
import photoUser from '../../REDUX/pictures/man.png'
import PaginatorWithHooks from "../../common/paginator/paginatorWithHooks";
import Preloader from "../../common/preloader/preloader";

const Users = ({ currentPage, totalItemsCount, pageSize, portionSize, onPageChange, users, setCurrentPage, isFetching, followingProgress, followUser, unFollowUser }) => {

    return (
        < div >
            {isFetching ? <Preloader /> : null} {/*если идет загрузка показываем прелоадер */}

            <PaginatorWithHooks currentPage={currentPage} setCurrentPage={setCurrentPage} totalItemsCount={totalItemsCount} pageSize={pageSize} portionSize={portionSize} onPageChange={onPageChange} />

            <div>
                {
                    users.map(user =>
                        <User
                            key={user.id}
                            userId={user.id}
                            name={user.name}
                            followed={user.followed}
                            photoUser={user.photos.small != null ? user.photos.small : photoUser}
                            followingProgress={followingProgress}
                            followUser={followUser}
                            unFollowUser={unFollowUser}
                        >
                        </User>
                    )
                }
            </div>

        </div >
    )
}
export default Users;

