const pricingData = [
    { pax: "2 pax", opA: "1530 EUR / 1680 USD", opB: "1290 EUR / 1490 USD" },
    { pax: "4 pax", opA: "1260 EUR / 1390 USD", opB: "1010 EUR / 1170 USD" },
    { pax: "6 pax", opA: "1220 EUR / 1350 USD", opB: "980 EUR / 1130 USD" },
    { pax: "8 pax", opA: "1190 EUR / 1310 USD", opB: "940 EUR / 1070 USD" },
    { pax: "10 pax", opA: "1150 EUR / 1280 USD", opB: "900 EUR / 1040 USD" },
    { pax: "12 pax", opA: "1130 EUR / 1260 USD", opB: "880 EUR / 1020 USD" },
    { pax: "14 pax", opA: "1100 EUR / 1230 USD", opB: "860 EUR / 990 USD" },
    { pax: "16 pax", opA: "1080 EUR / 1210 USD", opB: "830 EUR / 960 USD" },
    { pax: "18 pax", opA: "1050 EUR / 1180 USD", opB: "810 EUR / 940 USD" },
    { pax: "20 pax", opA: "1030 EUR / 1190 USD", opB: "780 EUR / 900 USD" }
];

const translations = {
    en: {
        nav: { home: "Home", tours: "Tours", pricing: "Prices", about: "About", contact: "Contact" },
        hero: {
            title: "Discover the Jewel of the Caucasus",
            subtitle: "Unforgettable journeys tailored for travelers from around the world.",
            cta: "Start Your Adventure"
        },
        stats: { tourists: "Happy Tourists", years: "Years Experience", tours: "Unique Tours" },
        about: {
            title: "Why Choose Caspian Dream?",
            text: "We don't just show you Azerbaijan; we make you feel it. With specialized guides fluent in English, Russian, Spanish, and Portuguese, we bridge the cultural gap, offering you the warmth of Azerbaijani hospitality with the comfort you expect. From wine tasting in Gabala to the architectural marvels of Baku.",
            badge: "Certified Experts",
            features: {
                qualityTitle: "Quality",
                qualityDesc: "Top-rated hotels & transport",
                langTitle: "Language",
                langDesc: "Native English, Russian, Spanish & Portuguese guides"
            }
        },
        tours: {
            title: "Signature Experiences",
            subtitle: "Curated destinations for the discerning traveler",
            bookBtn: "View Details",
            locations: [
                {
                    id: 1,
                    title: "Baku: Ancient & Modern",
                    desc: "A city of contrasts where medieval walls meet futuristic flame towers. Experience the vibrant nightlife and rich history.",
                    details: ["Old City Tour", "Flame Towers", "Carpet Museum"],
                    price: "from $80"
                },
                {
                    id: 2,
                    title: "Sheki: Silk Road Legacy",
                    desc: "Wander through the Palace of Shaki Khans, taste the famous sweet Halva, and sleep in a real Caravanserai.",
                    details: ["Khan's Palace", "Bio Garden", "Albanian Church"],
                    price: "from $120"
                },
                {
                    id: 3,
                    title: "Gabala & Shamakhi",
                    desc: "The perfect escape into nature. Wineries, cable cars, and breathtaking mountain views of the Greater Caucasus.",
                    details: ["Winery Tour", "Tufandag Resort", "Juma Mosque"],
                    price: "from $100"
                },
                {
                    id: 4,
                    title: "Gobustan & Mud Volcanoes",
                    desc: "Touch the history of 40,000 years ago. Rock carvings and the unique phenomenon of cold mud volcanoes.",
                    details: ["Petroglyphs", "Mud Volcanoes", "Bibi-Heybat"],
                    price: "from $70"
                }
            ]
        },
        pricing: {
            title: "Tour Pricing",
            subtitle: "Transparent rates for groups of all sizes",
            pax: "Persons",
            opA: "Option A (Hotels 5*)",
            opB: "Option B (Hotels 4*)",
            city: "City",
            baku: "BAKU",
            hotel5: "HILTON HOTEL 5*",
            hotel4: "MOVENPICK HOTEL 4*",
            sngl: "SNGL/SUP",
            priceA: "400 EUR / 470 USD",
            priceB: "220 EUR / 280 USD"
        },
        testimonials: {
            title: "Guest Stories",
            reviews: [
                { name: "Maria Gonzalez", country: "Spain", text: "Increíble experiencia. Bakú es fascinante y la guía hablaba español perfecto!" },
                { name: "Joao Silva", country: "Portugal", text: "A comida, as pessoas, tudo maravilhoso. Recomendo Caspian Dream a todos." },
                { name: "Dmitry Volkov", country: "Russia", text: "Excellent organization and very knowledgeable guides. Baku is beautiful!" },
                { name: "Anna Becker", country: "Germany", text: "Everything felt smooth and personal, from airport pickup to the mountain tour in Gabala." },
                { name: "Sofia Martinez", country: "Argentina", text: "Beautiful hotels, warm hospitality and the perfect balance of city culture and nature." }
            ]
        },
        contact: {
            title: "Plan Your Trip",
            subtitle: "Ready for Azerbaijan?",
            name: "Name",
            email: "Email",
            message: "Your Message",
            send: "Send Request",
            success: "Thank you! We will be in touch shortly.",
            sending: "Sending your request...",
            error: "We could not send your request right now. Please try again in a moment."
        }
    },
    es: {
        nav: { home: "Inicio", tours: "Tours", pricing: "Precios", about: "Nosotros", contact: "Contacto" },
        hero: {
            title: "Descubre la Joya del Cáucaso",
            subtitle: "Viajes inolvidables diseñados para viajeros de todo el mundo.",
            cta: "Empieza tu Aventura"
        },
        stats: { tourists: "Turistas Felices", years: "Años de Experiencia", tours: "Tours Únicos" },
        about: {
            title: "¿Por qué elegir Caspian Dream?",
            text: "No solo te mostramos Azerbaiyán; hacemos que lo sientas. Con guías especializados que hablan inglés, ruso, español y portugués, cerramos la brecha cultural, ofreciéndote la calidez de la hospitalidad azerbaiyana con el confort que esperas. Desde catas de vino en Gabala hasta las maravillas arquitectónicas de Bakú.",
            badge: "Expertos Certificados",
            features: {
                qualityTitle: "Calidad",
                qualityDesc: "Hoteles y transporte de primera",
                langTitle: "Idioma",
                langDesc: "Guías en Inglés, Ruso, Español y Portugués"
            }
        },
        tours: {
            title: "Experiencias Únicas",
            subtitle: "Destinos seleccionados para el viajero exigente",
            bookBtn: "Ver Detalles",
            locations: [
                {
                    id: 1,
                    title: "Bakú: Antiguo y Moderno",
                    desc: "Una ciudad de contrastes donde murallas medievales se encuentran con torres de fuego futuristas.",
                    details: ["Tour Ciudad Vieja", "Flame Towers", "Museo de Alfombras"],
                    price: "desde $80"
                },
                {
                    id: 2,
                    title: "Sheki: Legado Ruta de la Seda",
                    desc: "Pasea por el Palacio de los Khanes, prueba la famosa Halva y duerme en un auténtico Caravasar.",
                    details: ["Palacio del Khan", "Bio Jardín", "Iglesia Albanesa"],
                    price: "desde $120"
                },
                {
                    id: 3,
                    title: "Gabala y Shamakhi",
                    desc: "El escape perfecto a la naturaleza. Bodegas de vino, teleféricos y vistas impresionantes del Cáucaso.",
                    details: ["Tour de Vinos", "Resort Tufandag", "Mezquita Juma"],
                    price: "desde $100"
                },
                {
                    id: 4,
                    title: "Gobustan y Volcanes",
                    desc: "Toca la historia de hace 40.000 años. Petroglifos y el fenómeno único de los volcanes de lodo.",
                    details: ["Petroglifos", "Volcanes de Lodo", "Bibi-Heybat"],
                    price: "desde $70"
                }
            ]
        },
        pricing: {
            title: "Precios del Tour",
            subtitle: "Tarifas transparentes para grupos de todos los tamaños",
            pax: "Personas",
            opA: "Opción A (Hoteles 5*)",
            opB: "Opción B (Hoteles 4*)",
            city: "Ciudades",
            baku: "BAKU",
            hotel5: "HILTON HOTEL 5*",
            hotel4: "MOVENPICK HOTEL 4*",
            sngl: "SNGL/SUP",
            priceA: "400 EUR / 470 USD",
            priceB: "220 EUR / 280 USD"
        },
        testimonials: {
            title: "Historias de Huéspedes",
            reviews: [
                { name: "Maria Gonzalez", country: "España", text: "Increíble experiencia. Bakú es fascinante y la guía hablaba español perfecto!" },
                { name: "Joao Silva", country: "Portugal", text: "A comida, as pessoas, tudo maravilhoso. Recomendo Caspian Dream a todos." },
                { name: "Carlos Ruiz", country: "México", text: "La mejor agencia. Nos sentimos como en casa. Gabala es un paraíso." },
                { name: "Anna Becker", country: "Alemania", text: "Todo fue fluido y muy personal, desde el traslado hasta la excursión por las montañas de Gabala." },
                { name: "Sofia Martinez", country: "Argentina", text: "Hoteles preciosos, hospitalidad cálida y un equilibrio perfecto entre ciudad, cultura y naturaleza." }
            ]
        },
        contact: {
            title: "Planifica tu Viaje",
            subtitle: "¿Listo para Azerbaiyán?",
            name: "Nombre",
            email: "Correo",
            message: "Tu Mensaje",
            send: "Enviar Solicitud",
            success: "¡Gracias! Nos pondremos en contacto pronto.",
            sending: "Enviando tu solicitud...",
            error: "No pudimos enviar tu solicitud ahora mismo. Inténtalo de nuevo en unos momentos."
        }
    },
    pt: {
        nav: { home: "Início", tours: "Tours", pricing: "Preços", about: "Sobre", contact: "Contato" },
        hero: {
            title: "Descubra a Joia do Cáucaso",
            subtitle: "Viagens inesquecíveis feitas sob medida para viajantes de todo o mundo.",
            cta: "Comece Sua Aventura"
        },
        stats: { tourists: "Turistas Felizes", years: "Anos de Experiência", tours: "Tours Únicos" },
        about: {
            title: "Por que escolher a Caspian Dream?",
            text: "Não mostramos apenas o Azerbaijão; fazemos você senti-lo. Com guias especializados fluentes em inglês, russo, espanhol e português, superamos a barreira cultural, oferecendo o calor da hospitalidade azerbaijana com o conforto que você espera. Da degustação de vinhos em Gabala às maravilhas arquitetônicas de Baku.",
            badge: "Especialistas Certificados",
            features: {
                qualityTitle: "Qualidade",
                qualityDesc: "Hotéis e transporte de primeira",
                langTitle: "Idioma",
                langDesc: "Guias em Inglês, Russo, Espanhol e Português"
            }
        },
        tours: {
            title: "Experiências Únicas",
            subtitle: "Destinos selecionados para o viajante exigente",
            bookBtn: "Ver Detalhes",
            locations: [
                {
                    id: 1,
                    title: "Baku: Antiga e Moderna",
                    desc: "Uma cidade de contrastes onde muralhas medievais encontram as futuristas Flame Towers. Experimente a vibrante vida noturna e a rica história.",
                    details: ["Tour Cidade Velha", "Flame Towers", "Museu do Tapete"],
                    price: "a partir de $80"
                },
                {
                    id: 2,
                    title: "Sheki: Legado da Rota da Seda",
                    desc: "Passeie pelo Palácio dos Khans de Shaki, prove o famoso doce Halva e durma em um verdadeiro Caravanserai.",
                    details: ["Palácio do Khan", "Bio Garden", "Igreja Albanesa"],
                    price: "a partir de $120"
                },
                {
                    id: 3,
                    title: "Gabala & Shamakhi",
                    desc: "O refúgio perfeito na natureza. Vinícolas, teleféricos e vistas deslumbrantes das montanhas do Grande Cáucaso.",
                    details: ["Tour de Vinhos", "Resort Tufandag", "Mesquita Juma"],
                    price: "a partir de $100"
                },
                {
                    id: 4,
                    title: "Gobustan & Vulcões de Lama",
                    desc: "Toque na história de 40.000 anos atrás. Gravuras rupestres e o fenômeno único dos vulcões de lama fria.",
                    details: ["Petróglifos", "Vulcões de Lama", "Bibi-Heybat"],
                    price: "a partir de $70"
                }
            ]
        },
        pricing: {
            title: "Preços do Tour",
            subtitle: "Tarifas transparentes para grupos de todos os tamanhos",
            pax: "Pessoas",
            opA: "Opção A (Hotéis 5*)",
            opB: "Opção B (Hotéis 4*)",
            city: "Cidades",
            baku: "BAKU",
            hotel5: "HILTON HOTEL 5*",
            hotel4: "MOVENPICK HOTEL 4*",
            sngl: "SNGL/SUP",
            priceA: "400 EUR / 470 USD",
            priceB: "220 EUR / 280 USD"
        },
        testimonials: {
            title: "Histórias de Convidados",
            reviews: [
                { name: "Maria Gonzalez", country: "Espanha", text: "Experiência incrível. Baku é fascinante e o guia falava espanhol perfeito!" },
                { name: "Joao Silva", country: "Portugal", text: "A comida, as pessoas, tudo maravilhoso. Recomendo Caspian Dream a todos." },
                { name: "Carlos Ruiz", country: "México", text: "A melhor agência. Nos sentimos como em casa. Gabala é um paraíso." },
                { name: "Anna Becker", country: "Alemanha", text: "Tudo foi fluido e pessoal, do traslado do aeroporto ao passeio pelas montanhas de Gabala." },
                { name: "Sofia Martinez", country: "Argentina", text: "Hotéis lindos, hospitalidade calorosa e o equilíbrio perfeito entre cidade, cultura e natureza." }
            ]
        },
        contact: {
            title: "Planeje Sua Viagem",
            subtitle: "Pronto para o Azerbaijão?",
            name: "Nome",
            email: "E-mail",
            message: "Sua Mensagem",
            send: "Enviar Solicitação",
            success: "Obrigado! Entraremos em contato em breve.",
            sending: "Enviando sua solicitação...",
            error: "Não foi possível enviar sua solicitação agora. Tente novamente em instantes."
        }
    },
    ru: {
        nav: { home: "Главная", tours: "Туры", pricing: "Цены", about: "О нас", contact: "Контакты" },
        hero: {
            title: "Откройте Жемчужину Кавказа",
            subtitle: "Незабываемые путешествия, созданные специально для вас.",
            cta: "Начать Приключение"
        },
        stats: { tourists: "Счастливых Туристов", years: "Лет Опыта", tours: "Уникальных Туров" },
        about: {
            title: "Почему выбирают Caspian Dream?",
            text: "Мы не просто показываем Азербайджан; мы даем возможность почувствовать его. Наши гиды свободно говорят на английском, русском, испанском и португальском языках, преодолевая культурные барьеры и предлагая тепло азербайджанского гостеприимства с привычным вам комфортом. От дегустации вин в Габале до архитектурных чудес Баку.",
            badge: "Сертифицированные Эксперты",
            features: {
                qualityTitle: "Качество",
                qualityDesc: "Отели и транспорт высокого уровня",
                langTitle: "Язык",
                langDesc: "Гиды: Английский, Русский, Испанский, Португальский"
            }
        },
        tours: {
            title: "Уникальные Впечатления",
            subtitle: "Избранные направления для взыскательных путешественников",
            bookBtn: "Подробнее",
            locations: [
                {
                    id: 1,
                    title: "Баку: Древний и Современный",
                    desc: "Город контрастов, где средневековые стены встречаются с футуристическими Пламенными Башнями. Насладитесь яркой ночной жизнью и богатой историей.",
                    details: ["Старый Город", "Пламенные Башни", "Музей Ковра"],
                    price: "от $80"
                },
                {
                    id: 2,
                    title: "Шеки: Наследие Шелкового Пути",
                    desc: "Прогуляйтесь по Дворцу Шекинских Ханов, попробуйте знаменитую сладкую халву и переночуйте в настоящем Караван-сарае.",
                    details: ["Дворец Хана", "Био Сад", "Албанская Церковь"],
                    price: "от $120"
                },
                {
                    id: 3,
                    title: "Габала и Шамахы",
                    desc: "Идеальный побег на природу. Винодельни, канатные дороги и захватывающие виды на горы Большого Кавказа.",
                    details: ["Винный Тур", "Курорт Туфандаг", "Джума Мечеть"],
                    price: "от $100"
                },
                {
                    id: 4,
                    title: "Гобустан и Грязевые Вулканы",
                    desc: "Прикоснитесь к истории 40 000-летней давности. Наскальные рисунки и уникальный феномен холодных грязевых вулканов.",
                    details: ["Петроглифы", "Грязевые Вулканы", "Мечеть Биби-Эйбат"],
                    price: "от $70"
                }
            ]
        },
        pricing: {
            title: "Стоимость Туров",
            subtitle: "Прозрачные цены для групп любого размера",
            pax: "Кол-во чел.",
            opA: "Опция A (Отели 5*)",
            opB: "Опция B (Отели 4*)",
            city: "Города",
            baku: "БАКУ",
            hotel5: "HILTON HOTEL 5*",
            hotel4: "MOVENPICK HOTEL 4*",
            sngl: "SNGL/SUP",
            priceA: "400 EUR / 470 USD",
            priceB: "220 EUR / 280 USD"
        },
        testimonials: {
            title: "Отзывы Гостей",
            reviews: [
                { name: "Maria Gonzalez", country: "Испания", text: "Невероятный опыт. Баку завораживает, а гид прекрасно говорил по-испански!" },
                { name: "Joao Silva", country: "Португалия", text: "Еда, люди — всё чудесно. Рекомендую Caspian Dream всем." },
                { name: "Дмитрий Волков", country: "Россия", text: "Отличная организация и очень знающие гиды. Баку прекрасен!" },
                { name: "Анна Беккер", country: "Германия", text: "Все было очень гладко и по-человечески, от встречи в аэропорту до поездки в горы Габалы." },
                { name: "София Мартинес", country: "Аргентина", text: "Красивые отели, теплое гостеприимство и идеальный баланс города, культуры и природы." }
            ]
        },
        contact: {
            title: "Планируйте Путешествие",
            subtitle: "Готовы к Азербайджану?",
            name: "Имя",
            email: "Email",
            message: "Ваше Сообщение",
            send: "Отправить Запрос",
            success: "Спасибо! Мы свяжемся с вами в ближайшее время.",
            sending: "Отправляем вашу заявку...",
            error: "Сейчас не удалось отправить заявку. Пожалуйста, попробуйте ещё раз через минуту."
        }
    }
};

