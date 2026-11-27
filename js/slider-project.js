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
        description: "Mi portfolio personal. Empecé este sitio en 2021 a mano, sin ayuda de nadie, " +
            "aprendiendo de la documentación y los vídeos. En octubre de 2026 lo retomé para " +
            "terminar lo que había dejado pendiente y mejorarlo con IA. Sigue siendo una web " +
            "estática, ligera y sin bases de datos.",
        descriptionEn: "My personal portfolio. I started this site by hand in 2021, with no one's " +
            "help, learning from the documentation and videos. In October 2026 I picked it up " +
            "again to finish what I had left pending and improve it with AI. It is still a " +
            "static, lightweight website with no database.",
        url: ""
    },
    {
        img: projectImgs[1],
        title: "Proyectos para empresas",
        titleEn: "Projects for companies",
        description: "Realicé las prácticas de formación trabajando para una pyme llamada aCore, donde " +
            "me formaron y trabajé activamente en implementaciones de automatización de pruebas. " +
            "Quería continuar aprendiendo más acerca de fullstack y empecé a trabajar en Atos " +
            "como desarrollador fullstack, realizando múltiples implementaciones, entre ellas " +
            "gestión de usuarios, control de excepciones y generación automatizada de PDFs. " +
            "Más tarde me contrató Minsait, donde trabajé en la web existente a la par que " +
            "construía otros servicios, creando funcionalidades también para nutrir ambas " +
            "aplicaciones. " +
            'Más información en <a href="https://www.linkedin.com/in/jorge-manti%C3%B1%C3%A1n-montero/" ' +
            'target="_blank" rel="noopener noreferrer">mi perfil de LinkedIn</a>.',
        descriptionEn: "I did my training internship at a small company called aCore, where they " +
            "trained me and I actively worked on test automation implementations. " +
            "I wanted to keep learning about fullstack development and started working at Atos " +
            "as a fullstack developer, carrying out multiple implementations, among them user " +
            "management, exception handling and automated PDF generation. " +
            "Later I was hired by Minsait, where I worked on the existing website while building " +
            "other services, creating features to feed both applications. " +
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
            "Instalable como app en Android e iPhone.<br><br>" +
            "Queriendo practicar a programar con IA, un mes antes del accidente de Urda y " +
            "volviendo de un viaje con mi hermano en el coche, me comentó que su pareja no " +
            "encontraba la forma de que Renfe le avisase cuando liberaba una plaza. " +
            "Al día siguiente me puse a realizar este proyecto y le sirvió.<br><br>" +
            "Actualmente tarda en iniciar porque no estoy obteniendo ingresos para mantenerlo " +
            "24/7 levantado, pero está completamente funcional.",
        descriptionEn: "Watches the free seats on your trains and notifies you as soon as one is " +
            "released: real-time map, countdown to your departure and alerts based on your pass. " +
            "Installable as an app on Android and iPhone.<br><br>" +
            "Wanting to practice programming with AI, a month before the Urda accident and " +
            "coming back from a trip with my brother in the car, he told me that his partner " +
            "couldn't find a way for Renfe to notify her when a seat was released. " +
            "The next day I started on this project and it did the job for her.<br><br>" +
            "Right now it takes a while to start because I am not earning income to keep it " +
            "up 24/7, but it is fully functional.",
        url: "https://mantirenfe.vercel.app"
    },
    {
        img: projectImgs[3],
        title: "MantiGestor",
        titleEn: "MantiGestor",
        description: "Gestiona tus facturas, nóminas, alquileres y pagos. " +
            "Genera automáticamente la declaración de la renta, las declaraciones trimestrales " +
            "y los modelos a entregar, calcula el IVA y obtén avisos de cuándo son los próximos " +
            "plazos para entregar los informes al Estado español.<br><br>" +
            "Úsala tú mismo o permite a un tercero gestionar tu panel.",
        descriptionEn: "Manage your invoices, payslips, rentals and payments. " +
            "Automatically generate your income tax return, quarterly declarations and the " +
            "forms to be filed, calculate VAT and get reminders of the upcoming deadlines for " +
            "submitting reports to the Spanish tax authorities.<br><br>" +
            "Use it yourself or let someone else manage your dashboard.",
        url: "https://mantigestor.vercel.app"
    },
    {
        img: projectImgs[4],
        title: "MantiTwitch",
        titleEn: "MantiTwitch",
        description: "Interactúa con tu comunidad de Twitch desde el chat para hacer sorteos " +
            "o minijuegos, como la ruleta o el ahorcado. También puedes ver tu lista de " +
            "seguidores y suscriptores, sabiendo a quiénes sigues que no te siguen.",
        descriptionEn: "Interact with your Twitch community from the chat to run giveaways " +
            "or mini-games, such as the roulette or hangman. You can also see your follower and " +
            "subscriber lists, knowing which of the accounts you follow do not follow you back.",
        url: "https://manti-twitch.vercel.app"
    },
    {
        img: projectImgs[5],
        title: "Bot de licitaciones",
        titleEn: "Tender bot",
        description: "Bot creado con IA que obtiene licitaciones públicas de forma automatizada " +
            "para no perderse ninguna oportunidad.",
        descriptionEn: "Bot built with AI that automatically fetches public tenders so no " +
            "opportunity is missed.",
        url: ""
    },
    {
        img: projectImgs[6],
        title: "MantiVecinos",
        titleEn: "MantiVecinos",
        description: "SaaS multi-comunidad de fincas para vecinos, presidentes y administradores: " +
            "información de la comunidad, economía, reuniones con asistencia, incidencias, " +
            "documentación, invitaciones y profesionales, todo aislado por comunidad.",
        descriptionEn: "Multi-community SaaS for apartment buildings, aimed at neighbours, " +
            "presidents and administrators: community information, finances, meetings with " +
            "attendance, incidents, documentation, invitations and service providers, all " +
            "isolated per community.",
        url: "https://mantivecinos.vercel.app"
    },
    {
        img: projectImgs[7],
        title: "English Coach",
        titleEn: "English Coach",
        description: "App para aprender inglés americano enfocada en programadores. " +
            "Más de 845 ejercicios en 14 módulos (gramática, phrasal verbs, vocabulario " +
            "tech, false friends, idioms, business email, listening, entrevistas, pronunciación) " +
            "con XP, rachas y repetición espaciada. Cada respuesta se explica en " +
            "inglés y español y todos los elementos tienen botón 🔊.<br><br>" +
            "Incluye diccionario navegable, exámenes cronometrados con certificados, test de nivel " +
            "CEFR (A2–C1), Smart Review de puntos débiles, modo oscuro y atajos de teclado.",
        descriptionEn: "App to learn American English aimed at programmers. " +
            "845+ exercises across 14 modules (grammar, phrasal verbs, tech vocabulary, false " +
            "friends, idioms, business email, listening, interviews, pronunciation) " +
            "with XP, streaks and spaced repetition. Every answer is explained in " +
            "English and Spanish and every element has a 🔊 button.<br><br>" +
            "Includes a browsable dictionary, timed exams with certificates, a CEFR level test " +
            "(A2–C1), Smart Review of weak spots, dark mode and keyboard shortcuts.",
        url: "https://mantienglish.vercel.app"
    },
    {
        img: projectImgs[8],
        title: "designed",
        titleEn: "designed",
        description: "Constructor visual de webs estilo WordPress que exporta el código de tu " +
            "proyecto, modular y listo para seguir trabajando en él. Diseñas en el navegador: " +
            "galería de plantillas filtrables, panel de propiedades (columnas, spacing, radios, " +
            "sombras, gradientes, breakpoints), catálogo de animaciones con preview en vivo, " +
            "fondos interactivos (spotlight, malla de gradiente, partículas, parallax) y paletas " +
            "de 5 colores con validación de contraste WCAG AA/AAA.<br><br>" +
            "La idea central: el diseño es un archivo de datos. La misma especificación alimenta " +
            "a la vez el preview y la exportación, que descargas en un ZIP con el proyecto " +
            "organizado y documentado en español.",
        descriptionEn: "Visual web builder, WordPress-style, that exports the code of your " +
            "project, modular and ready to keep working on. You design in the browser: " +
            "filterable template gallery, properties panel (columns, spacing, radii, shadows, " +
            "gradients, breakpoints), animation catalogue with live preview, interactive " +
            "backgrounds (spotlight, gradient mesh, particles, parallax) and 5-colour palettes " +
            "with WCAG AA/AAA contrast validation.<br><br>" +
            "The core idea: the design is a data file. The same specification feeds both the " +
            "preview and the export, which you download as a ZIP with the project organised and " +
            "documented in Spanish.",
        url: ""
    },
    {
        img: projectImgs[9],
        title: "Insta Followers",
        titleEn: "Insta Followers",
        description: "Web personal para analizar tu cuenta de Instagram y ver quién no te sigue " +
            "de vuelta. Te identificas con tu sesión y obtienes los conteos y la lista de " +
            "cuentas con avatar, nombre y si están verificadas, con validación previa de «Conectado " +
            "como @usuario» y un límite de análisis por IP para no saturar.<br><br>" +
            "Tus datos de sesión solo se usan en la petición: nunca se guardan ni se comparten.",
        descriptionEn: "Personal website to analyse your Instagram account and see who does not " +
            "follow you back. You identify yourself with your session and get the counts and the " +
            "list of accounts with avatar, name and verified status, with a previous «Connected " +
            "as @user» check and a per-IP analysis limit to avoid overloading it.<br><br>" +
            "Your session data is only used during the request: it is never stored or shared.",
        url: ""
    },
    {
        img: projectImgs[10],
        title: "Karaoke Twitch",
        titleEn: "Twitch Karaoke",
        description: "Karaoke en directo para Twitch: el chat escribe !cancion y la canción suena " +
            "en pantalla con letra karaoke palabra a palabra. Panel administrativo con cola " +
            "reordenable, votos para saltar, historial y stats, ajuste fino de letra, ajustes en " +
            "vivo, backup en ZIP, editor de letra, alias por canción y selección de canal para " +
            "varios streamers en una instancia.<br><br>" +
            "Puedes importar canciones de Suno, tus MP3 propios o de YouTube, y la letra se " +
            "sincroniza sola con transcripción automática. Si la fuente del directo se recarga, " +
            "el servidor reenvía la canción con los segundos ya transcurridos, así que no hay " +
            "desfase.",
        descriptionEn: "Live karaoke for Twitch: the chat writes !song and the track plays on " +
            "screen with word-by-word karaoke lyrics. Administrative panel with a reorderable " +
            "queue, votes to skip, history and stats, fine lyric tuning, live settings, ZIP " +
            "backups, a lyric editor, per-song aliases and channel selection so several " +
            "streamers can share one instance.<br><br>" +
            "You can import songs from Suno, your own MP3s or from YouTube, and the lyrics sync " +
            "automatically with automatic transcription. If the live source is reloaded, the " +
            "server resends the track with the seconds already elapsed, so there is no drift.",
        url: ""
    },
    {
        img: projectImgs[11],
        title: "MantiInmobiliaria",
        titleEn: "MantiRealEstate",
        description: "Portal inmobiliario completo: listado y detalle de viviendas con mapa " +
            "geolocalizado, modo swipe tipo Tinder con favoritos, login con Google o correo y " +
            "contraseña, y backoffice de administración para gestionar inmuebles y " +
            "profesionales. Las solicitudes de trabajo a profesionales (fontaneros, " +
            "albañiles…) generan notificaciones transaccionales por email y Telegram.",
        descriptionEn: "Complete real estate portal: property listing and detail pages with a " +
            "geolocated map, a Tinder-style swipe mode with favourites, login through Google or " +
            "email and password, and an administration back office to manage properties and " +
            "professionals. Job requests to professionals (plumbers, builders…) trigger " +
            "transactional notifications by email and Telegram.",
        url: ""
    },
    {
        img: projectImgs[12],
        title: "MantiJudicial",
        titleEn: "MantiJudicial",
        description: "Pipeline para analizar jurisprudencia del Tribunal Supremo " +
            "y legislación del BOE, más una web para despachos de abogados: extracción de " +
            "sentencias PDF → metadatos → enriquecimiento con IA → matching con leyes → " +
            "patrones → búsqueda.<br><br>" +
            "En la web: consulta de casos enriquecidos, informes, alertas, temas, evolución " +
            "jurisprudencial, comparación de casos y generación de borradores de escritos por " +
            "tipo procesal. Permisos por despacho y rol con modelo deny-by-default y auditoría " +
            "de accesos; vistas imprimibles en PDF de casos, dossier, comparación y alertas. " +
            "Login con usuarios, hashes y MFA.",
        descriptionEn: "Pipeline to analyse Spanish Supreme Court case law and BOE " +
            "legislation, plus a website for law firms: PDF judgment extraction → metadata → " +
            "AI enrichment → statute matching → patterns → search.<br><br>" +
            "On the site: enriched case browsing, reports, alerts, topics, jurisprudential " +
            "trend, case comparison and AI-generated draft filings by procedural type. Permissions " +
            "per firm and role with a deny-by-default model and access auditing; printable PDF " +
            "views of cases, dossiers, comparisons and alerts. Login with users, hashes and " +
            "MFA.",
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