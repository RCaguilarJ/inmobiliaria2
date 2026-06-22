import balconyView from './assets/images/countryclub-real/balcony-view.jpg';
import bedroomSuite from './assets/images/countryclub-real/bedroom-suite.jpg';
import livingRoom from './assets/images/countryclub-real/living-room.jpg';
import lobbyChandelier from './assets/images/countryclub-real/lobby-chandelier-wide.jpg';
import lobbyLounge from './assets/images/countryclub-real/lobby-lounge.jpg';
import poolDeck from './assets/images/countryclub-real/pool-deck.jpg';
import walkInCloset from './assets/images/countryclub-real/walk-in-closet.jpg';
import tdpTower from './assets/images/TDP Post foto 1 (1).png';
import veqCountryClub from './assets/images/veq_countryclub_1781741180731.jpg';
import fachadaTdpSur from './assets/images/FOTOS FACHADAS TDP SUR.png';
import veqDevelopmentThumb from './assets/images/veq_development_thumb_1781739550936.jpg';
import veqHeroTowers from './assets/images/veq_hero_towers_1781739523649.jpg';
import veqOpera from './assets/images/veq_opera_1781741132258.jpg';
import veqPaseo from './assets/images/veq_paseodegracia_1781741234147.jpg';
import veqTorre from './assets/images/veq_torredelprado_1781741156146.jpg';
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
  officeHours: 'Lun - Vie: 9:00 - 19:00',
  whatsappHref:
    'https://wa.me/523311429932?text=Hola,%20quiero%20informacion%20sobre%20Luxent%20Properties.',
};

export const SITE_COPY = {
  home: {
    eyebrow: 'Inicio',
    title: 'PROPIEDADES EXCLUSIVAS PARA UN NUEVO ESTANDAR DE VIDA',
    subtitle:
      'En Luxent Properties comercializamos desarrollos inmobiliarios premium mediante estrategias personalizadas, marketing especializado y herramientas digitales que facilitan la compra, venta y renta de propiedades de alto valor.',
    quote:
      'Mas que una inmobiliaria, somos tu aliado estrategico en el mercado de bienes raices de lujo.',
    ctaTitle:
      'COMERCIALIZAMOS PROPIEDADES PREMIUM CON ESTRATEGIA, TECNOLOGIA Y VISION INMOBILIARIA.',
    ctaSubtitle:
      'Conecta con Luxent Properties y descubre una nueva forma de presentar, posicionar y vender desarrollos inmobiliarios.',
  },
  about: {
    eyebrow: 'Quiénes somos',
    title: 'LIDERES EN BIENES RAICES DE LUJO',
    subtitle: 'Una empresa nacida en Guadalajara con vision global y compromiso local.',
    description:
      'En Luxent, nos especializamos en la comercializacion de propiedades exclusivas dentro del segmento premium. Con un enfoque innovador y personalizado, ofrecemos experiencias unicas y soluciones inmobiliarias de alta gama para clientes exigentes.',
    objective:
      'Nuestro objetivo es proporcionar una asesoria integral que combine el conocimiento profundo del mercado inmobiliario con las ultimas tendencias tecnologicas y digitales. A traves de atencion al detalle, marketing, diseno y comunicacion digital, facilitamos la compra, venta y renta de propiedades que redefinen el lujo.',
    infrastructure:
      'Luxent se ha convertido en la carta de presentacion de nuestros desarrollos. Un espacio donde los clientes se sienten en casa y encuentran la confianza necesaria para llevar a cabo una compra en nuestros proyectos.',
  },
  services: {
    eyebrow: 'Lo que hacemos',
    title: 'SERVICIOS INTEGRALES PARA EL MERCADO PREMIUM',
    subtitle:
      'Desde la estrategia comercial hasta el cierre legal, cubrimos cada aspecto de tu inversion inmobiliaria.',
  },
  developments: {
    eyebrow: 'Portafolio',
    title: 'DESARROLLOS DESTACADOS',
    subtitle:
      'Proyectos inmobiliarios que definen el estandar de lujo en la Zona Metropolitana de Guadalajara.',
  },
  contact: {
    eyebrow: 'Contáctanos',
    title: 'HAGAMOS REALIDAD TU PROYECTO',
    subtitle:
      'Nuestro equipo de especialistas esta listo para asesorarte en tu proxima inversion inmobiliaria.',
    intro:
      'Ya sea que estes buscando tu primera propiedad de lujo, quieras invertir en bienes raices premium o necesites comercializar tu desarrollo, en Luxent Properties tenemos la experiencia y las herramientas para guiarte.',
  },
} as const;

