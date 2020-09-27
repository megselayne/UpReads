import React, {Component} from 'react'
import UserForm from './UserForm'
import Splash from './Splash';

class Register extends Component {
    constructor(){
        super()
        this.state=({
            method: 'POST',
            route: '/api/v1/auth/register'
        })
    }
    render() {
        return(
            <>
            <Splash />
            <div className='container-2'>
                <div className='main'>
                <h4>Register</h4>
                <UserForm handleFormSubmit={this.props.handleFormSubmit} state={this.state} userState={this.props.userState} currentPage={this.props.currentPage}/>
                </div>
            </div>
            </>
        )
    }
}

export default Register;