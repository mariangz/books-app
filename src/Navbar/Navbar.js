import './Navbar.scss';
export default function Navbar() {
  return (
    <header>
      <div className='header__container'>
        <nav className='navbar'>
          <ul className='header__links'>
            <li className='hero-logo push link'>
              <a href='#'> Header Logo</a>
            </li>
            <li className='link'>
              <a href='#'> header link one</a>
            </li>
            <li className='link'>
              <a href='#'> header link two</a>
            </li>
            <li className='link'>
              <a href='#'> header link three</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
