import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = ({ status, updateStatus }) => {

    let [editMode, setEditMode] = useState(false);
    let [newStatus, setStatus] = useState(status)  // записываем статус, приходящий из пропсов в локальный стейт 

    useEffect(() => {                                // синхронизирует локальный и глобальный стейт 
        setStatus(status);
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActiveEditMode = () => {
        setEditMode(false)
        updateStatus(newStatus)
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div onClick={activateEditMode}>{status || 'введите статус'}</div>
            }
            {editMode &&
                <div>
                    <input autoFocus onChange={onStatusChange} onBlur={deActiveEditMode} value={newStatus} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks; 