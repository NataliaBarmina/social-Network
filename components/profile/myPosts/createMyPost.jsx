import React from "react";
import css from './createMyPost.module.css';
import { useForm } from 'react-hook-form';
import { createFields } from "../../../common/formsControls/formControls";

const CreateMyPost = ({ addNewPostActionCreator }) => {

    const onAddPost = (values) => {
        addNewPostActionCreator(values.myPost);
        reset();
    }

    const {
        register,               // регистрирует поля для формы
        formState: { errors, isValid },  // объект у которого есть разные свойства (ошибки и прав заполн форма)
        handleSubmit,           // обертка над обработчиком отправки формы 
        reset,                  // очистка формы
    } = useForm({               // метод, который возвращает объект
        mode: 'onChange',       // объект настроек - при каком событии происходит валидация   
    });

    return (
        <div className={css.postForm}>
            <form onSubmit={handleSubmit(onAddPost)}>

                {createFields('textarea', "myPost", "", register, "поле обязательно к заполнению", 50, "максимальная длина 50символов")}

                <div>
                    {errors.myPost && <p className={css.red}>{errors.myPost.message || 'Error'}</p>}
                </div>
                <div>
                    <button className={css.button}
                        disabled={!isValid} // кнопка не нажимается, пока поле правильно не заполнено
                    >SEND
                    </button>
                </div>
            </form>
        </div>
    )
}
export default CreateMyPost;