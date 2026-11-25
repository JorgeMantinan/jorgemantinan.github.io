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
        2: "./img/bot-3-informe-oscuro.png"}
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