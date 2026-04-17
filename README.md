# AutoCliente IA

Landing page estática para un servicio de automatización de WhatsApp Business con IA y n8n, orientado a PYMES y emprendedores en México.

## 🚀 Descripción

AutoCliente IA ayuda a negocios pequeños a gestionar respuestas de WhatsApp con flujos automáticos y respuestas inteligentes, sin necesidad de código ni configuración compleja.

El sitio es un landing page pensado para: 
- explicar la oferta
- mostrar beneficios
- facilitar la conversión por WhatsApp
- cumplir con términos y privacidad

## 🧩 Stack

- HTML5 / CSS3 / JavaScript vanilla
- GSAP + ScrollTrigger (CDN) para animaciones suaves
- Sin frameworks, sin dependencias npm, sin build tools
- Deploy 100% estático: compatible con GitHub Pages, Netlify, Vercel, o cualquier hosting estático

## 📁 Estructura del proyecto

```
autocliente-ia/
├── index.html              # Landing page principal
├── 404.html                # Página de error personalizada
├── robots.txt              # Reglas de rastreo para buscadores
├── sitemap.xml             # Mapa del sitio para SEO
├── pages/
│   ├── soporte.html        # Página de soporte y contacto
│   ├── terminos.html       # Términos y condiciones
│   └── privacidad.html     # Política de privacidad
└── Assets/
    ├── css/
    │   ├── main.css        # Estilos globales: navbar, footer, tipografía, utilidades
    │   ├── home.css        # Estilos exclusivos del landing
    │   ├── soporte.css     # Estilos de la página de soporte
    │   └── legal.css       # Estilos para páginas legales
    ├── js/
    │   ├── main.js         # Comportamiento común: menú móvil, acordeón FAQ
    │   └── home.js         # Animaciones y scroll del landing
    └── Img/
        └── Logo.png
```

## ✅ Qué incluye

- Landing page comercial para soluciones de WhatsApp Business + IA
- Navegación responsive y menú móvil
- Sección de beneficios
- Sección de precios
- FAQ
- Enlace directo a WhatsApp con mensaje predefinido
- Páginas legales: soporte, términos y privacidad
- SEO básico con meta tags, Open Graph, sitemap y robots

## ⚙️ Instalación local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/sick234/autocliente-ia.git
   cd autocliente-ia
   ```
2. Abre `index.html` en el navegador.

> No necesitas Node ni npm para ejecutar este proyecto.

## 📌 Personalización rápida

### Cambiar el texto de WhatsApp

Actualiza la URL del botón de WhatsApp en `index.html` y en `pages/soporte.html`:

```html
https://wa.me/527352434405?text=Hola%2C%20vi%20AutoCliente%20IA%20y%20quiero%20informaci%C3%B3n%20para%20mi%20negocio%20en%20M%C3%A9xico.
```

### Cambiar el dominio de Open Graph

En `index.html`, reemplaza `https://TU-DOMINIO.com/` por tu URL real en las etiquetas:

- `og:image`
- `og:url`
- `canonical`
- `twitter:image`

### Actualizar el logo

Reemplaza `Assets/Img/Logo.png` por el logo de tu marca y mantén el mismo nombre de archivo.

## 🚀 Despliegue recomendado

### GitHub Pages

1. Sube el repositorio a GitHub.
2. Activa Pages en la rama `main` o `master` desde los ajustes del repo.
3. Usa la carpeta raíz como fuente.

### Netlify / Vercel

1. Conecta el repositorio.
2. Selecciona deploy estático sin build command.
3. Establece la carpeta raíz como directorio de publicación.

## 🛠️ Mejora de SEO y marketing

- Cambia el título de la página en `<title>`.
- Personaliza `meta description` para atraer clientes.
- Sustituye los textos de hero y beneficios por diferencias reales del servicio.
- Actualiza `sitemap.xml` si cambias rutas o agregas páginas.

## 📌 Recomendaciones inmediatas

- Reemplazar `https://TU-DOMINIO.com/` con el dominio real.
- Revisar el número de WhatsApp si es diferente.
- Confirmar que `pages/terminos.html` y `pages/privacidad.html` se muestran bien en móviles.

## 🧾 Licencia

Este proyecto es un sitio estático. Agrega aquí tu licencia si deseas publicarlo con reglas específicas.
