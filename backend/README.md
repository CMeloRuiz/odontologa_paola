# backend — reservado

Esta carpeta está **vacía a propósito**. Se reserva para cuando el sitio
necesite lógica de servidor.

## ¿Por qué hoy no hace falta?

La landing de la Dra. Paola Giménez resuelve todo el contacto con enlaces
directos a WhatsApp (`https://wa.me/...`), al teléfono (`tel:`) y a Instagram.
No hay formularios, no hay base de datos y no se guarda ningún dato personal,
así que el sitio es 100 % estático y se puede publicar en cualquier hosting.

## ¿Cuándo convendría usarla?

Si más adelante la doctora quiere, por ejemplo:

- Un **formulario de contacto** que llegue por correo en lugar de WhatsApp.
- Un **sistema de turnos** con disponibilidad real y confirmaciones.
- Un **panel** para cargar y editar los consejos sin tocar el código.
- **Recordatorios** automáticos de turno por correo o WhatsApp.

En ese caso, acá iría una API (por ejemplo Node + Express o Fastify) y el
frontend la consumiría con `fetch` desde `frontend/src`.

> No construir nada acá sin acordarlo antes: hoy la propuesta de demostración
> es deliberadamente simple y sin costos de servidor.
