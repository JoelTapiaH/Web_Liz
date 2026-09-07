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
- Años de experiencia: **35**
- Kilos lavados (histórico): **500,000+**
- Clientes: **12,000+**
- Empresas aliadas: **80+**

Y en el bloque "Lo que procesamos cada mes" (capacidad mensual):
- Toneladas de ropa: **35**
- Frazadas lavadas: **12,000**
- Sábanas lavadas: **6,300**
- Overoles industriales: **4,500**
- Edredones lavados: **3,800**

### 2. WhatsApp y teléfono
En la sección de contacto, reemplaza `000000000000` por tu número con código de país (sin signos ni espacios), por ejemplo `521234567890`:
```html
<a href="https://wa.me/000000000000" ...>
<a href="tel:+000000000000" ...>
```

### 3. Foto de fondo del banner principal (hero)
Guarda tu foto (del local, el equipo o la ropa lista) como `imagenes/hero.jpg`
(idealmente horizontal, 1920×1080 o similar). Se usa como imagen mientras
carga el video (o en su lugar, si no subes video) con un velo claro para que
el texto siga siendo legible. Si no subes ninguna, el banner se queda en
blanco liso.

### 4. Video de fondo del banner principal (hero)
Guarda tu video como `imagenes/hero.mp4` (horizontal, ideal 1920×1080, sin
audio o silenciado, pocos segundos en bucle) y se reproducirá solo detrás del
título. Si no subes ninguno, se ve la foto del punto 3, o el fondo liso.

### 5. Fotos de la trayectoria (línea de tiempo)
La sección de historia cuenta tu evolución con fotos: las antiguas se ven en
blanco y negro y las recientes a todo color. Para poner tus fotos reales,
coloca el archivo en la carpeta `imagenes/` y, en cada bloque
`<li class="hito ...">`, cambia el `<div class="photo-ph">...</div>` por:
```html
<img src="imagenes/2003.jpg" alt="Lavandería Liz en 2003">
```

### 6. Industrias, clientes y testimonios
Edita los textos en las secciones `<!-- SOLUCIONES POR INDUSTRIA -->` y
`<!-- CLIENTES -->`. Cambia los logos y nombres por tus clientes reales.

### 7. Colores
En `styles.css`, arriba de todo, en `:root` puedes cambiar la paleta (`--ink`, `--brand-red`, `--pastel-blue-text`, etc.).

## Publicar el sitio (gratis)
Sube `index.html`, `styles.css`, `script.js` y la carpeta `imagenes/` completa a cualquiera de estos servicios:
- **Netlify** (arrastra la carpeta a netlify.com/drop)
- **GitHub Pages**
- **Vercel**
- O súbelos por FTP a tu hosting actual.
