import balconyView from './assets/images/countryclub-real/balcony-view.jpg';
import livingRoom from './assets/images/countryclub-real/living-room.jpg';
import lobbyChandelier from './assets/images/countryclub-real/lobby-chandelier-wide.jpg';
import lobbyLounge from './assets/images/countryclub-real/lobby-lounge.jpg';
import poolDeck from './assets/images/countryclub-real/pool-deck.jpg';
import tdpTower from './assets/images/TDP Post foto 1 (1).png';
import veqCountryClub from './assets/images/veq_countryclub_1781741180731.jpg';
import travesseraDay from './assets/images/FOTOS/TVS CARRUSEL ENERO 1.png';
import veqHeroTowers from './assets/images/veq_hero_towers_1781739523649.jpg';
import veqOpera from './assets/images/veq_opera_1781741132258.jpg';
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
  { label: 'Quienes somos', path: '/quienes-somos' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Desarrollos', path: '/desarrollos' },
  { label: 'Contacto', path: '/contacto' },
];

export const CONTACT_INFO: ContactInfo = {
  phoneDisplay: '33 1142 9932',
  phoneHref: 'tel:+523311429932',
  email: 'gerencia@luxent.properties',
  address: 'Av. Americas 1930-PB, Country Club, Guadalajara, Jalisco, C.P. 44668.',
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
    eyebrow: 'Quienes somos',
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
      'Proyectos inmobiliarios reales del portafolio Luxent, presentados con una ficha comercial clara y accionable.',
  },
  contact: {
    eyebrow: 'Contactanos',
    title: 'HAGAMOS REALIDAD TU PROYECTO',
    subtitle:
      'Nuestro equipo de especialistas esta listo para asesorarte en tu proxima inversion inmobiliaria.',
    intro:
      'Ya sea que estes buscando tu primera propiedad de lujo, quieras invertir en bienes raices premium o necesites comercializar tu desarrollo, en Luxent Properties tenemos la experiencia y las herramientas para guiarte.',
  },
} as const;

export const PROJECT_IMAGES: ProjectImageMap = {
  homeHero: poolDeck,
  homeCta: veqCountryClub,
  aboutHero: veqHeroTowers,
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
      'Comercializamos proyectos de alto nivel en las zonas mas exclusivas de Guadalajara.',
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
    title: 'ACOMPANAMIENTO TOTAL',
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
      'Campanas personalizadas para posicionar cada propiedad con estrategia, contenido y pauta digital.',
  },
  {
    title: 'Diseno de vanguardia',
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
  { number: '03', title: 'Campanas de marketing digital inmobiliario' },
  { number: '04', title: 'Tours virtuales, renders y fotografia profesional' },
  { number: '05', title: 'Consultoria de inversiones inmobiliarias' },
  { number: '06', title: 'Gestion y posicionamiento en redes sociales' },
  { number: '07', title: 'Brochures digitales y presentaciones comerciales' },
  { number: '08', title: 'Acompanamiento juridico y postventa' },
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
  'En desarrollo',
  'Entrega inmediata',
  'Vertical',
  'Horizontal',
  'Residencial',
];

