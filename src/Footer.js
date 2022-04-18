import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__section'>
        <h6 className='footer__title'>Logo</h6>
        <ul>
          <li>
            <a className='footer__link'>
              <FontAwesomeIcon icon={brands('facebook')} />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a className='footer__link'>
              <FontAwesomeIcon icon={brands('twitter')} />
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a className='footer__link'>
              <FontAwesomeIcon icon={brands('youtube')} />
              <span>Youtube</span>
            </a>
          </li>
          <li>
            <a className='footer__link'>
              <FontAwesomeIcon icon={brands('instagram')} />
              <span>Instagram</span>
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <div className='footer__section'>
        <h6 className='footer__title'>Use Cases</h6>
        <ul>
          <li>
            <a className='footer__link'>UI design</a>
          </li>
          <li>
            <a className='footer__link'>UX design</a>
          </li>
          <li>
            <a className='footer__link'>Graphic design</a>
          </li>
          <li>
            <a className='footer__link'>Wireframing</a>
          </li>
          <li>
            <a className='footer__link'>Diagramming</a>
          </li>
          <li>
            <a className='footer__link'>Brainstorming</a>
          </li>
          <li>
            <a className='footer__link'>Templates</a>
          </li>
          <li>
            <a className='footer__link'>Remote design</a>
          </li>
          <li>
            <a className='footer__link'>Agencies</a>
          </li>
          <li>
            <a className='footer__link'>Figma for education</a>
          </li>
        </ul>
      </div>
      <div className='footer__section'>
        <h6 className='footer__title'>Explore</h6>
        <ul>
          <li>
            <a className='footer__link'>Design features</a>
          </li>
          <li>
            <a className='footer__link'>Prototyping features</a>
          </li>
          <li>
            <a className='footer__link'>Design systems</a>
          </li>
          <li>
            <a className='footer__link'>Collaboration features</a>
          </li>
          <li>
            <a className='footer__link'>Design process</a>
          </li>
          <li>
            <a className='footer__link'>FigJam</a>
          </li>
          <li>
            <a className='footer__link'>Pricing</a>
          </li>
          <li>
            <a className='footer__link'>Enterprise</a>
          </li>
          <li>
            <a className='footer__link'>Customers</a>
          </li>
          <li>
            <a className='footer__link'>Security</a>
          </li>
          <li>
            <a className='footer__link'>Integrations</a>
          </li>
          <li>
            <a className='footer__link'>Contact</a>
          </li>
        </ul>
      </div>
      <div className='footer__section'>
        <h6 className='footer__title'>Resources</h6>
        <ul>
          <li>
            <a className='footer__link'>Blog</a>
          </li>
          <li>
            <a className='footer__link'>Best practices</a>
          </li>
          <li>
            <a className='footer__link'>Support</a>
          </li>
          <li>
            <a className='footer__link'>Developers</a>
          </li>
          <li>
            <a className='footer__link'>Learn design</a>
          </li>
          <li>
            <a className='footer__link'>Downloads</a>
          </li>
          <li>
            <a className='footer__link'>What's new</a>
          </li>
          <li>
            <a className='footer__link'>Releases</a>
          </li>
          <li>
            <a className='footer__link'>Careers</a>
          </li>
          <li>
            <a className='footer__link'>About us</a>
          </li>
          <li>
            <a className='footer__link'>Agency partners</a>
          </li>
          <li>
            <a className='footer__link'>Privacy</a>
          </li>
          <li>
            <a className='footer__link'>Status</a>
          </li>
        </ul>
      </div>
      <div className='footer__section'>
        <h6 className='footer__title'>Compare</h6>
        <ul>
          <li>
            <a className='footer__link'>Sketch</a>
          </li>
          <li>
            <a className='footer__link'>Adobe XD</a>
          </li>
          <li>
            <a className='footer__link'>Invision Studio</a>
          </li>
          <li>
            <a className='footer__link'>Framer</a>
          </li>
          <li>
            <a className='footer__link'>Design on Windows</a>
          </li>
          <li>
            <a className='footer__link'>Miro</a>
          </li>
        </ul>
      </div>
      <div className='footer__section'>
        <a className='footer__link'>Cookie settings</a>
      </div>
    </footer>
  );
}
