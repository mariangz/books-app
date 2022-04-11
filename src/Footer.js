import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <div>
        <h6>Logo</h6>
        <ul className='list-icon'>
          <li>
            <a>
              <FontAwesomeIcon icon={faFacebook} />
              <span className='media'>Facebook</span>
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faTwitter} />
              <span className='media'>Twitter</span>
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faYoutube} />
              <span className='media'>Youtube</span>
            </a>
          </li>
          <li>
            <a>
              {' '}
              <FontAwesomeIcon icon={faInstagram} />
              <span className='media'>Instagram</span>
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <div>
        <h6>About</h6>
        <ul>
          <li>
            <a>Pariatur</a>
          </li>
          <li>
            <a>Minim</a>
          </li>
          <li>
            <a>Enterprise</a>
          </li>
          <li>
            <a>Commodo</a>
          </li>
          <li>
            <a>Adipiscing</a>
          </li>
        </ul>
      </div>
      <div>
        <h6>Support</h6>
        <ul>
          <li>
            <a>Proident</a>
          </li>
          <li>
            <a>Faucibus</a>
          </li>
          <li>
            <a>Bibendum</a>
          </li>
          <li>
            <a>Learn design</a>
          </li>
          <li>
            <a>Adipiscing elit</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
