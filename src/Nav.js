import React from 'react';
import './styles/App.scss';
import './styles/navStyle.scss';
import { Link } from 'react-router-dom'

function Nav() {

    const navStyle ={
        color: '#78cce2',
        textDecoration: 'white'
    };

  return (
    <nav>
        <Link style={navStyle} to='/'>
                <img className='logo' src = {require('./images/logo.png')} alt = 'logo' />
        </Link>
        <ul className='nav-links'>
            {/* <Link style={navStyle} to='/'>
                <li button>Home</li> */}
            {/* </Link> */}
            <Link style={navStyle} to='/contact'>
                <li>Contact</li>
            </Link>
            <Link style={navStyle} to='/about'> 
                <li>About</li>
            </Link>
            <Link style={navStyle} to='/portfolio'> 
                <li>Portfolio</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
