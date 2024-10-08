import React from "react"
import css from "./wallPaper.module.css"
import wallpaper from '../../../REDUX/pictures/wallpaper.jpeg'

const WallPaper = () => {
    return (
        <div className={css.container}>
            <img src={wallpaper} alt="#"></img>
        </div>
    )
}
export default WallPaper;
