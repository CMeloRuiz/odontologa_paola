import { useEffect, useState } from 'react';
import { WhatsApp } from './Icons.jsx';
import { WHATSAPP_URL } from '../data/site.js';
import './WhatsAppFloat.css';

/*
  Boton flotante en el color de la marca (no verde), para mantener la
  identidad del volante.
*/
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      className={`wa${visible ? ' is-visible' : ''}`}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendá tu cita por WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <WhatsApp size={26} />
      <span className="wa__label">Agendá tu cita</span>
    </a>
  );
}
