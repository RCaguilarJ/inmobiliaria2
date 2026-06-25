import aboutOfficeNight from './assets/images/doc-revision/about-office-night.png';
import contactLobbyCorridor from './assets/images/doc-revision/contact-lobby-corridor.jpeg';
import homeHeroPool from './assets/images/doc-revision/home-hero-pool.png';
import paseoGraciaCollage from './assets/images/doc-revision/paseo-gracia-collage.png';
import balconyView from './assets/images/countryclub-real/balcony-view.jpg';
import livingRoom from './assets/images/countryclub-real/living-room.jpg';
import lobbyChandelier from './assets/images/countryclub-real/lobby-chandelier-wide.jpg';
import lobbyLounge from './assets/images/countryclub-real/lobby-lounge.jpg';
import poolDeck from './assets/images/countryclub-real/pool-deck.jpg';
import tdpTower from './assets/images/TDP Post foto 1 (1).png';
import paseoGrounds from './assets/images/FOTOS/WhatsApp Image 2026-01-29 at 11.55.08 AM.jpeg';
import travesseraDay from './assets/images/FOTOS/TVS CARRUSEL ENERO 1.png';
import operaExterior from './assets/images/veq_opera_1781741132258.jpg';
import tdpFacadeNorth from './assets/images/real-selected/tdp-facade-north.jpg';
import type {
  ContactCard,
  ContactInfo,
  DevelopmentProject,
  FeatureCard,
  HeroFeature,
  ListCard,
  MarketCard,
  NavItem,
  PagePath,
  ProjectImageMap,
  ServiceTile,
} from './types';

export const ROUTES: Record<string, PagePath> = {
  '/': '/',
  '/quienes-somos': '/quienes-somos',
  '/servicios': '/servicios',
  '/desarrollos': '/desarrollos',
  '/contacto': '/contacto',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Quiénes somos', path: '/quienes-somos' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Desarrollos', path: '/desarrollos' },
  { label: 'Contacto', path: '/contacto' },
];

export const CONTACT_INFO: ContactInfo = {
  phoneDisplay: '33 1142 9932',
  phoneHref: 'tel:+523311429932',
  email: 'gerencia@luxent.properties',
  address: 'Av. Américas 1930-PB, Country Club, Guadalajara, Jalisco, C.P. 44668.',
  officeHours: 'Lun - Vie: 9:00 - 18:00 | Sáb: 9:00 - 14:00',
  whatsappHref:
    'https://wa.me/523311429932?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20Luxent%20Properties.',
};

export const SITE_COPY = {
  home: {
    eyebrow: 'Inicio',
    title: 'PROPIEDADES EXCLUSIVAS PARA UN NUEVO ESTÁNDAR DE VIDA',
    subtitle:
      'En Luxent Properties comercializamos desarrollos inmobiliarios premium mediante estrategias personalizadas, marketing especializado y herramientas digitales que facilitan la compra, venta y renta de propiedades de alto valor.',
    quote:
      'Más que una inmobiliaria, somos tu aliado estratégico en el mercado de bienes raíces de lujo.',
    ctaTitle:
      'COMERCIALIZAMOS PROPIEDADES PREMIUM CON ESTRATEGIA, TECNOLOGÍA Y VISIÓN INMOBILIARIA.',
    ctaSubtitle:
      'Conecta con Luxent Properties y descubre una nueva forma de presentar, posicionar y vender desarrollos inmobiliarios.',
  },
  about: {
    eyebrow: 'Quiénes somos',
    title: 'LÍDERES EN BIENES RAÍCES DE LUJO',
    subtitle: 'Una empresa nacida en Guadalajara con visión global y compromiso local.',
    description:
      'En Luxent, nos especializamos en la comercialización de propiedades exclusivas dentro del segmento premium. Con un enfoque innovador y personalizado, ofrecemos experiencias únicas y soluciones inmobiliarias de alta gama para clientes exigentes.',
    objective:
      'Nuestro objetivo es proporcionar una asesoría integral que combine el conocimiento profundo del mercado inmobiliario con las últimas tendencias tecnológicas y digitales. A través de atención al detalle, marketing, diseño y comunicación digital, facilitamos la compra, venta y renta de propiedades que redefinen el lujo.',
    infrastructure:
      'Luxent se ha convertido en la carta de presentación de nuestros desarrollos.',
  },
  services: {
    eyebrow: 'Lo que hacemos',
    title: 'SERVICIOS INTEGRALES PARA EL MERCADO PREMIUM',
    subtitle:
      'Desde la estrategia comercial hasta el cierre legal, cubrimos cada aspecto de tu inversión inmobiliaria.',
  },
  developments: {
    eyebrow: 'Portafolio',
    title: 'PORTAFOLIO DE DESARROLLOS',
    subtitle: '',
  },
  contact: {
    eyebrow: 'Contáctanos',
    title: 'HAGAMOS REALIDAD TU PROYECTO',
    subtitle: 'Nuestro equipo de especialistas está listo para asesorarte.',
    intro:
      'Ya sea que estés buscando tu primera propiedad de lujo, quieras invertir en bienes raíces premium o necesites comercializar tu desarrollo, en Luxent Properties tenemos la experiencia y las herramientas para guiarte.',
  },
} as const;

