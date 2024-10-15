import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../../REDUX/reducers/authReducer";
import { Navigate } from "react-router-dom";
import css from '../../common/formsControls/formControls.module.css'

// import { Input, createField } from "../../common/formsControls/formControls";
// import { reduxForm } from "redux-form";
// import { maxLengthCreator, required } from "../../utils/validators/validators";

// const LoginForm = ({ handleSubmit, error, captchaURL }) => {
//     const maxLength20 = maxLengthCreator(20);
//     return (
//         <form onSubmit={handleSubmit}>

//             {createField("email", "email", [required, maxLength20], Input)}
//             {createField("password", "password", [required, maxLength20], Input, { type: "password" })}
//             {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

//             {/*каптча и  поле ввода каптчи  */}
//             {captchaURL && <img src={captchaURL} alt="#" />}
//             {captchaURL && createField('введите символы', 'captcha', [required], Input, {})}

//             <div>
//                 {error && <div className={css.formSummeryError}>{error}</div>}
//             </div>
//             <button>LOGIN</button>
//         </form>
//     )
// }
// const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

// const Login = (props) => {
//     const onSubmit = (formData) => {
//         props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
//     }
//     if (props.isAuth) {
//         return <Navigate to={'/profile'} />
//     }

//     return <div>
//         <h1>LOGIN</h1>
//         <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
//     </div>
// }

const Login = ({ captchaURL, ...props }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: 'onBlur'
    })

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
        reset();
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return <div>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <input type="email" placeholder="email"
                    {...register("email", {
                        required: "это поле обязательно",
                        maxLength: {
                            value: 20,
                            message: "не более 20 символов"
                        }
                    })}></input>
            </div>
            <div>
                <input type="password" placeholder="password"
                    {...register('password', {
                        required: "это поле обязательно",
                        maxLength: {
                            value: 20,
                            message: "не более 20 символов"
                        }
                    })}></input>
            </div>
            <div>
                <label>
                    "remember me"
                    <input type="checkbox"
                        {...register('rememberMe', {
                        })}
                    ></input>
                </label>
            </div>
            <div>
                {/*каптча и  поле ввода каптчи  */}
                {captchaURL && <img src={captchaURL} alt="#" />}
                {captchaURL && <input placeholder="введите символы"
                    {...register('captcha', {
                    })}
                ></input>}
            </div>
            <div>
                {errors.email && <p className={css.formSummeryError}>{errors.email.message || "error"}</p>}
                {errors.password && <p className={css.formSummeryError}>{errors.password.message || "error"}</p>}
            </div>
            <button >LOGIN</button>
        </form>
    </div>
}



const mapStateToProps = (state) => ({
    captchaURL: state.auth.captchaURL,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);

