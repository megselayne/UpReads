import React, {Component} from 'react'
import UserForm from './UserForm';

class Login extends Component {
    constructor(){
        super()
        this.state=({
            method: 'POST',
            route: '/api/v1/auth/login'
        })
    }
    render() {
        return(
            <>
            <h4>Login</h4>
            <UserForm handleFormSubmit={this.props.handleFormSubmit} state={this.state} userState={this.props.userState} currentPage={this.props.currentPage}/>
            <span>New User? <a href='/user/new'>Register here!</a></span>
            </>
        )
    }
}

export default Login;