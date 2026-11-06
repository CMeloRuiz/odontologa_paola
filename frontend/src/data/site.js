/*
  Datos reales de la doctora, tomados del volante impreso y de su Instagram.
  No agregar aqui testimonios, precios, anios de experiencia ni cifras de
  pacientes: no tenemos esa informacion y no se debe inventar.
*/

export const PHONE_DISPLAY = '15 5737-4679';
export const PHONE_RAW = '1157374679';

// Formato internacional para celulares de Buenos Aires: 54 9 11 + numero.
export const WHATSAPP_NUMBER = '5491157374679';
export const WHATSAPP_MESSAGE = 'Hola Paola, quisiera agendar una cita';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const INSTAGRAM_HANDLE = '@paolagimenez_odonto';
export const INSTAGRAM_URL = 'https://instagram.com/paolagimenez_odonto';

export const DOCTOR = {
  name: 'Paola Giménez',
  role: 'Odontóloga',
  license: 'MN 42041',
};

/*
  UBICACION — PENDIENTE DE CONFIRMAR CON LA DOCTORA.
  El volante solo indica la esquina "Vera y Serrano, CABA". Falta el numero de
  puerta, el piso y el departamento. Confirmar la direccion exacta antes de
  publicar la pagina y actualizar tambien el JSON-LD de index.html.
*/
export const LOCATION = {
  corner: 'Vera y Serrano',
  neighborhood: 'Villa Crespo',
  city: 'CABA',
  note: 'Fácil acceso y comodidad para vos',
  mapsQuery: 'Vera y Serrano, Villa Crespo, Buenos Aires',
};

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  LOCATION.mapsQuery
)}&hl=es&z=16&output=embed`;

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  LOCATION.mapsQuery
)}`;

/*
  HORARIOS — confirmar que siguen vigentes.
  Fuente: pieza de Instagram "Horarios de atención" (src/assets/horarios.png).
*/
/*
  Los espacios entre la hora y la "h" son duros ( , NO-BREAK SPACE).
  Con un espacio normal el renglon puede cortarse justo ahi y la "h" queda
  sola colgando en la linea siguiente, como pasaba en el pie de pagina.
*/
export const SCHEDULE = {
  days: 'Lunes a viernes',
  blocks: ['De 9 a 15 h', 'De 16:30 a 20 h'],
  summary: 'Lunes a viernes, de 9 a 15 h y de 16:30 a 20 h',
  closed: 'Sábados y domingos, cerrado',
};

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#por-que-elegirme', label: 'Por qué elegirme' },
  { href: '#tratamientos', label: 'Tratamientos' },
  { href: '#mi-consulta', label: 'Mi consulta' },
  { href: '#horarios', label: 'Horarios' },
  { href: '#contacto', label: 'Contacto' },
];
