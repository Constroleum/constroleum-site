/* ===========================
   CONSTROLEUM — MAIN SCRIPTS
   =========================== */

// ===========================
// TRANSLATIONS (i18n)
// ===========================
const TRANSLATIONS = {
  es: {
    nav_services: "Servicios",
    nav_philosophy: "Filosofía",
    nav_budapest: "Budapest",
    nav_contact: "Contacto",
    nav_cta: "Consulta gratuita",

    hero_tag: "Arquitectura & Construcción · Budapest",
    hero_h1_1: "Construye tu",
    hero_h1_2: "futuro en",
    hero_h1_em: "Budapest",
    hero_desc: "Especialistas en arquitectura mediterránea y gestión de obra para inversores y propietarios españoles en Hungría. Tu proyecto en Budapest, con la confianza de quienes conocen ambos mundos.",
    hero_btn1: "Hablar con nosotros",
    hero_btn2: "Nuestros servicios",

    stat1_num: "Budapest",
    stat1_label: "Base de operaciones · Hungría",
    stat2_label: "Servicio en español",
    stat3_label: "Gestión integral de proyecto",

    services_tag: "Lo que hacemos",
    services_h2_1: "Servicios integrales",
    services_h2_2: "de arquitectura",
    services_h2_3: "y construcción",
    services_intro_p: "Desde la primera visita hasta la entrega de llaves, gestionamos cada etapa de tu proyecto en Budapest. Trabajamos especialmente con clientes españoles e inversores extranjeros que quieren renovar, construir o invertir en el mercado inmobiliario húngaro.",

    s1_title: "Arquitectura mediterránea",
    s1_desc: "Diseño que fusiona el carácter mediterráneo con los espacios y normativas de Budapest. Proyectos residenciales y comerciales con identidad propia.",
    s2_title: "Gestión de obra",
    s2_desc: "Dirección y coordinación completa de tu obra en Budapest. Controlamos plazos, calidad y presupuesto para que tú no tengas que preocuparte por nada.",
    s3_title: "Reformas integrales",
    s3_desc: "Transformamos pisos, locales y edificios con criterio estético y funcional. Materiales premium y acabados que duran décadas en el exigente clima húngaro.",
    s4_title: "Consultoría de inversión",
    s4_desc: "Asesoramiento para invertir en inmuebles en Budapest. Te ayudamos a identificar oportunidades, gestionar permisos y maximizar la rentabilidad de tu inversión.",
    s5_title: "Project Management",
    s5_desc: "Gestión 360° de proyectos complejos: desde el estudio de viabilidad hasta la entrega final. Un interlocutor único para todo tu proyecto en Hungría.",
    s6_title: "Interiorismo & diseño",
    s6_desc: "Diseño de interiores adaptado a cada cliente: desde pisos de alquiler optimizados hasta residencias de alto nivel en el corazón de Budapest.",

    // Philosophy section
    phil_tag: "Nuestra filosofía",
    phil_h2_1: "Espacios que",
    phil_h2_em: "perduran",
    phil_lead: "Cada proyecto que firmamos es el reflejo de una manera de entender la arquitectura: disciplinada, honesta y orientada a la excelencia. No construimos para el corto plazo.",
    pillar1_title: "Rigor técnico",
    pillar1_text: "Cada detalle constructivo se estudia, calcula y supervisa. La precisión técnica es la base de cualquier obra que resiste el paso del tiempo.",
    pillar2_title: "Excelencia",
    pillar2_text: "No hay obra pequeña. El nivel de exigencia que aplicamos a una reforma de vivienda es el mismo que a un proyecto de gran envergadura.",
    pillar3_title: "Confianza",
    pillar3_text: "Trabajamos en español, con transparencia y sin sorpresas. Eres partícipe activo de tu proyecto, no un espectador.",
    pillar4_title: "Permanencia",
    pillar4_text: "Diseñamos espacios que permanecen. Materiales de calidad, soluciones probadas y una visión a largo plazo que protege tu inversión.",

    budapest_tag: "Por qué Budapest",
    budapest_h2_1: "El destino europeo",
    budapest_h2_2: "de inversión más",
    budapest_h2_3: "interesante",
    bp1_title: "Mercado inmobiliario dinámico",
    bp1_text: "Budapest ofrece precios competitivos dentro de la UE con una rentabilidad por alquiler superior a la media europea.",
    bp2_title: "Dentro de la Unión Europea",
    bp2_text: "Seguridad jurídica europea con costes de construcción y reforma significativamente menores que en España o Europa occidental.",
    bp3_title: "Servicio sin barreras",
    bp3_text: "Con Constroleum, todo el proceso se gestiona en español. Sin sorpresas, sin idioma, sin complicaciones locales.",

    contact_tag: "Hablemos",
    contact_h2_1: "Tu proyecto en Budapest",
    contact_h2_2: "empieza aquí",
    contact_label_phone: "Teléfono & WhatsApp",
    contact_label_email: "Email",
    contact_label_address: "Dirección",
    contact_label_follow: "Síguenos",
    form_name: "Nombre",
    form_name_ph: "Tu nombre",
    form_email: "Email",
    form_email_ph: "tu@email.com",
    form_service: "Servicio de interés",
    form_service_ph: "Selecciona un servicio",
    form_message: "Cuéntanos tu proyecto",
    form_message_ph: "Describe brevemente tu proyecto o consulta...",
    form_send: "Enviar consulta",
    form_ok: "¡Gracias! Nos pondremos en contacto contigo muy pronto.",
    footer_copy: "© 2025 Constroleum · Todos los derechos reservados",

    services_list: [
      "Arquitectura mediterránea",
      "Gestión de obra",
      "Reforma integral",
      "Consultoría de inversión",
      "Project Management",
      "Interiorismo & diseño"
    ]
  },

  en: {
    nav_services: "Services",
    nav_philosophy: "Philosophy",
    nav_budapest: "Budapest",
    nav_contact: "Contact",
    nav_cta: "Free consultation",

    hero_tag: "Architecture & Construction · Budapest",
    hero_h1_1: "Build your",
    hero_h1_2: "future in",
    hero_h1_em: "Budapest",
    hero_desc: "Specialists in Mediterranean architecture and construction management for Spanish-speaking investors and owners in Hungary. Your project in Budapest, with the confidence of those who know both worlds.",
    hero_btn1: "Talk to us",
    hero_btn2: "Our services",

    stat1_num: "Budapest",
    stat1_label: "Operations base · Hungary",
    stat2_label: "Full service in Spanish",
    stat3_label: "360° project management",

    services_tag: "What we do",
    services_h2_1: "Full-service",
    services_h2_2: "architecture",
    services_h2_3: "& construction",
    services_intro_p: "From the first visit to key handover, we manage every stage of your project in Budapest. We work especially with Spanish-speaking clients and foreign investors who want to renovate, build or invest in the Hungarian real estate market.",

    s1_title: "Mediterranean architecture",
    s1_desc: "Design that merges Mediterranean character with Budapest's spaces and regulations. Residential and commercial projects with their own identity.",
    s2_title: "Construction management",
    s2_desc: "Complete management and coordination of your construction in Budapest. We control timelines, quality and budget so you don't have to worry about anything.",
    s3_title: "Comprehensive renovations",
    s3_desc: "We transform apartments, premises and buildings with aesthetic and functional expertise. Premium materials and finishes that last decades in Hungary's demanding climate.",
    s4_title: "Investment consulting",
    s4_desc: "Advisory services for investing in Budapest real estate. We help you identify opportunities, manage permits and maximise your return on investment.",
    s5_title: "Project Management",
    s5_desc: "360° management of complex projects: from feasibility study to final handover. A single point of contact for your entire project in Hungary.",
    s6_title: "Interior design",
    s6_desc: "Interior design tailored to each client: from optimised rental apartments to high-end residences in the heart of Budapest.",

    phil_tag: "Our philosophy",
    phil_h2_1: "Spaces that",
    phil_h2_em: "endure",
    phil_lead: "Every project we sign reflects a way of understanding architecture: disciplined, honest and excellence-driven. We do not build for the short term.",
    pillar1_title: "Technical rigour",
    pillar1_text: "Every construction detail is studied, calculated and supervised. Technical precision is the foundation of any work that withstands the test of time.",
    pillar2_title: "Excellence",
    pillar2_text: "No project is too small. The level of demand we apply to a residential renovation is the same as to a large-scale project.",
    pillar3_title: "Trust",
    pillar3_text: "We work transparently and without surprises. You are an active participant in your project, not a spectator.",
    pillar4_title: "Permanence",
    pillar4_text: "We design spaces that last. Quality materials, proven solutions and a long-term vision that protects your investment.",

    budapest_tag: "Why Budapest",
    budapest_h2_1: "Europe's most",
    budapest_h2_2: "interesting",
    budapest_h2_3: "investment destination",
    bp1_title: "Dynamic real estate market",
    bp1_text: "Budapest offers competitive prices within the EU with rental yields above the European average.",
    bp2_title: "Inside the European Union",
    bp2_text: "European legal security with construction and renovation costs significantly lower than in Spain or Western Europe.",
    bp3_title: "Service without barriers",
    bp3_text: "With Constroleum, the entire process is managed in Spanish. No surprises, no language barriers, no local complications.",

    contact_tag: "Let's talk",
    contact_h2_1: "Your Budapest project",
    contact_h2_2: "starts here",
    contact_label_phone: "Phone & WhatsApp",
    contact_label_email: "Email",
    contact_label_address: "Address",
    contact_label_follow: "Follow us",
    form_name: "Name",
    form_name_ph: "Your name",
    form_email: "Email",
    form_email_ph: "you@email.com",
    form_service: "Service of interest",
    form_service_ph: "Select a service",
    form_message: "Tell us about your project",
    form_message_ph: "Briefly describe your project or enquiry...",
    form_send: "Send enquiry",
    form_ok: "Thank you! We will be in touch very soon.",
    footer_copy: "© 2025 Constroleum · All rights reserved",

    services_list: [
      "Mediterranean architecture",
      "Construction management",
      "Comprehensive renovation",
      "Investment consulting",
      "Project Management",
      "Interior design"
    ]
  },

  hu: {
    nav_services: "Szolgáltatások",
    nav_philosophy: "Filozófia",
    nav_budapest: "Budapest",
    nav_contact: "Kapcsolat",
    nav_cta: "Ingyenes konzultáció",

    hero_tag: "Építészet & Kivitelezés · Budapest",
    hero_h1_1: "Építsd meg",
    hero_h1_2: "jövődet",
    hero_h1_em: "Budapesten",
    hero_desc: "Mediterrán építészetre és kivitelezés-menedzsmentre specializálódott csapat spanyol befektetők és tulajdonosok számára Magyarországon. A te projekted Budapesten, azok bizalmával, akik ismerik mindkét világot.",
    hero_btn1: "Kapcsolatfelvétel",
    hero_btn2: "Szolgáltatásaink",

    stat1_num: "Budapest",
    stat1_label: "Működési bázis · Magyarország",
    stat2_label: "Teljes körű spanyol nyelvű szolgáltatás",
    stat3_label: "360° projektmenedzsment",

    services_tag: "Amit csinálunk",
    services_h2_1: "Teljes körű",
    services_h2_2: "építészeti",
    services_h2_3: "és kivitelezési szolgáltatások",
    services_intro_p: "Az első látogatástól a kulcsátadásig minden lépést kezelünk. Elsősorban spanyolajkú ügyfelekkel és külföldi befektetőkkel dolgozunk, akik felújítani, építeni vagy befektetni szeretnének a magyar ingatlanpiacon.",

    s1_title: "Mediterrán építészet",
    s1_desc: "Tervezés, amely ötvözi a mediterrán karaktert Budapest tereivel és szabályozásával. Saját identitású lakó- és kereskedelmi projektek.",
    s2_title: "Kivitelezés-menedzsment",
    s2_desc: "Budapesti építési projektjének teljes körű irányítása és koordinációja. Határidőket, minőséget és költségvetést kontrolálunk.",
    s3_title: "Teljes körű felújítás",
    s3_desc: "Lakások, helyiségek és épületek átalakítása esztétikai és funkcionális szempontok alapján. Prémium anyagok és évtizedekig tartó megoldások.",
    s4_title: "Befektetési tanácsadás",
    s4_desc: "Tanácsadás budapesti ingatlanberuházáshoz. Segítünk a lehetőségek azonosításában, az engedélyek kezelésében és a megtérülés maximalizálásában.",
    s5_title: "Projektmenedzsment",
    s5_desc: "Összetett projektek 360°-os kezelése: a megvalósíthatósági tanulmánytól a végső átadásig. Egyetlen kapcsolattartó az egész projekthez.",
    s6_title: "Belsőépítészet & design",
    s6_desc: "Személyre szabott belsőépítészet: optimalizált bérleményektől a Budapest szívében lévő prémium rezidenciákig.",

    phil_tag: "Filozófiánk",
    phil_h2_1: "Terek, amelyek",
    phil_h2_em: "megmaradnak",
    phil_lead: "Minden projektet, amelyet aláírunk, az építészet egy megközelítése tükröz: fegyelmezett, becsületes és a kiválóság felé orientált. Nem rövid távra építünk.",
    pillar1_title: "Technikai szigor",
    pillar1_text: "Minden építészeti részletet tanulmányozunk, kiszámítunk és felügyelünk. A technikai pontosság az alapja minden időtálló munkának.",
    pillar2_title: "Kiválóság",
    pillar2_text: "Nincs kis projekt. A lakásfelújításra alkalmazott igényességi szint ugyanaz, mint egy nagyszabású projektnél.",
    pillar3_title: "Bizalom",
    pillar3_text: "Átláthatóan és meglepetések nélkül dolgozunk. Aktív résztvevője vagy a projektednek, nem csupán szemlélő.",
    pillar4_title: "Állandóság",
    pillar4_text: "Maradandó tereket tervezünk. Minőségi anyagok, bevált megoldások és hosszú távú szemlélet, amely védi befektetésedet.",

    budapest_tag: "Miért Budapest",
    budapest_h2_1: "Európa legérdekesebb",
    budapest_h2_2: "befektetési",
    budapest_h2_3: "célpontja",
    bp1_title: "Dinamikus ingatlanpiac",
    bp1_text: "Budapest az EU-n belül versenyképes árakat és az európai átlagnál magasabb bérleti hozamot kínál.",
    bp2_title: "Az Európai Unión belül",
    bp2_text: "Európai jogbiztonság, Spanyolországnál és Nyugat-Európánál lényegesen alacsonyabb építési és felújítási költségekkel.",
    bp3_title: "Akadálymentes szolgáltatás",
    bp3_text: "A Constroleummal az egész folyamatot spanyolul kezeljük. Nincs meglepetés, nincs nyelvi akadály, nincsenek helyi bonyodalmak.",

    contact_tag: "Beszéljünk",
    contact_h2_1: "Budapesti projekted",
    contact_h2_2: "itt kezdődik",
    contact_label_phone: "Telefon & WhatsApp",
    contact_label_email: "Email",
    contact_label_address: "Cím",
    contact_label_follow: "Kövess minket",
    form_name: "Név",
    form_name_ph: "A neved",
    form_email: "Email",
    form_email_ph: "te@email.hu",
    form_service: "Érdeklődési terület",
    form_service_ph: "Válassz egy szolgáltatást",
    form_message: "Mesélj a projektedről",
    form_message_ph: "Röviden írd le projektjét vagy kérdésedet...",
    form_send: "Üzenet küldése",
    form_ok: "Köszönjük! Hamarosan felvesszük veled a kapcsolatot.",
    footer_copy: "© 2025 Constroleum · Minden jog fenntartva",

    services_list: [
      "Mediterrán építészet",
      "Kivitelezés-menedzsment",
      "Teljes körű felújítás",
      "Befektetési tanácsadás",
      "Projektmenedzsment",
      "Belsőépítészet & design"
    ]
  }
};

