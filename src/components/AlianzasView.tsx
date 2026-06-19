import {
  BarChart3,
  BriefcaseBusiness,
  Camera,
  FileText,
  Gavel,
  Megaphone,
  MessageSquareShare,
  Users,
} from 'lucide-react';
import {
  LEGAL_SUPPORT,
  MARKET_ANALYSIS,
  SERVICES,
  SITE_COPY,
  TOOL_GROUPS,
  PROJECT_IMAGES,
} from '../data';
import type { PagePath } from '../types';
import ContactForm from './ContactForm';
import PageHero from './PageHero';
import SectionDivider from './SectionDivider';

interface AlianzasViewProps {
  onNavigate: (path: PagePath) => void;
}

const serviceIcons = [BriefcaseBusiness, Users, Megaphone, Camera, BarChart3, MessageSquareShare];
const toolIcons = [FileText, BarChart3, MessageSquareShare];

export default function AlianzasView({ onNavigate }: AlianzasViewProps) {
  return (
    <div>
      <PageHero
        image={PROJECT_IMAGES.servicesHero}
        eyebrow={SITE_COPY.services.eyebrow}
        title={SITE_COPY.services.title}
        subtitle={SITE_COPY.services.subtitle}
      />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Lo que hacemos</span>
              <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
                Nuestros servicios
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--color-copy)]">
              Cobertura integral del ciclo comercial: estrategia, marketing, soporte visual, operación digital y acompañamiento posterior al cierre.
            </p>
          </div>

          <SectionDivider className="mt-8" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <article key={service.title} className="card-shell rounded-[28px] p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-[var(--color-navy)]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-copy)]">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-soft)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Metodología y herramientas digitales</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
              Operación comercial documentada y visible
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-copy)]">
              El perfil empresarial entregado por el cliente define procesos claros para cotización, seguimiento, administración de ventas y postventa.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TOOL_GROUPS.map((group, index) => {
              const Icon = toolIcons[index];

              return (
                <article key={group.title} className="card-shell rounded-[28px] p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--color-accent)] shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-[var(--color-navy)]">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-copy)]">
                    {group.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Inteligencia de mercado</span>
              <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
                Estudios y análisis para soportar producto y narrativa
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--color-copy)]">
              Benchmarking, perfil del cliente, análisis de zona y estrategia de precios como base de definición comercial.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {MARKET_ANALYSIS.map((item) => (
              <article key={item.title} className="card-shell rounded-[28px] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-deep)]/75">Análisis</p>
                <h3 className="mt-4 font-heading text-2xl font-bold text-[var(--color-navy)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-copy)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-soft)] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Acompañamiento jurídico</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
              Asesoría y soporte operativo desde la gestación hasta la postventa
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-copy)]">
              El marco de Luxent contempla acompañamiento legal y operativo para dar continuidad al proyecto inmobiliario más allá del material comercial.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {LEGAL_SUPPORT.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-navy)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-shell rounded-[32px] p-6 md:p-8">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]">
              <Gavel className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-heading text-3xl font-bold text-[var(--color-navy)]">Activa una ruta comercial clara</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-copy)]">
              Si deseas adaptar esta misma estructura para otros proyectos o profundizar en disponibilidad, se puede iniciar la conversación desde aquí.
            </p>
            <div className="mt-8">
              <ContactForm
                title="Cuéntanos tu objetivo"
                subtitle="El formulario abre WhatsApp y correo para mantener la implementación completamente estática y lista para Vercel."
                defaultInterest="Asesoría comercial Luxent"
                customMessage="Quiero revisar una ruta comercial o recibir información de disponibilidad."
                surface="plain"
              />
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/contacto')}
              className="mt-6 rounded-full border border-[var(--color-line)] px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-navy)]"
            >
              Ir a contacto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
