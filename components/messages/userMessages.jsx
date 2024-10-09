import React from "react";
import css from './userMessages.module.css';
import { NavLink } from "react-router-dom";

const UserMessages = ({ usersMessages }) => {

    const name = usersMessages.map(item => (<UserMessage key={item.id} id={item.id} name={item.name} message={item.value} />));

    return (
        <div>
            {name}
        </div>
    )
}
export default UserMessages;


const UserMessage = ({ id, name, message }) => {
    return (
        <div className={css.usersMessages}>
            <div className={css.names}><NavLink to={`/messages/${id}`} >{name}</NavLink></div>
            <div className={css.messages}>
                {message}
            </div>
        </div>
    )
}
