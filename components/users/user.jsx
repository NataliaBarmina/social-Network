import React from "react"
import css from './user.module.css'
import { NavLink } from "react-router-dom";

const User = ({ userId, name, photoUser, followed, followingProgress, unFollowUser, followUser }) => {

    return (

        <div className={css.container}>

            <div>
                <div className={css.photo}>
                    <NavLink to={'/profile/' + userId}>
                        <img src={photoUser} alt="#"></img>
                    </NavLink>
                </div>
                <div className={css.button}>
                    {followed
                        ? <button disabled={followingProgress.some(id => id === userId)} onClick={() => {
                            unFollowUser(userId);
                        }}>Un follow</button>
                        : <button disabled={followingProgress.some(id => id === userId)} onClick={() => {
                            followUser(userId);
                        }} >Follow </button>}
                </div>
            </div>
            <div className={css.userData}>
                <div className={css.name}>{name}</div>
                <div className={css.status}>yo</div>
                <div className={css.country}>Russia</div>
                <div className={css.id}>ID: {userId}</div>
            </div>
        </div >
    )
}
export default User;