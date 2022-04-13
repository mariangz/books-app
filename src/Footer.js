import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Footer() {
  return (
    <footer>
      <div>
        <h6>Logo</h6>
        <ul className='list-icon'>
          <li>
            <a>
              <FontAwesomeIcon icon={brands('facebook')} />
              <span className='media'>Facebook</span>
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={brands('twitter')} />
              <span className='media'>Twitter</span>
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={brands('youtube')} />
              <span className='media'>Youtube</span>
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={brands('instagram')} />
              <span className='media'>Instagram</span>
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <div>
        <h6>Use Cases</h6>
        <ul>
          <li>
            <a>UI design</a>
          </li>
          <li>
            <a>UX design</a>
          </li>
          <li>
            <a>Graphic design</a>
          </li>
          <li>
            <a>Wireframing</a>
          </li>
          <li>
            <a>Diagramming</a>
          </li>
          <li>
            <a>Brainstorming</a>
          </li>
          <li>
            <a>Templates</a>
          </li>
          <li>
            <a>Remote design</a>
          </li>
          <li>
            <a>Agencies</a>
          </li>
          <li>
            <a>Figma for education</a>
          </li>
        </ul>
      </div>
      <div>
        <h6>Explore</h6>
        <ul>
          <li>
            <a>Design features</a>
          </li>
          <li>
            <a>Prototyping features</a>
          </li>
          <li>
            <a>Design systems features</a>
          </li>
          <li>
            <a>Collaboration features</a>
          </li>
          <li>
            <a>Design process</a>
          </li>
          <li>
            <a>FigJam</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Enterprise</a>
          </li>
          <li>
            <a>Customers</a>
          </li>
          <li>
            <a>Security</a>
          </li>
          <li>
            <a>Integrations</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <h6>Resources</h6>
        <ul>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Best practices</a>
          </li>
          <li>
            <a>Support</a>
          </li>
          <li>
            <a>Developers</a>
          </li>
          <li>
            <a>Learn design</a>
          </li>
          <li>
            <a>Downloads</a>
          </li>
          <li>
            <a>What's new</a>
          </li>
          <li>
            <a>Releases</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Agency partners</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
          <li>
            <a>Status</a>
          </li>
        </ul>
      </div>
      <div>
        <h6>Compare</h6>
        <ul>
          <li>
            <a>Sketch</a>
          </li>
          <li>
            <a>Adobe XD</a>
          </li>
          <li>
            <a>Invision Studio</a>
          </li>
          <li>
            <a>Framer</a>
          </li>
          <li>
            <a>Design on Windows</a>
          </li>
          <li>
            <a>Miro</a>
          </li>
        </ul>
      </div>
      <div>
        <a>Cookie settings</a>
      </div>
    </footer>
  );
}
