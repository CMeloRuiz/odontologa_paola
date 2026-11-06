import { Heart, WhatsApp, ArrowRight, Tooth, Pin, CalendarClock, Shield } from './Icons.jsx';
import { WHATSAPP_URL, DOCTOR, SCHEDULE, LOCATION } from '../data/site.js';
import hero480 from '../assets/derived/hero-dentista-480.webp';
import hero800 from '../assets/derived/hero-dentista-800.webp';
import hero1280 from '../assets/derived/hero-dentista-1280.webp';
import hero1920 from '../assets/derived/hero-dentista-1920.webp';
import heroJpg from '../assets/derived/hero-dentista.jpg';
import './Hero.css';

/*
  Indicadores del hero: no inventamos cifras (ni pacientes, ni anios, ni
  reseñas). Mostramos unicamente datos reales del volante.
*/
const HIGHLIGHTS = [
  { id: 'matricula', icon: Shield, value: DOCTOR.license, label: 'Matrícula nacional' },
  { id: 'dias', icon: CalendarClock, value: SCHEDULE.days, label: 'Con turno previo' },
  {
    id: 'zona',
    icon: Pin,
    value: `${LOCATION.neighborhood}, ${LOCATION.city}`,
    label: LOCATION.note,
  },
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow" aria-hidden="true" />
      <Tooth className="hero__tooth" size={240} aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="eyebrow reveal">
            <Heart size={14} filled />
            {DOCTOR.role} · {DOCTOR.license}
          </p>

          <h1 className="hero__title reveal">
            <span className="hero__title-main">Tu sonrisa,</span>{' '}
            <span className="hero__title-script script">
              mi prioridad
              <Heart className="hero__title-heart" size={34} />
            </span>
          </h1>

          <p className="lead hero__lead reveal">
            Brindamos una atención integral, personalizada y de calidad para cuidar tu salud bucal
            con confianza y profesionalismo.
          </p>

          <div className="hero__actions reveal">
            <a
              className="btn btn--solid"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp size={18} />
              Agendá tu cita
            </a>
            <a className="btn btn--ghost" href="#tratamientos">
              Ver tratamientos
              <ArrowRight size={18} />
            </a>
          </div>

          <ul className="hero__highlights reveal">
            {HIGHLIGHTS.map(({ id, icon: IconCmp, value, label }) => (
              <li className="hero__highlight" key={id}>
                <span className="hero__highlight-icon" aria-hidden="true">
                  <IconCmp size={19} />
                </span>
                <span>
                  <strong>{value}</strong>
                  <small>{label}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media reveal">
          <div className="hero__blob" aria-hidden="true" />
          {/*
            Foto del hero. El marco es 4:5, igual que el recorte generado en
            scripts/process-images.mjs, asi que la imagen entra entera: no hay
            recorte del navegador ni deformacion.

            "sizes" declara el ancho real al que se muestra la foto (el marco
            nunca pasa de 395 px CSS), para que el navegador baje la variante
            justa y no la de 1920.

            Se quito la leyenda "Dra. Paola Gimenez" que acompañaba a la foto
            anterior: esta imagen muestra a una paciente en una revision, no a
            la doctora, y rotularla con su nombre seria atribuirle una cara que
            no es la suya. La matricula ya figura en la etiqueta de arriba.
          */}
          <figure className="hero__photo">
            <picture>
              <source
                type="image/webp"
                srcSet={`${hero480} 480w, ${hero800} 800w, ${hero1280} 1280w, ${hero1920} 1920w`}
                sizes="(min-width: 960px) 395px, (min-width: 768px) 355px, (min-width: 360px) 310px, 86vw"
              />
              <img
                src={heroJpg}
                width="1000"
                height="1250"
                alt="Paciente en el sillón odontológico durante una revisión: tiene la boca abierta mientras dos manos con guantes le examinan los dientes con instrumentos."
                /* React 18 pasa este atributo tal cual: va en minusculas */
                fetchpriority="high"
                decoding="async"
              />
            </picture>
          </figure>
        </div>
      </div>
    </section>
  );
}
