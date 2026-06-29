import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO, FOOTER_COPY, NAV_ITEMS } from '../data';
import type { PagePath } from '../types';
import CountryClubLogo from './CountryClubLogo';

interface FooterProps {
  activePath: PagePath;
  onNavigate: (path: PagePath) => void;
}

const socials = [
  { label: 'Facebook', icon: Facebook },
  { label: 'Instagram', icon: Instagram },
  { label: 'LinkedIn', icon: Linkedin },
];

export default function Footer({ activePath, onNavigate }: FooterProps) {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-[var(--page-gutter)] py-14 sm:grid-cols-2 sm:gap-12 sm:py-16 xl:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div className="space-y-5 rounded-[22px] border border-white/8 bg-white/4 p-5 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
          <CountryClubLogo variant="dark" className="w-[168px]" />
          <p className="max-w-[220px] text-sm leading-7 text-white/70">
            {FOOTER_COPY.tagline}
          </p>
        </div>

        <div className="sm:pl-0">
          <h3 className="text-[14px] font-extrabold tracking-[0.04em] text-white">
            ENLACES RÁPIDOS
          </h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/72">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => onNavigate(item.path)}
                className={`text-left ${activePath === item.path ? 'text-white' : 'hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[14px] font-extrabold tracking-[0.04em] text-white">CONTACTO</h3>
          <div className="mt-5 space-y-4 text-sm leading-6 text-white/72">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-start gap-3 hover:text-white"
            >
              <Mail className="mt-1 h-4 w-4 shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <a
              href={CONTACT_INFO.phoneHref}
              className="flex items-start gap-3 hover:text-white"
            >
              <Phone className="mt-1 h-4 w-4 shrink-0" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[14px] font-extrabold tracking-[0.04em] text-white">SÍGUENOS</h3>
          <div className="mt-5 flex items-center gap-3">
            {socials.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-white/8 text-white/80 transition hover:bg-white/14 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/72">Aviso de privacidad</p>
        </div>
      </div>

      <div className="border-t border-white/10 px-[var(--page-gutter)] py-6">
        <div className="mx-auto max-w-[1240px] text-center text-sm text-white/42">
          {FOOTER_COPY.copyright}
        </div>
      </div>
    </footer>
  );
}