// ===========================
// LANGUAGE SWITCHING
// ===========================
let currentLang = 'es';

function setLanguage(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];

  // Update lang attribute
  document.documentElement.lang = lang;

  // Active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Nav
  document.querySelector('[data-i18n="nav_services"]').textContent = t.nav_services;
  document.querySelector('[data-i18n="nav_philosophy"]').textContent = t.nav_philosophy;
  document.querySelector('[data-i18n="nav_budapest"]').textContent = t.nav_budapest;
  document.querySelector('[data-i18n="nav_contact"]').textContent = t.nav_contact;
  document.querySelector('[data-i18n="nav_cta"]').textContent = t.nav_cta;

  // Hero
  document.querySelector('[data-i18n="hero_tag"]').textContent = t.hero_tag;
  document.querySelector('[data-i18n="hero_h1_1"]').textContent = t.hero_h1_1;
  document.querySelector('[data-i18n="hero_h1_2"]').textContent = t.hero_h1_2;
  document.querySelector('[data-i18n="hero_h1_em"]').textContent = t.hero_h1_em;
  document.querySelector('[data-i18n="hero_desc"]').textContent = t.hero_desc;
  document.querySelector('[data-i18n="hero_btn1"]').textContent = t.hero_btn1;
  document.querySelector('[data-i18n="hero_btn2"]').textContent = t.hero_btn2;

  // Stats
  document.querySelector('[data-i18n="stat1_label"]').textContent = t.stat1_label;
  document.querySelector('[data-i18n="stat2_label"]').textContent = t.stat2_label;
  document.querySelector('[data-i18n="stat3_label"]').textContent = t.stat3_label;

  // Services intro
  document.querySelector('[data-i18n="services_tag"]').textContent = t.services_tag;
  document.querySelector('[data-i18n="services_h2_1"]').textContent = t.services_h2_1;
  document.querySelector('[data-i18n="services_h2_2"]').textContent = t.services_h2_2;
  document.querySelector('[data-i18n="services_h2_3"]').textContent = t.services_h2_3;
  document.querySelector('[data-i18n="services_intro_p"]').textContent = t.services_intro_p;

  // Service cards
  ['s1','s2','s3','s4','s5','s6'].forEach(s => {
    document.querySelector(`[data-i18n="${s}_title"]`).textContent = t[`${s}_title`];
    document.querySelector(`[data-i18n="${s}_desc"]`).textContent = t[`${s}_desc`];
  });

  // Philosophy
  document.querySelector('[data-i18n="phil_tag"]').textContent = t.phil_tag;
  document.querySelector('[data-i18n="phil_h2_1"]').textContent = t.phil_h2_1;
  document.querySelector('[data-i18n="phil_h2_em"]').textContent = t.phil_h2_em;
  document.querySelector('[data-i18n="phil_lead"]').textContent = t.phil_lead;
  document.querySelector('[data-i18n="pillar1_title"]').textContent = t.pillar1_title;
  document.querySelector('[data-i18n="pillar1_text"]').textContent = t.pillar1_text;
  document.querySelector('[data-i18n="pillar2_title"]').textContent = t.pillar2_title;
  document.querySelector('[data-i18n="pillar2_text"]').textContent = t.pillar2_text;
  document.querySelector('[data-i18n="pillar3_title"]').textContent = t.pillar3_title;
  document.querySelector('[data-i18n="pillar3_text"]').textContent = t.pillar3_text;
  document.querySelector('[data-i18n="pillar4_title"]').textContent = t.pillar4_title;
  document.querySelector('[data-i18n="pillar4_text"]').textContent = t.pillar4_text;

  // Budapest section
  document.querySelector('[data-i18n="budapest_tag"]').textContent = t.budapest_tag;
  document.querySelector('[data-i18n="budapest_h2_1"]').textContent = t.budapest_h2_1;
  document.querySelector('[data-i18n="budapest_h2_2"]').textContent = t.budapest_h2_2;
  document.querySelector('[data-i18n="budapest_h2_3"]').textContent = t.budapest_h2_3;
  document.querySelector('[data-i18n="bp1_title"]').textContent = t.bp1_title;
  document.querySelector('[data-i18n="bp1_text"]').textContent = t.bp1_text;
  document.querySelector('[data-i18n="bp2_title"]').textContent = t.bp2_title;
  document.querySelector('[data-i18n="bp2_text"]').textContent = t.bp2_text;
  document.querySelector('[data-i18n="bp3_title"]').textContent = t.bp3_title;
  document.querySelector('[data-i18n="bp3_text"]').textContent = t.bp3_text;

  // Contact
  document.querySelector('[data-i18n="contact_tag"]').textContent = t.contact_tag;
  document.querySelector('[data-i18n="contact_h2_1"]').textContent = t.contact_h2_1;
  document.querySelector('[data-i18n="contact_h2_2"]').textContent = t.contact_h2_2;
  document.querySelector('[data-i18n="contact_label_phone"]').textContent = t.contact_label_phone;
  document.querySelector('[data-i18n="contact_label_email"]').textContent = t.contact_label_email;
  document.querySelector('[data-i18n="contact_label_address"]').textContent = t.contact_label_address;
  document.querySelector('[data-i18n="contact_label_follow"]').textContent = t.contact_label_follow;
  document.querySelector('[data-i18n="form_name"]').textContent = t.form_name;
  document.querySelector('[data-i18n="form_name_ph"]').placeholder = t.form_name_ph;
  document.querySelector('[data-i18n="form_email_label"]').textContent = t.form_email;
  document.querySelector('[data-i18n="form_email_ph"]').placeholder = t.form_email_ph;
  document.querySelector('[data-i18n="form_service"]').textContent = t.form_service;
  document.querySelector('[data-i18n="form_message"]').textContent = t.form_message;
  document.querySelector('[data-i18n="form_message_ph"]').placeholder = t.form_message_ph;
  document.querySelector('[data-i18n="form_send"]').textContent = t.form_send;
  document.querySelector('[data-i18n="footer_copy"]').textContent = t.footer_copy;

  // Select options
  const sel = document.getElementById('service-select');
  sel.innerHTML = `<option value="">${t.form_service_ph}</option>`;
  t.services_list.forEach(s => {
    const opt = document.createElement('option');
    opt.textContent = s;
    sel.appendChild(opt);
  });
}

// ===========================
// MOBILE MENU
// ===========================
function toggleMenu() {
  document.getElementById('navbar').classList.toggle('open');
}

// ===========================
// CONTACT FORM
// ===========================
function sendForm() {
  const t = TRANSLATIONS[currentLang];
  alert(t.form_ok);
}

// ===========================
// SCROLL EFFECTS
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll reveal for service cards and pillars
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => {
        e.target.classList.add('visible');
      }, e.target.dataset.delay || 0);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card').forEach((card, i) => {
  card.dataset.delay = i * 80;
  revealObserver.observe(card);
});

document.querySelectorAll('.pillar').forEach((pillar, i) => {
  pillar.dataset.delay = i * 100;
  revealObserver.observe(pillar);
});

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('es');
});
