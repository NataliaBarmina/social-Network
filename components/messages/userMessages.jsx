import React from "react";
import css from './userMessages.module.css';
import { NavLink } from "react-router-dom";

const UserMessages = (props) => {

    const name = props.usersMessages.map(item => (<UserMessage key={item.id} id={item.id} name={item.name} message={item.value} />));

    return (
        <div>
            {name}
        </div>
    )
}
export default UserMessages;


const UserMessage = (props) => {
    return (
        <div className={css.usersMessages}>
            <div className={css.names}><NavLink to={`/messages/${props.id}`} >{props.name}</NavLink></div>
            <div className={css.messages}>
                {props.message}
            </div>
        </div>
    )
}
