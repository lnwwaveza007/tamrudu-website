import React, { useState } from 'react';
import { Menu, X, Waves, Globe, PenTool } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPath, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  const links = [
    { name: t.pla_kab, path: '/pla-kab', label: t.pla_kab_label },
    { name: t.pla_kador, path: '/pla-kador-ling', label: t.pla_kador_label },
    { name: t.pla_mor, path: '/pla-mor', label: t.pla_mor_label },
    { name: t.custom, path: '/custom-order', label: t.custom_label },
  ];

  const handleNav = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'th' ? 'en' : 'th');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-paper/90 backdrop-blur-sm border-b border-indigo-deep/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNav('/')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Waves className="h-8 w-8 text-indigo-deep group-hover:text-gold-soft transition-colors duration-300" />
            </motion.div>
            <div className="ml-3 flex flex-col">
              <span className="font-serif text-xl font-bold text-indigo-deep tracking-wider">TAM RUDU</span>
              <span className="text-xs font-sans text-mangrove tracking-[0.2em] uppercase">{t.brand_sub}</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <motion.button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`group flex flex-col items-center transition-all duration-300 ${currentPath === link.path ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                whileHover={{ y: -2 }}
              >
                <span className={`font-serif text-lg ${currentPath === link.path ? 'text-indigo-deep' : 'text-gray-600'} flex items-center gap-2`}>
                  {link.path === '/custom-order' && <PenTool size={16} />}
                  {link.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold-soft opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.label}
                </span>
                <motion.span
                  className="h-0.5 bg-indigo-deep mt-1"
                  initial={{ width: "0%" }}
                  animate={{ width: currentPath === link.path ? "100%" : "0%" }}
                  whileHover={{ width: currentPath === link.path ? "100%" : "50%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}

            {/* Language Switcher Desktop */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-indigo-deep/20 hover:bg-indigo-deep hover:text-white transition-all text-xs font-bold tracking-widest text-indigo-deep ml-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={14} />
              <motion.span
                key={language}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
              >
                {language === 'th' ? 'EN' : 'TH'}
              </motion.span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-indigo-deep/20 text-xs font-bold tracking-widest text-indigo-deep"
              whileTap={{ scale: 0.95 }}
            >
              {language === 'th' ? 'EN' : 'TH'}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-indigo-deep hover:text-mangrove transition-colors"
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isOpen ? 90 : 0 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-20 left-0 w-full bg-paper border-b border-indigo-deep/10 shadow-lg py-8 px-4 flex flex-col space-y-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, index) => (
              <motion.button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className="text-left group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className={`block font-serif text-2xl ${currentPath === link.path ? 'text-indigo-deep' : 'text-gray-500'}`}>
                  {link.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-gold-soft">
                  {link.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};