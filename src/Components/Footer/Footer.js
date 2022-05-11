import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Footer.scss';
export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__section first'>
        <h6 className='footer__title'>Logo</h6>
        <ul>
          {/* {['Facebook', 'Twitter', 'Youtube', 'Instagram'].map((item) => (
            <li key={item}>
              <a classNaame='footer__link'>
                <FontAwesomeIcon icon={brands('facebook')} />
                <span>{item}</span>
              </a>
            </li>
          ))} */}
          <li>
            <a classNaame='footer__link'>
              <FontAwesomeIcon icon={brands('facebook')} />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a classNaame='footer__link'>
              <FontAwesomeIcon icon={brands('youtube')} />
              <span>Youtube</span>
            </a>
          </li>
          <li>
            <a classNaame='footer__link'>
              <FontAwesomeIcon icon={brands('instagram')} />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a classNaame='footer__link'>
              <FontAwesomeIcon icon={brands('twitter')} />
              <span>Twitter</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='footer__section'>
        <h6 className='footer__title'>Use Cases</h6>
        <ul>
          {[
            'Use Cases',
            'UI design',
            'UX design',
            'Graphic design',
            'Wireframing',
            'Diagramming',
            'Brainstorming',
            'Templates',
            'Remote design',
            'Agencies',
            'Figma for education',
          ].map((item) => (
            <li key={item}>
              <a className='footer__link'>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='footer__section'>
        <h6 className='footer__title'>Explore</h6>
        <ul>
          {[
            'Design features',
            'Prototyping features',
            'Design systems',
            'Collaboration features',
            'Design process',
            'FigJam',
            'Pricing',
            'Enterprise',
            'Customers',
            'Security',
            'Integrations',
            'Contact',
          ].map((item) => (
            <li key={item}>
              <a className='footer__link'>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='footer__section'>
        <h6 className='footer__title'>Resources</h6>
        <ul>
          {[
            'Blog',
            'Best practices',
            'Support',
            'Developers',
            'Learn design',
            'Downloads',
            "What's new",
            'Releases',
            'Careers',
            'About us',
            'Agency partners',
            'Privacy',
            'Status',
          ].map((item) => (
            <li key={item}>
              <a className='footer__link'>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='footer__section'>
        <h6 className='footer__title'>Compare</h6>
        <ul>
          {[
            'Sketch',
            'Adobe XD',
            'Invision Studio',
            'Framer',
            'Design on Windows',
            'Miro',
          ].map((item) => (
            <li key={item}>
              <a className='footer__link'>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='footer__section cookies'>
        <a className='footer__link'>Cookie settings</a>
      </div>
    </footer>
  );
}
