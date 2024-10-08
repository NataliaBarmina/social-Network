import React from "react";
import { reduxForm } from "redux-form";
import { Input, createField } from "../../common/formsControls/formControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../REDUX/reducers/authReducer";
import { Navigate } from "react-router-dom";
import css from '../../common/formsControls/formControls.module.css'

const LoginForm = ({ handleSubmit, error, captchaURL }) => {
    const maxLength20 = maxLengthCreator(20);
    return (
        <form onSubmit={handleSubmit}>

            {createField("email", "email", [required, maxLength20], Input)}
            {createField("password", "password", [required, maxLength20], Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

            {/*каптча и  поле ввода каптчи  */}
            {captchaURL && <img src={captchaURL} alt="#" />}
            {captchaURL && createField('введите символы', 'captcha', [required], Input, {})}

            <div>
                {error && <div className={css.formSummeryError}>{error}</div>}
            </div>
            <button>LOGIN</button>
        </form>
    )
}
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
    </div>
}

const mapStateToProps = (state) => ({
    captchaURL: state.auth.captchaURL,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);

