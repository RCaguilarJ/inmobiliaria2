import { ExternalLink, Globe, MapPin, MessageCircle, Phone, PlayCircle, ShieldCheck } from 'lucide-react';
import {
  AMENITIES,
  CONTACT_INFO,
  PROJECT_GALLERY,
  PROJECT_IMAGES,
  SITE_COPY,
  UNIT_TYPES,
} from '../data';
import type { PagePath } from '../types';
import ContactForm from './ContactForm';
import PageHero from './PageHero';
import SectionDivider from './SectionDivider';

interface DevelopmentsViewProps {
  onNavigate: (path: PagePath) => void;
}

export default function DevelopmentsView({ onNavigate }: DevelopmentsViewProps) {
  return (
    <div>
      <PageHero
        image={PROJECT_IMAGES.developmentsHero}
        eyebrow={SITE_COPY.developments.eyebrow}
        title={SITE_COPY.developments.title}
        subtitle={SITE_COPY.developments.subtitle}
      />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Proyecto principal</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
              Condominios Country Club
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-copy)]">
              Desarrollo residencial premium con frente al Country Club y contacto comercial activo desde Av. Américas 1930 Int. L3. La información visible en esta implementación toma como base el brochure comercial entregado por el cliente.
            </p>

            <div className="mt-8 space-y-3 text-sm text-[var(--color-copy)]">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                <span>{CONTACT_INFO.address}</span>
              </p>
              <a href={CONTACT_INFO.phoneHref} className="flex items-center gap-3 hover:text-[var(--color-navy)]">
                <Phone className="h-4 w-4 text-[var(--color-accent)]" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
              <a
                href={CONTACT_INFO.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-[var(--color-navy)]"
              >
                <Globe className="h-4 w-4 text-[var(--color-accent)]" />
                <span>condominioscountryclub.com</span>
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white"
              >
                WhatsApp comercial
                <MessageCircle className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => onNavigate('/contacto')}
                className="rounded-full border border-[var(--color-line)] px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-navy)]"
              >
                Solicitar asesoría
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px]">
            <img
              src={PROJECT_IMAGES.overview}
              alt="Amenidades de Condominios Country Club"
              className="aspect-[4/3] h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-soft)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Tipologías publicadas</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
              Superficies del brochure comercial
            </h2>
          </div>

          <SectionDivider className="mt-8" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {UNIT_TYPES.map((unit) => (
              <article key={unit.name} className="card-shell rounded-[28px] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent-deep)]/75">
                  {unit.area}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-bold text-[var(--color-navy)]">{unit.name}</h3>
                <p className="mt-3 text-sm font-semibold text-[var(--color-navy)]">{unit.summary}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-copy)]">{unit.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Amenidades</span>
              <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
                Experiencia residencial documentada
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--color-copy)]">
              Alberca, terraza, gimnasio, storage, business center y accesos controlados forman parte del material comercial proporcionado.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {AMENITIES.map((amenity) => (
              <article key={amenity} className="card-shell flex items-start gap-4 rounded-[24px] p-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-navy)]">{amenity}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-copy)]">
                    Integrada en la narrativa comercial para comunicar estilo de vida, conveniencia y valor percibido.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-panel px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <span className="editorial-kicker text-white/55">Registro audiovisual real</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold sm:text-5xl">
              Reel integrado para acompañar la conversación comercial
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72">
              La app incluye el video real entregado por el cliente como apoyo para seguimiento, recorridos y presentación digital del proyecto.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/72">
              <PlayCircle className="h-4 w-4" />
              Marzo 2026 · Asset real
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/30 shadow-2xl">
            <video
              src="/videos/countryclub/country-club-reel-marzo-2026.mp4"
              poster={PROJECT_IMAGES.developmentsHero}
              controls
              preload="metadata"
              className="aspect-video h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Galería</span>
              <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
                Selección visual del proyecto
              </h2>
            </div>
            <a
              href={CONTACT_INFO.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-deep)]"
            >
              Visitar sitio oficial
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {PROJECT_GALLERY.map((image, index) => (
              <figure
                key={image.caption}
                className={`overflow-hidden rounded-[28px] ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`h-full w-full object-cover ${index === 0 ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}
                  referrerPolicy="no-referrer"
                />
                <figcaption className="bg-white px-5 py-4 text-sm font-semibold text-[var(--color-navy)]">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-soft)] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Solicita seguimiento</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
              Revisa disponibilidad, superficies y siguiente paso
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-copy)]">
              El formulario dispara WhatsApp y correo para que la experiencia pueda desplegarse como sitio estático sin depender de un backend adicional.
            </p>
          </div>
          <ContactForm
            title="Quiero información del desarrollo"
            subtitle="Compártenos qué tipología deseas revisar y te responderemos con seguimiento comercial."
            defaultInterest="Disponibilidad de tipologías"
            customMessage="Me interesa revisar las tipologías publicadas y la disponibilidad actual de Condominios Country Club."
          />
        </div>
      </section>
    </div>
  );
}
