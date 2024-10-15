import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getProfileUser, getStatus, updateStatus, savePhoto, saveProfile, addError } from '../../../REDUX/reducers/profileReducer'

import { useParams } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import ProfileViewWithHooks from "./profileViewWithHooks";
import PostFormContainer from "../myPosts/postFormContainer"


export function withRouter(Children) { //создаем hoc, оборачиваем ребенка - View
    return (props) => {
        const match = { params: useParams() };       // получаем набор параметров маршрута
        return <Children {...props} match={match} /> // передаем набор праметров маршрута и пропсы
    }
}

class View extends PureComponent { //пропускает повторные рендеринги для тех же пропсов и состояний

    refreshProfile() {
        let userId = this.props.match.params.userId; // получаем Id из маршрута

        if (!userId) {
            userId = this.props.authorizedUserId; // если нет Id из маршрута - получаем из стэйта
            if (!userId) {
                this.props.history.push('/login'); // если нет в стэйте - отправляем на регистрацию
            }
        }
        this.props.getProfileUser(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) { // чтобы появлялся мой профиль при переходе с одной странцы на другую и возврашщении 
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <div >
                <div>
                    <ProfileViewWithHooks profile={this.props.profile}
                        savePhoto={this.props.savePhoto}
                        isOwner={!this.props.match.params.userId} // id = undefined - то это пользователь 
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        saveProfile={this.props.saveProfile}
                        error={this.props.error}
                        addError={this.props.addError} />

                    {!this.props.match.params.userId && <PostFormContainer />}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    error: state.profilePage.error,
})

export default compose(
    connect(mapStateToProps, { getProfileUser, getStatus, updateStatus, savePhoto, saveProfile, addError }),
    withRouter,        // hoc для получения параметров маршрута
    WithAuthRedirect   // hoc переправляет на /login, если нет аутентификации
)(View)

