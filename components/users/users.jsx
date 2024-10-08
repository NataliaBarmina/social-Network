import React from "react";
import User from "./user";
import photoUser from '../../REDUX/pictures/man.png'
import PaginatorWithHooks from "../../common/paginator/paginatorWithHooks";
import Preloader from "../../common/preloader/preloader";

const Users = ({ currentPage, totalItemsCount, pageSize, portionSize, onPageChange, users, setCurrentPage, ...props }) => {

    return (
        < div >
            {props.isFetching ? <Preloader /> : null}

            <PaginatorWithHooks currentPage={currentPage} setCurrentPage={setCurrentPage} totalItemsCount={totalItemsCount} pageSize={pageSize} portionSize={portionSize} onPageChange={onPageChange} />

            <div>
                {
                    users.map(user =>
                        <User
                            {...props}
                            key={user.id}
                            userId={user.id}
                            name={user.name}
                            followed={user.followed}
                            photoUser={user.photos.small != null ? user.photos.small : photoUser}
                        >
                        </User>
                    )
                }
            </div>

        </div >
    )
}
export default Users;