export const PROJECT_IMAGES: ProjectImageMap = {
  homeHero: fachadaTdpSur,
  homeCta: veqCountryClub,
  aboutHero: veqCountryClub,
  servicesHero: livingRoom,
  developmentsHero: balconyView,
  contactHero: lobbyLounge,
  aboutFeature: lobbyLounge,
  galleryWide: veqCountryClub,
  gallerySmallA: livingRoom,
  gallerySmallB: lobbyChandelier,
  officeBanner: veqHeroTowers,
};

export const HERO_FEATURES: HeroFeature[] = [
  { title: 'Propiedades premium' },
  { title: 'Asesoria personalizada' },
  { title: 'Marketing inmobiliario' },
  { title: 'Experiencia digital' },
];

export const HOME_FEATURE_CARDS: FeatureCard[] = [
  {
    badge: '+40 DESARROLLOS',
    title: 'DESARROLLOS PREMIUM',
    description:
      'Comercializamos proyectos alto nivel en las zonas mas exclusivas de Guadalajara.',
    linkLabel: 'VER MAS',
  },
  {
    badge: 'DATA EN TIEMPO REAL',
    title: 'ESTRATEGIA DE MERCADO',
    description:
      'Analisis profundo del mercado inmobiliario con herramientas digitales de vanguardia para maximizar el retorno.',
    linkLabel: 'VER MAS',
  },
  {
    badge: '15+ ESPECIALISTAS',
    title: 'EQUIPO MULTIDISCIPLINARIO',
    description:
      'Arquitectos, abogados, mercadologos y asesores financieros trabajando en sinergia para cada proyecto.',
    linkLabel: 'VER MAS',
  },
  {
    badge: 'FULL SERVICE',
    title: 'ACOMPAÑAMIENTO TOTAL',
    description:
      'Seguimiento comercial, visual y operativo para que cada cliente avance con total tranquilidad.',
    linkLabel: 'VER MAS',
  },
];

export const ABOUT_PILLS = [
  'Enfoque innovador',
  'Atencion personalizada',
  'Experiencias unicas',
  'Soluciones inmobiliarias',
  'Alta gama',
];

export const OBJECTIVE_CARDS: FeatureCard[] = [
  {
    title: 'Mercado inmobiliario',
    description: 'Conocimiento profundo del sector.',
  },
  {
    title: 'Tecnologia y automatizacion',
    description: 'Herramientas digitales avanzadas.',
  },
  {
    title: 'Marketing y comunicacion digital',
    description: 'Estrategias de posicionamiento.',
  },
];

export const DIFFERENTIATORS: FeatureCard[] = [
  {
    title: 'Segmento premium',
    description:
      'Comercializacion de propiedades residenciales y comerciales en ubicaciones exclusivas.',
  },
  {
    title: 'Experiencia digital',
    description:
      'Plataformas, herramientas y procesos digitales para una experiencia eficiente desde la busqueda hasta la compra.',
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
      'Gestion de comunidades digitales y presencia online para generar interaccion, confianza y posicionamiento.',
  },
  {
    title: 'Equipo multidisciplinario',
    description:
      'Profesionales comprometidos con la excelencia en cada etapa del proceso inmobiliario.',
  },
];

export const SERVICES_GRID: ServiceTile[] = [
  { number: '01', title: 'Venta y alquiler de propiedades de lujo' },
  { number: '02', title: 'Asesoria personalizada para clientes de alto perfil' },
  { number: '03', title: 'Campañas de marketing digital inmobiliario' },
  { number: '04', title: 'Tours virtuales, renders y fotografia profesional' },
  { number: '05', title: 'Consultoria de inversiones inmobiliarias' },
  { number: '06', title: 'Gestion y posicionamiento en redes sociales' },
  { number: '07', title: 'Brochures digitales y presentaciones comerciales' },
  { number: '08', title: 'Acompañamiento juridico y postventa' },
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
    title: 'Administracion de ventas',
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
      'Apropiacion de leads y clientes',
      'Reportes de ventas en tiempo real',
      'Seguimiento a expediente de postventa',
      'Informacion del cliente centralizada',
    ],
  },
];

