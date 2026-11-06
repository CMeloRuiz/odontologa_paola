import { Icon, Heart } from './Icons.jsx';
import { REASONS } from '../data/reasons.js';
import './WhyChoose.css';

export default function WhyChoose() {
  return (
    <section className="section section--tint why" id="por-que-elegirme">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow reveal">
            <Heart size={14} filled />
            Por qué elegirme
          </p>
          <h2 className="section-title reveal">
            Cuatro motivos para
            <br />
            <span className="script why__script">confiar tu sonrisa</span>
          </h2>
          <p className="lead reveal">
            Un consultorio pensado para que vengas tranquila o tranquilo, entiendas lo que pasa en
            tu boca y salgas con un plan claro.
          </p>
        </header>

        <ul className="why__grid">
          {REASONS.map((reason, i) => (
            <li
              className="why__card reveal"
              key={reason.id}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="why__number" aria-hidden="true">
                {reason.number}
              </span>
              <span className="icon-badge icon-badge--outline why__icon" aria-hidden="true">
                <Icon name={reason.icon} size={22} />
              </span>
              <h3 className="why__title">{reason.title}</h3>
              <p className="why__text">{reason.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
