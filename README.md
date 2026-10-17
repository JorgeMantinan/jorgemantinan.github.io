# portafolio

Portafolio web personal de Jorge Mantiñán, publicado en GitHub Pages en
https://jorgemantinan.github.io/portafolio/. Una sola página estática construida
desde cero (HTML, CSS GRID, Sass y JavaScript) como proyecto de aprendizaje de
CSS GRID, y que hoy funciona como web de presentación: quién soy, proyectos,
cursos y contacto. El repositorio se llama ahora `portafolio` (antes `css-grid`).

## Características

- **Header** con menú responsive (hamburguesa en móvil) y fondo propio.
- **Sobre mí**: popup con una breve presentación personal.
- **Proyectos**: rejilla de proyectos; al pulsar "Saber más" se abre un slider
  con imágenes, flechas para navegar y panel de descripción desplegable.
  Proyectos enlazados: web personal, proyectos para empresas, MantiRenfe,
  MantiGestor, MantiTwitch y un bot de licitaciones.
- **Cursos**: agrupados por centro de estudios, con popup de detalle.
- **Contacto** con enlaces a GitHub y LinkedIn.
- **Footer** con logo, redes sociales y copyright.
- Página `cookies.html` de política de cookies y botón "volver arriba".

## Stack

- HTML5 + CSS GRID (maquetación principal, sin frameworks de rejilla).
- Sass (estilos fuente en `sass/`, compilados a `css/`).
- Bootstrap 5.0.2 (solo utilidades y JS del bundle, descargado en `libs/`).
- JavaScript + jQuery (menú, popups y slider de proyectos).
- Google Fonts (Montserrat) y FontAwesome (CDN).

## Estructura

```
index.html          Página única
cookies.html        Política de cookies
css/                CSS compilado (styles.css = Bootstrap, global.css = estilos propios)
sass/               Fuentes Sass (global.scss importa header, main-content, footer,
                    aboutme, slider-project, cookies y popup-courses; styles.scss de Bootstrap)
js/                 navbar.js, aboutme.js, slider-project.js, courses.js, go-top.js
img/                Imágenes del sitio (capturas de proyectos, logos, fondos)
libs/bootstrap-5.0.2/   Bootstrap descargado localmente
```

`index.html` solo carga dos hojas de estilo: `css/styles.css` y `css/global.css`.
El resto de ficheros de `css/` (header, footer, main-content, aboutme,
slider-project) eran compilados parciales sueltos que ya no se usan: todo su
contenido está dentro de `global.css`.

## Requisitos

- Navegador moderno.
- Node.js y Sass (solo si se modifican los `.scss` y hay que recompilar).

## Puesta en marcha

Es una web estática: basta con abrir `index.html` en el navegador (o servir la
carpeta con cualquier servidor estático, por ejemplo `npx serve .`).

Para recompilar los estilos tras modificar cualquier `.scss`:

```bash
npx sass sass/global.scss css/global.css
npx sass sass/styles.scss css/styles.css      # solo si cambia Bootstrap o .link-primary
```

Nunca editar `css/*.css` a mano (salvo parches puntuales documentados en commits).

## Despliegue

GitHub Pages desde el repositorio `JorgeMantinan/portafolio`:
https://jorgemantinan.github.io/portafolio/

> Nota: en GitHub la rama por defecto puede seguir siendo `master` (versión
> antigua). La web completa vive en `develop`.

## Estado

Proyecto original de 2021 hecho a mano; desde octubre de 2026 se corrige y
mejora con ayuda de IA, con los cambios documentados en cada commit. En
mantenimiento activo.