export const MARKET_STUDIES: MarketCard[] = [
  {
    index: '01',
    title: 'BENCHMARKING',
    description:
      'Comparativa estrategica de proyectos competidores en precio, producto y posicionamiento.',
  },
  {
    index: '02',
    title: 'PERFIL DEL CLIENTE',
    description:
      'Identificacion del comprador ideal: habitos, capacidad de compra y motivaciones de decision.',
  },
  {
    index: '03',
    title: 'ANALISIS DE ZONA',
    description:
      'Evaluacion del entorno urbano, infraestructura, conectividad y plusvalia del area.',
  },
  {
    index: '04',
    title: 'ESTRATEGIA DE PRECIOS',
    description:
      'Definicion de rango de precio competitivo y esquemas de pago alineados al mercado.',
  },
  {
    index: '05',
    title: 'PRODUCTO INMOBILIARIO',
    description:
      'Definicion estrategica de tipologias, superficies, acabados y propuesta de valor diferenciada.',
  },
];

export const LEGAL_SUPPORT = [
  'Contratos',
  'Escrituracion',
  'Asesoria legal',
  'Gestion de proyectos',
];

export const DEVELOPMENT_FILTERS = [
  'Todos',
  'Residencial',
  'Comercial',
  'En desarrollo',
  'Entrega inmediata',
  'Premium',
];

export const DEVELOPMENT_PROJECTS: DevelopmentProject[] = [
  {
    name: 'Ópera',
    location: 'Guadalajara, Jalisco',
    category: 'Residencial Premium',
    status: 'Premium',
    description:
      'Desarrollo residencial de lujo con amenidades exclusivas y acabados de primera clase en el corazon de Guadalajara.',
    image: veqOpera,
  },
  {
    name: 'Torre del Prado',
    location: 'Zapopan, Jalisco',
    category: 'Torre Residencial',
    status: 'Residencial',
    description:
      'Torre residencial moderna con vista panoramica y ubicacion privilegiada en la zona mas cotizada de Zapopan.',
    image: tdpTower,
  },
  {
    name: 'Condominios Country Club',
    location: 'Country Club, Guadalajara',
    category: 'Condominios de Lujo',
    status: 'Entrega inmediata',
    description:
      'Condominios exclusivos en la zona mas prestigiosa de Guadalajara, listos para habitar.',
    image: livingRoom,
  },
  {
    name: 'Travessera',
    location: 'Providencia, Guadalajara',
    category: 'Desarrollo Mixto',
    status: 'En desarrollo',
    description:
      'Proyecto de usos mixtos con espacios comerciales y residencias premium en Providencia.',
    image: veqPaseo,
  },
  {
    name: 'Paseo de Gracia',
    location: 'Puerta de Hierro, Zapopan',
    category: 'Corporativo Premium',
    status: 'Premium',
    description:
      'Oficinas corporativas de alto nivel con tecnologia de vanguardia en el exclusivo corredor de Puerta de Hierro.',
    image: veqCountryClub,
  },
  {
    name: 'Residencial Alterra',
    location: 'Guadalajara, Jalisco',
    category: 'Residencial con Amenidades',
    status: 'Residencial',
    description:
      'Residencial con alberca infinita, gimnasio boutique y extensas areas verdes en entorno natural privilegiado.',
    image: bedroomSuite,
  },
  {
    name: 'Distrito Midtown',
    location: 'Guadalajara, Jalisco',
    category: 'Desarrollo Mixto Premium',
    status: 'En desarrollo',
    description:
      'Nuevo concepto de vida urbana que integra residencias, comercio, oficinas y espacios de esparcimiento.',
    image: veqHeroTowers,
  },
  {
    name: 'Puerta Verde',
    location: 'Tlaquepaque, Jalisco',
    category: 'Residencial',
    status: 'Residencial',
    description:
      'Fraccionamiento residencial con concepto sustentable y diseño bioclimatico, en armonia con el entorno natural.',
    image: veqDevelopmentThumb,
  },
];

export const CONTACT_CARDS: ContactCard[] = [
  {
    title: 'Teléfono',
    value: '+52 (33) 1142-9932',
    caption: 'Lunes a viernes, 9am - 7pm',
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
    value: 'Lun - Vie: 9:00 - 19:00',
    caption: 'Atencion comercial y seguimiento programado',
  },
];

export const FOOTER_COPY = {
  tagline: 'Propiedades exclusivas para un nuevo estándar de vida',
  copyright: '© 2026 Luxent Properties. Todos los derechos reservados.',
};
