# Paola Giménez · Odontóloga — landing de demostración

Landing page de una sola página para el consultorio odontológico de la
**Dra. Paola Giménez** (MN 42041), en Villa Crespo, CABA.

Es una **propuesta de demostración**: todos los datos de contacto, los
tratamientos y los horarios salen del volante impreso y de su Instagram.
No hay testimonios, precios, reseñas ni años de experiencia, porque esa
información no la tenemos y no se inventó nada.

## Estructura del repositorio

```
odontologa_paola/
├── assets/            Imágenes originales, tal cual se recibieron (no se tocan)
├── backend/           Reservado (hoy vacío) — ver backend/README.md
└── frontend/          La aplicación React + Vite
```

## Cómo correrlo

Hace falta **Node.js 18 o superior**.

```bash
cd frontend
```

```bash
npm install
```

```bash
npm run dev
```

Queda en `http://localhost:5173` (o el puerto que indique la consola).

Para generar la versión lista para publicar:

```bash
npm run build
```

El resultado queda en `frontend/dist`. Como el build usa rutas relativas,
esa carpeta se puede subir tal cual a cualquier hosting estático (Netlify,
Vercel, GitHub Pages, Hostinger, un subdirectorio de un dominio, etc.).

Para revisar el build antes de publicarlo:

```bash
npm run preview
```

## Datos a confirmar con la doctora

1. **Dirección exacta.** El volante solo dice la esquina "Vera y Serrano".
   Falta altura, piso y departamento. Están marcados con comentarios en
   `frontend/src/data/site.js` y en el JSON-LD de `frontend/index.html`.
2. **Horarios vigentes.** Hoy figuran lunes a viernes de 9 a 15 h y de
   16:30 a 20 h, tomados de su pieza de Instagram.
3. **Sección de consejos.** Confirmar si quiere mostrar las infografías de
   bruxismo y cepillado. Si no, se borra `<Tips />` de
   `frontend/src/App.jsx` y el enlace "Consejos" del menú.
4. **Dominio.** Las etiquetas canónica y Open Graph apuntan a un dominio de
   ejemplo; hay que reemplazarlo por el definitivo.