const uiText = {
    en: { heroEyebrow: "Curated journeys across Azerbaijan", aboutKicker: "Trusted local expertise", toursKicker: "Local favorites", storiesKicker: "Guest feedback", storiesSubtitle: "Five-star hospitality backed by real travelers.", pricingKicker: "Best value", contactKicker: "Let us plan it with you", emailLabel: "Email:", phoneLabel: "Phone:", locationLabel: "Location:" },
    es: { heroEyebrow: "Viajes seleccionados por Azerbaiyán", aboutKicker: "Experiencia local de confianza", toursKicker: "Favoritos locales", storiesKicker: "Opiniones reales", storiesSubtitle: "Hospitalidad cinco estrellas avalada por viajeros reales.", pricingKicker: "Mejor valor", contactKicker: "Planifiquémoslo contigo", emailLabel: "Correo:", phoneLabel: "Teléfono:", locationLabel: "Ubicación:" },
    pt: { heroEyebrow: "Jornadas selecionadas pelo Azerbaijão", aboutKicker: "Experiência local confiável", toursKicker: "Favoritos locais", storiesKicker: "Relatos reais", storiesSubtitle: "Hospitalidade cinco estrelas aprovada por viajantes reais.", pricingKicker: "Melhor custo-benefício", contactKicker: "Vamos planejar com você", emailLabel: "E-mail:", phoneLabel: "Telefone:", locationLabel: "Localização:" },
    ru: { heroEyebrow: "Авторские путешествия по Азербайджану", aboutKicker: "Надежная местная экспертиза", toursKicker: "Любимые маршруты", storiesKicker: "Отзывы гостей", storiesSubtitle: "Пятизвездочное гостеприимство, подтвержденное реальными путешественниками.", pricingKicker: "Лучшее предложение", contactKicker: "Давайте спланируем вместе", emailLabel: "Email:", phoneLabel: "Телефон:", locationLabel: "Локация:" }
};

