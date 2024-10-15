import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../../REDUX/reducers/authReducer";
import { Navigate } from "react-router-dom";
import css from '../../common/formsControls/formControls.module.css'
import { createFields } from "../../common/formsControls/formControls";

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
            {createFields('input', "email", "email", register, "это поле обязательно", 20, "не более 20 символов")}
            {createFields('input', "password", "password", register, "это поле обязательно", 20, "не более 20 символов")}
            {createFields('input', "checkbox", "", register, "", null, "", "remember me")}

            <div>
                {/*каптча и  поле ввода каптчи  */}
                {captchaURL && <img src={captchaURL} alt="#" />}
                {captchaURL && createFields('input', "", "", register, "", null, "")}
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

