export type PagePath =
  | '/'
  | '/quienes-somos'
  | '/servicios'
  | '/desarrollos'
  | '/contacto';

export interface NavItem {
  label: string;
  path: PagePath;
}

export interface HeroFeature {
  title: string;
}

export interface FeatureCard {
  badge?: string;
  title: string;
  description: string;
  linkLabel?: string;
}

export interface ServiceTile {
  number: string;
  title: string;
}

export interface ListCard {
  title: string;
  items: string[];
}

export interface MarketCard {
  index: string;
  title: string;
  description: string;
}

export interface DevelopmentProject {
  name: string;
  location: string;
  category: string;
  status: string;
  description: string;
  image: string;
  filters?: string[];
  ribbon?: string;
  detailReady?: boolean;
  overview?: string[];
  idealFor?: string[];
  composition?: string[];
  deliveries?: string[];
  closing?: string;
}

export interface ContactCard {
  title: string;
  value: string;
  caption: string;
  href?: string;
}

export interface ContactInfo {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  address: string;
  officeHours: string;
  whatsappHref?: string;
}

export interface ProjectImageMap {
  homeHero: string;
  homeCta: string;
  aboutHero: string;
  servicesHero: string;
  developmentsHero: string;
  contactHero: string;
  aboutFeature: string;
  galleryWide: string;
  gallerySmallA: string;
  gallerySmallB: string;
  officeBanner: string;
}
