# Lavandería Liz · Página web

Sitio de una sola página, sin dependencias ni instalación. Solo abre `index.html` en el navegador.

## Archivos
- `index.html` — el contenido (textos, secciones).
- `styles.css` — colores y diseño.
- `script.js` — animaciones y contadores.

## Qué personalizar (todo está en `index.html`)

### 1. Los números (contadores)
Busca `data-target` y cambia el valor. Por ejemplo:
```html
<div class="stat__num" data-target="500000" data-suffix="+">0</div>
```
- `data-target` = el número final.
- `data-suffix` = lo que va después (ej. `+`, `k`).

Valores actuales (cámbialos por los reales):
- Años de experiencia: **22**
- Kilos lavados: **500,000+**
- Clientes: **12,000+**
- Empresas aliadas: **80+**

### 2. WhatsApp y teléfono
En la sección de contacto, reemplaza `000000000000` por tu número con código de país (sin signos ni espacios), por ejemplo `521234567890`:
```html
<a href="https://wa.me/000000000000" ...>
<a href="tel:+000000000000" ...>
```

### 3. Fotos de la historia (viaje en el tiempo)
La sección de historia cuenta tu evolución con fotos: las antiguas salen con
efecto nostálgico (sepia + marco tipo polaroid) y las recientes a todo color.
Para poner tus fotos reales, lee `imagenes/LEEME.txt`. En resumen: coloca tus
fotos en la carpeta `imagenes/` y, en cada bloque `<article class="era ...">`,
cambia el `<div class="photo-ph">...</div>` por:
```html
<img src="imagenes/2004.jpg" alt="Lavandería Liz en 2004">
```

### 4. Servicios, clientes y testimonios
Edita los textos en las secciones `<!-- SERVICIOS -->` y `<!-- CLIENTES -->`. Cambia los nombres de "Hotel Aurora", etc. por tus clientes reales.

### 4. Colores
En `styles.css`, arriba de todo, en `:root` puedes cambiar la paleta (`--coral`, `--orange`, `--pink`, etc.).

## Publicar el sitio (gratis)
Sube estos 3 archivos a cualquiera de estos servicios:
- **Netlify** (arrastra la carpeta a netlify.com/drop)
- **GitHub Pages**
- **Vercel**
- O súbelos por FTP a tu hosting actual.
