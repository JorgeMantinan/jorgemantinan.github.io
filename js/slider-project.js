let projectImgs = [
    {0: "./img/portfolio-inicio.png",1: "./img/portfolio-cursos.png"},
    {0: "./img/EquipoEmpresarial.jpg"},
    {0: "./img/renfe-1-inicio.png",1: "./img/renfe-2-caracteristicas.png",
        2: "./img/renfe-3-como-funciona.png",3: "./img/renfe-4-trenes.png",
        4: "./img/renfe-5-trayecto.png",5: "./img/renfe-6-mapa.png",
        6: "./img/renfe-7-registro.png",7: "./img/renfe-8-alertas.png",
        8: "./img/renfe-9-alerta-detalle.png",9: "./img/renfe-10-nueva-alerta.png"},
    {0: "./img/gestor-1-inicio.png",1: "./img/gestor-2-funciones.png",
        2: "./img/gestor-3-demo.png",3: "./img/gestor-4-opiniones.png",
        4: "./img/gestor-5-precios.png",5: "./img/gestor-6-dashboard.png",
        6: "./img/gestor-7-facturas.png",7: "./img/gestor-8-nominas.png",
        8: "./img/gestor-9-alquiler.png",9: "./img/gestor-10-fiscal.png"},
    {0: "./img/twitch-1-inicio.png",1: "./img/twitch-2-contacto.png",
        2: "./img/twitch-3-panel-usuario.png",3: "./img/twitch-4-ruleta.png",
        4: "./img/twitch-7-ruleta-ganador.png",5: "./img/twitch-5-barcos.png",
        6: "./img/twitch-8-barcos-pelea.png",7: "./img/twitch-9-bingo-participantes.png",
        8: "./img/twitch-6-bingo.png"},
    {0: "./img/bot-1-informe.png",1: "./img/bot-2-tabla.png",
        2: "./img/bot-3-informe-oscuro.png"},
    {0: "./img/vecinos-1-inicio.png",1: "./img/vecinos-2-funciones.png"},
    {0: "./img/english-1-inicio.png",1: "./img/english-2-ejercicios.png"},
    {0: "./img/designed-1-inicio.png",1: "./img/designed-2-editor.png"},
    {0: "./img/insta-1-inicio.png",1: "./img/insta-2-analizar.png"},
    {0: "./img/karaoke-1-inicio.png",1: "./img/karaoke-2-panel.png",
        2: "./img/karaoke-3-overlay.png"},
    {0: "./img/inmobiliaria-1-inicio.png",1: "./img/inmobiliaria-2-viviendas.png"},
    {0: "./img/judicial-1-inicio.png",1: "./img/judicial-2-funciones.png"}
];

