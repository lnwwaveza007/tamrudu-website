import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Landing } from './pages/Landing';
import { PlaKab } from './pages/PlaKab';
import { PlaKadorLing } from './pages/PlaKadorLing';
import { PlaMor } from './pages/PlaMor';
import { CustomOrder } from './pages/CustomOrder';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { translations } from './data/translations';
import { AnimatePresence, motion } from 'framer-motion';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Transition Wrapper
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

// Layout wrapper to inject navigation props
const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <>
      <Navigation
        currentPath={location.pathname}
        onNavigate={(path) => navigate(path)}
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Landing onNavigate={(path) => navigate(path)} />
            </PageTransition>
          } />
          <Route path="/pla-kab" element={
            <PageTransition>
              <PlaKab />
            </PageTransition>
          } />
          <Route path="/pla-kador-ling" element={
            <PageTransition>
              <PlaKadorLing />
            </PageTransition>
          } />
          <Route path="/pla-mor" element={
            <PageTransition>
              <PlaMor />
            </PageTransition>
          } />
          <Route path="/custom-order" element={
            <PageTransition>
              <CustomOrder />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>

      {/* Global Footer */}
      <footer className="bg-paper py-12 border-t border-indigo-deep/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 font-sans text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TAM RUDU. {t.rights}
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-deep transition-colors">Instagram</a>
            <a href="#" className="hover:text-indigo-deep transition-colors">Facebook</a>
            <a href="#" className="hover:text-indigo-deep transition-colors">Line Official</a>
          </div>
        </div>
      </footer>
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Layout />
      </Router>
    </LanguageProvider>
  );
};

export default App;