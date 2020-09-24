import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className='nav-container'>
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
            </nav>
        )
    }
}

export default Nav