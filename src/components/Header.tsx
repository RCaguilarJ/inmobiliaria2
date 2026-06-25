import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data';
import type { PagePath } from '../types';
import CountryClubLogo from './CountryClubLogo';

interface HeaderProps {
  activePath: PagePath;
  onNavigate: (path: PagePath) => void;
}

export default function Header({ activePath, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeHeroActive, setIsHomeHeroActive] = useState(activePath === '/');

  useEffect(() => {
    if (activePath !== '/') {
      setIsHomeHeroActive(false);
      return;
    }

    const updateHeaderMode = () => {
      const hero = document.querySelector<HTMLElement>('[data-home-hero]');

      if (!hero) {
        setIsHomeHeroActive(window.scrollY < 520);
        return;
      }

      const threshold = Math.max(0, hero.offsetHeight - 20);
      setIsHomeHeroActive(window.scrollY < threshold);
    };

    updateHeaderMode();
    window.addEventListener('scroll', updateHeaderMode, { passive: true });
    window.addEventListener('resize', updateHeaderMode);

    return () => {
      window.removeEventListener('scroll', updateHeaderMode);
      window.removeEventListener('resize', updateHeaderMode);
    };
  }, [activePath]);

  const handleNav = (path: PagePath) => {
    setIsOpen(false);
    onNavigate(path);
  };

  const useTransparentHeader = activePath === '/' && isHomeHeroActive && !isOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {useTransparentHeader ? (
        <div className="bg-[rgba(8,16,30,0.18)] backdrop-blur-2xl">
          <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
            <button
              type="button"
              onClick={() => handleNav('/')}
              aria-label="Ir al inicio"
              className="shrink-0"
            >
              <CountryClubLogo variant="dark" className="w-24 sm:w-28" />
            </button>

            <nav className="hidden flex-1 items-center justify-center gap-12 lg:flex">
              {NAV_ITEMS.map((item) => {
                const active = item.path === activePath;
                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleNav(item.path)}
                    className={`whitespace-nowrap text-sm font-semibold tracking-[0.03em] transition-colors ${
                      active ? 'text-white' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <button
                type="button"
                onClick={() => handleNav('/contacto')}
                className="shrink-0 rounded-full bg-[var(--color-navy)] px-8 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(15,28,45,0.24)] transition-colors hover:bg-[#1d2b46]"
              >
                Agendar asesoría
              </button>
            </div>

            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white shadow-sm backdrop-blur-2xl transition-colors hover:bg-white/20"
                aria-label="Abrir menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-b border-slate-200 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.08)]">
          <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
            <button type="button" onClick={() => handleNav('/')} aria-label="Ir al inicio" className="shrink-0">
              <CountryClubLogo variant="light" className="w-[104px] sm:w-[118px]" />
            </button>

            <nav className="hidden items-center gap-10 lg:flex">
              {NAV_ITEMS.map((item) => {
                const active = item.path === activePath;
                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleNav(item.path)}
                    className={`text-[13px] font-semibold tracking-[0.01em] transition-colors ${
                      active
                        ? 'text-[var(--color-navy)]'
                        : 'text-[var(--color-copy)] hover:text-[var(--color-navy)]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <button
                type="button"
                onClick={() => handleNav('/contacto')}
                className="rounded-[14px] bg-[var(--color-accent-strong)] px-6 py-3 text-[13px] font-bold text-white shadow-[0_14px_36px_rgba(33,51,77,0.18)]"
              >
                Agendar asesoría
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-navy)] lg:hidden"
              aria-label="Abrir menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[var(--color-line)] bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-5 py-4">
              {NAV_ITEMS.map((item) => {
                const active = item.path === activePath;
                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleNav(item.path)}
                    className={`rounded-xl px-4 py-3 text-left text-sm font-semibold ${
                      active ? 'bg-[var(--color-surface-soft)] text-[var(--color-navy)]' : 'text-[var(--color-copy)]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => handleNav('/contacto')}
                className="mt-2 rounded-xl bg-[var(--color-accent-strong)] px-4 py-3 text-sm font-bold text-white"
              >
                Agendar asesoría
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
