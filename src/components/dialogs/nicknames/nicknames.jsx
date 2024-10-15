import React from "react";
import css from './nicknames.module.css'
import { NavLink } from "react-router-dom";


const Nicknames = ({ id, name }) => {
    return (
        <div className={css.name}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}
export default Nicknames;
