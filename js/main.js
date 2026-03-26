/* ================================================
   CONSTROLEUM — main.js
   Generálkivitelező Budapest | constroleum.hu
   ================================================ */

// ================================================
// TRANSLATIONS
// ================================================
const TRANSLATIONS = {

  /* ─── MAGYAR (default / SEO master) ─── */
  hu: {
    nav_services: "Szolgáltatások",
    nav_process:  "Folyamat",
    nav_about:    "Rólunk",
    nav_contact:  "Kapcsolat",
    nav_cta:      "Ingyenes felmérés",

    hero_tag:   "Generálkivitelező · Budapest",
    hero_h1_em: "Kulcsrakész",
    hero_h1_1:  "kivitelezés",
    hero_h1_2:  "Budapesten",
    hero_desc:  "Teljes körű lakásfelújítás, épületrehabilitáció és generálkivitelezés. Tervezéstől az átadásig — egyetlen kézből, határidőre, garanciával.",
    hero_btn1:  "Ingyenes felmérés",
    hero_btn2:  "Szolgáltatásaink",

    stat1_num:   "360°",
    stat1_label: "Teljes körű projektkezelés",
    stat2_num:   "Kulcsrakész",
    stat2_label: "Átadás garanciával",
    stat3_num:   "3 nyelven",
    stat3_label: "Magyar · Spanyol · Angol",

    services_tag:        "Amit csinálunk",
    services_h2_1:       "Teljes körű",
    services_h2_2:       "kivitelezési",
    services_h2_3:       "megoldások",
    services_intro_p:    "Az első helyszíni felméréstől a kulcsátadásig minden feladatot elvállalunk. Generálkivitelezőként egyetlen kapcsolattartót biztosítunk az egész projekt során — alvállalkozók koordinációjától az engedélyezésen át a minőségellenőrzésig.",
    services_visual_cap: "Generálkivitelezés · Budapest",

    s1_title: "Generálkivitelezés",
    s1_desc:  "Teljes körű kivitelezés egyetlen kézből. Koordináljuk az összes szakipart és felelünk a határidőkért, a minőségért és a költségvetésért.",
    s2_title: "Kulcsrakész felújítás",
    s2_desc:  "A lakás átadása teljesen kész állapotban: tervezéstől, engedélyezéstől és bontástól a bútorozásig és takarításig. Ön csak be kell, hogy lépjen.",
    s3_title: "Épületrehabilitáció",
    s3_desc:  "Társasházak, irodaházak és kereskedelmi épületek teljes körű rehabilitációja: homlokzat, közös területek, gépészet, energetikai korszerűsítés.",
    s4_title: "Építési vezető / Műszaki ellenőr",
    s4_desc:  "Független műszaki ellenőrzés és építési vezetés — ha már van kivitelezője, de szakmai felügyeletre van szüksége az ön érdekében.",
    s5_title: "Projekt- és költségvetés-tervezés",
    s5_desc:  "Megvalósíthatósági tanulmány, részletes tételes árajánlat, hetes ütemterv és alvállalkozó-kiválasztás. Nincsenek meglepetések.",
    s6_title: "Belsőépítészet & design",
    s6_desc:  "Tértervezéstől anyagválasztáson át a bútorozásig: esztétika és funkcionalitás tökéletes egyensúlyban minden projektben.",
    s7_title: "Befektetési tanácsadás",
    s7_desc:  "Ingatlanértékelés, felújítási megtérülési számítás, engedélyezési tanácsadás és piaci stratégia a budapesti ingatlanpiacon.",
    s8_title: "Komplett adminisztratív asszisztencia",
    s8_desc:  "Hatósági engedélyek, tervdokumentáció, hatósági egyeztetések — különösen külföldi ügyfelek számára, akik nem ismerik a magyar eljárásrendet.",

    mb1_label: "Kulcsrakész felújítás",
    mb2_label: "Prémium kivitelezés",
    mb3_label: "Konyhafelújítás",
    mb4_label: "Modern belső terek",
    mb_quote:  "Tervezéstől<br>az átadásig —<br><em>egyetlen kézből</em>",

    process_tag:  "Hogyan dolgozunk",
    process_h2_1: "A projektünk",
    process_h2_2: "folyamata",
    process_lead: "Minden projekt ugyanazon a kipróbált folyamaton megy át. Nincsenek meglepetések — csak átlátható, kontrollált kivitelezés.",

    step1_title: "Ingyenes helyszíni felmérés",
    step1_desc:  "Felkeressük az ingatlant, megértjük az igényeit és műszakilag felmérjük a munkák körét. Külföldi ügyfeleknek videóhívásos felmérést is kínálunk.",
    step2_title: "Részletes árajánlat & ütemterv",
    step2_desc:  "Tételes költségvetést és hetes bontású ütemtervet készítünk. Minden sor tartalmazza az anyag- és munkadíjat — semmi rejtett tétel.",
    step3_title: "Tervezés & engedélyezés",
    step3_desc:  "Koordináljuk az építészeti és belsőépítészeti terveket, intézzük az összes hatósági engedélyt és dokumentációt.",
    step4_title: "Kivitelezés & napi felügyelet",
    step4_desc:  "Napi helyszíni felügyelettel dolgozunk. Heti fotóriportot küldünk az előrehaladásról, és azonnal jelzünk minden eltérést.",
    step5_title: "Minőségellenőrzés & átadás",
    step5_desc:  "Átadás előtt belső minőségellenőrzést végzünk minden fázisra. Az átadás dokumentált, tételes ellenőrzőlistával és garanciával történik.",
    step6_title: "Utógondozás & garancia",
    step6_desc:  "Garanciális időszak alatt elérhető vagyunk, és elvégezzük az ingatlan éves műszaki ellenőrzését kérés esetén.",

    phil_tag:   "Rólunk",
    phil_h2_1:  "Épületek,",
    phil_h2_em: "amelyek kitartanak",
    phil_lead:  "A Constroleum egy tapasztalt generálkivitelező csapat Budapesten, spanyol-magyar szakmai háttérrel. Technikai pontosság, átláthatóság és hosszú távú gondolkodás.",

    pillar1_title: "Technikai szigor",
    pillar1_text:  "Minden szerkezeti és gépészeti részletet tervezünk, számítunk és ellenőrzünk. A technikai pontosság az alapja minden időtálló munkának.",
    pillar2_title: "Átláthatóság",
    pillar2_text:  "Tételes árajánlat, heti riportok, dokumentált átadás. Mindig tudja, hol tart a projekt és mi a következő lépés.",
    pillar3_title: "Egyetlen felelős kéz",
    pillar3_text:  "Generálkivitelezőként mi vállalunk felelősséget az összes alvállalkozóért. Ön nem koordinál — Ön csak dönt és átvesz.",
    pillar4_title: "Hosszú távú szemlélet",
    pillar4_text:  "Minőségi anyagokat, bevált technológiákat és tartós megoldásokat alkalmazunk. Egy felújítás befektetés — és mi úgy kezeljük.",

    faq_title: "Gyakori<br><em>kérdések</em>",
    faq1_q: "Mi az a kulcsrakész felújítás, és mit tartalmaz pontosan?",
    faq1_a: "A kulcsrakész felújítás azt jelenti, hogy a Constroleum az összes munkát tervezi és koordinálja: tervezés, engedélyezés, bontás, szerkezetépítés, gépészet, villamos, burkolás, festés, bútorozás — egészen az átadásig és takarításig. Önnek csak az elkészült ingatlant kell átvennie.",
    faq2_q: "Mennyibe kerül egy lakásfelújítás Budapesten 2025-ben?",
    faq2_a: "A lakásfelújítás ára 150 000–450 000 Ft/m² között mozog a munkák körétől és kivitelezési szinttől függően. Ingyenes helyszíni felmérésen pontos, tételes árajánlatot adunk.",
    faq3_q: "Mennyi ideig tart egy komplett lakásfelújítás?",
    faq3_a: "Egy átlagos 50–80 m²-es lakás teljes felújítása általában 8–16 hetet vesz igénybe. Minden projekt kezdetén részletes ütemtervet és heti fotóriportot adunk.",
    faq4_q: "Mi a különbség a generálkivitelező és a hagyományos alvállalkozó között?",
    faq4_a: "A generálkivitelező egyetlen felelős partnerként felel az összes munkáért. Ő köti a szerződéseket, koordinálja a munkafázisokat, felelős a határidőkért és a minőségért. Önnek egyetlen kapcsolattartója van.",
    faq5_q: "Külföldi befektetők számára is végeznek munkákat?",
    faq5_a: "Igen, ez az egyik fő szakterületünk. Spanyol és angol anyanyelvű ügyfelek számára teljes körű projektet kezelünk — spanyolul, angolul és magyarul is kommunikálunk. Önnek nem kell Budapesten lennie a folyamat során.",
    faq6_q: "Vállalnak műszaki ellenőri és építési vezető feladatot is?",
    faq6_a: "Igen. Ha már van saját kivitelezője, de szakmai felügyeletre van szüksége, a Constroleum vállalja a független műszaki ellenőr és felelős műszaki vezető szerepét is.",
    faq7_q: "Milyen garanciát adnak a munkákra?",
    faq7_a: "Minden munkára írásban vállalunk garanciát. Szerkezeti munkák: 5 év, gépészet/villamos: 2–3 év, burkolat/festés: 1–2 év. Garanciális időszakban díjmentesen javítjuk a hibákat.",

    seo_h1:   "Generálkivitelező Budapest — Mit jelent ez a gyakorlatban?",
    seo_p1:   "A Constroleum <strong>generálkivitelezőként</strong> egyetlen szerződést köt Önnel, és az összes munkát koordinálja: kőmíves, gépész, víz-gáz-fűtés szerelő, villanyszerelő, burkoló, ács, tetőfedő, asztalos, festő. Ön egyetlen kapcsolattartóval dolgozik — mi foglalkozunk az összessel.",
    seo_p2:   "Ez különösen fontos <strong>kulcsrakész felújítás</strong> esetén, ahol rengeteg szakipar munkájának összehangolása szükséges. Napi szintű helyszíni felügyelettel biztosítjuk, hogy az összes szakasz az ütemterv szerint haladjon, és a minőség minden ponton megfeleljen az elvárásoknak.",
    seo_p3:   "Külföldi befektetők, spanyol és angol anyanyelvű ügyfelek számára teljes körű szolgáltatást nyújtunk: <strong>engedélyezés, tervdokumentáció, hatósági ügyintézés</strong> — mindent elvégzünk saját nevükben is, hogy Önnek ne kelljen belépnie a magyar bürokráciába.",
    seo_h2:   "Épületrehabilitáció és komplett felújítás Budapesten",
    seo_p4:   "Budapest ingatlanállományának nagy része az 1900-as és 1970-es évek között épült. Ezek az épületek lényeges <strong>rehabilitációt</strong> igényelnek: gépészeti és villamossági rendszerek cseréje, homlokzat-felújítás, nyílászárócsere, szigetelés és belső terek teljes megújítása.",
    seo_p5:   "A Constroleum specialistája a <strong>régi épületek komplett felújításában</strong>: értjük az épületek szerkezetét, ismerjük a hivatal elvárásait, és tudjuk, hogyan kell modernizálni az eredeti karakter megőrzésével. Különösen a VII., VIII., IX. és XIII. kerület ingatlanpiacán van mélyreható tapasztalatunk.",
    seo_p6:   "Akár egy 40 m²-es garzon, akár egy 400 m²-es irodaház teljes rehabilitációjáról van szó — ugyanazt a műszaki szigort és projektkezelési fegyelmet alkalmazzuk. Az ár versenyképes, az átadás dokumentált, a garancia írásban van.",

    contact_tag:          "Kapcsolat",
    contact_h2_1:         "Indítsuk el",
    contact_h2_2:         "a projektjét",
    contact_label_phone:  "Telefon & WhatsApp",
    contact_label_email:  "Email",
    contact_label_address:"Cím",
    contact_label_follow: "Kövessen minket",
    contact_cta_text:     "Keressen minket bizalommal — munkanapokon gyorsan válaszolunk.",
    contact_cta_btn:      "Hívjon most",
    form_name:            "Név",
    form_email_label:     "Email",
    form_service:         "Érdeklődési terület",
    form_service_ph:      "Válasszon szolgáltatást",
    form_message:         "Üzenet",
    form_send:            "Üzenet küldése",
    form_ok:              "Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot.",
    form_error:           "Kérjük töltse ki a nevet, emailt és üzenetet.",
    form_error_send:      "Küldési hiba. Írjon közvetlenül: constroleum@gmail.com",
    footer_copy:          "© 2025 Constroleum · Minden jog fenntartva",

    services_list: [
      "Generálkivitelezés",
      "Kulcsrakész felújítás",
      "Épületrehabilitáció",
      "Építési vezető / Műszaki ellenőr",
      "Projekt- és költségvetés-tervezés",
      "Belsőépítészet & design",
      "Befektetési tanácsadás",
      "Komplett adminisztratív asszisztencia"
    ]
  },

  /* ─── ESPAÑOL ─── */
  es: {
    nav_services: "Servicios",
    nav_process:  "Proceso",
    nav_about:    "Nosotros",
    nav_contact:  "Contacto",
    nav_cta:      "Consulta gratuita",

    hero_tag:   "Jefatura de Obra & Construcción · Budapest",
    hero_h1_em: "Llave en mano",
    hero_h1_1:  "rehabilitación",
    hero_h1_2:  "en Budapest",
    hero_desc:  "Gestión integral de obra, reforma y rehabilitación de edificios en Budapest. Desde el proyecto hasta la entrega — un solo interlocutor, plazos garantizados.",
    hero_btn1:  "Hablar con nosotros",
    hero_btn2:  "Nuestros servicios",

    stat1_num:   "360°",
    stat1_label: "Gestión integral de proyecto",
    stat2_num:   "Llave en mano",
    stat2_label: "Entrega con garantía",
    stat3_num:   "3 idiomas",
    stat3_label: "Español · Húngaro · Inglés",

    services_tag:        "Lo que hacemos",
    services_h2_1:       "Gestión",
    services_h2_2:       "integral",
    services_h2_3:       "de obra",
    services_intro_p:    "Desde la primera visita hasta la entrega de llaves, gestionamos cada etapa de tu proyecto en Budapest. Como empresa de gestión integral, somos el único interlocutor — coordinamos subcontratistas, permisos, materiales y control de calidad.",
    services_visual_cap: "Rehabilitación integral · Budapest",

    s1_title: "Gestión integral de obra",
    s1_desc:  "Coordinación completa de todos los gremios: albañilería, instalaciones, electricidad, revestimientos, carpintería. Un solo responsable para todo el proyecto.",
    s2_title: "Entrega llave en mano",
    s2_desc:  "El inmueble completamente terminado: proyecto, licencias, derribo, estructura, instalaciones, acabados, amueblamiento y limpieza. Solo tienes que abrir la puerta.",
    s3_title: "Rehabilitación de edificios",
    s3_desc:  "Rehabilitación integral de comunidades, edificios de oficinas y locales comerciales: fachadas, zonas comunes, instalaciones, eficiencia energética.",
    s4_title: "Jefatura de obra / Dirección técnica",
    s4_desc:  "Si ya tienes tus contratistas, asumimos la jefatura de obra y la dirección facultativa — supervisión técnica independiente en defensa de tus intereses.",
    s5_title: "Planificación y presupuesto",
    s5_desc:  "Estudio de viabilidad, presupuesto detallado por partidas, cronograma semanal y selección de subcontratistas. Sin sorpresas ni costes ocultos.",
    s6_title: "Interiorismo & diseño",
    s6_desc:  "Desde el proyecto de interiorismo hasta la selección de materiales y el amueblamiento: equilibrio perfecto entre estética y funcionalidad.",
    s7_title: "Asesoría de inversión inmobiliaria",
    s7_desc:  "Valoración de inmuebles, cálculo de retorno de inversión post-reforma, asesoramiento en permisos y estrategia de mercado inmobiliario en Budapest.",
    s8_title: "Asistencia integral",
    s8_desc:  "Gestión completa de trámites administrativos y licencias en Hungría — especialmente para inversores extranjeros que desconocen la burocracia local.",

    mb1_label: "Rehabilitación integral",
    mb2_label: "Acabados premium",
    mb3_label: "Cocina · diseño",
    mb4_label: "Espacios modernos",
    mb_quote:  "Del proyecto<br>a la entrega —<br><em>un solo equipo</em>",

    process_tag:  "Cómo trabajamos",
    process_h2_1: "Nuestro proceso",
    process_h2_2: "de obra",
    process_lead: "Cada proyecto sigue el mismo proceso probado. Sin sorpresas — solo ejecución transparente y controlada.",

    step1_title: "Visita y felmérés gratuitos",
    step1_desc:  "Visitamos el inmueble, entendemos tus necesidades y realizamos una valoración técnica del alcance de los trabajos. Para clientes extranjeros también ofrecemos visita por videollamada.",
    step2_title: "Presupuesto detallado y cronograma",
    step2_desc:  "Presupuesto por partidas y cronograma semanal detallado. Cada línea incluye materiales y mano de obra — sin costes ocultos, sin letra pequeña.",
    step3_title: "Proyecto y licencias",
    step3_desc:  "Coordinamos los planos arquitectónicos y de interiorismo, y gestionamos todas las licencias y documentación ante las administraciones competentes.",
    step4_title: "Ejecución y supervisión diaria",
    step4_desc:  "Supervisión diaria en obra. Informe fotográfico semanal del avance, y comunicación inmediata de cualquier desviación sobre el cronograma.",
    step5_title: "Control de calidad y entrega",
    step5_desc:  "Antes de la entrega realizamos un control interno de calidad en cada fase. La entrega se documenta con checklist detallado y garantía escrita.",
    step6_title: "Postventa y garantía",
    step6_desc:  "La entrega no es el final de la relación. Disponibles durante el período de garantía, con revisión técnica anual del inmueble a petición.",

    phil_tag:   "Nosotros",
    phil_h2_1:  "Edificios que",
    phil_h2_em: "perduran",
    phil_lead:  "Constroleum es un equipo experimentado de gestión integral de obras en Budapest, con raíces hispano-húngaras. Precisión técnica, transparencia y visión a largo plazo.",

    pillar1_title: "Rigor técnico",
    pillar1_text:  "Cada detalle estructural e instalación se planifica, calcula y supervisa. La precisión técnica es la base de cualquier obra que resiste el tiempo.",
    pillar2_title: "Transparencia total",
    pillar2_text:  "Presupuesto por partidas, informes semanales, entrega documentada. Siempre sabes en qué punto está la obra y cuánto presupuesto queda.",
    pillar3_title: "Un único responsable",
    pillar3_text:  "Como gestor integral, somos responsables de todos los subcontratistas. Tú no coordinas — tú decides y recibes la obra terminada.",
    pillar4_title: "Visión a largo plazo",
    pillar4_text:  "Materiales de calidad, tecnologías probadas y soluciones duraderas. Una reforma es una inversión — y la tratamos como tal.",

    faq_title: "Preguntas<br><em>frecuentes</em>",
    faq1_q: "¿Qué incluye exactamente la entrega llave en mano?",
    faq1_a: "La entrega llave en mano incluye todo: proyecto, licencias, derribo, estructura, instalaciones de fontanería, climatización y electricidad, revestimientos, pintura, carpintería, amueblamiento y limpieza final. Solo tienes que abrir la puerta.",
    faq2_q: "¿Cuánto cuesta una reforma integral en Budapest?",
    faq2_a: "Una reforma completa en Budapest oscila entre 400 y 1.200 €/m² según el nivel de acabados. Significativamente más barato que en España o Europa occidental. Ofrecemos presupuesto detallado por partidas tras visita gratuita.",
    faq3_q: "¿Cuánto tiempo tarda una reforma integral?",
    faq3_a: "Una reforma completa de 50–80 m² tarda entre 8 y 16 semanas según el alcance y los permisos necesarios. Al inicio del proyecto entregamos un cronograma semanal detallado con informe fotográfico de seguimiento.",
    faq4_q: "¿Puedo gestionar la reforma desde España?",
    faq4_a: "Absolutamente. Esta es una de nuestras especialidades. Gestionamos todo sobre el terreno en Budapest — permisos, subcontratistas, materiales, control de calidad — y te mantenemos informado por videollamada e informes semanales.",
    faq5_q: "¿Hacéis también jefatura de obra si ya tengo mis contratistas?",
    faq5_a: "Sí. Si ya tienes contratistas de confianza, Constroleum puede asumir la jefatura de obra y dirección técnica — supervisión independiente en defensa de tus intereses.",
    faq6_q: "¿Qué garantías ofrecéis?",
    faq6_a: "Ofrecemos garantía escrita en todos los trabajos: 5 años en obra estructural, 2–3 años en instalaciones, 1–2 años en revestimientos y pintura. Durante el período de garantía reparamos defectos sin coste.",
    faq7_q: "¿También asesoráis en inversión inmobiliaria en Budapest?",
    faq7_a: "Sí. Ofrecemos asesoría completa para inversores: valoración del inmueble, estimación del coste de reforma, cálculo del retorno esperado (alquiler turístico vs. residencial), y acompañamiento durante todo el proceso de compra y reforma.",

    seo_h1:   "Jefe de obra en Budapest — ¿Qué significa en la práctica?",
    seo_p1:   "Constroleum actúa como <strong>jefe de obra integral</strong>: firmamos un único contrato con usted y coordinamos todos los gremios — albañilería, fontanería, electricidad, carpintería, solados, pintura y más. Un solo interlocutor para todo el proyecto.",
    seo_p2:   "Esto es especialmente importante en una <strong>reforma llave en mano</strong>, donde hay que coordinar muchos oficios a la vez. Supervisión diaria en obra para garantizar que cada fase avanza según el cronograma y cumple los estándares de calidad.",
    seo_p3:   "Para inversores extranjeros y clientes hispanohablantes ofrecemos servicio completo: <strong>licencias, documentación técnica, gestión administrativa</strong> — todo gestionado en su nombre para que no tenga que lidiar con la burocracia húngara.",
    seo_h2:   "Rehabilitación de edificios y reforma integral en Budapest",
    seo_p4:   "Gran parte del parque inmobiliario de Budapest se construyó entre 1900 y 1970. Estos edificios requieren una <strong>rehabilitación profunda</strong>: renovación de instalaciones, fachadas, ventanas, aislamiento y espacios interiores.",
    seo_p5:   "Constroleum está especializado en la <strong>reforma integral de edificios históricos</strong>: conocemos su estructura, los requisitos administrativos y cómo modernizarlos preservando su carácter original. Tenemos experiencia especialmente en los distritos VII, VIII, IX y XIII.",
    seo_p6:   "Tanto si se trata de un estudio de 40 m² como de un edificio de oficinas de 400 m², aplicamos el mismo rigor técnico y disciplina de gestión. Precio competitivo, entrega documentada y garantía por escrito.",

    contact_tag:          "Hablemos",
    contact_h2_1:         "Tu proyecto",
    contact_h2_2:         "empieza aquí",
    contact_label_phone:  "Teléfono & WhatsApp",
    contact_label_email:  "Email",
    contact_label_address:"Dirección",
    contact_label_follow: "Síguenos",
    contact_cta_text:     "Contáctenos con confianza — respondemos rápido en días laborables.",
    contact_cta_btn:      "Llámenos ahora",
    form_name:            "Nombre",
    form_email_label:     "Email",
    form_service:         "Servicio de interés",
    form_service_ph:      "Selecciona un servicio",
    form_message:         "Cuéntanos tu proyecto",
    form_send:            "Enviar consulta",
    form_ok:              "¡Gracias! Nos pondremos en contacto muy pronto.",
    form_error:           "Por favor completa nombre, email y mensaje.",
    form_error_send:      "Error al enviar. Escríbenos a constroleum@gmail.com",
    footer_copy:          "© 2025 Constroleum · Todos los derechos reservados",

    services_list: [
      "Gestión integral de obra",
      "Entrega llave en mano",
      "Rehabilitación de edificios",
      "Jefatura de obra / Dirección técnica",
      "Planificación y presupuesto",
      "Interiorismo & diseño",
      "Asesoría de inversión inmobiliaria",
      "Asistencia integral"
    ]
  },

  /* ─── ENGLISH ─── */
  en: {
    nav_services: "Services",
    nav_process:  "Process",
    nav_about:    "About",
    nav_contact:  "Contact",
    nav_cta:      "Free assessment",

    hero_tag:   "General Contractor & Construction · Budapest",
    hero_h1_em: "Turnkey",
    hero_h1_1:  "renovation &",
    hero_h1_2:  "construction Budapest",
    hero_desc:  "Full construction management, apartment renovation and building rehabilitation in Budapest. From project to handover — one team, one contract, on time.",
    hero_btn1:  "Get a free quote",
    hero_btn2:  "Our services",

    stat1_num:   "360°",
    stat1_label: "Full project management",
    stat2_num:   "Turnkey",
    stat2_label: "Handover with guarantee",
    stat3_num:   "3 languages",
    stat3_label: "Hungarian · Spanish · English",

    services_tag:        "What we do",
    services_h2_1:       "Full-service",
    services_h2_2:       "construction",
    services_h2_3:       "management",
    services_intro_p:    "From the first site assessment to key handover, we manage every stage. As general contractor, we are your single point of contact — coordinating all subcontractors, permits, materials and quality control.",
    services_visual_cap: "General contracting · Budapest",

    s1_title: "General contracting",
    s1_desc:  "Full construction management from a single hand. We coordinate all trades — masonry, plumbing, electrical, tiling, joinery — and are responsible for timelines, quality and budget.",
    s2_title: "Turnkey renovation",
    s2_desc:  "Complete property handover: from planning, permits and demolition through to flooring, painting, furnishing and cleaning. You just walk in.",
    s3_title: "Building rehabilitation",
    s3_desc:  "Full rehabilitation of apartment buildings, office blocks and commercial properties: façades, common areas, M&E systems, energy efficiency upgrades.",
    s4_title: "Site manager / Technical supervisor",
    s4_desc:  "If you already have contractors, we act as independent site manager and technical supervisor — quality oversight in your interest, not the builder's.",
    s5_title: "Project planning & budgeting",
    s5_desc:  "Feasibility study, detailed line-item budget, weekly schedule and subcontractor selection. No hidden costs, no surprises.",
    s6_title: "Interior design",
    s6_desc:  "From space planning and material selection to furniture sourcing and styling: aesthetic and functional balance in every project.",
    s7_title: "Property investment advisory",
    s7_desc:  "Property valuation, post-renovation ROI calculation, permit advisory and market strategy for the Budapest real estate market.",
    s8_title: "Full administrative assistance",
    s8_desc:  "Complete management of permits, technical documentation and authority liaison — especially valuable for foreign investors unfamiliar with Hungarian procedures.",

    mb1_label: "Turnkey renovation",
    mb2_label: "Premium fit-out",
    mb3_label: "Kitchen · design",
    mb4_label: "Modern interiors",
    mb_quote:  "From planning<br>to handover —<br><em>one team</em>",

    process_tag:  "How we work",
    process_h2_1: "Our project",
    process_h2_2: "process",
    process_lead: "Every project follows the same proven process. No surprises — just transparent, controlled delivery.",

    step1_title: "Free site assessment",
    step1_desc:  "We visit the property, understand your requirements and technically scope the works. For overseas clients we also offer video call assessments.",
    step2_title: "Detailed quote & schedule",
    step2_desc:  "Line-item budget and weekly project schedule. Every line includes materials and labour — no hidden costs, no small print.",
    step3_title: "Design & permits",
    step3_desc:  "We coordinate architectural and interior design drawings, and manage all authority permits and documentation on your behalf.",
    step4_title: "Construction & daily supervision",
    step4_desc:  "Daily on-site supervision throughout construction. Weekly photo progress reports and immediate notification of any schedule deviation.",
    step5_title: "Quality control & handover",
    step5_desc:  "Internal quality check on every phase before handover. Documented handover with detailed checklist and written guarantee.",
    step6_title: "Aftercare & guarantee",
    step6_desc:  "We remain available throughout the guarantee period and carry out annual technical inspections on request.",

    phil_tag:   "About us",
    phil_h2_1:  "Buildings that",
    phil_h2_em: "endure",
    phil_lead:  "Constroleum is an experienced general contracting team in Budapest with Spanish-Hungarian professional roots. Technical precision, transparency and long-term thinking.",

    pillar1_title: "Technical rigour",
    pillar1_text:  "Every structural and M&E detail is planned, calculated and inspected. Technical precision is the foundation of any work that stands the test of time.",
    pillar2_title: "Full transparency",
    pillar2_text:  "Line-item budgets, weekly reports, documented handover. You always know where the project stands and what budget remains.",
    pillar3_title: "Single point of responsibility",
    pillar3_text:  "As general contractor we are accountable for every subcontractor. You don't coordinate — you decide and receive the finished property.",
    pillar4_title: "Long-term thinking",
    pillar4_text:  "Quality materials, proven technologies, durable solutions. A renovation is an investment — and we treat it as one.",

    faq_title: "Frequently<br><em>asked questions</em>",
    faq1_q: "What exactly does turnkey renovation include?",
    faq1_a: "Turnkey renovation means Constroleum plans and coordinates everything: design, permits, demolition, structural work, plumbing, electrical, tiling, painting, furnishing — right through to final cleaning and handover. You simply walk in.",
    faq2_q: "How much does a full apartment renovation cost in Budapest?",
    faq2_a: "A complete renovation in Budapest ranges from €400 to €1,200/m² depending on finish level — significantly below Western European prices. We provide a detailed line-item quote following a free site visit.",
    faq3_q: "How long does a complete renovation take?",
    faq3_a: "A typical 50–80 m² full renovation takes 8–16 weeks depending on scope and permit requirements. We provide a detailed weekly schedule at project start and send photo progress reports weekly.",
    faq4_q: "Can you manage the renovation remotely?",
    faq4_a: "Absolutely — this is a core competency. We manage everything on the ground in Budapest and keep you informed via video calls and weekly reports. You don't need to be in Hungary.",
    faq5_q: "Do you also offer site management if I already have contractors?",
    faq5_a: "Yes. If you have existing contractors, Constroleum can act as independent site manager and technical supervisor — overseeing quality and compliance in your interest.",
    faq6_q: "What guarantees do you offer?",
    faq6_a: "Written guarantees on all works: 5 years on structural works, 2–3 years on M&E systems, 1–2 years on finishes and painting. All defects repaired at no cost during the guarantee period.",
    faq7_q: "Do you provide property investment advisory?",
    faq7_a: "Yes. We advise on property valuation, renovation cost estimation, expected ROI (short-term vs long-term rental), and accompany you through the full purchase and renovation process in Budapest.",

    seo_h1:   "General Contractor in Budapest — What Does It Mean in Practice?",
    seo_p1:   "Constroleum acts as your <strong>general contractor</strong>: we sign a single contract with you and coordinate all trades — masonry, plumbing, HVAC, electrical, flooring, carpentry, painting and more. One point of contact for the entire project.",
    seo_p2:   "This is especially important for a <strong>turnkey renovation</strong>, where many trades must be coordinated simultaneously. Daily on-site supervision ensures every phase progresses on schedule and meets quality standards.",
    seo_p3:   "For foreign investors and English-speaking clients we offer a full service: <strong>permits, technical documentation, administrative handling</strong> — managed entirely on your behalf so you never need to navigate Hungarian bureaucracy.",
    seo_h2:   "Building Rehabilitation and Full Renovation in Budapest",
    seo_p4:   "Much of Budapest's building stock was constructed between 1900 and 1970. These buildings require significant <strong>rehabilitation</strong>: mechanical and electrical system replacement, façade renovation, window replacement, insulation and full interior renewal.",
    seo_p5:   "Constroleum specialises in the <strong>complete renovation of historic buildings</strong>: we understand their structure, know the regulatory requirements, and know how to modernise them while preserving their original character. We have deep experience in districts VII, VIII, IX and XIII.",
    seo_p6:   "Whether it's a 40 m² studio or a 400 m² office building, we apply the same technical rigour and project management discipline. Competitive pricing, documented handover and written guarantee.",

    contact_tag:          "Let's talk",
    contact_h2_1:         "Start your",
    contact_h2_2:         "project here",
    contact_label_phone:  "Phone & WhatsApp",
    contact_label_email:  "Email",
    contact_label_address:"Address",
    contact_label_follow: "Follow us",
    contact_cta_text:     "Get in touch — we respond quickly on business days.",
    contact_cta_btn:      "Call us now",
    form_name:            "Name",
    form_email_label:     "Email",
    form_service:         "Service of interest",
    form_service_ph:      "Select a service",
    form_message:         "Tell us about your project",
    form_send:            "Send enquiry",
    form_ok:              "Thank you! We will be in touch very soon.",
    form_error:           "Please fill in your name, email and message.",
    form_error_send:      "Send error. Please email us at constroleum@gmail.com",
    footer_copy:          "© 2025 Constroleum · All rights reserved",

    services_list: [
      "General contracting",
      "Turnkey renovation",
      "Building rehabilitation",
      "Site manager / Technical supervisor",
      "Project planning & budgeting",
      "Interior design",
      "Property investment advisory",
      "Full administrative assistance"
    ]
  }
};

