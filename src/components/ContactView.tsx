import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_CARDS, PROJECT_IMAGES, SITE_COPY } from '../data';
import ContactForm from './ContactForm';
import PageHero from './PageHero';
import Reveal from './Reveal';

const icons = [Phone, Mail, MapPin, Clock3];

export default function ContactView() {
  return (
    <div>
      <PageHero
        image={PROJECT_IMAGES.contactHero}
        eyebrow={SITE_COPY.contact.eyebrow}
        title={SITE_COPY.contact.title}
        subtitle={SITE_COPY.contact.subtitle}
        titleClassName="max-w-[760px]"
      />

      <section className="page-section bg-white">
        <div className="page-container grid gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <Reveal>
            <div className="text-center lg:text-left">
              <p className="editorial-kicker text-[var(--color-copy)]/70">INFORMACIÓN DE CONTACTO</p>
              <h2 className="section-display-title mt-4 font-heading font-extrabold tracking-[-0.05em] text-[var(--color-heading)]">
                ESTAMOS AQUÍ PARA TI
              </h2>
              <p className="section-copy mx-auto mt-6 max-w-[590px] text-[var(--color-copy)] lg:mx-0">
                {SITE_COPY.contact.intro}
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {CONTACT_CARDS.map((card, index) => {
                const Icon = icons[index];
                const content = (
                  <div className="flex h-full flex-col items-center rounded-[18px] border border-[var(--color-line)] bg-[var(--color-surface-soft)] px-6 py-7 text-center">
                    <div className="inline-flex h-11 w-11 items-center justify-center border border-[var(--color-line)] text-[var(--color-accent-strong)]">
                      <Icon className="h-[1.1rem] w-[1.1rem]" />
                    </div>
                    <p className="mt-4 text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-[var(--color-copy)]/82">
                      {card.title}
                    </p>
                    <p className="mt-2 text-[1rem] font-bold leading-[1.35] tracking-[-0.02em] text-[var(--color-heading)] sm:text-[1.12rem]">
                      {card.value}
                    </p>
                    <p className="mt-2 text-[0.86rem] leading-6 text-[var(--color-copy)]/82">
                      {card.caption}
                    </p>
                  </div>
                );

                if (card.href) {
                  return (
                    <a key={card.title} href={card.href} className="h-full">
                      {content}
                    </a>
                  );
                }

                return <div key={card.title}>{content}</div>;
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="page-section-lg relative isolate overflow-hidden">
        <img
          src={PROJECT_IMAGES.officeBanner}
          alt="Oficinas Luxent"
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/28" />
        <Reveal className="relative z-10 mx-auto flex max-w-[1240px] justify-center">
          <div className="bg-white px-6 py-6 text-center shadow-[0_24px_70px_rgba(24,38,60,0.16)] sm:px-10 sm:py-8">
            <p className="editorial-kicker text-[var(--color-copy)]/72">NUESTRAS OFICINAS</p>
            <h2 className="mt-4 font-heading text-[clamp(1.65rem,5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-[var(--color-heading)]">
              COUNTRY CLUB, GUADALAJARA, JALISCO
            </h2>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