export const PROJECT_IMAGES: ProjectImageMap = {
  homeHero: homeHeroPool,
  homeCta: tdpFacadeNorth,
  aboutHero: tdpFacadeNorth,
  servicesHero: livingRoom,
  developmentsHero: balconyView,
  contactHero: contactLobbyCorridor,
  aboutFeature: aboutOfficeNight,
  galleryWide: balconyView,
  gallerySmallA: livingRoom,
  gallerySmallB: lobbyLounge,
  officeBanner: tdpFacadeNorth,
};

export const HERO_FEATURES: HeroFeature[] = [
  { title: 'Propiedades premium' },
  { title: 'Asesoría personalizada' },
  { title: 'Marketing inmobiliario' },
  { title: 'Experiencia digital' },
];

export const HOME_FEATURE_CARDS: FeatureCard[] = [
  {
    badge: '+40 DESARROLLOS',
    title: 'DESARROLLOS PREMIUM',
    description:
      'Comercializamos proyectos de alto nivel en las zonas más exclusivas de Guadalajara.',
    linkLabel: 'VER MÁS',
  },
  {
    badge: 'DATA EN TIEMPO REAL',
    title: 'ESTRATEGIA DE MERCADO',
    description:
      'Análisis profundo del mercado inmobiliario con herramientas digitales de vanguardia para maximizar el retorno.',
    linkLabel: 'VER MÁS',
  },
  {
    badge: '15+ ESPECIALISTAS',
    title: 'EQUIPO MULTIDISCIPLINARIO',
    description:
      'Arquitectos, abogados, mercadólogos y asesores financieros trabajando en sinergia para cada proyecto.',
    linkLabel: 'VER MÁS',
  },
  {
    badge: 'FULL SERVICE',
    title: 'ACOMPAÑAMIENTO TOTAL',
    description:
      'Seguimiento comercial, visual y operativo para que cada cliente avance con total tranquilidad.',
    linkLabel: 'VER MÁS',
  },
];

export const ABOUT_PILLS = [
  'Enfoque innovador',
  'Atención personalizada',
  'Experiencias únicas',
  'Soluciones inmobiliarias',
  'Alta gama',
];

export const OBJECTIVE_CARDS: FeatureCard[] = [
  {
    title: 'Mercado inmobiliario',
    description: 'Conocimiento profundo del sector.',
  },
  {
    title: 'Tecnología y automatización',
    description: 'Herramientas digitales avanzadas.',
  },
  {
    title: 'Marketing y comunicación digital',
    description: 'Estrategias de posicionamiento.',
  },
];

