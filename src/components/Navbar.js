import React from 'react';
import { NavLink, Link } from 'react-router-dom'



function Navbar({ aboutme, projects, contact, logo }) {
  return (
    <div>
      <header>
        <div class="spacer">
        
      <Link exact to='/' className='logo'>{logo}</Link>
          
        </div>
        <nav>
          <ul className='nav-links'>
            <li><NavLink exact to='/aboutme' className='nav-items' activeClassName='active'>{aboutme}</NavLink></li>
            <li><NavLink exact to='/projects' className='nav-items' activeClassName='active'>{projects}</NavLink></li>
            <li><NavLink exact to='/contact' className='nav-items' activeClassName='active'>{contact}</NavLink></li>
          </ul>
        </nav>
        </header>

    </div>

  )
}

export default Navbar