import { Icon, Heart } from './Icons.jsx';
import { CONSULTATION_STEPS, CONSULTATION_BADGES } from '../data/consultation.js';
import sonrisa from '../assets/derived/sonrisa.webp';
import './Consultation.css';

/*
  Esta seccion reconstruye en componentes la pieza de Instagram
  "Lo que incluye una consulta conmigo". La imagen de esa pieza NO se usa:
  solo se usa una foto de apoyo limpia.
*/
export default function Consultation() {
  return (
    <section className="section section--tint consult" id="mi-consulta">
      <div className="container consult__inner">
        <div className="consult__media reveal">
          <figure className="consult__figure">
            <img
              src={sonrisa}
              width="880"
              height="1100"
              alt="Mujer sonriendo, con una sonrisa sana y cuidada."
              loading="lazy"
              decoding="async"
            />
          </figure>
          <span className="consult__sticker" aria-hidden="true">
            <Heart size={20} filled />
          </span>
        </div>

        <div className="consult__body">
          <header className="consult__head">
            <p className="eyebrow reveal">
              <Heart size={14} filled />
              Mi consulta
            </p>
            <h2 className="section-title reveal">
              Lo que incluye
              <br />
              <span className="script consult__script">una consulta conmigo</span>
            </h2>
          </header>

          <ol className="consult__steps">
            {CONSULTATION_STEPS.map((step, i) => (
              <li
                className="consult__step reveal"
                key={step.id}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="icon-badge consult__step-icon" aria-hidden="true">
                  <Icon name={step.icon} size={20} />
                </span>
                <div>
                  <h3 className="consult__step-title">{step.title}</h3>
                  <p className="consult__step-text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <ul className="consult__badges reveal">
            {CONSULTATION_BADGES.map((badge) => (
              <li className="consult__badge" key={badge.id}>
                <Icon name={badge.icon} size={18} aria-hidden="true" />
                {badge.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
