import lobbyChandelier from './assets/images/countryclub-real/lobby-chandelier-wide.jpg';
import lobbyLounge from './assets/images/countryclub-real/lobby-lounge.jpg';
import poolDeck from './assets/images/countryclub-real/pool-deck.jpg';
import livingRoom from './assets/images/countryclub-real/living-room.jpg';
import balconyView from './assets/images/countryclub-real/balcony-view.jpg';
import walkInCloset from './assets/images/countryclub-real/walk-in-closet.jpg';
import bedroomSuite from './assets/images/countryclub-real/bedroom-suite.jpg';
import type {
  BulletGroup,
  ContactInfo,
  FeatureCard,
  GalleryImage,
  Metric,
  NavItem,
  PagePath,
  ServiceCard,
  UnitType,
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
  email: 'ventas@luxent.properties',
  address: 'Av. Américas 1930 Int. L3, Col. Country Club, Guadalajara, Jalisco.',
  officeHours: 'Lunes a viernes · 9:00 a 19:00',
  website: 'https://www.condominioscountryclub.com',
  whatsappHref:
    'https://wa.me/523311429932?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20Condominios%20Country%20Club.',
};

export const SITE_COPY = {
  home: {
    eyebrow: 'Condominios Country Club',
    title: 'Residencias exclusivas frente al Country Club de Guadalajara',
    subtitle:
      'Tipologías publicadas de 112.76 m² a 175.15 m², amenidades privadas y atención comercial respaldada por Luxent Properties.',
    quote:
      'Más que un desarrollo residencial, una experiencia privada con ubicación privilegiada, amenidades integradas y acompañamiento comercial puntual.',
  },
  about: {
    eyebrow: 'Quiénes somos',
    title: 'Un desarrollo premium comercializado con criterio, detalle y visión de largo plazo',
    subtitle:
      'La propuesta reúne la ubicación del corredor Country Club con la metodología comercial de Luxent: lectura de mercado, comunicación digital y atención personalizada.',
  },
  services: {
    eyebrow: 'Servicios integrales',
    title: 'Acompañamiento comercial para proyectos y propiedades de alto perfil',
    subtitle:
      'Desde la estrategia comercial hasta la postventa, el enfoque combina servicio premium, herramientas digitales y soporte legal.',
  },
  developments: {
    eyebrow: 'Desarrollo destacado',
    title: 'Tipologías, amenidades y material real de Condominios Country Club',
    subtitle:
      'La información de esta sección proviene del brochure comercial entregado por el cliente y de la galería fotográfica disponible para el proyecto.',
  },
  contact: {
    eyebrow: 'Contáctanos',
    title: 'Agenda una asesoría comercial para conocer disponibilidad y siguiente paso',
    subtitle:
      'Comparte tus datos y el equipo de Luxent dará seguimiento puntual a tu interés por Condominios Country Club.',
  },
} as const;

export const PROJECT_IMAGES = {
  hero: poolDeck,
  aboutHero: lobbyChandelier,
  servicesHero: livingRoom,
  developmentsHero: balconyView,
  contactHero: lobbyLounge,
  overview: poolDeck,
  lobby: lobbyChandelier,
  lounge: lobbyLounge,
  living: livingRoom,
  balcony: balconyView,
  closet: walkInCloset,
  bedroom: bedroomSuite,
} as const;

export const HOME_METRICS: Metric[] = [
  {
    value: '4',
    label: 'Tipologías publicadas',
    description: 'Superficies desde 112.76 m² hasta 175.15 m².',
  },
  {
    value: '9+',
    label: 'Amenidades clave',
    description: 'Alberca, terraza, gimnasio, business center y más.',
  },
  {
    value: '360°',
    label: 'Acompañamiento comercial',
    description: 'Atención respaldada por estrategia, materiales y seguimiento.',
  },
  {
    value: 'Country',
    label: 'Ubicación objetivo',
    description: 'Frente al Country Club de Guadalajara.',
  },
];

export const HOME_DIFFERENTIATORS: FeatureCard[] = [
  {
    eyebrow: 'Ubicación',
    title: 'Frente al Country Club',
    description:
      'Una dirección pensada para quienes buscan conectividad, entorno consolidado y un contexto residencial de alta demanda.',
  },
  {
    eyebrow: 'Amenidades',
    title: 'Infraestructura para el día a día',
    description:
      'El proyecto integra alberca y terraza, gimnasio, bodegas personales, sports bar, business center y accesos controlados.',
  },
  {
    eyebrow: 'Tipologías',
    title: 'Metraje publicado y claro',
    description:
      'La comunicación parte de superficies reales publicadas en brochure para facilitar comparaciones y seguimiento comercial.',
  },
  {
    eyebrow: 'Luxent',
    title: 'Comercialización especializada',
    description:
      'La estrategia suma mercado inmobiliario, herramientas digitales y atención personalizada para clientes de alto perfil.',
  },
];

