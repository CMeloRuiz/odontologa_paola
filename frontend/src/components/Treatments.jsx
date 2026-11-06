import { Icon, Heart, Tooth, WhatsApp } from './Icons.jsx';
import { TREATMENTS } from '../data/treatments.js';
import { WHATSAPP_URL } from '../data/site.js';
import './Treatments.css';

export default function Treatments() {
  return (
    <section className="section treatments" id="tratamientos">
      <div className="container">
        <header className="section-head">
          <h2 className="section-title title-hearts reveal">
            <Heart size={20} filled aria-hidden="true" />
            Nuestros tratamientos
            <Heart size={20} filled aria-hidden="true" />
          </h2>
          <p className="lead reveal">
            Resolvemos desde el control y la limpieza de rutina hasta la rehabilitación completa,
            siempre con el mismo cuidado.
          </p>
        </header>

        <ul className="treatments__grid">
          {TREATMENTS.map((t, i) => (
            <li
              className="treatments__card reveal"
              key={t.id}
              style={{ transitionDelay: `${Math.min(i, 8) * 55}ms` }}
            >
              <span className="icon-badge treatments__icon" aria-hidden="true">
                <Icon name={t.icon} size={22} />
              </span>
              <h3 className="treatments__name">{t.name}</h3>
            </li>
          ))}
        </ul>

        <div className="treatments__banner reveal">
          <Heart className="treatments__banner-heart" size={44} filled aria-hidden="true" />
          <p className="treatments__banner-text">
            <span className="treatments__banner-main">Salud, estética y bienestar</span>
            <span className="script treatments__banner-script">para toda la familia</span>
          </p>
          <Tooth className="treatments__banner-tooth" size={54} aria-hidden="true" />
        </div>

        <p className="treatments__cta reveal">
          <a className="btn btn--solid" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <WhatsApp size={18} />
            Consultá por tu tratamiento
          </a>
        </p>
      </div>
    </section>
  );
}
