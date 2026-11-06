import { useEffect, useRef, useState } from 'react';
import Logo from './Logo.jsx';
import { Menu, Close, WhatsApp } from './Icons.jsx';
import { NAV_LINKS, WHATSAPP_URL } from '../data/site.js';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#inicio');
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  /* Sombra del header al bajar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Marca en el menu la seccion que se esta viendo */
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.6] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Menu movil: bloquear scroll, cerrar con Escape y al clickear afuera */
  useEffect(() => {
    if (!open) return undefined;

    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (e) => {
      if (panelRef.current?.contains(e.target) || toggleRef.current?.contains(e.target)) return;
      setOpen(false);
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onClick);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onClick);
    };
  }, [open]);

  /* Cerrar el menu si se pasa a escritorio con el panel abierto */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 960px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a className="header__brand" href="#inicio" aria-label="Paola Giménez, odontóloga — ir al inicio">
          <Logo className="header__logo" />
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className={`header__link${active === link.href ? ' is-active' : ''}`}
                  href={link.href}
                  aria-current={active === link.href ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="btn btn--solid header__cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp size={18} />
          Agendá tu cita
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="header__burger"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        id="menu-movil"
        ref={panelRef}
        className={`header__panel${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Navegación móvil">
          <ul className="header__panel-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className={`header__panel-link${active === link.href ? ' is-active' : ''}`}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="btn btn--solid header__panel-cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <WhatsApp size={18} />
          Agendá tu cita
        </a>
      </div>
    </header>
  );
}
