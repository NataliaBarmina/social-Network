import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = ({ status, updateStatus }) => {

    let [editMode, setEditMode] = useState(false);
    let [newStatus, setStatus] = useState(status)  // записываем статус, приходящий из пропсов в локальный стейт 

    useEffect(() => {                                // синхронизирует локальный и глобальный стейт 
        setStatus(status);
    }, [status])

    const activateEditMode = () => { // метод вкл режим редактирования 
        setEditMode(true)
    }

    const deActiveEditMode = () => {  // создаем метод выключающий режим редактирования
        setEditMode(false)
        updateStatus(newStatus)
    }

    const onStatusChange = (event) => { // при обновлении инпута сетаем посимвольно в локальный state
        setStatus(event.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&     // если editMode равно false, отрисовываем <div…
                <div onClick={activateEditMode}>{status || 'введите статус'}</div>
            }
            {editMode &&      // если editMode равно true, отрисовываем <input…
                <div>
                    <input
                        autoFocus
                        onChange={onStatusChange}  // при обновлении инпута сетаем посимвольно в локальный state
                        onBlur={deActiveEditMode}  //убираем фокус и обновляем глобальный стэйт (сетаем из локального)
                        value={newStatus}          // берем значение инпута из локального стэйта
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks; 