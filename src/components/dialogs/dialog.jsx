import React from "react";
import css from './dialog.module.css'
import Nicknames from "./nicknames/nicknames";
import UserMessage from "./userMessages/userMessages";


const Dialog = ({ contents }) => {

    return (
        <div className={css.container}>
            <div className={css.nicknames}>
                {contents.map(item => (<Nicknames key={item.id} id={item.id} name={item.name} />))}
            </div>


            <div>
                <div className={css.dialogContainer}>
                    {contents.map(item => (
                        <UserMessage key={item.id} avatarUrl={item.userPicUrl} userName={item.name} value={item.value} />))}
                </div>
            </div>
        </div>
    )
}
export default Dialog;
