import logoMarkup from '../assets/derived/logo-paola.svg?raw';
import './Logo.css';

/*
  El logo original (src/assets/logo-paola.png, 210x60 px) se vectorizo con
  potrace en scripts/process-images.mjs. El SVG resultante usa
  fill="currentColor", asi que se inyecta inline para poder pintarlo con CSS:
  vino sobre fondo claro en el header, blanco sobre el vino en el footer.

  El logo conserva la grafia original "Gimenez" sin tilde, tal como esta
  impreso en el volante. En los textos de la pagina se escribe "Giménez".
*/

const svg = logoMarkup.replace(/<\?xml[^>]*\?>/, '').trim();

export default function Logo({ className = '', variant = 'wine', title = 'Paola Gimenez, odontóloga' }) {
  return (
    <span
      className={`logo logo--${variant} ${className}`.trim()}
      role="img"
      aria-label={title}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
