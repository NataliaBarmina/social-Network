import React from "react";
import css from './header.module.css'
import photoHeader from '../../REDUX/pictures/sky.png'
import { NavLink } from "react-router-dom";

const Header = ({ login, logout, isAuth }) => {
    return (
        <header className={css.header}>
            <div className={css.loginBlock}>
                {isAuth
                    ? <div>{login}<button onClick={logout}>Log out</button></div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
            <img src={photoHeader} alt='#'></img>
        </header>)
}
export default Header; 