const tourImages = {
    1: "tour-baku.jpg",
    2: "tour-sheki.jpg",
    3: "tour-gabala.jpg",
    4: "tour-gobustan.jpg"
};

const navItems = [
    { key: "home", target: "hero" },
    { key: "about", target: "about" },
    { key: "tours", target: "tours" },
    { key: "pricing", target: "pricing" },
    { key: "contact", target: "contact" }
];

const state = {
    lang: getInitialLanguage(),
    observer: null
};

document.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    buildCityLights();
    renderPage();
    initRevealObserver();
});

function getInitialLanguage() {
    try {
        const saved = window.localStorage.getItem("caspian-dream-lang");
        return saved && translations[saved] ? saved : "en";
    } catch {
        return "en";
    }
}

function bindEvents() {
    document.addEventListener("click", (event) => {
        const langButton = event.target.closest("[data-lang]");
        if (langButton) {
            setLanguage(langButton.getAttribute("data-lang"));
            return;
        }

        const scrollButton = event.target.closest("[data-scroll]");
        if (scrollButton) {
            const targetId = scrollButton.getAttribute("data-scroll");
            scrollToSection(targetId);
            closeMenu();
            return;
        }
    });

    const menuToggle = document.getElementById("menu-toggle");
    menuToggle.addEventListener("click", () => {
        const menu = document.getElementById("mobile-menu");
        const isOpen = !menu.hidden;
        if (isOpen) {
            closeMenu();
        } else {
            menu.hidden = false;
            menuToggle.setAttribute("aria-expanded", "true");
        }
    });

    document.getElementById("contact-form").addEventListener("submit", handleContactSubmit);
}

