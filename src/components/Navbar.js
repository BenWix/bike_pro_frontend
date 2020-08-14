import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../images/favicon.png'

const NavBar = () => {
    return (
      <div className='navbar'>

        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/customers"
        >
          Customers
        </NavLink>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/about"
        >
          About
        </NavLink>

        <img src={logo} alt='logo'/>
      </div>
    );
  }
  
  export default NavBar;