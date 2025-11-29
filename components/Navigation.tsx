import React, { useState } from 'react';
import { Menu, X, Waves, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

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
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNav('/')}
          >
            <Waves className="h-8 w-8 text-indigo-deep group-hover:text-gold-soft transition-colors duration-300" />
            <div className="ml-3 flex flex-col">
              <span className="font-serif text-xl font-bold text-indigo-deep tracking-wider">TAM RUDU</span>
              <span className="text-xs font-sans text-mangrove tracking-[0.2em] uppercase">{t.brand_sub}</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`group flex flex-col items-center transition-all duration-300 ${
                  currentPath === link.path ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <span className={`font-serif text-lg ${currentPath === link.path ? 'text-indigo-deep' : 'text-gray-600'}`}>
                  {link.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold-soft opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.label}
                </span>
                <span className={`h-0.5 bg-indigo-deep transition-all duration-300 mt-1 ${
                  currentPath === link.path ? 'w-full' : 'w-0 group-hover:w-1/2'
                }`} />
              </button>
            ))}

            {/* Language Switcher Desktop */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-indigo-deep/20 hover:bg-indigo-deep hover:text-white transition-all text-xs font-bold tracking-widest text-indigo-deep ml-4"
            >
              <Globe size={14} />
              <span>{language === 'th' ? 'EN' : 'TH'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 rounded-full border border-indigo-deep/20 text-xs font-bold tracking-widest text-indigo-deep"
              >
                {language === 'th' ? 'EN' : 'TH'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-indigo-deep hover:text-mangrove transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-paper border-b border-indigo-deep/10 shadow-lg py-8 px-4 flex flex-col space-y-6 animate-in slide-in-from-top-5">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNav(link.path)}
              className="text-left group"
            >
              <span className={`block font-serif text-2xl ${currentPath === link.path ? 'text-indigo-deep' : 'text-gray-500'}`}>
                {link.name}
              </span>
              <span className="text-xs uppercase tracking-widest text-gold-soft">
                {link.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
