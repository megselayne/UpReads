import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

class Navigation extends Component {
    render() {
        return (
            <Navbar className='nav-outer' expand="lg">
                <div className='nav-row'>
                <Navbar.Brand>
                    <img className='logo' src='https://www.flaticon.com/premium-icon/icons/svg/2847/2847689.svg' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='nav-container'>
                <ul className='navlinks'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/search'>Search</Link>
                    </li>
                    {this.props.auth && <li><Link to='/user/profile'>Profile</Link></li>}
                    {this.props.auth ? (<li><Link className='log' to='/auth/logout' onClick={this.props.logout}>Logout</Link></li>) : (<li><Link className='log' to='/auth/login'>Login</Link></li>)}
                </ul>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation