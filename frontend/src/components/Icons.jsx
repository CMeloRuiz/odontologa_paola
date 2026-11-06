/*
  Iconos SVG inline, sin librerias externas.
  Todos comparten caja de 24x24, trazo de 1.6 y color heredado (currentColor),
  para que el estilo quede consistente con el volante impreso.
*/

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
};

const Svg = ({ size = 24, children, ...rest }) => (
  <svg {...base} width={size} height={size} {...rest}>
    {children}
  </svg>
);

/* Silueta de muela: se reutiliza como base de varios iconos y como adorno. */
const toothPath =
  'M12 4.2c-2.1-1.7-4.7-1.8-6.2-.3-1.8 1.8-1.6 4.9 0 8.5.9 2 1.4 4.2 1.8 6.1.3 1.4.7 2.3 1.5 2.3s1.2-.9 1.5-2.3c.3-1.5.6-2.9 1.4-2.9s1.1 1.4 1.4 2.9c.3 1.4.7 2.3 1.5 2.3s1.2-.9 1.5-2.3c.4-1.9.9-4.1 1.8-6.1 1.6-3.6 1.8-6.7 0-8.5-1.5-1.5-4.1-1.4-6.2.3Z';

export const Tooth = (p) => (
  <Svg {...p}>
    <path d={toothPath} />
  </Svg>
);

export const Heart = ({ size = 18, filled = false, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    <path d="M12 20.3 4.6 13a4.7 4.7 0 0 1 0-6.7 4.6 4.6 0 0 1 6.6 0l.8.8.8-.8a4.6 4.6 0 0 1 6.6 0 4.7 4.7 0 0 1 0 6.7Z" />
  </svg>
);

export const WhatsApp = ({ size = 20, ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
    <path d="M20.52 3.45A11.82 11.82 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.86 11.86 0 0 0 5.74 1.47h.01c6.55 0 11.88-5.33 11.88-11.89 0-3.18-1.24-6.16-3.41-8.48ZM12.05 21.8h-.01c-1.78 0-3.52-.48-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.8 9.8 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89Z" />
  </svg>
);

export const Instagram = ({ size = 20, ...rest }) => (
  <Svg size={size} {...rest}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const Phone = (p) => (
  <Svg {...p}>
    <path d="M6.2 3.5h3l1.5 3.7-1.9 1.4a12.5 12.5 0 0 0 5.6 5.6l1.4-1.9 3.7 1.5v3a1.7 1.7 0 0 1-1.9 1.7A16.4 16.4 0 0 1 4.5 5.4 1.7 1.7 0 0 1 6.2 3.5Z" />
  </Svg>
);

export const Clock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.2V12l3.1 1.9" />
  </Svg>
);

export const Pin = (p) => (
  <Svg {...p}>
    <path d="M12 21.2s6.6-5.3 6.6-10.2a6.6 6.6 0 1 0-13.2 0C5.4 15.9 12 21.2 12 21.2Z" />
    <circle cx="12" cy="10.7" r="2.5" />
  </Svg>
);

export const Menu = (p) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const Close = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const ArrowRight = (p) => (
  <Svg {...p}>
    <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5" />
  </Svg>
);

export const Check = (p) => (
  <Svg {...p}>
    <path d="M4.5 12.6 9.3 17.4 19.5 7.2" />
  </Svg>
);

export const Shield = (p) => (
  <Svg {...p}>
    <path d="M12 2.9 19.3 5.6v5.6c0 4.4-3 8.1-7.3 9.8-4.3-1.7-7.3-5.4-7.3-9.8V5.6Z" />
    <path d="M9.1 12.1 11.2 14.2 15 10.4" />
  </Svg>
);

export const ShieldHeart = (p) => (
  <Svg {...p}>
    <path d="M12 2.9 19.3 5.6v5.6c0 4.4-3 8.1-7.3 9.8-4.3-1.7-7.3-5.4-7.3-9.8V5.6Z" />
    <path d="M12 15.6 9.4 13a1.9 1.9 0 0 1 0-2.7 1.8 1.8 0 0 1 2.6 0 1.8 1.8 0 0 1 2.6 0 1.9 1.9 0 0 1 0 2.7Z" />
  </Svg>
);

export const Tech = (p) => (
  <Svg {...p}>
    <path d={toothPath} />
    <path d="M12 9.2v3.4" />
    <circle cx="12" cy="7.6" r="0.9" fill="currentColor" stroke="none" />
    <path d="M19.6 3.4 20.2 5l1.6.6-1.6.6-.6 1.6-.6-1.6L17.4 5.6 19 5Z" />
  </Svg>
);

export const HeartHands = (p) => (
  <Svg {...p}>
    <path d="M12 11.6 9.7 9.4a1.8 1.8 0 0 1 0-2.6 1.7 1.7 0 0 1 2.3 0 1.7 1.7 0 0 1 2.3 0 1.8 1.8 0 0 1 0 2.6Z" />
    <path d="M3.6 20.4v-4.1c0-1.3.9-2.4 2.1-2.7l2.6-.6M20.4 20.4v-4.1c0-1.3-.9-2.4-2.1-2.7l-2.6-.6" />
    <path d="M8.3 20.4v-3.1M15.7 20.4v-3.1" />
  </Svg>
);

export const CalendarClock = (p) => (
  <Svg {...p}>
    <path d="M4.4 7.6a2 2 0 0 1 2-2h11.2a2 2 0 0 1 2 2v3.1H4.4Z" />
    <path d="M8.2 3.4v3.4M15.8 3.4v3.4M4.4 10.7v7.7a2 2 0 0 0 2 2h4.2" />
    <circle cx="16.8" cy="16.8" r="3.8" />
    <path d="M16.8 15.2v1.8l1.3.8" />
  </Svg>
);

export const Search = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="6.6" />
    <path d="M15.8 15.8 20.4 20.4" />
  </Svg>
);

export const Clipboard = (p) => (
  <Svg {...p}>
    <path d="M9 4.6H7.4a2 2 0 0 0-2 2v11.8a2 2 0 0 0 2 2h9.2a2 2 0 0 0 2-2V6.6a2 2 0 0 0-2-2H15" />
    <rect x="9" y="2.8" width="6" height="3.6" rx="1.2" />
    <path d="M8.8 11.4h6.4M8.8 15h4.4" />
  </Svg>
);

export const Chat = (p) => (
  <Svg {...p}>
    <path d="M20.4 11.6c0 3.9-3.8 7-8.4 7-1 0-2-.15-2.9-.43L4 20.4l1.4-3.6a6.5 6.5 0 0 1-2-4.6c0-3.9 3.8-7 8.4-7s8.6 3.1 8.6 6.4Z" />
    <path d="M8.6 11.4h6.8M8.6 8.4h4.6" />
  </Svg>
);

export const Smile = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M8.4 13.6a4.2 4.2 0 0 0 7.2 0" />
    <circle cx="9.3" cy="9.6" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="14.7" cy="9.6" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

/* ---- Iconos de tratamientos ---- */

const Denture = (p) => (
  <Svg {...p}>
    <path d="M3.6 10.4c0-3.6 3.8-6.2 8.4-6.2s8.4 2.6 8.4 6.2c0 3.4-2.6 4-3.9 5.6-1 1.3-1.3 3.2-2.6 3.2s-1.3-2.2-1.9-2.2-.6 2.2-1.9 2.2-1.6-1.9-2.6-3.2c-1.3-1.6-3.9-2.2-3.9-5.6Z" />
    <path d="M6.6 9.6h10.8" />
    <path d="M9.6 6.1v3.5M12 5.6v4M14.4 6.1v3.5" />
  </Svg>
);

const Arch = (p) => (
  <Svg {...p}>
    <path d="M3.8 17.4c0-6 3.7-10.8 8.2-10.8s8.2 4.8 8.2 10.8" />
    <path d="M6.2 13.6c.6-1 1.5-1 2.1 0M10.9 10.9c.6-1.1 1.6-1.1 2.2 0M15.7 13.6c.6-1 1.5-1 2.1 0" />
  </Svg>
);

const Layers = (p) => (
  <Svg {...p}>
    <path d="M12 3.2 20.6 7.6 12 12 3.4 7.6Z" />
    <path d="M3.4 12 12 16.4 20.6 12M3.4 16.4 12 20.8l8.6-4.4" />
  </Svg>
);

const Brush = (p) => (
  <Svg {...p}>
    <path d="M14.4 3.6a2.2 2.2 0 0 1 3.1 0l2.9 2.9a2.2 2.2 0 0 1 0 3.1l-7.6 7.6-6-6Z" />
    <path d="M6.8 11.2 4.2 13.8a2.4 2.4 0 0 0 0 3.4l2.6 2.6a2.4 2.4 0 0 0 3.4 0l2.6-2.6" />
    <path d="M11.4 6.6 17.4 12.6" />
  </Svg>
);

const Caries = (p) => (
  <Svg {...p}>
    <path d={toothPath} />
    <circle cx="10" cy="9.6" r="1.8" fill="currentColor" stroke="none" />
  </Svg>
);

const Root = (p) => (
  <Svg {...p}>
    <path d={toothPath} />
    <path d="M10 9.8c0 2.6-.5 4.8-1.1 7M14 9.8c0 2.6.5 4.8 1.1 7" strokeDasharray="2 2" />
  </Svg>
);

const SparkleTooth = (p) => (
  <Svg {...p}>
    <path d={toothPath} />
    <path d="M18.9 3.1 19.4 4.6 20.9 5.1 19.4 5.6 18.9 7.1 18.4 5.6 16.9 5.1 18.4 4.6Z" fill="currentColor" />
    <path d="M5.3 3.8 5.7 4.9 6.8 5.3 5.7 5.7 5.3 6.8 4.9 5.7 3.8 5.3 4.9 4.9Z" fill="currentColor" />
  </Svg>
);

const Child = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="M8.8 14.4a3.9 3.9 0 0 0 6.4 0" />
    <path d="M7.6 9.4h2.2M14.2 9.4h2.2" />
    <path d="M6.4 5.2 8.2 7M17.6 5.2 15.8 7" />
  </Svg>
);

