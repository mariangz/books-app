import { NavLink, useSearchParams } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import clsx from 'clsx';
import './Navbar.scss';

export default function Navbar(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [user, setUser] = useContext(UserContext);

  function logout() {
    setUser('');
  }

  return (
    <header>
      <div className='header__container'>
        <nav className='navbar'>
          <ul className='header__links'>
            <li className='hero-logo push link'>
              <NavLink to='../'>
                <img className='logo' src={logo} alt='' />
              </NavLink>
            </li>

            {user && (
              <li>
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
                    <FontAwesomeIcon
                      className='icon'
                      icon={faMagnifyingGlass}
                    />
                  </button>
                </div>
              </li>
            )}

            <li className='link'>
              {!user && (
                <NavLink to='signup' className='button'>
                  Signup
                </NavLink>
              )}
              {user && <h3>Hi, {user}</h3>}
            </li>
            <li className='link'>
              {user ? (
                <NavLink
                  to='/'
                  className={clsx({ button: user, login: !user })}
                  onClick={logout}
                >
                  Log out
                </NavLink>
              ) : (
                <NavLink
                  to='/login'
                  className={clsx({ button: user, login: user })}
                >
                  Log in
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