function setLanguage(lang) {
    if (!translations[lang]) {
        return;
    }
    state.lang = lang;
    try {
        window.localStorage.setItem("caspian-dream-lang", lang);
    } catch {
        // Ignore storage failures and keep the in-memory language.
    }
    renderPage();
}

function renderPage() {
    const t = translations[state.lang];
    const ui = uiText[state.lang];

    document.documentElement.lang = state.lang;
    document.title = `Caspian Dream Travel | ${t.hero.title}`;

    renderNavigation(t);
    renderLanguages();

    setText("hero-eyebrow", ui.heroEyebrow);
    setText("hero-title", t.hero.title);
    setText("hero-subtitle", t.hero.subtitle);
    setText("hero-cta", t.hero.cta);

    setText("stat-tourists", t.stats.tourists);
    setText("stat-years", t.stats.years);
    setText("stat-tours", t.stats.tours);

    setText("about-kicker", ui.aboutKicker);
    setText("about-title", t.about.title);
    setText("about-text", t.about.text);
    setText("about-badge", t.about.badge);
    setText("feature-quality-title", t.about.features.qualityTitle);
    setText("feature-quality-desc", t.about.features.qualityDesc);
    setText("feature-language-title", t.about.features.langTitle);
    setText("feature-language-desc", t.about.features.langDesc);

    setText("tours-kicker", ui.toursKicker);
    setText("tours-title", t.tours.title);
    setText("tours-subtitle", t.tours.subtitle);
    renderTours(t);

    setText("stories-title", t.testimonials.title);
    setText("stories-subtitle", ui.storiesSubtitle);
    renderReviews(t);

    setText("pricing-kicker", ui.pricingKicker);
    setText("pricing-title", t.pricing.title);
    setText("pricing-subtitle", t.pricing.subtitle);
    setText("pricing-header-pax", t.pricing.pax);
    setText("pricing-header-opa", t.pricing.opA);
    setText("pricing-header-opb", t.pricing.opB);
    renderPricing(t);

    setText("contact-kicker", ui.contactKicker);
    setText("contact-title", t.contact.title);
    setText("contact-subtitle", t.contact.subtitle);
    setText("contact-email-text-label", ui.emailLabel);
    setText("contact-phone-text-label", ui.phoneLabel);
    setText("contact-location-text-label", ui.locationLabel);
    setText("contact-name-label", t.contact.name);
    setText("contact-email-label", t.contact.email);
    setText("contact-message-label", t.contact.message);
    setText("contact-submit", t.contact.send);

    refreshRevealObserver();
}

