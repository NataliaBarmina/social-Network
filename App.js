import React, { Suspense, lazy } from "react";
import { withSuspense } from "./components/hoc/withSuspense.js";

import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { initializeApp } from "./REDUX/reducers/appReducer.js";
import { Navigate } from "react-router-dom";

import Preloader from "./common/preloader/preloader.jsx";
import NavBar from "./components/navbar/navbar.jsx";
import Profile from "./components/profile/profile.jsx";
import HeaderContainer from "./components/header/headerContainer.jsx";
import './App.css';

const Login = withSuspense(lazy(() => import("./components/login/login.jsx")));// так работает когда используется <Routes/>
const Messages = withSuspense(lazy(() => import("./components/messages/messages.jsx")));
const UsersContainer = withSuspense(lazy(() => import("./components/users/usersContainer.jsx")));
const Dialog = withSuspense(lazy(() => import("./components/dialogs/dialog.jsx")));

class App extends React.Component {

  catchAllUnHandleErrors = (promiseRejectionEvent) => {
    console.log('error:' + promiseRejectionEvent) // образец глобальной обработки всех непойманных промисов
  }

  componentDidMount() {
    this.props.initializeApp();// инициализация Арр
    window.addEventListener('unhandledrejection', this.catchAllUnHandleErrors)//ловим глобальную ошибку

  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnHandleErrors)//при демонтаже компоненты отписываемся от события. ОБЯЗАТЕЛЬНО!!!
  }

  render() {

    if (!this.props.initialized) { // если нет инициализации - показываем картинку загрузки
      return <Preloader />
    }

    return (
      <div>
        <div className='appWrapper'>
          <HeaderContainer />
          <NavBar links={this.props.links} />

          <div className="appWrapperContent">
            <Suspense fallback={Preloader}> {/*показывается элемент, пока происходит загрузка компонента */}

              <Routes>
                <Route path='/profile/:userId?' element={<Profile />} /> {/* получаем идишник пользователя*/}
                <Route path='/login' element={<Login />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/dialogs' element={<Dialog contents={this.props.contents} />} />

                {/*переход по умолчанию: */}
                <Route path="/" element={<Navigate to={'/profile'} />} />
                <Route path="*" element={<div>404 NOT FOUND</div>} />

              </Routes>
            </Suspense>
          </div >
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  links: state.navbarPage.links,
  contents: state.dialogsPage.contents,
})


export default connect(mapStateToProps, { initializeApp })(App);
