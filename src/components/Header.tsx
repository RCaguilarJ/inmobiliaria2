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
    const originalOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

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
          <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-5 xl:px-8">
            <button
              type="button"
              onClick={() => handleNav('/')}
              aria-label="Ir al inicio"
              className="shrink-0"
            >
              <CountryClubLogo variant="dark" className="w-24 sm:w-28" />
            </button>

            <nav className="hidden flex-1 items-center justify-center gap-12 xl:flex">
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

            <div className="hidden xl:block">
              <button
                type="button"
                onClick={() => handleNav('/contacto')}
                className="shrink-0 rounded-full bg-[var(--color-navy)] px-8 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(15,28,45,0.24)] transition-colors hover:bg-[#1d2b46]"
              >
                Agendar asesorÃ­a
              </button>
            </div>

            <div className="xl:hidden">
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
          <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-5 xl:px-8">
            <button type="button" onClick={() => handleNav('/')} aria-label="Ir al inicio" className="shrink-0">
              <CountryClubLogo variant="light" className="w-[104px] sm:w-[118px]" />
            </button>

            <nav className="hidden items-center gap-10 xl:flex">
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

            <div className="hidden xl:block">
              <button
                type="button"
                onClick={() => handleNav('/contacto')}
                className="rounded-[14px] bg-[var(--color-accent-strong)] px-6 py-3 text-[13px] font-bold text-white shadow-[0_14px_36px_rgba(33,51,77,0.18)]"
              >
                Agendar asesorÃ­a
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-navy)] xl:hidden"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 bottom-0 top-[78px] bg-[rgba(10,18,30,0.44)] backdrop-blur-sm xl:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              className="mx-4 mt-4 rounded-[24px] border border-white/10 bg-[var(--color-navy)] px-4 py-4 text-white shadow-[0_24px_70px_rgba(11,18,31,0.34)]"
            >
              {NAV_ITEMS.map((item, index) => {
                const active = item.path === activePath;
                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleNav(item.path)}
                    className={`flex w-full items-center justify-between rounded-[18px] px-4 py-3.5 text-left text-sm font-semibold ${
                      active
                        ? 'bg-white text-[var(--color-navy)]'
                        : 'mt-2 border border-white/10 bg-white/4 text-white/76 first:mt-0'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`text-[11px] uppercase tracking-[0.14em] ${active ? 'text-[var(--color-accent-strong)]' : 'text-white/35'}`}>
                      0{index + 1}
                    </span>
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => handleNav('/contacto')}
                className="mt-4 w-full rounded-[18px] bg-[var(--color-accent-strong)] px-4 py-4 text-sm font-bold text-white"
              >
                Agendar asesorÃ­a
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