async function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const submitButton = document.getElementById("contact-submit");
    const status = document.getElementById("form-status");
    const t = translations[state.lang];
    const formData = new FormData(form);
    const payload = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        message: String(formData.get("message") || "").trim()
    };

    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    status.textContent = t.contact.sending;
    status.className = "form-status";

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json().catch(() => ({}));
        if (!response.ok) {
            throw new Error(result.error || "Request failed");
        }

        status.textContent = t.contact.success;
        status.className = "form-status is-success";
        form.reset();
    } catch (error) {
        status.textContent = t.contact.error;
        status.className = "form-status is-error";
    } finally {
        submitButton.disabled = false;
        submitButton.removeAttribute("aria-busy");
    }
}

function renderNavigation(t) {
    const desktopButtons = document.querySelectorAll("#desktop-nav [data-nav-key]");
    const mobileButtons = document.querySelectorAll("#mobile-nav [data-nav-key]");

    desktopButtons.forEach((button) => {
        const key = button.getAttribute("data-nav-key");
        button.textContent = t.nav[key];
    });

    mobileButtons.forEach((button) => {
        const key = button.getAttribute("data-nav-key");
        button.textContent = t.nav[key];
    });
}

function renderLanguages() {
    document.querySelectorAll("[data-lang]").forEach((button) => {
        button.classList.toggle("active", button.getAttribute("data-lang") === state.lang);
    });
}