let project = [
    {
        img: projectImgs[0],
        title: "Web Personal",
        titleEn: "Personal Website",
        description: "Mi portfolio personal. Empecé este sitio en 2021 a mano, sin frameworks ni IA: " +
            "solo HTML, CSS GRID, Sass, JavaScript y jQuery aprendidos de la documentación y vídeos. " +
            "En octubre de 2026 lo retomé para terminar lo que había dejado pendiente y mejorarlo " +
            "con IA: el commit d376721 marca el inicio de esa etapa. Sigue siendo una web estática, " +
            "sin más build que el compilador de Sass.",
        descriptionEn: "My personal portfolio. I started this site by hand in 2021, with no frameworks " +
            "and no AI: just HTML, CSS GRID, Sass, JavaScript and jQuery learned from the " +
            "documentation and videos. In October 2026 I picked it up again to finish what I had " +
            "left pending and improve it with AI: commit d376721 marks the start of that stage. " +
            "It is still a static website, with no build step other than the Sass compiler.",
        url: ""
    },
    {
        img: projectImgs[1],
        title: "Proyectos para empresas",
        titleEn: "Projects for companies",
        description: "Realicé las prácticas de formación trabajando para una pyme llamada aCore, donde " +
            "me formaron y trabajé activamente en implementaciones de automatización de pruebas " +
            "Java con las librerías JUnit, Mockito y Selenium. " +
            "Quería continuar aprendiendo más acerca de fullstack y empecé a trabajar en Atos " +
            "como desarrollador fullstack usando Java Spring Boot + Angular + MySQL, " +
            "realizando múltiples implementaciones, entre ellas gestión de usuarios con OAuth2, " +
            "control de excepciones, generación automatizada de PDFs, etc. " +
            "Más tarde me contrató Minsait, donde trabajé con PHP en la web existente a la par " +
            "que construía otros servicios en Angular y Node.js, usando y creando funcionalidades " +
            "también con PostgreSQL para nutrir a ambas aplicaciones. " +
            'Más información en <a href="https://www.linkedin.com/in/jorge-manti%C3%B1%C3%A1n-montero/" ' +
            'target="_blank" rel="noopener noreferrer">mi perfil de LinkedIn</a>.',
        descriptionEn: "I did my training internship at a small company called aCore, where they " +
            "trained me and I actively worked on Java test automation implementations with the " +
            "JUnit, Mockito and Selenium libraries. " +
            "I wanted to keep learning about fullstack development and started working at Atos " +
            "as a fullstack developer using Java Spring Boot + Angular + MySQL, carrying out " +
            "multiple implementations, among them user management with OAuth2, exception " +
            "handling, automated PDF generation, etc. " +
            "Later I was hired by Minsait, where I worked with PHP on the existing website while " +
            "building other services in Angular and Node.js, using and creating features with " +
            "PostgreSQL as well to feed both applications. " +
            'More info on <a href="https://www.linkedin.com/in/jorge-manti%C3%B1%C3%A1n-montero/" ' +
            'target="_blank" rel="noopener noreferrer">my LinkedIn profile</a>.',
        url: ""
    },
    {
        img: projectImgs[2],
        title: "MantiRenfe",
        titleEn: "MantiRenfe",
        description: "Vigila las plazas libres de tus trenes y te avisa en cuanto se libera una: " +
            "mapa en tiempo real, cuenta atrás a tu salida y avisos según tu bono. " +
            "Instalable como app en Android e iPhone (PWA).<br><br>" +
            "Hecho con React + TypeScript (Vite, Tailwind y mapa Leaflet) en el frontend, " +
            "NestJS con Prisma y PostgreSQL en la API, colas BullMQ sobre Redis y un worker " +
            "que sondea los feeds oficiales de Renfe (GTFS y GTFS-RT), autenticación con " +
            "Supabase, notificaciones push y app móvil en Expo/React Native.<br><br>" +
            "Queriendo practicar a programar con IA, un mes antes del accidente de Urda y " +
            "volviendo de un viaje con mi hermano en el coche, me comentó que su pareja no " +
            "encontraba la forma de que Renfe le avisase cuando liberaba una plaza. " +
            "Al día siguiente me puse a realizar este proyecto y le sirvió.<br><br>" +
            "Actualmente tarda en iniciar el servidor backend donde está desplegado porque " +
            "no estoy obteniendo ingresos para mantenerlo 24/7 levantado, pero está " +
            "completamente funcional.",
        descriptionEn: "Watches the free seats on your trains and notifies you as soon as one is " +
            "released: real-time map, countdown to your departure and alerts based on your pass. " +
            "Installable as an app on Android and iPhone (PWA).<br><br>" +
            "Built with React + TypeScript (Vite, Tailwind and a Leaflet map) on the frontend, " +
            "NestJS with Prisma and PostgreSQL for the API, BullMQ queues on Redis and a worker " +
            "that polls Renfe's official feeds (GTFS and GTFS-RT), authentication with Supabase, " +
            "push notifications and a mobile app in Expo/React Native.<br><br>" +
            "Wanting to practice programming with AI, a month before the Urda accident and " +
            "coming back from a trip with my brother in the car, he told me that his partner " +
            "couldn't find a way for Renfe to notify her when a seat was released. " +
            "The next day I started on this project and it did the job for her.<br><br>" +
            "Right now the backend server where it is deployed takes a while to start because " +
            "I am not earning income to keep it up 24/7, but it is fully functional.",
        url: "https://mantirenfe.vercel.app"
    },
    {
        img: projectImgs[3],
        title: "MantiGestor",
        titleEn: "MantiGestor",
        description: "Gestión para autónomos con IA: fotografía facturas, controla tu IVA e IRPF, " +
            "prepara la declaración de la renta y gestiona tu negocio en un solo lugar.",
        descriptionEn: "Bookkeeping for freelancers with AI: photograph your invoices, track your " +
            "VAT and income tax, prepare your income tax return and manage your business in one " +
            "place.",
        url: "https://mantigestor.vercel.app"
    },
    {
        img: projectImgs[4],
        title: "MantiTwitch",
        titleEn: "MantiTwitch",
        description: "Suite de interacción para Twitch: sorteos y dinámicas con el chat de tu canal, " +
            "con perfiles de usuario, moderador y streamer.",
        descriptionEn: "Interaction suite for Twitch: giveaways and dynamics with your channel's " +
            "chat, with user, moderator and streamer profiles.",
        url: "https://manti-twitch.vercel.app"
    },
    {
        img: projectImgs[5],
        title: "Bot de licitaciones",
        titleEn: "Tender bot",
        description: "Bot en Python creado con IA que obtiene licitaciones públicas de forma " +
            "automatizada para no perderse ninguna oportunidad.",
        descriptionEn: "Python bot built with AI that automatically fetches public tenders so no " +
            "opportunity is missed.",
        url: ""
    },
    {
        img: projectImgs[6],
        title: "MantiVecinos",
        titleEn: "MantiVecinos",
        description: "SaaS multi-comunidad de fincas para vecinos, presidentes y administradores: " +
            "información de la comunidad, economía, reuniones con asistencia, incidencias, " +
            "documentación, invitaciones y profesionales, todo aislado por comunidad.<br><br>" +
            "Monorepo con pnpm workspaces: React 19 + TypeScript + Vite + Tailwind + TanStack Query " +
            "en el frontend, API Hono con Better Auth (sesiones por correo) y Drizzle ORM sobre " +
            "PostgreSQL (Neon en producción, PGlite en local), emails con Resend y ficheros en " +
            "Vercel Blob. Contratos Zod compartidos entre web y API, migraciones, seeds y " +
            "copias de seguridad como comandos del propio monorepo, tests con Vitest y " +
            "Playwright y CI con GitHub Actions.<br><br>" +
            "Diseñado con ADRs versionados y roadmap por fases: la fase actual es la preparación " +
            "para producción (copias de seguridad, retención y métricas de cuota).",
        descriptionEn: "Multi-community SaaS for apartment buildings, aimed at neighbours, " +
            "presidents and administrators: community information, finances, meetings with " +
            "attendance, incidents, documentation, invitations and service providers, all " +
            "isolated per community.<br><br>" +
            "pnpm workspaces monorepo: React 19 + TypeScript + Vite + Tailwind + TanStack Query " +
            "on the frontend, an Hono API with Better Auth (email sessions) and Drizzle ORM over " +
            "PostgreSQL (Neon in production, PGlite locally), emails with Resend and file storage " +
            "on Vercel Blob. Zod contracts shared between web and API, migrations, seeds and " +
            "backups as commands of the monorepo itself, Vitest and Playwright tests and " +
            "GitHub Actions CI.<br><br>" +
            "Designed with versioned ADRs and a phased roadmap: the current phase is preparation " +
            "for production (backups, retention and quota metrics).",
        url: "https://mantivecinos.vercel.app"
    },
    {
        img: projectImgs[7],
        title: "English Coach",
        titleEn: "English Coach",
        description: "App de inglés para programadores hispanohablantes que buscan trabajo en " +
            "EE. UU.: más de 845 ejercicios en 14 módulos (gramática, phrasal verbs, vocabulario " +
            "tech, false friends, idioms, business email, listening, entrevistas, pronunciación) " +
            "con estilo Duolingo: XP, rachas y repetición espaciada. Cada respuesta se explica en " +
            "inglés y español, todos los elementos tienen botón 🔊 (Web Speech API) y traducción " +
            "on-demand 🌐.<br><br>" +
            "Incluye diccionario navegable, exámenes cronometrados con certificados, test de nivel " +
            "CEFR (A2–C1), Smart Review de puntos débiles, modo oscuro y atajos de teclado. El " +
            "progreso se sincroniza en la nube con un GitHub Gist privado: gratis, sin servidor ni " +
            "base de datos, entre el móvil y el PC.<br><br>" +
            "100% HTML + CSS + JavaScript puros, sin frameworks ni build. Despliegue automático en " +
            "Vercel con cada push a master.",
        descriptionEn: "English app for Spanish-speaking programmers looking for a job in the US: " +
            "845+ exercises across 14 modules (grammar, phrasal verbs, tech vocabulary, false " +
            "friends, idioms, business email, listening, interviews, pronunciation) with a " +
            "Duolingo-style XP, streaks and spaced repetition. Every answer is explained in " +
            "English and Spanish, every element has a 🔊 button (Web Speech API) and on-demand " +
            "🌐 translation.<br><br>" +
            "Includes a browsable dictionary, timed exams with certificates, a CEFR level test " +
            "(A2–C1), Smart Review of weak spots, dark mode and keyboard shortcuts. Progress " +
            "syncs to the cloud through a private GitHub Gist: free, with no server or database, " +
            "between your phone and your PC.<br><br>" +
            "100% plain HTML + CSS + JavaScript, no frameworks and no build step. Automatic " +
            "deploys on Vercel with every push to master.",
        url: "https://mantienglish.vercel.app"
    },
    {
        img: projectImgs[8],
        title: "designed",
        titleEn: "designed",
        description: "Constructor visual de webs estilo WordPress que exporta proyectos React + " +
            "TypeScript reales y modulares. Diseñas en el navegador: galería de plantillas " +
            "filtrables, panel de propiedades (columnas, spacing, radios, sombras, gradientes, " +
            "breakpoints), catálogo de animaciones con preview en vivo, fondos interactivos " +
            "(spotlight, malla de gradiente, partículas, parallax) y paletas de 5 colores con " +
            "validación de contraste WCAG AA/AAA.<br><br>" +
            "La idea central: el diseño es un archivo de datos. Un único design-spec.json " +
            "validado con Zod alimenta a la vez el preview, el codegen y futuros emisores. " +
            "La exportación no es HTML muerto: descargas un ZIP con estructura profesional " +
            "(components/, hooks/, styles/, SCSS + CSS custom properties, README en español) " +
            "listo para pnpm install && pnpm dev.<br><br>" +
            "Monorepo pnpm + Turborepo con Next.js 16 (App Router), React 19, TypeScript estricto " +
            "y SCSS; paquetes internos de design tokens (→ SCSS + CSS vars + TS), 115 paletas con " +
            "validador WCAG, animaciones, primitivas headless, codegen y archiver. ESLint, " +
            "Prettier, CommitLint, Husky, Vitest, Playwright y CI con GitHub Actions. Licencia MIT.",
        descriptionEn: "Visual web builder, WordPress-style, that exports real modular React + " +
            "TypeScript projects. You design in the browser: filterable template gallery, " +
            "properties panel (columns, spacing, radii, shadows, gradients, breakpoints), " +
            "animation catalogue with live preview, interactive backgrounds (spotlight, gradient " +
            "mesh, particles, parallax) and 5-colour palettes with WCAG AA/AAA contrast " +
            "validation.<br><br>" +
            "The core idea: the design is a data file. A single design-spec.json validated with " +
            "Zod feeds the preview, the codegen and future emitters alike. The export is not dead " +
            "HTML: you download a ZIP with a professional structure (components/, hooks/, styles/, " +
            "SCSS + CSS custom properties, Spanish README) ready for pnpm install && pnpm dev." +
            "<br><br>" +
            "pnpm + Turborepo monorepo with Next.js 16 (App Router), React 19, strict TypeScript " +
            "and SCSS; internal packages for design tokens (→ SCSS + CSS vars + TS), 115 palettes " +
            "with a WCAG validator, animations, headless primitives, codegen and archiver. " +
            "ESLint, Prettier, CommitLint, Husky, Vitest, Playwright and GitHub Actions CI. " +
            "MIT licence.",
        url: ""
    },
    {
        img: projectImgs[9],
        title: "Insta Followers",
        titleEn: "Insta Followers",
        description: "Web personal para analizar tu cuenta de Instagram y ver quién no te sigue " +
            "de vuelta. Te identificas pegando la cookie sessionid (Instagram ya bloquea el login " +
            "por contraseña con challenge_required) y el servidor consulta seguidores y seguidos " +
            "devolviendo conteos y la lista de cuentas con avatar, nombre y si están " +
            "verificadas.<br><br>" +
            "Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 + Zod, con una API " +
            "route que usa instagram-private-api. Detalles técnicos: pausas aleatorias de " +
            "600–1300 ms entre páginas y versión de app Android suplantada para evitar el " +
            "rate limit, rate limiting local por IP (5 análisis cada 10 min), validación previa " +
            "«Conectado como @usuario» y HTTP Basic Auth obligatorio en producción. Las cookies " +
            "solo viven en la petición: nunca se persisten ni se guardan.",
        descriptionEn: "Personal website to analyse your Instagram account and see who does not " +
            "follow you back. You identify yourself by pasting the sessionid cookie (Instagram " +
            "already blocks password login with challenge_required) and the server fetches " +
            "followers and following, returning counts and the list of accounts with avatar, " +
            "name and verified status.<br><br>" +
            "Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 + Zod, with an API " +
            "route using instagram-private-api. Technical details: random 600–1300 ms pauses " +
            "between pages and a spoofed Android app version to dodge rate limiting, local rate " +
            "limiting by IP (5 analyses every 10 min), a previous «Connected as @user» check " +
            "and mandatory HTTP Basic Auth in production. Cookies only live in the request: they " +
            "are never persisted or stored.",
        url: ""
    },
    {
        img: projectImgs[10],
        title: "Karaoke Twitch",
        titleEn: "Twitch Karaoke",
        description: "Karaoke en directo para Twitch: el chat escribe !cancion y la canción suena " +
            "en pantalla con letra karaoke palabra a palabra en el overlay de OBS. Panel " +
            "administrativo con cola reordenable, votos para saltar, historial y stats, ajuste " +
            "fino de letra ±0.1 s, ajustes en vivo, backup en ZIP, editor de letra, alias por " +
            "canción y selección de canal para varios streamers en una instancia.<br><br>" +
            "Importa canciones de Suno (scraper propio con descifrado AES), MP3 propios o YouTube " +
            "con yt-dlp embebido, y sincroniza la letra con Whisper local vía " +
            "@huggingface/transformers. La sincronía sale de audio.currentTime en el propio " +
            "overlay, así que hay cero desfase; si OBS recarga la fuente, el servidor le " +
            "reenvía la canción con los segundos ya transcurridos.<br><br>" +
            "Node 20+ con Express 5, Socket.IO y tmi.js (chat en modo anónimo de solo lectura, " +
            "sin OAuth), ffmpeg/ffprobe estáticos y túnel saliente de Cloudflare para la URL " +
            "pública sin abrir puertos.",
        descriptionEn: "Live karaoke for Twitch: the chat writes !song and the track plays on " +
            "screen with word-by-word karaoke lyrics in the OBS overlay. Administrative panel " +
            "with a reorderable queue, votes to skip, history and stats, fine lyric tuning of " +
            "±0.1 s, live settings, ZIP backups, a lyric editor, per-song aliases and channel " +
            "selection so several streamers can share one instance.<br><br>" +
            "Imports songs from Suno (own scraper with AES decryption), your own MP3s or YouTube " +
            "through embedded yt-dlp, and syncs the lyrics with local Whisper via " +
            "@huggingface/transformers. The sync comes from audio.currentTime in the overlay " +
            "itself, so there is zero drift; if OBS reloads the source, the server resends the " +
            "track with the seconds already elapsed.<br><br>" +
            "Node 20+ with Express 5, Socket.IO and tmi.js (anonymous read-only chat, no OAuth), " +
            "static ffmpeg/ffprobe and an outgoing Cloudflare tunnel for the public URL without " +
            "opening ports.",
        url: ""
    },
    {
        img: projectImgs[11],
        title: "MantiInmobiliaria",
        titleEn: "MantiRealEstate",
        description: "Portal inmobiliario completo: listado y detalle de viviendas con mapa " +
            "geolocalizado (Leaflet), modo swipe tipo Tinder con favoritos, login con Google " +
            "OAuth2 o correo y contraseña, y backoffice de administración para gestionar " +
            "inmuebles y profesionales. Las solicitudes de trabajo a profesionales (fontaneros, " +
            "albañiles…) generan notificaciones transaccionales por email (Brevo) y Telegram." +
            "<br><br>" +
            "Backend en Java 25 + Spring Boot 4.1 con Spring Security 7 (OAuth2 de Google + JWT " +
            "con refresh cookie httpOnly), MapStruct y Lombok sobre PostgreSQL 18 con Flyway y " +
            "Spring Data JPA. Frontend en Next.js 16 + TypeScript + Tailwind + React Leaflet y " +
            "framer-motion. API REST versionada /api/v1 con errores RFC 9457 y documentación " +
            "OpenAPI 3.1 con Swagger y PDF.<br><br>" +
            "Detalles de seguridad: rate limiting por endpoint, endurecimiento del login " +
            "(backoff y HaveIBeenPwned), cookies __Host- en producción, job diario de purga de " +
            "refresh tokens y gitleaks en CI. Test JUnit, Vitest, Playwright y arquitectura " +
            "modular verificada con ArchUnit.",
        descriptionEn: "Complete real estate portal: property listing and detail pages with a " +
            "geolocated map (Leaflet), a Tinder-style swipe mode with favourites, login through " +
            "Google OAuth2 or email and password, and an administration back office to manage " +
            "properties and professionals. Job requests to professionals (plumbers, builders…) " +
            "trigger transactional notifications by email (Brevo) and Telegram.<br><br>" +
            "Backend in Java 25 + Spring Boot 4.1 with Spring Security 7 (Google OAuth2 + JWT " +
            "with an httpOnly refresh cookie), MapStruct and Lombok over PostgreSQL 18 with " +
            "Flyway and Spring Data JPA. Frontend in Next.js 16 + TypeScript + Tailwind + React " +
            "Leaflet and framer-motion. Versioned REST API at /api/v1 with RFC 9457 errors and " +
            "OpenAPI 3.1 documentation with Swagger and PDF.<br><br>" +
            "Security details: rate limiting per endpoint, login hardening (backoff and " +
            "HaveIBeenPwned), __Host- cookies in production, a daily refresh-token purge job " +
            "and gitleaks in CI. JUnit, Vitest and Playwright tests, plus a modular architecture " +
            "verified with ArchUnit.",
        url: ""
    },
    {
        img: projectImgs[12],
        title: "MantiJudicial",
        titleEn: "MantiJudicial",
        description: "Pipeline en TypeScript para analizar jurisprudencia del Tribunal Supremo " +
            "y legislación del BOE, más una web para despachos de abogados: extracción de " +
            "sentencias PDF → metadatos → enriquecimiento con IA → matching con leyes → " +
            "patrones → búsqueda.<br><br>" +
            "En la web: consulta de casos enriquecidos, informes, alertas, temas, evolución " +
            "jurisprudencial, comparación de casos y generación de borradores de escritos por " +
            "tipo procesal. Permisos por despacho y rol con modelo deny-by-default y auditoría " +
            "de accesos; vistas imprimibles en PDF de casos, dossier, comparación y alertas. " +
            "Login con usuarios, hashes y MFA.<br><br>" +
            "Monorepo pnpm: pipeline CLI de 15 scripts con tsx + Zod + pdfjs-dist y web " +
            "Next.js 16. Los datos viven en un corpus en disco (repo privado aparte), sin base " +
            "de datos. El enriquecimiento usa un proveedor compatible con OpenAI (coste ≈ 0,012 " +
            "dólares por caso) con alternativa a un binario local.",
        descriptionEn: "TypeScript pipeline to analyse Spanish Supreme Court case law and BOE " +
            "legislation, plus a website for law firms: PDF judgment extraction → metadata → " +
            "AI enrichment → statute matching → patterns → search.<br><br>" +
            "On the site: enriched case browsing, reports, alerts, topics, jurisprudential " +
            "trend, case comparison and AI-generated draft filings by procedural type. Permissions " +
            "per firm and role with a deny-by-default model and access auditing; printable PDF " +
            "views of cases, dossiers, comparisons and alerts. Login with users, hashes and " +
            "MFA.<br><br>" +
            "pnpm monorepo: a 15-script CLI pipeline with tsx + Zod + pdfjs-dist and a " +
            "Next.js 16 site. Data lives in an on-disk corpus (a separate private repo), with " +
            "no database. Enrichment uses an OpenAI-compatible provider (≈ $0.012 per case) " +
            "with a local binary alternative.",
        url: ""
    }
];

