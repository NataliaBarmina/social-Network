import React from "react";
import css from './createMyPost.module.css';
import { useForm } from 'react-hook-form';

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

                <textarea
                    {...register("myPost", {   // передается 2 параметра - имя поля и объект валидации
                        required: "поле обязательно к заполнению",
                        maxLength: {
                            value: 50,
                            message: "максимальная длина 50символов"
                        }
                    })}
                ></textarea>


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