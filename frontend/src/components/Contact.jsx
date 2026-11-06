import { WhatsApp, Instagram, Phone, Heart, Tooth } from './Icons.jsx';
import {
  WHATSAPP_URL,
  PHONE_DISPLAY,
  PHONE_RAW,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from '../data/site.js';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="contact__card reveal">
          <Tooth className="contact__tooth contact__tooth--a" size={200} aria-hidden="true" />
          <Tooth className="contact__tooth contact__tooth--b" size={150} aria-hidden="true" />

          <div className="contact__content">
            <span className="contact__icon" aria-hidden="true">
              <Heart size={26} filled />
            </span>

            <h2 className="contact__title">
              <span className="contact__title-main">Agendá tu cita,</span>
              <span className="script contact__title-script">estamos para ayudarte</span>
            </h2>

            <p className="contact__lead">
              Escribime por WhatsApp y coordinamos el día y el horario que mejor te queden.
            </p>

            <a
              className="btn btn--light contact__cta"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp size={19} />
              Escribime por WhatsApp
            </a>

            <ul className="contact__channels">
              <li>
                <a className="contact__channel" href={`tel:+54911${PHONE_RAW.slice(2)}`}>
                  <span className="contact__channel-icon" aria-hidden="true">
                    <Phone size={19} />
                  </span>
                  <span>
                    <small>Teléfono</small>
                    <strong>{PHONE_DISPLAY}</strong>
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="contact__channel"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__channel-icon" aria-hidden="true">
                    <Instagram size={19} />
                  </span>
                  <span>
                    <small>Instagram</small>
                    <strong>{INSTAGRAM_HANDLE}</strong>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