// ================================================
// LANGUAGE ENGINE
// ================================================
let currentLang = 'hu';

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  // Active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const t = TRANSLATIONS[lang];

  // All simple data-i18n text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  // Moodboard quote (has innerHTML with <em>)
  const mbQ = document.querySelector('.mb-quote');
  if (mbQ && t.mb_quote) mbQ.innerHTML = t.mb_quote;

  // FAQ title with <em>
  const faqTitle = document.querySelector('.faq-section .section-title');
  if (faqTitle && t.faq_title) faqTitle.innerHTML = t.faq_title;

  // Rebuild service select
  const sel = document.getElementById('service-select');
  if (sel && t.services_list) {
    const ph = t.form_service_ph || t.form_service || '';
    sel.innerHTML = `<option value="">${ph}</option>`;
    t.services_list.forEach(s => {
      const opt = document.createElement('option');
      opt.textContent = s;
      sel.appendChild(opt);
    });
  }

  // Update page title & meta description for SEO
  const titles = {
    hu: 'Constroleum · Generálkivitelező Budapest | Lakásfelújítás, Kulcsrakész Kivitelezés',
    es: 'Constroleum · Gestión Integral de Obra Budapest | Llave en Mano, Rehabilitación',
    en: 'Constroleum · General Contractor Budapest | Turnkey Renovation & Rehabilitation'
  };
  const descs = {
    hu: 'Generálkivitelező Budapest. Teljes körű lakásfelújítás, épületrehabilitáció, kulcsrakész kivitelezés. Tervezéstől átadásig — egyetlen kézből.',
    es: 'Gestión integral de obra en Budapest. Reforma llave en mano, rehabilitación de edificios, jefatura de obra. Desde el proyecto hasta la entrega.',
    en: 'General contractor Budapest. Turnkey apartment renovation, building rehabilitation, full construction management. From design to handover.'
  };
  document.title = titles[lang] || titles.hu;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = descs[lang] || descs.hu;
}

