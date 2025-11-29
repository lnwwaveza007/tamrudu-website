import React from 'react';
import { ArrowRight, Leaf, Droplets, Waves } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

interface LandingProps {
  onNavigate: (path: string) => void;
}

export const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const t = translations[language].landing;

  return (
    <div className="pt-20 min-h-screen flex flex-col">
      {/* Intro Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518182170546-0766aaef312c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply filter sepia" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-paper/0 via-paper/20 to-paper" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <span className="block text-mangrove text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 animate-in fade-in duration-1000 delay-300">
            {t.sub_hero}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-indigo-deep leading-tight mb-8 animate-in slide-in-from-bottom-10 duration-1000">
            Tam Rudu
          </h1>
          <p className="font-sans font-light text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-500">
            {t.hero_desc}
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-in fade-in duration-1000 delay-700">
             <button 
                onClick={() => onNavigate('/pla-kab')}
                className="group relative px-8 py-3 border border-indigo-deep text-indigo-deep overflow-hidden transition-all hover:text-paper"
             >
                <span className="absolute inset-0 w-0 bg-indigo-deep transition-all duration-[250ms] ease-out group-hover:w-full"></span>
                <span className="relative font-serif italic z-10 flex items-center gap-2">
                   {t.cta} <ArrowRight size={16} />
                </span>
             </button>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 px-6 md:px-12 bg-white/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-6 border border-transparent hover:border-indigo-deep/10 transition-colors duration-500 rounded-lg">
            <div className="w-12 h-12 mx-auto mb-6 text-mangrove flex items-center justify-center bg-paper rounded-full shadow-sm">
              <Leaf size={24} />
            </div>
            <h3 className="font-serif text-2xl text-indigo-deep mb-3">{t.val_1_title}</h3>
            <p className="font-sans text-gray-500 font-light">
              {t.val_1_desc}
            </p>
          </div>
          <div className="text-center p-6 border border-transparent hover:border-indigo-deep/10 transition-colors duration-500 rounded-lg">
            <div className="w-12 h-12 mx-auto mb-6 text-indigo-deep flex items-center justify-center bg-paper rounded-full shadow-sm">
              <Droplets size={24} />
            </div>
            <h3 className="font-serif text-2xl text-indigo-deep mb-3">{t.val_2_title}</h3>
            <p className="font-sans text-gray-500 font-light">
              {t.val_2_desc}
            </p>
          </div>
           <div className="text-center p-6 border border-transparent hover:border-indigo-deep/10 transition-colors duration-500 rounded-lg">
            <div className="w-12 h-12 mx-auto mb-6 text-gold-soft flex items-center justify-center bg-paper rounded-full shadow-sm">
              <Waves size={24} />
            </div>
            <h3 className="font-serif text-2xl text-indigo-deep mb-3">{t.val_3_title}</h3>
            <p className="font-sans text-gray-500 font-light">
              {t.val_3_desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
