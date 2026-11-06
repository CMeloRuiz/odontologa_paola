import { Heart } from './Icons.jsx';
import './MessageBand.css';

export default function MessageBand() {
  return (
    <aside className="band">
      <div className="band__inner container reveal">
        <span className="band__icon" aria-hidden="true">
          <Heart size={24} filled />
        </span>
        <p className="band__text">
          Cuidamos tu salud bucal para que sonrías con seguridad.
        </p>
      </div>
    </aside>
  );
}
