import React from "react";
import spinner from '../../REDUX/pictures/spinner.gif'

const Preloader = () => {
    return (
        <div>
            <img src={spinner} alt="#" />
        </div>
    )
}
export default Preloader;