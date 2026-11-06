# frontend — React + Vite

Landing de una sola página, en React con Vite y **CSS puro**. Sin Tailwind,
sin Bootstrap, sin styled-components, sin Sass y sin librerías de componentes.
Los íconos son SVG inline escritos a mano en `src/components/Icons.jsx`.

## Comandos

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run images` vuelve a generar los recortes y el logo (ver más abajo).

## Estructura

```
frontend/
├── index.html              SEO, Open Graph, Google Fonts y JSON-LD (Dentist)
├── public/                 favicon.svg, apple-touch-icon.png, og-image.jpg
├── scripts/
│   └── process-images.mjs  Genera los recortes limpios, el logo y los iconos
└── src/
    ├── assets/             Copia de las imágenes originales (no se modifican)
    │   └── derived/        Recortes y versiones optimizadas que usa la web
    ├── components/         Un componente por sección, cada uno con su .css
    ├── data/               Textos y listas reales (tratamientos, horarios...)
    ├── hooks/
    │   └── useReveal.js    Animación de aparición con IntersectionObserver
    ├── styles/
    │   ├── variables.css   Paleta y escalas
    │   └── global.css      Reset, tipografía y utilidades
    ├── App.jsx
    └── main.jsx
```

## Paleta

Extraída del volante impreso (`src/assets/volante.jpg`). Se muestreó la
franja vino del pie y se corrigió el balance de blancos usando el papel del
propio volante como referencia:

| Variable      | Hex       | Uso                                  |
| ------------- | --------- | ------------------------------------ |
| `--wine`      | `#8c4f4f` | Color principal (franja del volante) |
| `--wine-dark` | `#6b3a3b` | Hover y títulos                      |
| `--wine-darker` | `#522c2d` | Footer                             |
| `--wine-soft` | `#a96c6c` | Acentos                              |
| `--rose-50`   | `#fdf8f7` | Fondo de secciones                   |
| `--rose-100`  | `#f8edeb` | Tarjetas y pastillas                 |
| `--rose-200`  | `#e8cfcb` | Bordes                               |
| `--ink`       | `#403634` | Texto                                |
| `--ink-soft`  | `#776764` | Texto secundario                     |

No hay azules ni verdes: de la página guía (DentTeeth) se tomó únicamente
la estructura, no el color.

## Procesamiento de imágenes

`npm run images` lee `src/assets/` y escribe `src/assets/derived/`. Los
originales nunca se sobrescriben. Lo que hace:

- **`paola-recorte.*`** — recorta solo a la doctora de `paola-consulta.png`,
  dejando fuera el texto "Lo que incluye una consulta conmigo", la tipografía
  y la franja de insignias de la pieza original. Se usa el recorte **más
  abierto** que permite la pieza (230,86 + 210×278): el panel beige termina
  en x=230 y la franja de insignias empieza en y=464. Cuanto más ancho el
  recorte, más píxeles reales hay y menos hay que ampliar, que es lo que se
  nota como pixelado. Se amplía con el kernel `mitchell` y no con `lanczos3`
  (lanczos marca mucho los bordes y sobre una foto blanda eso se lee como
  pixelado) y la nitidez final es suave, por el mismo motivo.
  El marco del hero usa esa misma proporción, así la foto entra entera y no
  se recorta ni se estira.
- **`bruxismo-recorte.*` y `cepillado-recorte.*`** — se quedan solo con la
  infografía de la izquierda. Quedan fuera el panel de Instagram (usuario,
  botón Follow, descripción, likes, fecha, caja de comentarios), la flecha de
  carrusel y la chapa con el @usuario.
- **`sonrisa.webp`** — recorte cerrado al rostro, para dejar fuera la remera
  azul, que es un color ajeno a la paleta.
- **`logo-paola.svg` / `.png`** — el logo original (210×60 px) se binariza y
  se vectoriza con `potrace`, se le quita el fondo y se recolorea al color de
  marca. El SVG usa `fill="currentColor"`, así que `Logo.jsx` lo inyecta
  inline para poder pintarlo vino en el header y blanco en el footer.
- **`public/favicon.svg`, `apple-touch-icon.png`, `og-image.jpg`**.

`horarios.png` no se usa como imagen: los horarios van escritos como texto.
