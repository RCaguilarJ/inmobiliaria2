import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO, PROJECT_IMAGES, SITE_COPY } from '../data';
import ContactForm from './ContactForm';
import PageHero from './PageHero';

export default function ContactView() {
  return (
    <div>
      <PageHero
        image={PROJECT_IMAGES.contactHero}
        eyebrow={SITE_COPY.contact.eyebrow}
        title={SITE_COPY.contact.title}
        subtitle={SITE_COPY.contact.subtitle}
      />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="editorial-kicker text-[var(--color-accent-deep)]/80">Información de contacto</span>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-[var(--color-navy)] sm:text-5xl">
              Estamos aquí para ayudarte
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-copy)]">
              Ya sea para revisar tipologías, amenidades, recorrido, material comercial o acompañamiento de Luxent, este es el punto de entrada para continuar la conversación.
            </p>

            <div className="mt-10 space-y-6">
              <a href={CONTACT_INFO.phoneHref} className="card-shell flex items-start gap-4 rounded-[24px] p-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent-deep)]/75">Teléfono</p>
                  <p className="mt-2 text-xl font-bold text-[var(--color-navy)]">{CONTACT_INFO.phoneDisplay}</p>
                  <p className="mt-1 text-sm text-[var(--color-copy)]">{CONTACT_INFO.officeHours}</p>
                </div>
              </a>

              <a href={`mailto:${CONTACT_INFO.email}`} className="card-shell flex items-start gap-4 rounded-[24px] p-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent-deep)]/75">Correo electrónico</p>
                  <p className="mt-2 text-xl font-bold text-[var(--color-navy)]">{CONTACT_INFO.email}</p>
                  <p className="mt-1 text-sm text-[var(--color-copy)]">Seguimiento comercial y solicitud de información.</p>
                </div>
              </a>

              <div className="card-shell flex items-start gap-4 rounded-[24px] p-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent-deep)]/75">Oficina comercial</p>
                  <p className="mt-2 text-xl font-bold text-[var(--color-navy)]">Country Club, Guadalajara</p>
                  <p className="mt-1 text-sm text-[var(--color-copy)]">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm
            title="Solicita una asesoría"
            subtitle="La implementación abre WhatsApp y tu cliente de correo con la información capturada para mantener el sitio listo para Vercel sin backend adicional."
            defaultInterest="Información general"
          />
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px]">
          <div className="relative">
            <img
              src={PROJECT_IMAGES.hero}
              alt="Oficina comercial Condominios Country Club"
              className="aspect-[16/7] h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[rgba(19,30,40,0.35)]" />
            <div className="absolute inset-x-6 bottom-6 rounded-[28px] bg-white/92 p-6 shadow-xl backdrop-blur-md md:inset-x-auto md:left-10 md:w-[420px]">
              <p className="editorial-kicker text-[var(--color-accent-deep)]/80">Nuestras oficinas</p>
              <h3 className="mt-3 font-heading text-3xl font-extrabold text-[var(--color-navy)]">
                Providencia, Guadalajara, Jalisco
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-copy)]">
                Punto de atención para seguimiento comercial, revisión de materiales y asesoría sobre disponibilidad de Condominios Country Club.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