function renderTours(t) {
    const html = t.tours.locations.map((tour) => `
        <article class="tour-card reveal is-visible">
            <div class="tour-image-wrap">
                <img src="${tourImages[tour.id]}" alt="${escapeHtml(tour.title)}" class="tour-image" loading="lazy">
                <span class="tour-price">${escapeHtml(tour.price)}</span>
            </div>
            <div class="tour-body">
                <h3>${escapeHtml(tour.title)}</h3>
                <p>${escapeHtml(tour.desc)}</p>
                <ul class="tour-details">
                    ${tour.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}
                </ul>
                <button type="button" class="secondary-button" data-scroll="contact">${escapeHtml(t.tours.bookBtn)}</button>
            </div>
        </article>
    `).join("");

    document.getElementById("tours-grid").innerHTML = html;
}

function renderReviews(t) {
    const renderCard = (review, isClone = false) => `
        <article class="review-card${isClone ? " review-card-clone" : ""}"${isClone ? " aria-hidden=\"true\"" : ""}>
            <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
            <p class="review-text">${escapeHtml(review.text)}</p>
            <div class="review-author">
                <span class="review-avatar">${escapeHtml(review.name.charAt(0).toUpperCase())}</span>
                <div class="review-meta">
                    <strong>${escapeHtml(review.name)}</strong>
                    <span class="review-country">${escapeHtml(review.country)}</span>
                </div>
            </div>
        </article>
    `;

    const html = t.testimonials.reviews.map((review) => renderCard(review)).join("");
    const clonedHtml = t.testimonials.reviews.map((review) => renderCard(review, true)).join("");

    document.getElementById("reviews-grid").innerHTML = html + clonedHtml;
}

