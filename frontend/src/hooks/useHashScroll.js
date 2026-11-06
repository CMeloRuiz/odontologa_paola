import { useEffect } from 'react';

/*
  Lleva la pagina a la seccion indicada en la URL cuando se entra directo con
  un ancla (por ejemplo al compartir .../#contacto).

  Hace falta porque el navegador busca el destino mientras parsea el HTML, y
  en ese momento React todavia no monto nada: el ancla no existe y el salto no
  ocurre. Los enlaces internos de la pagina ya funcionan solos, porque ahi el
  contenido ya esta en pantalla.
*/
export default function useHashScroll() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return undefined;

    // Un fotograma para que el layout ya este resuelto.
    const t = requestAnimationFrame(() => {
      const destino = document.getElementById(id);
      if (!destino) return;

      /*
        Instantaneo a proposito: es el salto inicial, igual que haria un ancla
        normal. Con "smooth" el navegador animaria miles de pixeles al abrir la
        pagina. El desplazamiento suave entre secciones ya lo da el
        scroll-behavior del CSS cuando se hace clic en el menu.
        Hace falta "instant" y no "auto", porque "auto" delega en el CSS, que
        justamente pide smooth.
      */
      destino.scrollIntoView({ behavior: 'instant', block: 'start' });
    });

    return () => cancelAnimationFrame(t);
  }, []);
}
