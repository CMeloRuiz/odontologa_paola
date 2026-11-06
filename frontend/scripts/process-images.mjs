/**
 * Procesa las imagenes originales de src/assets y genera los recortes limpios
 * (sin interfaz de Instagram, sin textos de las piezas graficas) en src/assets/derived.
 * Los originales NUNCA se sobrescriben.
 *
 * Uso:  npm run images
 */
import sharp from 'sharp';
import { mkdirSync, writeFileSync } from 'node:fs';
import { posterize } from 'potrace';
import { promisify } from 'node:util';

const SRC = 'src/assets';
const OUT = 'src/assets/derived';
mkdirSync(OUT, { recursive: true });

const BRAND = '#8c4f4f';
// Silueta de muela, reutilizada en el favicon y en la imagen Open Graph.
const toothOutline =
  'M12 4.2c-2.1-1.7-4.7-1.8-6.2-.3-1.8 1.8-1.6 4.9 0 8.5.9 2 1.4 4.2 1.8 6.1.3 1.4.7 2.3 1.5 2.3s1.2-.9 1.5-2.3c.3-1.5.6-2.9 1.4-2.9s1.1 1.4 1.4 2.9c.3 1.4.7 2.3 1.5 2.3s1.2-.9 1.5-2.3c.4-1.9.9-4.1 1.8-6.1 1.6-3.6 1.8-6.7 0-8.5-1.5-1.5-4.1-1.4-6.2.3Z';
const log = (...a) => console.log('  ·', ...a);

/* ------------------------------------------------------------------ *
 * 1. Foto de Paola: recorte solo de la persona.
 *
 *    NOTA: desde que el hero usa hero_dentist_main.jpg, este recorte ya no se
 *    muestra en ninguna parte del sitio. Se sigue generando porque los
 *    archivos se conservan y puede volver a servir si la doctora manda una
 *    foto suya en mejor resolucion.
 *    El original (440x542) es una pieza de Instagram con el texto
 *    "Lo que incluye una consulta conmigo" a la izquierda y una franja
 *    de insignias abajo. Nos quedamos unicamente con la columna derecha.
 * ------------------------------------------------------------------ */
/*
  Recorte lo mas abierto que permite la pieza: el panel beige de la izquierda
  termina en x=230 y la franja de insignias empieza en y=464, asi que
  230,86 + 210x278 es el maximo aprovechable. Cuanto mas ancho el recorte,
  mas pixeles reales hay y menos hay que ampliar, que es lo que se nota.

  Se amplia con "mitchell" y no con "lanczos3": lanczos marca mucho los bordes
  (ringing) y sobre una foto ya blanda eso se ve como pixelado. La nitidez
  final es suave por el mismo motivo.
*/
await sharp(`${SRC}/paola-consulta.png`)
  .extract({ left: 230, top: 86, width: 210, height: 278 })
  .resize({ width: 780, height: 1033, kernel: 'mitchell' })
  .sharpen({ sigma: 0.7, m1: 0.3, m2: 1.1 })
  .toFile(`${OUT}/paola-recorte.png`);
await sharp(`${OUT}/paola-recorte.png`).webp({ quality: 92 }).toFile(`${OUT}/paola-recorte.webp`);
// Respaldo liviano para navegadores sin WebP (el PNG de una foto pesa de mas).
await sharp(`${OUT}/paola-recorte.png`).jpeg({ quality: 90, mozjpeg: true }).toFile(`${OUT}/paola-recorte.jpg`);
log('paola-recorte.png / .webp / .jpg');

