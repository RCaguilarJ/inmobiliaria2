import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeView from './components/HomeView';
import NosotrosView from './components/NosotrosView';
import AlianzasView from './components/AlianzasView';
import DevelopmentsView from './components/DevelopmentsView';
import ContactView from './components/ContactView';
import { ROUTES } from './data';
import type { PagePath } from './types';

function normalizePath(pathname: string): PagePath {
  const trimmed = pathname.replace(/\/+$/, '') || '/';
  return ROUTES[trimmed] ?? '/';
}

export default function App() {
  const [activePath, setActivePath] = useState<PagePath>(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => {
      setActivePath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path: PagePath) => {
    if (path !== activePath) {
      window.history.pushState({}, '', path);
      setActivePath(path);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentView = useMemo(() => {
    switch (activePath) {
      case '/quienes-somos':
        return <NosotrosView onNavigate={navigate} />;
      case '/servicios':
        return <AlianzasView onNavigate={navigate} />;
      case '/desarrollos':
        return <DevelopmentsView onNavigate={navigate} />;
      case '/contacto':
        return <ContactView />;
      case '/':
      default:
        return <HomeView onNavigate={navigate} />;
    }
  }, [activePath]);

  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-white">
      <Header activePath={activePath} onNavigate={navigate} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePath}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentView}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer activePath={activePath} onNavigate={navigate} />
    </div>
  );
}
