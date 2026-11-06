import { Heart, Instagram, ArrowRight } from './Icons.jsx';
import { TIPS } from '../data/tips.js';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/site.js';
import './Tips.css';

/*
  Se muestran UNICAMENTE las infografias recortadas de cada posteo.
  El panel lateral de Instagram (usuario, boton Follow, descripcion, likes,
  fecha, caja de comentarios) y la flecha de carrusel quedaron fuera del
  recorte, que se genera en scripts/process-images.mjs.
*/
export default function Tips() {
  return (
    <section className="section tips" id="consejos">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow reveal">
            <Heart size={14} filled />
            Consejos de salud bucal
          </p>
          <h2 className="section-title reveal">
            Lo que comparto
            <br />
            <span className="script tips__script">en mis redes</span>
          </h2>
          <p className="lead reveal">
            Información clara y práctica para que cuides tu boca todos los días, no solo cuando
            algo duele.
          </p>
        </header>

        <ul className="tips__grid">
          {TIPS.map((tip, i) => (
            <li className="tips__card reveal" key={tip.id} style={{ transitionDelay: `${i * 110}ms` }}>
              <figure className="tips__figure">
                <picture>
                  <source srcSet={tip.webp} type="image/webp" />
                  <img
                    src={tip.png}
                    width={tip.width}
                    height={tip.height}
                    alt={tip.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </figure>

              <div className="tips__body">
                <span className="tips__tag">{tip.tag}</span>
                <h3 className="tips__title">{tip.title}</h3>
                <p className="tips__text">{tip.text}</p>
                <a
                  className="tips__link"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={17} />
                  Ver el posteo en Instagram
                  <ArrowRight size={16} />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="tips__footer reveal">
          Seguime en{' '}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            {INSTAGRAM_HANDLE}
          </a>{' '}
          para más consejos.
        </p>
      </div>
    </section>
  );
}