function renderPricing(t) {
    const rows = pricingData.map((row) => `
        <tr>
            <td>${escapeHtml(row.pax)}</td>
            <td>${escapeHtml(row.opA)}</td>
            <td>${escapeHtml(row.opB)}</td>
        </tr>
    `).join("");

    document.getElementById("pricing-table-body").innerHTML = rows;

    setText("pricing-city-a", `${t.pricing.city}: ${t.pricing.baku}`);
    setText("pricing-option-a-title", t.pricing.opA);
    setText("pricing-hotel-a", t.pricing.hotel5);
    setText("pricing-single-label-a", t.pricing.sngl);
    setText("pricing-single-price-a", t.pricing.priceA);

    setText("pricing-city-b", `${t.pricing.city}: ${t.pricing.baku}`);
    setText("pricing-option-b-title", t.pricing.opB);
    setText("pricing-hotel-b", t.pricing.hotel4);
    setText("pricing-single-label-b", t.pricing.sngl);
    setText("pricing-single-price-b", t.pricing.priceB);
}

function buildCityLights() {
    const lights = Array.from({ length: 56 }, (_, index) => {
        const size = 2 + Math.random() * 5;
        const left = Math.random() * 100;
        const top = 34 + Math.random() * 58;
        const delay = Math.random() * 6;
        const duration = 2 + Math.random() * 4.5;
        return `<span style="left:${left}%;top:${top}%;width:${size}px;height:${size}px;--delay:${delay}s;--duration:${duration}s"></span>`;
    }).join("");

    document.getElementById("city-lights").innerHTML = lights;
}

function initRevealObserver() {
    if (!("IntersectionObserver" in window)) {
        document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
        return;
    }

    state.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                state.observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.14 });

    refreshRevealObserver();
}

function refreshRevealObserver() {
    if (!state.observer) {
        return;
    }

    document.querySelectorAll(".reveal").forEach((element) => {
        if (!element.dataset.revealBound) {
            element.dataset.revealBound = "true";
            state.observer.observe(element);
        }
    });
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (!element) {
        return;
    }

    const headerHeight = document.getElementById("site-header").offsetHeight;
    const top = element.getBoundingClientRect().top + window.scrollY - headerHeight + 8;
    window.scrollTo({ top, behavior: "smooth" });
}

function closeMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.hidden = true;
    document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
}

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}
