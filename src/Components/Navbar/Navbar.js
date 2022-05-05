import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <header>
      <div className='header__container'>
        <nav className='navbar'>
          <ul className='header__links'>
            <li className='hero-logo push link'>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li className='link'>
              <NavLink to='signup'>Signup</NavLink>
            </li>
            <li className='link'>
              <NavLink to='login'>Login</NavLink>
            </li>
            {/* <li className='link'>
              <NavLink to={}> header link three</NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
