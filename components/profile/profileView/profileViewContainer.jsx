import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getProfileUser, getStatus, updateStatus, savePhoto, saveProfile, addError } from '../../../REDUX/reducers/profileReducer'
import ProfileViewWithHooks from "./profileViewWithHooks";
import { useParams } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class View extends PureComponent {

    refreshProfile() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
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
                <ProfileViewWithHooks profile={this.props.profile}
                    savePhoto={this.props.savePhoto}
                    isOwner={!this.props.match.params.userId} // id = undefined - то это пользователь 
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    saveProfile={this.props.saveProfile}
                    error={this.props.error}
                    addError={this.props.addError} />
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
    withRouter,
    WithAuthRedirect
)(View)

