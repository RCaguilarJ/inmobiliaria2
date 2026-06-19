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

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface FeatureCard {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ServiceCard {
  title: string;
  description: string;
}

export interface BulletGroup {
  title: string;
  items: string[];
}

export interface UnitType {
  name: string;
  area: string;
  summary: string;
  detail: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ContactInfo {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  address: string;
  officeHours: string;
  website: string;
  whatsappHref: string;
}
