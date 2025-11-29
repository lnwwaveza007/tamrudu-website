import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Landing } from './pages/Landing';
import { PlaKab } from './pages/PlaKab';
import { PlaKadorLing } from './pages/PlaKadorLing';
import { PlaMor } from './pages/PlaMor';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { translations } from './data/translations';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
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
      <Routes>
        <Route path="/" element={<Landing onNavigate={(path) => navigate(path)} />} />
        <Route path="/pla-kab" element={<PlaKab />} />
        <Route path="/pla-kador-ling" element={<PlaKadorLing />} />
        <Route path="/pla-mor" element={<PlaMor />} />
      </Routes>
      
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
