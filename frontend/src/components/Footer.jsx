import Logo from './Logo.jsx';
import { Instagram, Heart } from './Icons.jsx';
import { NAV_LINKS, DOCTOR, INSTAGRAM_URL, INSTAGRAM_HANDLE, SCHEDULE, LOCATION } from '../data/site.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo className="footer__logo" variant="light" />
          <p className="footer__license">
            {DOCTOR.role} · {DOCTOR.license}
          </p>
          <p className="footer__meta">
            {LOCATION.corner} — {LOCATION.neighborhood}, {LOCATION.city}
            <br />
            {SCHEDULE.summary}
          </p>
        </div>

        <nav className="footer__nav" aria-label="Navegación del pie de página">
          <h2 className="footer__heading">Secciones</h2>
          <ul className="footer__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="footer__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__social">
          <h2 className="footer__heading">Seguime</h2>
          <a
            className="footer__instagram"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={19} />
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {DOCTOR.name} · {DOCTOR.license}
        </p>
        <p className="footer__credit">
          Diseño de demostración por ColdevIA
          <Heart size={13} filled aria-hidden="true" />
        </p>
      </div>
    </footer>
  );
}