/* Idioma actual (ES/EN) del módulo i18n; sin él se queda en español */
var projectLang = function () {
    return (window.MantiI18n && window.MantiI18n.current()) || "es";
};

var projectTitle = function (i) {
    var p = project[i];
    return projectLang() === "en" && p.titleEn ? p.titleEn : p.title;
};

var projectDescription = function (i) {
    var p = project[i];
    return projectLang() === "en" && p.descriptionEn ? p.descriptionEn : p.description;
};

/* Redibuja la info del slider si está abierto (al pulsar EN/ES) */
document.addEventListener("langchange", function () {
    if ($(".slidershow-project").hasClass("active") && indexProject !== undefined) {
        $("#title-project").text(projectTitle(indexProject));
        $("#description-project").html(projectDescription(indexProject));
    }
});

let indexImg = 0;
let indexProject;
let direction = "";
var countImgs;

/* Show project slider popup */
$(".project").on("click", function () {

    $(".slidershow-project").addClass("active");
    indexProject = parseInt($(this).attr("data-project"), 10);

    /* The project info is always open by default when entering */
    $(".project-info").removeClass("hide");
    $(".arrow-up-down").removeClass("rotate180");

    /* Count the images of project */
    countImgs = countImgsProject();

    $("#title-project").text(projectTitle(indexProject));
    $("#description-project").html(projectDescription(indexProject));

    indexImg = 0;
    $("#img-slider").attr('src', project[indexProject].img[indexImg]);

    /* Only one image: the arrows do nothing, hide them */
    if (countImgs > 1) {
        $(".arrow-left, .arrow-right").css("display", "flex");
    } else {
        $(".arrow-left, .arrow-right").css("display", "none");
    }

    /* Show the "Ver web" link only if the project is deployed */
    if (project[indexProject].url) {
        $("#link-project").attr("href", project[indexProject].url).show();
    } else {
        $("#link-project").hide();
    }

});