export const ABOUT_PILLARS: ServiceCard[] = [
  {
    title: 'Mercado inmobiliario',
    description: 'Conocimiento profundo del segmento premium y lectura comparativa de la zona.',
  },
  {
    title: 'Tecnología y automatización',
    description: 'Brochures digitales, seguimiento comercial y materiales para acelerar decisiones.',
  },
  {
    title: 'Marketing y comunicación',
    description: 'Narrativa visual, posicionamiento y atención puntual para cada lead.',
  },
];

export const ABOUT_DIFFERENTIATORS: ServiceCard[] = [
  {
    title: 'Segmento premium',
    description: 'Comercialización de propiedades y desarrollos dirigidos a un mercado de alto valor.',
  },
  {
    title: 'Experiencia digital',
    description: 'Materiales comerciales, disponibilidad y seguimiento con soporte digital.',
  },
  {
    title: 'Marketing especializado',
    description: 'Campañas, contenidos y piezas visuales construidas para el perfil del proyecto.',
  },
  {
    title: 'Diseño de vanguardia',
    description: 'Presentación visual cuidada para comunicar acabados, espacios y estilo de vida.',
  },
];

export const SERVICES: ServiceCard[] = [
  {
    title: 'Venta y comercialización de propiedades de lujo',
    description: 'Proceso comercial con seguimiento cercano desde el primer contacto hasta el cierre.',
  },
  {
    title: 'Asesoría personalizada para clientes de alto perfil',
    description: 'Atención integral orientada a compra, renta o colocación de inventario premium.',
  },
  {
    title: 'Campañas de marketing digital inmobiliario',
    description: 'Posicionamiento, pauta y contenidos pensados para cada activo o desarrollo.',
  },
  {
    title: 'Tours virtuales, renders y fotografía profesional',
    description: 'Material visual de apoyo para comunicar valor, distribución y estilo de vida.',
  },
  {
    title: 'Consultoría de inversiones inmobiliarias',
    description: 'Lectura comercial del producto, narrativa de salida y contexto de mercado.',
  },
  {
    title: 'Gestión y posicionamiento en redes sociales',
    description: 'Relación continua con la audiencia y soporte de marca en canales digitales.',
  },
];

export const TOOL_GROUPS: BulletGroup[] = [
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
      'Seguimiento a expediente de postventa',
      'Información del cliente en un mismo lugar',
      'Visibilidad comercial para cada etapa',
    ],
  },
];

export const MARKET_ANALYSIS: ServiceCard[] = [
  {
    title: 'Benchmarking',
    description: 'Comparativa estratégica de proyectos competidores en precio, producto y posicionamiento.',
  },
  {
    title: 'Perfil del cliente',
    description: 'Identificación del comprador ideal, hábitos, objeciones y motivaciones.',
  },
  {
    title: 'Análisis de zona',
    description: 'Lectura del entorno urbano, conectividad, plusvalía y atributos del corredor Country.',
  },
  {
    title: 'Estrategia de precios',
    description: 'Ajuste comercial para narrativa, producto y esquema de salida al mercado.',
  },
];

export const LEGAL_SUPPORT = [
  'Contratos',
  'Escrituración',
  'Asesoría legal',
  'Gestión de proyectos',
];

export const UNIT_TYPES: UnitType[] = [
  {
    name: 'Planta tipo · 112.76 m²',
    area: '112.76 m²',
    summary: 'Tipología compacta publicada en brochure comercial.',
    detail: 'Consulta distribución, disponibilidad y recorrido guiado con el equipo comercial.',
  },
  {
    name: 'Planta tipo · 158.23 m²',
    area: '158.23 m²',
    summary: 'Superficie intermedia para un programa residencial más amplio.',
    detail: 'Ideal para compradores que priorizan amplitud sin salir del corredor Country.',
  },
  {
    name: 'Planta tipo · 161.55 m²',
    area: '161.55 m²',
    summary: 'Configuración publicada para quienes buscan mayor holgura interior.',
    detail: 'Se comercializa con apoyo visual, brochure digital y seguimiento personalizado.',
  },
  {
    name: 'Planta tipo · 175.15 m²',
    area: '175.15 m²',
    summary: 'La tipología con mayor metraje reportado dentro del brochure.',
    detail: 'Solicita asesoría para revisar superficie, amenidades y siguiente paso comercial.',
  },
];

export const AMENITIES = [
  'Alberca y terraza',
  'Kids zone',
  'Gimnasio',
  'Bodegas personales',
  'Storage & delivery',
  'Salas de juegos y sports bar',
  'Business center',
  'Accesos controlados',
  'Zona WiFi',
];

export const PROJECT_GALLERY: GalleryImage[] = [
  { src: lobbyChandelier, alt: 'Lobby de Condominios Country Club', caption: 'Lobby de acceso' },
  { src: lobbyLounge, alt: 'Lounge de Condominios Country Club', caption: 'Sala lounge' },
  { src: poolDeck, alt: 'Alberca y terraza', caption: 'Alberca y terraza' },
  { src: livingRoom, alt: 'Interior de departamento', caption: 'Área social interior' },
  { src: balconyView, alt: 'Vista desde el balcón', caption: 'Vista al corredor Country' },
  { src: bedroomSuite, alt: 'Recámara principal', caption: 'Recámara principal' },
  { src: walkInCloset, alt: 'Vestidor', caption: 'Vestidor' },
];