export const DEVELOPMENT_PROJECTS: DevelopmentProject[] = [
  {
    name: 'Condominios Country Club',
    location: 'Country Club, Guadalajara',
    category: 'Desarrollo vertical',
    status: 'Entrega Julio 2026',
    description:
      'Proyecto residencial concebido alrededor de vistas directas al campo de golf, con arquitectura orientada a privilegiar paisaje, amplitud y privacidad.',
    image: balconyView,
    filters: ['Vertical', 'Residencial'],
    ribbon: 'ENTREGA JULIO 2026',
    detailReady: true,
    overview: [
      'Un proyecto residencial concebido alrededor de vistas directas e inigualables al campo de golf del Country Club, donde la arquitectura se orienta a privilegiar paisaje, amplitud y privacidad.',
      'Una propuesta unica por ubicacion, imposible de replicar.',
    ],
    idealFor: [
      'Personas que desean vivir frente al campo de golf, con vistas abiertas que brindan tranquilidad y una conexion directa con el entorno verde.',
      'Compradores que buscan departamentos con verdadera amplitud, en una zona donde la oferta reciente ha reducido metrajes; aqui el espacio, las alturas y la sensacion de hogar marcan la diferencia.',
      'Familias que quieren habitar una ubicacion iconica de la ciudad, combinando privacidad, paisaje abierto y un estilo de vida urbano de alto nivel.',
      'Inversionistas que entienden el valor de un producto dificil de replicar por su ubicacion, sus vistas privilegiadas y sus cualidades arquitectonicas, favoreciendo su permanencia y valor en el tiempo.',
    ],
    composition: [
      'Desarrollo vertical integrado por 2 torres de 33 niveles con 113 departamentos totales.',
      'Tipologias de 2 y 3 recamaras desde 112.56 m2 hasta 217.81 m2.',
      'Metrajes amplios y distribuciones pensadas para una experiencia residencial mas comoda y generosa.',
    ],
    deliveries: ['Entrega estimada: Julio 2026.'],
    closing:
      'Condominios Country Club se adapta a ti, ofreciendote esquemas de pago y tiempos de entrega flexibles, pensados en lo que hoy necesitas.',
  },
  {
    name: 'Opera',
    location: 'Las Lomas, Guadalajara',
    category: 'Residencial premium',
    status: 'Entrega inmediata',
    description:
      'Desarrollo vertical contemporaneo en Las Lomas que combina ubicacion estrategica, amplitud y privacidad en un proyecto pensado para la vida actual.',
    image: veqOpera,
    filters: ['Vertical', 'Residencial', 'Entrega inmediata'],
    ribbon: 'ENTREGA INMEDIATA • ENTREGA INMEDIATA',
    detailReady: true,
    overview: [
      'Opera es un desarrollo vertical contemporaneo en Las Lomas que combina ubicacion estrategica, amplitud y privacidad en un proyecto pensado para la vida actual.',
      'Una propuesta solida para quienes buscan habitar o invertir en una zona consolidada con conectividad inmediata y proyeccion patrimonial.',
    ],
    idealFor: [
      'Familias que desean mejorar ubicacion sin salir de su entorno.',
      'Profesionales consolidados que priorizan calidad de vida y cercania urbana.',
      'Compradores patrimoniales que buscan certeza en tiempos de entrega.',
      'Inversionistas que valoran producto nuevo con alta demanda potencial.',
    ],
    composition: [
      'Torre Poniente: 33 niveles | 120 departamentos.',
      'Torre Central: 23 niveles | 46 departamentos.',
      'Torre Oriente: 13 niveles | 26 departamentos.',
      'Total: 192 departamentos.',
    ],
    deliveries: [
      'Torre Oriente: Entrega inmediata.',
      'Torre Central: Mayo 2026.',
      'Torre Poniente: Julio 2026.',
    ],
    closing:
      'Opera se adapta a ti, ofreciendote esquemas de pago y tiempos de entrega flexibles, pensados en lo que hoy necesitas.',
  },
  {
    name: 'Paseo de Gracia',
    location: 'Av. Paseo de Gracia, Guadalajara',
    category: 'Condominio horizontal',
    status: 'En desarrollo',
    description:
      'Proyecto contemplado dentro del portafolio real de Luxent. La ficha comercial detallada esta en preparacion.',
    image: veqCountryClub,
    filters: ['Horizontal', 'En desarrollo'],
    detailReady: false,
  },
  {
    name: 'Torre del Prado',
    location: 'Las Lomas, Zapopan',
    category: 'Torre residencial',
    status: 'Entrega inmediata',
    description:
      'Desarrollo residencial terminado que ofrece conectividad inmediata, espacios funcionales y una experiencia urbana lista para habitar desde hoy.',
    image: tdpTower,
    filters: ['Vertical', 'Residencial', 'Entrega inmediata'],
    ribbon: 'ENTREGA INMEDIATA • ENTREGA INMEDIATA',
    detailReady: true,
    overview: [
      'Torre del Prado es un desarrollo residencial terminado en Las Lomas que ofrece conectividad inmediata, espacios funcionales y una experiencia urbana lista para habitar desde hoy.',
      'Una opcion solida para quienes buscan resolver ubicacion y calidad de vida sin tiempos de espera.',
    ],
    idealFor: [
      'Compradores que buscan generar retorno de inversion desde el primer momento, sin tiempos de espera.',
      'Clientes que quieren estar en el epicentro del Mundial y los eventos internacionales, aprovechando la alta demanda en una de las zonas mas exclusivas de la ciudad.',
      'Familias que priorizan la practicidad, ubicacion estrategica y vida diaria resuelta.',
      'Inversionistas que valoran certeza patrimonial en un desarrollo terminado, escriturable y listo para operar.',
    ],
    composition: [
      'Proyecto vertical resuelto en una sola torre residencial.',
      '17 niveles habitacionales.',
      'Roof con amenidades.',
      '107 unidades totales.',
      'Disenado para ofrecer eficiencia espacial y operacion inmediata.',
    ],
    closing:
      'Torre del Prado se adapta a ti, ofreciendote esquemas de pago y tiempos de entrega flexibles, pensados en lo que hoy necesitas.',
  },
  {
    name: 'Travessera',
    location: 'Av. Paseo de Gracia, Guadalajara',
    category: 'Condominio horizontal',
    status: 'En desarrollo',
    description:
      'Condominio residencial planeado para quienes desean construir su hogar dentro de un entorno natural, privado y cuidadosamente disenado.',
    image: travesseraDay,
    filters: ['Horizontal', 'En desarrollo'],
    ribbon: 'ENTREGA INMEDIATA • ENTREGA INMEDIATA',
    detailReady: true,
    overview: [
      'Travessera es un condominio residencial planeado para quienes desean construir su hogar dentro de un entorno natural, privado y cuidadosamente disenado.',
      'Una propuesta que privilegia comunidad, paisaje y desarrollo patrimonial a largo plazo.',
    ],
    idealFor: [
      'Familias que desean construir una residencia a su medida en terrenos amplios.',
      'Personas que buscan exclusividad, privacidad y un entorno de menor concentracion habitacional, altamente arbolado, con mas de 323 arboles maduros que dan caracter, sombra y vida al proyecto.',
      'Compradores que quieren consolidar un legado patrimonial en un espacio que trasciende en el tiempo.',
      'Quienes buscan una comunidad residencial planificada, con mayor tranquilidad y un entorno mas privado frente al ritmo de la vida vertical.',
    ],
    composition: [
      '47 exclusivos lotes en venta con trazo urbano integral.',
      'Lago central y parque lineal que estructuran la vida comunitaria.',
    ],
    closing:
      'Travessera se adapta a ti, ofreciendote esquemas de pago y tiempos de entrega flexibles, pensados en lo que hoy necesitas.',
  },
];

export const CONTACT_CARDS: ContactCard[] = [
  {
    title: 'Telefono',
    value: '+52 (33) 1142-9932',
    caption: 'Lunes a viernes, 9am - 7pm',
    href: 'tel:+523311429932',
  },
  {
    title: 'Correo electronico',
    value: 'gerencia@luxent.properties',
    caption: 'Respondemos en menos de 24 horas',
    href: 'mailto:gerencia@luxent.properties',
  },
  {
    title: 'Oficinas',
    value: 'Av. Americas 1930-PB, Country Club, Guadalajara, Jalisco',
    caption: 'C.P. 44668',
  },
  {
    title: 'Horario de atencion',
    value: 'Lun - Vie: 9:00 - 19:00',
    caption: 'Atencion comercial y seguimiento programado',
  },
];

export const FOOTER_COPY = {
  tagline: 'Propiedades exclusivas para un nuevo estandar de vida',
  copyright: '© 2026 Luxent Properties. Todos los derechos reservados.',
};