export const DIFFERENTIATORS: FeatureCard[] = [
  {
    title: 'Segmento premium',
    description:
      'Comercialización de propiedades residenciales y comerciales en ubicaciones exclusivas.',
  },
  {
    title: 'Experiencia digital',
    description:
      'Plataformas, herramientas y procesos digitales para una experiencia eficiente desde la búsqueda hasta la compra.',
  },
  {
    title: 'Marketing especializado',
    description:
      'Campañas personalizadas para posicionar cada propiedad con estrategia, contenido y pauta digital.',
  },
  {
    title: 'Diseño de vanguardia',
    description:
      'Presentaciones visuales, renders, brochures, recorridos virtuales y materiales comerciales sofisticados.',
  },
  {
    title: 'Community management',
    description:
      'Gestión de comunidades digitales y presencia online para generar interacción, confianza y posicionamiento.',
  },
  {
    title: 'Equipo multidisciplinario',
    description:
      'Profesionales comprometidos con la excelencia en cada etapa del proceso inmobiliario.',
  },
];

export const SERVICES_GRID: ServiceTile[] = [
  { number: '01', title: 'Venta y renta de propiedades de lujo' },
  { number: '02', title: 'Asesoría personalizada para clientes de alto perfil' },
  { number: '03', title: 'Campañas de marketing digital inmobiliario' },
  { number: '04', title: 'Tours virtuales, renders y fotografía profesional' },
  { number: '05', title: 'Consultoría de inversiones inmobiliarias' },
  { number: '06', title: 'Gestión y posicionamiento en redes sociales' },
  { number: '07', title: 'Brochures digitales y presentaciones comerciales' },
  { number: '08', title: 'Acompañamiento jurídico y postventa' },
];

export const TOOL_GROUPS: ListCard[] = [
  {
    title: 'Cotizadores y brochures',
    items: [
      'Listas de precios en tiempo real',
      'Cotizaciones personalizadas',
      'Brochure digital',
      'Mapas 3D del desarrollo',
      'Disponibilidad en tiempo real',
    ],
  },
  {
    title: 'Administración de ventas',
    items: [
      'Estados de cuenta',
      'Alertas de falta de pago',
      'CFDI y complementos de pago',
      'Reportes administrativos',
    ],
  },
  {
    title: 'Leads, ventas y postventa',
    items: [
      'Apropiación de leads y clientes',
      'Reportes de ventas en tiempo real',
      'Seguimiento a expediente de postventa',
      'Información del cliente centralizada',
    ],
  },
];

export const MARKET_STUDIES: MarketCard[] = [
  {
    index: '01',
    title: 'BENCHMARKING',
    description:
      'Comparativa estratégica de proyectos competidores en precio, producto y posicionamiento.',
  },
  {
    index: '02',
    title: 'PERFIL DEL CLIENTE',
    description:
      'Identificación del comprador ideal: hábitos, capacidad de compra y motivaciones de decisión.',
  },
  {
    index: '03',
    title: 'ANÁLISIS DE ZONA',
    description:
      'Evaluación del entorno urbano, infraestructura, conectividad y plusvalía del área.',
  },
  {
    index: '04',
    title: 'ESTRATEGIA DE PRECIOS',
    description:
      'Definición de rango de precio competitivo y esquemas de pago alineados al mercado.',
  },
  {
    index: '05',
    title: 'PRODUCTO INMOBILIARIO',
    description:
      'Definición estratégica de tipologías, superficies, acabados y propuesta de valor diferenciada.',
  },
];

export const LEGAL_SUPPORT = [
  'Contratos',
  'Escrituración',
  'Asesoría legal',
  'Gestión de proyectos',
];

export const DEVELOPMENT_FILTERS = ['Todos', 'Vertical', 'Horizontal'];