/* ------------------------------------------------------------------ *
 * 1.b Foto del hero (hero_dentist_main.jpg).
 *
 *  Original: 5792x8688, vertical, resolucion de sobra (no se amplia nada).
 *  Se recorta el babero lila del pie, que empieza al 86,9% del alto y mete
 *  un violeta ajeno a la paleta del volante, y un poco del fondo superior.
 *  Queda 5792x7240, es decir 4:5, que es la proporcion del marco del hero.
 *  Al coincidir recorte y marco, object-fit no tiene que recortar nada.
 *
 *  Se entregan varios anchos para srcset. El marco nunca pasa de ~400 px CSS,
 *  asi que 480 cubre pantallas 1x, 800 las 2x y 1280 las 3x; 1920 queda como
 *  margen para pantallas muy densas.
 * ------------------------------------------------------------------ */
const HERO_SRC = `${SRC}/hero_dentist_main.jpg`;
const heroBase = () =>
  sharp(HERO_SRC, { limitInputPixels: false }).extract({
    left: 0,
    top: 300,
    width: 5792,
    height: 7240,
  });

for (const ancho of [480, 800, 1280, 1920]) {
  await heroBase()
    .resize({ width: ancho, kernel: 'lanczos3' })
    .webp({ quality: ancho >= 1280 ? 78 : 82 })
    .toFile(`${OUT}/hero-dentista-${ancho}.webp`);
}
// Respaldo para navegadores sin WebP.
await heroBase()
  .resize({ width: 1000, kernel: 'lanczos3' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(`${OUT}/hero-dentista.jpg`);
log('hero-dentista-{480,800,1280,1920}.webp + hero-dentista.jpg');

/* ------------------------------------------------------------------ *
 * 2. Infografia de bruxismo: solo la grafica cuadrada de la izquierda.
 *    Se descarta el panel de Instagram (usuario, Follow, descripcion,
 *    likes, fecha, comentarios), la flecha de carrusel del borde derecho
 *    y la chapa con el @usuario del pie.
 * ------------------------------------------------------------------ */
await sharp(`${SRC}/instagram-bruxismo.png`)
  .extract({ left: 4, top: 4, width: 496, height: 508 })
  .png()
  .toFile(`${OUT}/bruxismo-recorte.png`);
await sharp(`${OUT}/bruxismo-recorte.png`).webp({ quality: 86 }).toFile(`${OUT}/bruxismo-recorte.webp`);
log('bruxismo-recorte.png / .webp');

/* ------------------------------------------------------------------ *
 * 3. Infografia de cepillado: idem, solo la grafica de la izquierda,
 *    sin el panel de Instagram ni la barra inferior con el @usuario.
 * ------------------------------------------------------------------ */
await sharp(`${SRC}/instagram-cepillado.png`)
  .extract({ left: 2, top: 2, width: 406, height: 504 })
  .png()
  .toFile(`${OUT}/cepillado-recorte.png`);
await sharp(`${OUT}/cepillado-recorte.png`).webp({ quality: 86 }).toFile(`${OUT}/cepillado-recorte.webp`);
log('cepillado-recorte.png / .webp');

/* ------------------------------------------------------------------ *
 * 4. Fotos de apoyo: recorte vertical + WebP optimizado.
 * ------------------------------------------------------------------ */
// Recorte cerrado al rostro: deja fuera la remera azul, que es un color
// ajeno a la paleta del volante, y conserva el fondo rosado.
await sharp(`${SRC}/sonrisa.jpg`)
  .extract({ left: 884, top: 0, width: 616, height: 770 })
  .resize({ width: 880 })
  .webp({ quality: 84 })
  .toFile(`${OUT}/sonrisa.webp`);
log('sonrisa.webp');

await sharp(`${SRC}/consultorio.jpg`)
  .resize({ width: 1100 })
  .webp({ quality: 82 })
  .toFile(`${OUT}/consultorio.webp`);
log('consultorio.webp');

/* ------------------------------------------------------------------ *
 * 5. Logo: se quita el fondo blanco, se reescala a alta resolucion y se
 *    recolorea al color de marca. Se entrega PNG transparente @4x y SVG
 *    vectorizado con potrace (fill="currentColor" para colorear por CSS).
 * ------------------------------------------------------------------ */
const LOGO_W = 840; // 210 * 4
const grey = await sharp(`${SRC}/logo-paola.png`)
  .resize({ width: LOGO_W, kernel: 'lanczos3' })
  .flatten({ background: '#ffffff' })
  .greyscale()
  .normalise()
  .toBuffer();

// Vectorizacion con potrace sobre el logo binarizado.
const trace = promisify(posterize);
let svg = await trace(grey, {
  steps: 1,
  threshold: 205,
  color: BRAND,
  background: 'transparent',
  turdSize: 3,
  optTolerance: 0.2,
});
svg = svg
  .replace('<svg ', '<svg role="img" aria-label="Paola Gimenez, odontologa" ')
  .replace(/\sfill="(?!none)[^"]*"/g, ' fill="currentColor"');
if (!/fill="currentColor"/.test(svg)) svg = svg.replace(/<path /g, '<path fill="currentColor" ');
writeFileSync(`${OUT}/logo-paola.svg`, svg);
log('logo-paola.svg (vectorizado con potrace)');

// PNG transparente en alta resolucion, generado desde el vector ya recoloreado.
await sharp(Buffer.from(svg.replace(/currentColor/g, BRAND)), { density: 600 })
  .resize({ width: 1680 })
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}/logo-paola.png`);
log('logo-paola.png (transparente @8x, recoloreado)');

/* ------------------------------------------------------------------ *
 * 6. Favicon e imagen Open Graph.
 * ------------------------------------------------------------------ */
mkdirSync('public', { recursive: true });
const favicon = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
     <rect width="64" height="64" rx="14" fill="${BRAND}"/>
     <path d="M32 17c-4-3-9-3-12 0-3.4 3.4-3 9 0 16 1.7 4 2.6 8 3.3 11.6.5 2.6 1.3 4.4 2.9 4.4s2.4-1.8 2.9-4.4c.7-3.6 1.6-7.6 3.3-11.6 3-7 3.4-12.6 0-16-3-3-8-3-12 0z"
       fill="none" stroke="#fff" stroke-width="3.4" stroke-linejoin="round"/>
   </svg>`
);
writeFileSync('public/favicon.svg', favicon);
await sharp(favicon).resize(180, 180).png().toFile('public/apple-touch-icon.png');
log('public/favicon.svg + apple-touch-icon.png');

