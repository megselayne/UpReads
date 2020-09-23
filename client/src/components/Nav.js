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
                </ul>
            </nav>
        )
    }
}

export default Nav