export const DEVELOPMENT_PROJECTS: DevelopmentProject[] = [
  {
    name: 'Condominios Country Club',
    location: 'Country Club, Guadalajara',
    category: 'Desarrollo vertical',
    status: 'Entrega diciembre 2026',
    description:
      'Residencial icónico frente al Country Club, pensado para quienes valoran amplitud, vistas abiertas y una presencia patrimonial difícil de replicar.',
    image: balconyView,
    filters: ['Vertical'],
    detailReady: true,
    overview: [
      'Residencial contemporáneo frente al campo de golf del Country Club, concebido para quienes buscan una ubicación icónica, privacidad y una relación directa con el entorno verde.',
    ],
    idealFor: [
      'Personas que buscan vivir en una ubicación icónica, con vistas abiertas, privacidad y una relación directa con el entorno verde.',
      'Compradores que valoran espacios amplios, distribuciones cómodas y una experiencia residencial más tranquila dentro de la ciudad.',
      'Familias que desean habitar un proyecto con presencia, amplitud y permanencia patrimonial.',
      'Inversionistas que reconocen el valor de una ubicación limitada, con cualidades difíciles de encontrar en nuevos desarrollos.',
    ],
    composition: [
      'Desarrollo vertical conformado por 2 torres de 33 niveles, con un total de 113 departamentos.',
      'Tipologías de 2 y 3 recámaras, con superficies desde 112.56 m² hasta 217.81 m².',
      'Departamentos amplios, con distribuciones pensadas para una vida residencial cómoda, privada y con vistas privilegiadas.',
    ],
    deliveries: ['Entrega diciembre 2026.'],
  },
  {
    name: 'Ópera',
    location: 'Las Lomas, Guadalajara',
    category: 'Desarrollo vertical',
    status: 'Torre Oriente: entrega inmediata',
    description:
      'Residencial contemporáneo en Las Lomas, creado para quienes buscan ubicación, amplitud, privacidad y una forma de vida elevada dentro de una de las zonas más consolidadas de Guadalajara.',
    image: operaExterior,
    filters: ['Vertical'],
    detailReady: true,
    overview: [
      'Ópera es un desarrollo residencial vertical diseñado para quienes buscan vivir con amplitud, privacidad y una ubicación estratégica dentro de la zona de Las Lomas.',
      'Su propuesta integra arquitectura contemporánea, vistas privilegiadas y espacios pensados para una vida cómoda, conectada y de alto nivel.',
      'Más que una promesa de futuro, Ópera es una realidad.',
    ],
    idealFor: [
      'Familias que desean mejorar su ubicación sin salir de un entorno consolidado, seguro y conectado.',
      'Profesionales y empresarios que priorizan calidad de vida, privacidad y cercanía con las zonas más importantes de Guadalajara.',
      'Compradores patrimoniales que buscan certeza, entrega inmediata y un producto residencial con valor de permanencia.',
      'Inversionistas que reconocen el potencial de una ubicación consolidada, con alta demanda y oferta limitada.',
    ],
    composition: [
      'Desarrollo residencial vertical compuesto por tres torres.',
      'Torre Poniente: 33 niveles | 120 departamentos.',
      'Torre Central: 23 niveles | 46 departamentos.',
      'Torre Oriente: 13 niveles | 26 departamentos.',
      'Una composición pensada para ofrecer amplitud, privacidad y distintas alternativas residenciales dentro de un mismo entorno de alto nivel.',
    ],
    deliveries: [
      'Torre Oriente: entrega inmediata.',
      'Torre Central: julio 2026.',
      'Torre Poniente: agosto 2026.',
    ],
  },
  {
    name: 'Paseo de Gracia',
    location: 'Av. Paseo de Gracia, Guadalajara',
    category: 'Desarrollo horizontal',
    status: 'Entrega julio 2026',
    description:
      'Comunidad residencial planeada, donde la privacidad, las áreas verdes y las amenidades construyen un entorno familiar de alto valor patrimonial.',
    image: paseoGraciaCollage,
    filters: ['Horizontal'],
    detailReady: true,
    overview: [
      'Paseo de Gracia es un condominio horizontal diseñado para quienes buscan construir una vida en comunidad, rodeados de áreas verdes, amenidades y espacios pensados para convivir.',
      'Su propuesta integra planeación urbana, privacidad y baja densidad en un entorno residencial que privilegia la vida familiar y el valor patrimonial a largo plazo.',
      'Más que un desarrollo, es una comunidad creada para disfrutarse todos los días.',
    ],
    idealFor: [
      'Familias que buscan un entorno seguro, abierto y planeado, donde sus hijos puedan crecer rodeados de espacios verdes y amenidades.',
      'Compradores que desean construir su patrimonio dentro de una comunidad residencial con privacidad, orden y sentido de permanencia.',
      'Personas que priorizan una vida más tranquila, con áreas para convivir, descansar y disfrutar en familia.',
      'Clientes que valoran la planeación urbana, la baja densidad y un estilo de vida más conectado con su entorno.',
      'Inversionistas patrimoniales que reconocen el valor de un desarrollo horizontal con amenidades, comunidad y proyección a largo plazo.',
    ],
    composition: [
      'Condominio horizontal conformado por 115 lotes, acompañado de áreas verdes, amenidades recreativas y casa club.',
      'El desarrollo integra más de 2,600 m² de amenidades y más de 15 espacios pensados para el confort, la recreación y la vida en familia.',
      'Cada espacio ha sido diseñado para fomentar la convivencia, la privacidad y una experiencia residencial equilibrada.',
    ],
    deliveries: ['Julio 2026.'],
  },
  {
    name: 'Torre del Prado',
    location: 'Las Lomas, Zapopan',
    category: 'Desarrollo vertical',
    status: 'Entrega inmediata',
    description:
      'Desarrollo residencial terminado en Las Lomas, diseñado para quienes buscan ubicación estratégica, funcionalidad y la certeza de habitar o invertir desde hoy.',
    image: tdpTower,
    filters: ['Vertical'],
    detailReady: true,
    overview: [
      'Torre del Prado es un desarrollo residencial terminado en Las Lomas, diseñado para quienes buscan ubicación estratégica, funcionalidad y la certeza de habitar o invertir desde hoy.',
    ],
    idealFor: [
      'Inversionistas que desean un producto terminado, escriturable y con potencial de renta desde el primer momento.',
      'Familias o parejas que priorizan ubicación, conectividad y practicidad en su vida diaria.',
      'Clientes que valoran una zona consolidada, cercana a servicios, vialidades y puntos clave de la ciudad.',
      'Compradores patrimoniales que buscan certeza, funcionalidad y permanencia en una torre residencial ya concluida.',
    ],
    composition: [
      'Torre residencial vertical conformada por 17 niveles habitacionales y 107 unidades totales.',
      'El proyecto integra amenidades en roof, espacios funcionales y una distribución pensada para ofrecer eficiencia, comodidad y operación inmediata.',
    ],
    deliveries: ['Entrega inmediata.'],
  },
  {
    name: 'Travessera',
    location: 'Av. Paseo de Gracia, Guadalajara',
    category: 'Desarrollo horizontal',
    status: 'Entrega inmediata',
    description:
      'Condominio residencial horizontal de baja densidad, diseñado para quienes buscan construir su hogar dentro de un entorno natural, privado y cuidadosamente planeado.',
    image: travesseraDay,
    filters: ['Horizontal'],
    detailReady: true,
    overview: [
      'Travessera es un condominio horizontal planeado para quienes buscan una forma de vida más privada, natural y equilibrada dentro de la ciudad.',
      'Su propuesta integra lotes amplios, baja densidad, áreas verdes y un diseño urbano que privilegia la tranquilidad, la convivencia y el valor patrimonial a largo plazo.',
    ],
    idealFor: [
      'Familias que desean construir una residencia a su medida, dentro de un entorno privado, seguro y rodeado de naturaleza.',
      'Personas que buscan exclusividad, baja densidad y una vida residencial más tranquila frente al ritmo de la vida vertical.',
      'Compradores patrimoniales que valoran la tierra, la privacidad y el potencial de consolidar un legado familiar en el tiempo.',
      'Inversionistas que entienden el potencial de un producto limitado, con solo 47 lotes y cualidades difíciles de replicar.',
    ],
    composition: [
      'Condominio horizontal boutique conformado por 47 lotes exclusivos, con un trazo urbano integral y una escala residencial de baja densidad.',
      'El desarrollo integra lago central, parque lineal y más de 323 árboles maduros, creando un entorno natural con carácter, sombra y vida.',
    ],
    deliveries: ['Entrega inmediata.'],
  },
  {
    name: 'Paseo de Gracia Vertical',
    location: 'Av. Paseo de Gracia, Guadalajara',
    category: 'Desarrollo vertical',
    status: 'Entrega inmediata',
    description:
      'Distrito de usos mixtos diseñado para desarrolladores e inversionistas que buscan participar en una de las zonas con mayor proyección urbana, patrimonial y comercial de Guadalajara.',
    image: paseoGrounds,
    filters: ['Vertical'],
    detailReady: true,
    overview: [
      'Paseo de Gracia Vertical es un proyecto de usos mixtos concebido para detonar desarrollos habitacionales, comerciales, corporativos, hoteleros y de servicios dentro de una ubicación estratégica.',
      'Su propuesta integra planeación urbana, conectividad, paisaje y certidumbre técnica y legal para maximizar el potencial de inversión en una de las zonas más deseadas de Guadalajara.',
    ],
    idealFor: [
      'Desarrolladores que buscan una ubicación estratégica con vocación vertical y alto potencial de aprovechamiento.',
      'Inversionistas patrimoniales que desean participar en un proyecto urbano de gran escala, con visión de largo plazo.',
      'Grupos inmobiliarios interesados en desarrollar vivienda vertical, comercio, oficinas, hotelería, servicios o proyectos de uso mixto.',
    ],
    composition: [
      'Proyecto de usos mixtos desarrollado sobre un lienzo urbano de aproximadamente 250,000 m², concebido como una nueva centralidad inmobiliaria.',
      'La primera etapa contempla 19 huellas con vocación vertical, preparadas para proyectos habitacionales, comerciales, corporativos, hoteleros, hospitalarios o de servicios.',
      'Su planeación contempla un riverwalk de 680 metros lineales, paisaje urbano, conectividad y un entorno diseñado para generar experiencias, flujo peatonal y valor a largo plazo.',
    ],
    deliveries: ['Entrega inmediata.'],
    closing:
      'Paseo de Gracia Vertical es una invitación a desarrollar donde la ciudad está llamada a crecer: con visión, certidumbre y valor patrimonial.',
  },
];

export const CONTACT_CARDS: ContactCard[] = [
  {
    title: 'Teléfono',
    value: '+52 (33) 1142-9932',
    caption: 'Lunes a viernes, 9:00 a 18:00',
    href: 'tel:+523311429932',
  },
  {
    title: 'Correo electrónico',
    value: 'gerencia@luxent.properties',
    caption: 'Respondemos en menos de 24 horas',
    href: 'mailto:gerencia@luxent.properties',
  },
  {
    title: 'Oficinas',
    value: 'Av. Américas 1930-PB, Country Club, Guadalajara, Jalisco',
    caption: 'C.P. 44668',
  },
  {
    title: 'Horario de atención',
    value: 'Lun - Vie: 9:00 - 18:00',
    caption: 'Sábado: 9:00 - 14:00',
  },
];

export const FOOTER_COPY = {
  tagline: 'Propiedades exclusivas para un nuevo estándar de vida',
  copyright: '© 2026 Luxent Properties. Todos los derechos reservados.',
};
