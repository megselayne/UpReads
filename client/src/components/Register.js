import React, {Component} from 'react'
import UserForm from './UserForm'

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
            <h4>Register</h4>
            <UserForm handleFormSubmit={this.props.handleFormSubmit} state={this.state} userState={this.props.userState} currentPage={this.props.currentPage}/>
            </>
        )
    }
}

export default Register;