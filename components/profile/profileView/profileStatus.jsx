
//!!! КОМПОНЕНТА НЕ ИСПОЛЬЗУЕТСЯ, ОСТАВЛЕНО КАК ОБРАЗЕЦ КЛАССОВОЙ КОМПОНЕНТЫ И ЛОКАЛЬНОГО СТЕЙТА

// import React from "react";

// class ProfileStatus extends React.Component {

//     state = {
//         editMode: false,
//         status: this.props.status,
//     }

//     activateEditMode = () => {
//         this.setState({ editMode: true })
//     }

//     deActiveEditMode = () => {
//         this.setState({ editMode: false })
//         this.props.updateStatus(this.state.status)
//     }

//     onStatusChange = (event) => {
//         this.setState({
//             status: event.currentTarget.value
//         })
//     }

//     componentDidUpdate(prevProps, prevState) {            // синхронизирует локальный и глобальный стэйт
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {!this.state.editMode &&
//                     <div onClick={this.activateEditMode}>{this.props.status || 'введите статус'}</div>
//                 }
//                 {
//                     this.state.editMode &&
//                     <div>
//                         <input onChange={this.onStatusChange} autoFocus onBlur={this.deActiveEditMode} value={this.state.status} />
//                     </div>
//                 }
//             </div >
//         )
//     }
// }

// export default ProfileStatus;