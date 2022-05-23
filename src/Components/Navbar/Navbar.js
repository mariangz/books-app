import { NavLink, useSearchParams } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faToggleOff,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import clsx from 'clsx';
import './Navbar.scss';

export default function Navbar(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const context = useContext(ThemeContext);
  return (
    <header>
      <div className='header__container'>
        <nav className='navbar'>
          <ul className='header__links'>
            <li className='hero-logo push link'>
              <NavLink to='../'>
                <img class='logo' src={logo} alt='' />
              </NavLink>
            </li>

            {/* <li>
              <div className='search'>
                <input
                  type='search'
                  value={searchParams.get('search') || ''}
                  onChange={(event) => {
                    let search = event.target.value;
                    if (search) {
                      setSearchParams({ search });
                    } else {
                      setSearchParams({});
                    }
                  }}
                />
                <button onClick={props.onSearchClick}>
                  <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
                </button>
              </div>
            </li> */}
            <li>
              <button className='toggle' onClick={context.toggleTheme}>
                {context.theme === 'dark' ? (
                  <FontAwesomeIcon className='icon' icon={faToggleOff} />
                ) : (
                  <FontAwesomeIcon className='icon' icon={faToggleOn} />
                )}
              </button>
            </li>

            <li className='link'>
              {!context.user && (
                <NavLink to='signup' className='button'>
                  Signup
                </NavLink>
              )}
              {context.user && <h3>Hi, {context.user}</h3>}
            </li>
            <li className='link'>
              <NavLink
                to={context.user ? '/' : '/login'}
                onClick={context.setUser('')}
                className={clsx({ button: context.user, login: !context.user })}
              >
                {context.user ? 'Log out' : 'Log in'}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
