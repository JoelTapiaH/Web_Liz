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
- Toneladas de ropa lavadas (histórico): **+500** (usa `data-prefix="+"` para el signo delante)
- Clientes: **12,000+**
- Empresas aliadas: **80+**

Y en el bloque "Lo que procesamos cada mes" (capacidad mensual):
- Toneladas de ropa: **35**
- Frazadas lavadas: **12,000**
- Sábanas lavadas: **6,300**
- Overoles industriales: **4,500**
- Edredones lavados: **3,800**

### 2. WhatsApp y teléfono
El número actual es **956 845 005** (el que aparece en la miniván), con código
de Perú: `51956845005`. Aparece en 5 lugares de `index.html` (hero, contacto,
footer y el botón flotante verde). Para cambiarlo, busca `51956845005` y
reemplázalo en todos. El texto `?text=...` es el mensaje que se pre-escribe
al abrir WhatsApp.

### 3-4. Carrusel de fondo del banner principal (hero)
El banner alterna dos fotos de la flota (`imagenes/Camion.jpg` y
`imagenes/Miniban.jpg`, versiones comprimidas de los PNG originales) cada 5
segundos, con un velo oscuro encima para que el texto blanco siga siendo
legible. Usa siempre JPG de ~1500 px de ancho (no PNG de 2 MB) para que cargue
rápido en celulares. Para cambiarlas o agregar más, edita el bloque
`<div class="hero__carousel" id="heroCarousel">` en `index.html`: cada foto es
un `<img class="hero__slide">` (la primera lleva además la clase
`is-active`), y agrega o quita imágenes ahí.

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
