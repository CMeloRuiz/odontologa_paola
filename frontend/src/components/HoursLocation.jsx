import { Clock, Pin, Heart, ArrowRight } from './Icons.jsx';
import { SCHEDULE, LOCATION, MAPS_EMBED_URL, MAPS_LINK } from '../data/site.js';
import './HoursLocation.css';

export default function HoursLocation() {
  return (
    <section className="section section--tint hours" id="horarios">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow reveal">
            <Heart size={14} filled />
            Horarios y ubicación
          </p>
          <h2 className="section-title reveal">
            Cuándo y dónde
            <br />
            <span className="script hours__script">te espero</span>
          </h2>
        </header>

        <div className="hours__grid">
          <article className="hours__card reveal">
            <span className="icon-badge hours__icon" aria-hidden="true">
              <Clock size={22} />
            </span>
            <h3 className="hours__card-title">Horarios de atención</h3>

            <dl className="hours__schedule">
              <div className="hours__row">
                <dt>{SCHEDULE.days}</dt>
                <dd>
                  {SCHEDULE.blocks.map((block) => (
                    <span key={block}>{block}</span>
                  ))}
                </dd>
              </div>
            </dl>

            <p className="hours__note">{SCHEDULE.closed}</p>
            <p className="hours__hint">La atención es con turno previo. Las urgencias se coordinan por WhatsApp.</p>
          </article>

          <article className="hours__card reveal">
            <span className="icon-badge hours__icon" aria-hidden="true">
              <Pin size={22} />
            </span>
            <h3 className="hours__card-title">Ubicación</h3>

            <p className="hours__address">
              <strong>{LOCATION.corner}</strong>
              <span>
                {LOCATION.neighborhood}, {LOCATION.city}
              </span>
            </p>

            <p className="hours__note">{LOCATION.note}</p>

            <a className="hours__link" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
              Cómo llegar
              <ArrowRight size={16} />
            </a>
          </article>
        </div>

        {/*
          Mapa embebido por busqueda de texto, sin API key.
          PENDIENTE: confirmar con la doctora la direccion exacta y el numero de
          puerta. Hoy el mapa apunta a la esquina Vera y Serrano, Villa Crespo.
          Cuando tengamos la direccion completa, actualizar LOCATION.mapsQuery en
          src/data/site.js y el JSON-LD de index.html.
        */}
        <figure className="hours__map reveal">
          <iframe
            src={MAPS_EMBED_URL}
            title="Mapa de la zona de Vera y Serrano, Villa Crespo, CABA"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </figure>
      </div>
    </section>
  );
}
