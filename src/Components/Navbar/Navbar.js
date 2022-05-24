import { NavLink, useSearchParams } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

export default function Navbar(props) {
  const [searchParams, setSearchParams] = useSearchParams();
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
                  <FontAwesomeIcon className='icon' icon={faMagnifyingGlass} />
                </button>
              </div>
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
