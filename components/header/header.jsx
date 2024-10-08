import React from "react";
import css from './header.module.css'
import photoHeader from '../../REDUX/pictures/sky.png'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={css.header}>
            <div className={css.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}  <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
            <img src={photoHeader} alt='#'></img>

        </header>)
}
export default Header; 