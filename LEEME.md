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

---

## Información por completar (etiquetas amarillas "EJEMPLO")

En la web hay etiquetas amarillas **EJEMPLO** sobre datos inventados. Cuando
pongas el dato real, **borra la etiqueta**: es el texto
`<span class="sample">Ejemplo</span>`. Para encontrarlas todas, busca
`class="sample"` en `index.html` (Cmd + F). **No publiques la web con
etiquetas amarillas visibles.**

### Certificaciones (franja debajo de los números)
Busca `CERTIFICACIONES` en `index.html`. Cada sello es un `<li>` con un nombre
en `<b>` y una descripción corta:
```html
<li>...<span><b>ISO 9001</b>Gestión de calidad</span></li>
```
Cambia el texto, borra los `<li>` que no tengas o copia uno para agregar otro.

### Nuestra planta (fotos)
1. Guarda las fotos en `imagenes/` (JPG de ~1500 px de ancho), por ejemplo
   `planta-lavadoras.jpg`.
2. Busca `NUESTRA PLANTA` y reemplaza cada espacio vacío
   (`<div class="plant__ph">...</div>`) por:
```html
<img src="imagenes/planta-lavadoras.jpg" alt="Lavadoras industriales de Lavandería Liz" loading="lazy" />
```
3. Los números de abajo (`35 t`, `6`, `48 h`) se cambian ahí mismo.

### Caso de éxito y testimonios
Busca `Caso de éxito`. Cambia la frase, la descripción, el nombre y cargo
(`<footer>`) y las 3 cifras de la derecha. Pide permiso al cliente antes de
publicar su nombre. Los testimonios están justo debajo (`testi`): nombre,
cargo y empresa reales.

### Preguntas frecuentes
Busca `PREGUNTAS FRECUENTES`. Cada pregunta es un bloque:
```html
<details class="faq__item">
  <summary>¿Pregunta?<span class="faq__plus" aria-hidden="true"></span></summary>
  <p>Respuesta.</p>
</details>
```

### Cotización: correo, dirección y brochure
Busca `COTIZACIÓN`:
- Correo: cambia `ventas@lavanderializ.pe`.
- Dirección: cambia `Dirección de la planta`.
- Brochure: guarda el PDF en la carpeta (ej. `brochure-liz.pdf`) y cambia el
  `href="#"` de "Descargar brochure" por `href="brochure-liz.pdf" download`.
- El formulario envía todo por WhatsApp; no necesita configuración.
- "política de privacidad": enlaza a tu página de privacidad o quita la frase.

### Libro de Reclamaciones (obligatorio en Perú)
En el footer, el enlace "Libro de Reclamaciones" tiene `href="#"`. Cámbialo
por la dirección de tu libro virtual (por ejemplo, el de INDECOPI o tu
proveedor).
