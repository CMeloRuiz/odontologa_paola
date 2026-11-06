/*
  Consejos tomados de los posteos de Instagram de la doctora.
  Se usan UNICAMENTE las infografias recortadas (src/assets/derived/*), sin el
  panel lateral de Instagram ni el texto de la descripcion del posteo.
  Los titulos y bajadas se escriben aca, en JSX, no se copian de Instagram.
*/
import bruxismoPng from '../assets/derived/bruxismo-recorte.png';
import bruxismoWebp from '../assets/derived/bruxismo-recorte.webp';
import cepilladoPng from '../assets/derived/cepillado-recorte.png';
import cepilladoWebp from '../assets/derived/cepillado-recorte.webp';

export const TIPS = [
  {
    id: 'bruxismo',
    tag: 'Prevención',
    title: 'Síntomas del bruxismo',
    text: 'Desgaste dental, dolores de cabeza, insomnio o chasquidos al abrir la boca pueden estar avisándote que apretás los dientes.',
    png: bruxismoPng,
    webp: bruxismoWebp,
    width: 496,
    height: 508,
    alt: 'Infografía con los síntomas del bruxismo: desgaste dental, dolores de cabeza, insomnio, dolor de oído, zumbidos y chasquidos en la ATM.',
  },
  {
    id: 'cepillado',
    tag: 'Higiene',
    title: 'Cepillado dental: por qué es tan importante',
    text: 'Cepillarte bien todos los días previene caries, elimina la placa bacteriana y mantiene las encías sanas y fuertes.',
    png: cepilladoPng,
    webp: cepilladoWebp,
    width: 406,
    height: 504,
    alt: 'Infografía sobre el cepillado dental y sus seis beneficios principales para la salud bucal.',
  },
];
