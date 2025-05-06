import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import './NavBar.css';
import { useState } from 'react';

function NavBar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className='navbar'>
      <div className='logo-container'>
        <Link to='home'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <button className='mobile-menu-btn' onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-menu ${menuActive ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to='about'>About Us</NavLink>
          </li>
          <li>
            <NavLink to='movies'>Movies</NavLink>
          </li>

          <li>
            <NavLink to='login'>Log in</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
