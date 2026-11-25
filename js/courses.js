const coursesData = {
    scriptcase: [
        "Curso Experto Scriptcase — PHP y JavaScript"
    ],
    bash: [
        "Bash — Intérprete de comandos de Linux"
    ],
    blockchain: [
        "Smart Contract y Blockchain de la A a la Z (Udemy)"
    ],
    htmlcss: [
        "Diseño Web Profesional — El Curso Completo Práctico y desde 0 (Udemy, WordPress)",
        "Curso de introducción al desarrollo web: HTML y CSS (Google)"
    ],
    marketing: [
        "Curso básico de Marketing digital (Google)",
        "Marketing digital y Facebook Ads — gestión de campañas propias"
    ],
    analitica: [
        "Curso de analítica web (Google)"
    ],
    apps: [
        "Curso de desarrollo de apps móviles (Google)"
    ],
    ecommerce: [
        "Gestión como propietario de varios ecommerce en Shopify",
        "Creación de 2 ecommerce en WordPress para autónomos"
    ],
    posgrado: [
        "Posgrado en Project Management — ENEB · Universidad Isabel I (premio Cum Laude)"
    ],
    fp: [
        "Formación Profesional Superior — Desarrollo de Aplicaciones Multiplataforma (DAM)"
    ],
    idiomas: [
        "Español — nativo",
        "Gallego — nativo",
        "Inglés — B1 Certificate EF SET",
        "Alemán — competencia básica (Duolingo nivel 23)",
        "Francés — competencia básica"
    ],
    poker: [
        "Jugador profesional de poker a tiempo completo durante 2 años",
        "Probabilidad, estadística, gestión de bankroll y toma de decisiones bajo incertidumbre"
    ],
    bolsa: [
        "Inversión y operativa en bolsa"
    ],
    crypto: [
        "Informado del mundo de los criptoactivos",
        "Smart contracts"
    ]
};

const coursesDataEn = {
    scriptcase: [
        "Expert Scriptcase Course — PHP and JavaScript"
    ],
    bash: [
        "Bash — Linux command interpreter"
    ],
    blockchain: [
        "Smart Contract and Blockchain from A to Z (Udemy)"
    ],
    htmlcss: [
        "Professional Web Design — The Complete Practical Course from Scratch (Udemy, WordPress)",
        "Intro to web development course: HTML and CSS (Google)"
    ],
    marketing: [
        "Basic Digital Marketing course (Google)",
        "Digital marketing and Facebook Ads — managing my own campaigns"
    ],
    analitica: [
        "Web analytics course (Google)"
    ],
    apps: [
        "Mobile app development course (Google)"
    ],
    ecommerce: [
        "Managing several ecommerce stores as owner on Shopify",
        "Built 2 ecommerce sites in WordPress for freelancers"
    ],
    posgrado: [
        "Postgraduate Diploma in Project Management — ENEB · Universidad Isabel I (graduated Cum Laude)"
    ],
    fp: [
        "Higher Vocational Training — Multiplatform Application Development (DAM)"
    ],
    idiomas: [
        "Spanish — native",
        "Galician — native",
        "English — B1 Certificate EF SET",
        "German — basic proficiency (Duolingo level 23)",
        "French — basic proficiency"
    ],
    poker: [
        "Full-time professional poker player for 2 years",
        "Probability, statistics, bankroll management and decision-making under uncertainty"
    ],
    bolsa: [
        "Investing and trading in the stock market"
    ],
    crypto: [
        "Familiar with the cryptoassets world",
        "Smart contracts"
    ]
};

/* Idioma actual (ES/EN) del módulo i18n; sin él se queda en español */
const courseLang = () => (window.MantiI18n && window.MantiI18n.current()) || "es";

/* Rellena el popup de un curso con el idioma activo */
let lastCourseKey = null;
const renderCoursePopup = (key) => {
    const data = courseLang() === "en" && coursesDataEn[key] ? coursesDataEn[key] : coursesData[key];
    if (!data) {
        return;
    }

    /* El título sale del h5 de la píldora, ya traducido por i18n.js */
    const title = $(`.course[data-course="${key}"] .course-technology h5`).text();
    $("#course-popup-title").text(title);

    const list = $("#course-popup-list");
    list.empty();
    data.forEach((item) => {
        list.append($("<li>").text(item));
    });
};

$(".course").on("click", function () {
    const key = $(this).attr("data-course");
    if (!coursesData[key]) {
        return;
    }
    lastCourseKey = key;

    renderCoursePopup(key);
    $(".popup-courses-overlay").addClass("active");
});

/* Al cambiar EN/ES con el popup abierto, la lista se redibuja en el nuevo idioma */
document.addEventListener("langchange", function () {
    if (lastCourseKey && $(".popup-courses-overlay").hasClass("active")) {
        renderCoursePopup(lastCourseKey);
    }
});

$(".close-courses").on("click", function () {
    $(".popup-courses-overlay").removeClass("active");
});
