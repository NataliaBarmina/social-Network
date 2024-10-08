import React from "react";
import css from './userMessages.module.css'

const UserMessage = ({ avatarUrl, userName, value }) => {
    return (
        <div className={css.container}>
            <div>
                <div className={css.avatar}><img alt="#" src={avatarUrl}></img></div>
                <div className={css.name}>{userName}</div>
            </div>
            <div className={css.message}>{value}</div>
        </div>
    )
}
export default UserMessage;