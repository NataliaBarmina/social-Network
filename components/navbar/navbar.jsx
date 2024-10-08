import React from "react";
import css from './navbar.module.css'
import { NavLink } from "react-router-dom";

const NavBar = ({ links }) => {

    return (
        <nav className={css.navbar}>
            {links.map(item => (<Link key={item.id} path={item.path} pathName={item.pathName} />))}
        </nav>
    )
}

const Link = ({ path, pathName }) => {
    return (
        <div className={css.link}>
            <NavLink to={path}>{pathName}</NavLink>
        </div>
    )
}

export default NavBar;