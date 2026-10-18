# Portafolio

Portafolio web personal de **Jorge Mantiñán**: una sola página estática
(HTML + CSS GRID + Sass + jQuery) que funciona como mi web de presentación —
quién soy, proyectos, cursos y contacto.

> El proyecto empezó en 2021 como ejercicio para aprender CSS GRID (de ahí que
> la carpeta local y el historial de git conserven el nombre `css-grid`) y con
> el tiempo se convirtió en mi portafolio. El repositorio en GitHub pasó a
> llamarse `portafolio`.

## Secciones

- **Header** con menú responsive (hamburguesa en móvil), redes sociales y
  botón para volver arriba.
- **Sobre mí**: popup con una breve presentación personal.
- **Proyectos**: tarjetas con tecnologías y fondo propio; al pulsar se abre un
  slider con las vistas del proyecto (imágenes, flechas, enlace "Ver web" y
  descripción desplegable). El clic fuera del popup también lo cierra.
- **Cursos**: bloques temáticos; cada píldora abre un popup con su detalle
  (incluye formación, idiomas y experiencias extra).
- **Contacto** y **aviso de cookies** (`cookies.html`).

## Tecnologías

- HTML5 + CSS GRID (maquetación principal, sin frameworks de rejilla).
- Sass (fuentes en `sass/`, compiladas a `css/`).
- Bootstrap 5.0.2 (solo utilidades, descargado en `libs/`).
- JavaScript + jQuery (menú, popups, slider).
- Google Fonts (Montserrat) y FontAwesome.

## Estructura

```
index.html              Página única
cookies.html            Aviso de cookies
css/                    CSS compilado (styles.css = Bootstrap, global.css = estilos propios)
sass/                   Fuentes Sass (global.scss importa header, main-content, footer,
                        aboutme, slider-project, cookies y popup-courses)
js/                     navbar.js, aboutme.js, slider-project.js, courses.js, go-top.js
img/                    Imágenes y capturas de los proyectos
libs/bootstrap-5.0.2/   Bootstrap descargado localmente
```

`index.html` solo carga `css/styles.css` y `css/global.css`; todo lo propio
está en `global.css` (nunca se edita a mano: se recompila desde Sass).

## Desarrollo local

Web estática: abre `index.html` en el navegador (o sirve la carpeta con
`npx serve .`).

Tras modificar cualquier `.scss`:

```bash
npx sass sass/global.scss css/global.css
npx sass sass/styles.scss css/styles.css
```

## Publicación

- `master` = producción (lo publicado). `develop` = taller de trabajo.
- GitHub Pages despliega `master` → <https://jorgemantinan.github.io/css-grid/>
  (la URL cambiará si se renombra el repositorio).
- El repositorio espejo `jorgemantinan.github.io` publica la web en la **raíz**
  → <https://jorgemantinan.github.io/> y se sincroniza solo cada 30 minutos
  desde `master` (workflow `sync.yml`).

## Mantenimiento

Los commits hasta `f359da7` (agosto de 2021) están hechos a mano; desde
entonces el proyecto se corrige y mejora con ayuda de IA, y cada cambio queda
documentado en su commit. La memoria del proyecto para los agentes está en
`AGENTS.md`.

## Fuentes originales

- Youtube Channel - FalconMasters => https://www.youtube.com/playlist?list=PLhSj3UTs2_yWsFd43wpLog5HUFzDgIbWj
- Developer Mozilla => https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout
- Css Tricks => https://css-tricks.com/snippets/css/complete-guide-grid/
- Download Boostrap 5.0 => https://www.youtube.com/watch?v=rIEoF6B_GNY (part 3 for modify boostrap variables
- Responsive Menu => https://www.youtube.com/watch?v=vFgtwsZVybY&t=1627s