const Veneer = (p) => (
  <Svg {...p}>
    <path d={toothPath} />
    <path d="M9.1 6.4c1.6-.9 4.2-.9 5.8 0 1.1.6 1.3 2.2.5 3.3-.9 1.2-5.9 1.2-6.8 0-.8-1.1-.6-2.7.5-3.3Z" />
  </Svg>
);

const Crown = (p) => (
  <Svg {...p}>
    <path d="M3.6 8.4 7 11.2l5-6.4 5 6.4 3.4-2.8-1.6 9.2H5.2Z" />
    <path d="M5.9 20.4h12.2" />
  </Svg>
);

const Lips = (p) => (
  <Svg {...p}>
    <path d="M3.4 11.8c2-2.8 4-4.2 5.7-4.2 1.2 0 2 .6 2.9 1.3.9-.7 1.7-1.3 2.9-1.3 1.7 0 3.7 1.4 5.7 4.2-2.6 3.4-5.6 5.1-8.6 5.1s-6-1.7-8.6-5.1Z" />
    <path d="M3.4 11.8h17.2" />
  </Svg>
);

const Post = (p) => (
  <Svg {...p}>
    <path d="M6.4 8.4 12 3.8l5.6 4.6-1 4.2H7.4Z" />
    <path d="M12 12.6v7.6" />
    <path d="M10.2 15.6h3.6M10.4 18.2h3.2" />
  </Svg>
);

const Forceps = (p) => (
  <Svg {...p}>
    <path d="M7.6 3.4c1.6 3.2 2.2 6 2.2 8.4L12 14.2l2.2-2.4c0-2.4.6-5.2 2.2-8.4" />
    <path d="M12 14.2v6.4" />
    <path d="M9.4 20.6h5.2" />
  </Svg>
);

const Implant = (p) => (
  <Svg {...p}>
    <path d="M8.4 3.6h7.2l-1.4 3.6H9.8Z" />
    <path d="M12 7.2v13.2" />
    <path d="M9.4 10h5.2M9.8 12.6h4.4M10.2 15.2h3.6M10.6 17.8h2.8" />
  </Svg>
);

const Emergency = (p) => (
  <Svg {...p}>
    <path d="M12 2.9 19.3 5.6v5.6c0 4.4-3 8.1-7.3 9.8-4.3-1.7-7.3-5.4-7.3-9.8V5.6Z" />
    <path d="M12 8.2v6M9 11.2h6" />
  </Svg>
);

/* Mapa nombre -> componente, para usarlo desde los archivos de datos. */
export const ICONS = {
  tooth: Tooth,
  heart: Heart,
  shield: Shield,
  shieldHeart: ShieldHeart,
  tech: Tech,
  heartHands: HeartHands,
  calendarClock: CalendarClock,
  search: Search,
  clipboard: Clipboard,
  chat: Chat,
  smile: Smile,
  check: Check,
  clock: Clock,
  pin: Pin,
  denture: Denture,
  arch: Arch,
  layers: Layers,
  brush: Brush,
  caries: Caries,
  root: Root,
  sparkleTooth: SparkleTooth,
  child: Child,
  veneer: Veneer,
  crown: Crown,
  lips: Lips,
  post: Post,
  forceps: Forceps,
  implant: Implant,
  emergency: Emergency,
};

export function Icon({ name, ...rest }) {
  const Cmp = ICONS[name] || Tooth;
  return <Cmp {...rest} />;
}
