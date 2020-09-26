import React, {Component} from 'react'

class UserForm extends Component {
    constructor(props){
        super(props)
        this.state=({
            email: '',
            username: '',
            password: '',
        })
        this.props.userState.user = {}

        if(props.currentPage === 'new') {
            this.state.buttonName = 'Register'
        }
        else if(props.currentPage === 'login') {
            this.state.buttonName = 'Login'
        }
    }

    handleFormChanges = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    render() {
        return(
            <form onSubmit={(e) => this.props.handleFormSubmit(this.props.state.method, e, this.state, this.props.state.route)}>
                <input type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.handleFormChanges} required />
                {this.props.currentPage === ('new') && <input type='email' name='email' value={this.state.email} placeholder='Email' onChange={this.handleFormChanges} />}
                <input type='password' name='password' value={this.state.password} placeholder='Password' onChange={this.handleFormChanges} required />
                <input className='primary big click' type='submit' value={this.state.buttonName} />
            </form>
        )
    }
}

export default UserForm;