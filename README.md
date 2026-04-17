# AutoCliente IA

Landing page estatica para un servicio de automatizacion de WhatsApp Business con IA y n8n, orientado a PYMES y emprendedores en Mexico.

## Stack

- HTML5 / CSS3 / JavaScript vanilla
- GSAP + ScrollTrigger (CDN) para animaciones
- Sin frameworks, sin dependencias npm, sin build tools
- Deploy estatico (compatible con Netlify, GitHub Pages, etc.)

## Estructura

```
AutoclienteIAv2/
├── index.html              # Landing page principal
├── 404.html                # Pagina de error personalizada
├── robots.txt
├── sitemap.xml
├── pages/
│   ├── soporte.html        # Pagina de soporte y contacto
│   ├── terminos.html       # Terminos y condiciones
│   └── privacidad.html     # Politica de privacidad
└── Assets/
    ├── css/
    │   ├── main.css        # Estilos compartidos (navbar, footer, variables)
    │   ├── home.css        # Estilos exclusivos del landing
    │   ├── soporte.css     # Estilos exclusivos de soporte
    │   └── legal.css       # Estilos compartidos para paginas legales
    ├── js/
    │   ├── main.js         # JS compartido (menu movil, acordeon FAQ)
    │   └── home.js         # JS exclusivo del landing (GSAP, parallax, scroll)
    └── Img/
        └── Logo.png
```

## Arquitectura CSS

Los estilos siguen una arquitectura de capas:

- `main.css` carga en todas las paginas: variables CSS, reset, navbar, footer, botones base
- Cada pagina carga su propio archivo adicional con estilos especificos
- No hay estilos inline ni bloques `<style>` en el HTML

## Configuracion antes de publicar

Reemplazar `TU-DOMINIO.com` con el dominio real en los siguientes archivos:

- `index.html` — meta og:url, og:image, canonical
- `pages/soporte.html` — meta og:url, canonical
- `pages/terminos.html` — meta og:url, canonical
- `pages/privacidad.html` — meta og:url, canonical
- `robots.txt` — linea Sitemap
- `sitemap.xml` — todos los `<loc>`

## Deploy

El sitio no requiere servidor ni build. Se puede publicar directamente arrastrando la carpeta a Netlify o configurando GitHub Pages apuntando a la rama `main`.

## Pendiente

- [ ] Reemplazar testimonios de placeholder con resenas reales
- [ ] Sustituir `TU-DOMINIO.com` con dominio definitivo
- [ ] Agregar og:image personalizada (actualmente usa el logo)