console.log('\nListo.');

/* ------------------------------------------------------------------ *
 * 7. Imagen Open Graph (1200x630) para cuando se comparte el enlace.
 * ------------------------------------------------------------------ */
const ogLogo = await sharp(Buffer.from(svg.replace(/currentColor/g, '#ffffff')), { density: 600 })
  .resize({ width: 620 })
  .png()
  .toBuffer();

const ogText = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
     <defs>
       <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
         <stop offset="0%" stop-color="#8c4f4f"/>
         <stop offset="55%" stop-color="#6b3a3b"/>
         <stop offset="100%" stop-color="#522c2d"/>
       </linearGradient>
     </defs>
     <rect width="1200" height="630" fill="url(#g)"/>
     <g fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="7" stroke-linejoin="round">
       <path transform="translate(960,70) scale(10)" d="${toothOutline}"/>
     </g>
     <text x="600" y="420" text-anchor="middle" font-family="Poppins, Segoe UI, sans-serif"
           font-size="40" font-weight="600" fill="#ffffff" letter-spacing="2">
       TU SONRISA, MI PRIORIDAD
     </text>
     <text x="600" y="486" text-anchor="middle" font-family="Poppins, Segoe UI, sans-serif"
           font-size="34" fill="#ffffff" fill-opacity="0.82">
       MN 42041 · Villa Crespo, CABA · Lunes a viernes
     </text>
   </svg>`
);

await sharp(ogText)
  .composite([{ input: ogLogo, top: 150, left: 290 }])
  .jpeg({ quality: 88 })
  .toFile('public/og-image.jpg');
log('public/og-image.jpg');
