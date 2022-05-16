import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import logo from '../../images/logo.svg';
import search from '../../images/search.svg';
import './Navbar.scss';

export default function Navbar() {
  return (
    <header>
      <div className='header__container'>
        <nav className='navbar'>
          <ul className='header__links'>
            <li className='hero-logo push link'>
              <NavLink to='/'>
                <img class='logo' src={logo} alt='' />
              </NavLink>
            </li>
            <li className='link'>
              <NavLink to='signup' className='button'>
                Signup
              </NavLink>
            </li>
            <li className='link'>
              <NavLink to='login' className='login'>
                Log in
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
