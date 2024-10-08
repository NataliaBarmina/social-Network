import React from "react";
import css from "./MyPosts.module.css"

const MyPosts = (props) => {
    return (
        <div>
            {props.value.map(item => (<Value key={item.id} value={item.value} />))}
        </div>
    )
}
export default MyPosts;

const Value = (props) => {
    return (
        <div className={css.link}>
            <div className={css.iconContainer}><img alt="#" src="https://img.icons8.com/?size=50&id=7wD3cnliZDAc&format=png"></img></div>
            <div>{props.value}</div>
        </div>
    )
}