/* Hide project slider popup */
$(".close-project").on("click", function () {
    $(".slidershow-project").removeClass("active");
});

/* Click outside the popup (on the dimmed backdrop) also closes it */
$(".slidershow-project").on("click", function (e) {
    if ($(e.target).closest(".slider-project, .slider-actions").length === 0) {
        $(".slidershow-project").removeClass("active");
    }
});

/* Arrows change photo project */
$(".arrow-right").on("click", function () {
    arrowChangeImg("right");
});
$(".arrow-left").on("click", function () {
    arrowChangeImg("left");
});


/* Hide project info slider */
$(".arrow-up-down").on("click", function () {
    $(".project-info").toggleClass("hide");
    $(".arrow-up-down").toggleClass("rotate180");
});

/* display:inline-block */

/* Functions */

var arrowChangeImg = function(direction) {
    if (direction == "left") {
        indexImg = indexImg - 1;
    } else {
        indexImg = indexImg + 1;
    }

    if (project[indexProject].img[indexImg] == undefined) {
        if (direction == "left") {
            $("#img-slider").attr('src', project[indexProject].img[countImgs - 1]);
            indexImg = countImgs - 1;
        } else {
            $("#img-slider").attr('src', project[indexProject].img[0]);
            indexImg = 0;
        }
        
    } else {
        $("#img-slider").attr('src', project[indexProject].img[indexImg]);
    }
}

/* Count the imgs of one project. (.lenght not found on that version of javascript) */
var countImgsProject = function() {
    /* Bucle for is faster than while in js */
    for(var countImgs = 0; countImgs >= 0; countImgs++) {
        if (project[indexProject].img[countImgs] == undefined) {
            break;
        }
    }

    return countImgs;
} 