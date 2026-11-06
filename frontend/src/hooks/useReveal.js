import { useEffect } from 'react';

/*
  Agrega la clase .is-visible a cada elemento con .reveal cuando entra en
  pantalla. Si el usuario pidio menos movimiento, se muestran todos de una.

  El trabajo normal lo hace un IntersectionObserver. Ademas hay un respaldo
  atado al scroll, porque el observador tiene un punto ciego: si un elemento
  pasa de estar debajo del viewport a estar encima sin fotogramas intermedios
  (scroll muy rapido, rueda con inercia, o entrada directa por un enlace de
  ancla), su proporcion visible nunca cruza el umbral, el observador no emite
  ningun aviso y ese elemento quedaria invisible para siempre.

  El respaldo se apaga solo en cuanto no queda nada pendiente.
*/
export default function useReveal() {
  useEffect(() => {
    const pendientes = () => document.querySelectorAll('.reveal:not(.is-visible)');
    const mostrar = (el) => el.classList.add('is-visible');

    const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefiereMenosMovimiento || !('IntersectionObserver' in window)) {
      pendientes().forEach(mostrar);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          mostrar(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const observar = () => pendientes().forEach((el) => observer.observe(el));
    observar();

    // Elementos nuevos en el DOM (por ejemplo, al abrir el menu movil).
    const mutaciones = new MutationObserver(observar);
    mutaciones.observe(document.body, { childList: true, subtree: true });

    /*
      --- Respaldo ---
      Se limita con setTimeout y no con requestAnimationFrame a proposito: si
      la ventana queda tapada por otra, el navegador deja de pintar y congela
      tanto el rAF como los avisos del observador. Como .reveal arranca en
      opacity 0, quedarse sin ninguno de los dos dejaria el contenido invisible
      de forma permanente, que es la peor falla posible en una landing.
      setTimeout sigue corriendo en ese escenario.
    */
    let pedido = null;

    const revisar = () => {
      pedido = null;
      const restantes = pendientes();

      if (!restantes.length) {
        desconectarRespaldo();
        return;
      }

      const limite = window.innerHeight * 0.92;
      restantes.forEach((el) => {
        // top negativo = ya quedo por encima del viewport
        if (el.getBoundingClientRect().top < limite) {
          mostrar(el);
          observer.unobserve(el);
        }
      });
    };

    const agendar = () => {
      if (pedido === null) pedido = setTimeout(revisar, 120);
    };

    function desconectarRespaldo() {
      window.removeEventListener('scroll', agendar);
      window.removeEventListener('resize', agendar);
      document.removeEventListener('visibilitychange', agendar);
    }

    window.addEventListener('scroll', agendar, { passive: true });
    window.addEventListener('resize', agendar, { passive: true });
    document.addEventListener('visibilitychange', agendar);

    // Barrido inicial, por si el observador no llega a avisar del primer lote.
    const inicial = setTimeout(revisar, 300);

    return () => {
      observer.disconnect();
      mutaciones.disconnect();
      desconectarRespaldo();
      clearTimeout(inicial);
      if (pedido !== null) clearTimeout(pedido);
    };
  }, []);
}
