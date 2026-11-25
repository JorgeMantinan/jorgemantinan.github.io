/* i18n ES/EN — traducción estática de la web (sin dependencias, también en cookies.html).
 *
 * Cómo funciona:
 *   - Cada texto traducible lleva en el HTML una de estas etiquetas:
 *       data-i18n="clave"        -> textContent
 *       data-i18n-html="clave"   -> innerHTML (textos con <br>, <strong>…)
 *       data-i18n-aria="clave"   -> atributo aria-label
 *       data-i18n-alt="clave"    -> atributo alt
 *   - El título del documento va en <html data-i18n-doc="clave">.
 *   - El contenido generado por JS (descripciones del slider y listas de
 *     cursos) no se traduce aquí: esos ficheros escuchan el evento nativo
 *     "langchange" y se redibujan solos.
 *   - La elección se guarda en localStorage ("manti-lang"); si no hay nada
 *     guardado se respeta el idioma del navegador (en-* -> EN, resto -> ES).
 */

(function () {
    const STORAGE_KEY = "manti-lang";

    const DICT = {
        /* Documento */
        "doc.index": { es: "Jorge Mantiñán | Portafolio FullStack", en: "Jorge Mantiñán | FullStack Portfolio" },
        "doc.cookies": { es: "Aviso de cookies | Jorge Mantiñán", en: "Cookies notice | Jorge Mantiñán" },
        "lang.switch": { es: "Cambiar a inglés", en: "Switch to Spanish" },

        /* Cabecera */
        "nav.portfolio": { es: "PORTAFOLIO", en: "PORTFOLIO" },
        "nav.courses": { es: "CURSOS", en: "COURSES" },
        "nav.contact": { es: "CONTACTO", en: "CONTACT" },
        "hero.role": { es: "Desarrollador FullStack", en: "FullStack Developer" },
        "about.open": { es: "Sobre mí", en: "About me" },
        "about.text": {
            es: "Soy un desarrollador FullStack que hace proyectos para mejorar." +
                "<br>Dame un café y trabajaré programando lo que quieras." +
                "<br>Nos vemos ❤️",
            en: "I'm a FullStack developer who builds projects to keep improving." +
                "<br>Buy me a coffee and I'll program whatever you want." +
                "<br>See you ❤️"
        },
        "common.back": { es: "Volver", en: "Back" },
        "common.technologies": { es: "Tecnologías", en: "Technologies" },
        "aria.github": { es: "GitHub de Jorge Mantiñán", en: "Jorge Mantiñán's GitHub" },
        "aria.linkedin": { es: "LinkedIn de Jorge Mantiñán", en: "Jorge Mantiñán's LinkedIn" },
        "aria.totop": { es: "Volver al inicio", en: "Back to top" },
        "end.projects": { es: "Proyectos", en: "Projects" },

        /* Tarjetas de proyecto */
        "proj.personal": { es: "Web Personal", en: "Personal Website" },
        "proj.companies": { es: "Proyectos para empresas", en: "Projects for companies" },
        "proj.bot": { es: "Bot de licitaciones", en: "Tender bot" },
        "role.frontend": { es: "Frontend Developer", en: "Frontend Developer" },
        "role.fullstack": { es: "FullStack Developer", en: "FullStack Developer" },
        "proj.webappPwa": { es: "Aplicación web (PWA)", en: "Web app (PWA)" },
        "proj.webappAi": { es: "Aplicación web con IA", en: "Web app with AI" },
        "proj.platform": { es: "Plataforma web", en: "Web platform" },
        "proj.botStack": { es: "Python + IA", en: "Python + AI" },
        "tech.ai": { es: "IA", en: "AI" },

        /* Slider de proyectos */
        "slider.title": { es: "Titulo", en: "Title" },
        "slider.desc": { es: "Descripcion", en: "Description" },
        "slider.viewweb": { es: "Ver web", en: "View site" },
        "slider.imgalt": { es: "Imagen del proyecto", en: "Project image" },

        /* Cursos */
        "courses.title": { es: "Cursos", en: "Courses" },
        "courses.dev": { es: "Desarrollo & Programación", en: "Development & Programming" },
        "courses.marketing": { es: "Marketing & eCommerce", en: "Marketing & eCommerce" },
        "courses.edu": { es: "Formación & Idiomas", en: "Education & Languages" },
        "courses.extra": { es: "Experiencias extra", en: "Extra experience" },
        "course.marketing": { es: "Marketing digital", en: "Digital marketing" },
        "course.analytics": { es: "Analítica web", en: "Web analytics" },
        "course.apps": { es: "Apps móviles", en: "Mobile apps" },
        "course.poker": { es: "Poker profesional", en: "Professional poker" },
        "course.stock": { es: "Bolsa", en: "Stock market" },
        "course.crypto": { es: "Cryptoactivos", en: "Cryptoassets" },
        "course.languages": { es: "Idiomas", en: "Languages" },

        /* Contacto y pie */
        "contact.title": { es: "Contacto", en: "Contact" },
        "contact.text": { es: "¿Tienes un proyecto o una idea? Hablemos.", en: "Have a project or an idea? Let's talk." },
        "footer.by": { es: "Desarrollado por Jorge Mantiñán", en: "Developed by Jorge Mantiñán" },

        /* Aviso de cookies */
        "cookies.h1": { es: "Aviso de cookies", en: "Cookies notice" },
        "cookies.intro": {
            es: "Este aviso explica de forma transparente qué cookies usa esta web y con qué finalidad.",
            en: "This notice transparently explains which cookies this website uses and for what purpose."
        },
        "cookies.whatH2": { es: "¿Qué son las cookies?", en: "What are cookies?" },
        "cookies.whatP": {
            es: "Las cookies son pequeños archivos que un sitio web guarda en tu navegador " +
                "para recordar información sobre tu visita (preferencias, sesión, estadísticas " +
                "de navegación, etc.).",
            en: "Cookies are small files that a website stores in your browser to remember " +
                "information about your visit (preferences, session, browsing statistics, etc.)."
        },
        "cookies.ownH2": { es: "Cookies propias de esta web", en: "Cookies set by this website" },
        "cookies.ownP": {
            es: "Esta web <strong>no utiliza cookies propias</strong>: no tiene registro de " +
                "usuarios, no guarda preferencias en tu navegador y <strong>no instala " +
                "analítica ni publicidad</strong> de ningún tipo. Tampoco comparte datos de " +
                "navegación con terceros con fines comerciales.",
            en: "This website <strong>does not use its own cookies</strong>: it has no user " +
                "registration, stores no preferences in your browser and <strong>installs no " +
                "analytics or advertising</strong> of any kind. It does not share browsing " +
                "data with third parties for commercial purposes either."
        },
        "cookies.thirdH2": { es: "Recursos de terceros", en: "Third-party resources" },
        "cookies.thirdP": {
            es: "Para funcionar, la web carga algunos recursos desde servidores externos. Esos " +
                "proveedores pueden configurar cookies técnicas conforme a sus propias " +
                "políticas:",
            en: "To work, the website loads some resources from external servers. Those " +
                "providers may set technical cookies under their own policies:"
        },
        "cookies.fonts": { es: "<strong>Google Fonts</strong> (tipografía Montserrat).", en: "<strong>Google Fonts</strong> (Montserrat typeface)." },
        "cookies.icons": { es: "<strong>Font Awesome</strong> (iconos, kit de la web).", en: "<strong>Font Awesome</strong> (icons, the website kit)." },
        "cookies.jquery": { es: "<strong>Google Hosted Libraries</strong> (biblioteca jQuery).", en: "<strong>Google Hosted Libraries</strong> (jQuery library)." },
        "cookies.linksP": {
            es: "Los enlaces a GitHub y LinkedIn solo te llevan a esos sitios cuando haces " +
                "clic: hasta entonces no se envía ninguna petición a ellos.",
            en: "The GitHub and LinkedIn links only take you to those sites when you click " +
                "them: until then, no request is sent to them."
        },
        "cookies.manageH2": { es: "Cómo gestionar las cookies", en: "How to manage cookies" },
        "cookies.manageP": {
            es: "Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo " +
                "configurando las opciones de tu navegador (Chrome, Firefox, Safari, Edge). " +
                "Ten en cuenta que, si bloqueas los recursos externos anteriores, la " +
                "tipografía y los iconos de la web pueden mostrarse de forma distinta.",
            en: "You can allow, block or delete the cookies installed on your device by " +
                "configuring your browser options (Chrome, Firefox, Safari, Edge). Keep in " +
                "mind that, if you block the external resources above, the website " +
                "typography and icons may look different."
        },
        "cookies.back": { es: "Volver a la web", en: "Back to the website" },
        "cookies.updated": { es: "Última actualización: 5 de octubre de 2026.", en: "Last updated: 5 October 2026." }
    };

    let current = "es";
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "en" || saved === "es") {
            current = saved;
        } else if ((navigator.language || "").toLowerCase().indexOf("en") === 0) {
            current = "en";
        }
    } catch (e) {
        /* localStorage puede no estar disponible (file:// en algunos navegadores) */
    }

    function t(key) {
        const entry = DICT[key];
        if (!entry) {
            return key;
        }
        return current === "en" && entry.en !== undefined ? entry.en : entry.es;
    }

    function apply() {
        document.documentElement.lang = current;

        const docKey = document.documentElement.getAttribute("data-i18n-doc");
        if (docKey && DICT[docKey]) {
            document.title = t(docKey);
        }

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            el.textContent = t(el.getAttribute("data-i18n"));
        });
        document.querySelectorAll("[data-i18n-html]").forEach((el) => {
            el.innerHTML = t(el.getAttribute("data-i18n-html"));
        });
        document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
            el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
        });
        document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
            el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
        });

        /* Botón EN/ES: enseña el idioma al que se cambia */
        const btn = document.getElementById("lang-toggle");
        if (btn) {
            btn.textContent = current === "es" ? "EN" : "ES";
            btn.setAttribute("aria-label", t("lang.switch"));
        }
    }

    function setLang(lang) {
        if (lang !== "es" && lang !== "en") {
            return;
        }
        current = lang;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            /* sin localStorage: el cambio sigue funcionando para esta sesión */
        }
        apply();
        /* El slider y los cursos se redibujan al escuchar este evento */
        document.dispatchEvent(new CustomEvent("langchange"));
    }

    function init() {
        apply();
        const btn = document.getElementById("lang-toggle");
        if (btn) {
            btn.addEventListener("click", function () {
                setLang(current === "es" ? "en" : "es");
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    window.MantiI18n = {
        current: function () { return current; },
        t: t,
        setLang: setLang
    };
})();