// ================================================
// MOBILE MENU
// ================================================
function toggleMenu() {
  document.getElementById('navbar').classList.toggle('open');
}

// ================================================
// EMAILJS — CONTACT FORM
// ================================================
// ─── HOW TO ACTIVATE ──────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add Gmail service → note SERVICE_ID
// 3. Create Email Template with vars:
//      {{from_name}} {{reply_to}} {{phone}} {{service}}
//      {{location}} {{message}} {{lang}}
//    Set "To email" → constroleum@gmail.com
//    Note TEMPLATE_ID
// 4. Account → API Keys → copy Public Key
// 5. Replace the three placeholders below
// ──────────────────────────────────────────────────────────────
const EMAILJS_PUBLIC_KEY  = '5mUia58WNl6OoBcRo';
const EMAILJS_SERVICE_ID  = '5mUia58WNl6OoBcRo';
const EMAILJS_TEMPLATE_ID = 'template_8m7s0xc';

document.addEventListener('DOMContentLoaded', () => {
  // Init lang from URL param or default HU
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  setLanguage(urlLang && TRANSLATIONS[urlLang] ? urlLang : 'hu');

  // EmailJS init
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  // Form submit
  const form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', handleFormSubmit);
});

async function handleFormSubmit(e) {
  e.preventDefault();
  const form    = e.target;
  const btn     = form.querySelector('.btn-submit');
  const label   = btn.querySelector('.btn-label');
  const spinner = btn.querySelector('.btn-spinner');
  const status  = document.getElementById('form-status');
  const t       = TRANSLATIONS[currentLang];

  const name    = form.querySelector('#cf-name').value.trim();
  const email   = form.querySelector('#cf-email').value.trim();
  const message = form.querySelector('#cf-msg').value.trim();

  if (!name || !email || !message) {
    showStatus(status, 'error', t.form_error);
    return;
  }

  btn.disabled   = true;
  label.hidden   = true;
  spinner.hidden = false;
  status.className = 'form-status';
  status.style.display = 'none';

  // Add hidden lang field for template context
  let langInput = form.querySelector('input[name="lang"]');
  if (!langInput) {
    langInput = document.createElement('input');
    langInput.type = 'hidden';
    langInput.name = 'lang';
    form.appendChild(langInput);
  }
  langInput.value = currentLang.toUpperCase();

  try {
    if (typeof emailjs === 'undefined' || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      await new Promise(r => setTimeout(r, 1400));
      showStatus(status, 'success', t.form_ok);
      form.reset();
    } else {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
      showStatus(status, 'success', t.form_ok);
      form.reset();
    }
  } catch (err) {
    console.error('EmailJS error:', err);
    showStatus(status, 'error', t.form_error_send);
  } finally {
    btn.disabled   = false;
    label.hidden   = false;
    spinner.hidden = true;
  }
}

function showStatus(el, type, msg) {
  el.className     = 'form-status ' + type;
  el.textContent   = msg;
  el.style.display = 'block';
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ================================================
// SCROLL — NAV
// ================================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ================================================
// SCROLL REVEAL
// ================================================
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'),
        Number(e.target.dataset.delay) || 0);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.service-card, .pillar').forEach(el => {
  revealObs.observe(el);
});
