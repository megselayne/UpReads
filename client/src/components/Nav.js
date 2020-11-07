import React, {Component} from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class Navigation extends Component {
    render() {
        return (
            <Navbar className='nav-outer' expand="lg">
                <Navbar.Brand>
                    <Nav.Link className='navlinks' href='/'>
                    <img className='logo' src='https://www.flaticon.com/premium-icon/icons/svg/2847/2847689.svg' />
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='nav-container'>
                <Nav.Link className='navlinks' href='/'>Home</Nav.Link>
                <Nav.Link className='navlinks' href='/search'>Search</Nav.Link>
                    {this.props.auth && <Nav.Link className='navlinks' href='/user/profile'>Profile</Nav.Link>}
                    {this.props.auth ? (<Nav.Link className='navlinks' href='#auth/logout' onClick={this.props.logout}>Logout</Nav.Link> ): (<Nav.Link className='navlinks' href='/auth/login'>Login</Nav.Link>)}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation