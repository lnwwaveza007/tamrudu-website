import React from 'react';
import { Waves, Anchor, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export const PlaKadorLing: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].plakador;

  return (
    <div className="min-h-screen bg-paper pt-24 pb-20">
      
      {/* 1. Hero Section: Centered Fish */}
      <section className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center min-h-[85vh]">
        
        {/* Header Text */}
        <div className="space-y-2 mb-12 animate-in slide-in-from-top-10 duration-700">
          <span className="font-hand text-2xl text-indigo-deep rotate-2 block">{t.legend}</span>
          <h1 className="font-thai font-bold text-5xl md:text-7xl text-indigo-deep">{t.title}</h1>
          <p className="font-serif italic text-gray-500 tracking-wider">{t.sub}</p>
        </div>

        {/* Central Fish Visual - Long & Vertical */}
        <div className="relative w-full max-w-lg aspect-[3/4] flex items-center justify-center my-4 group">
          
          {/* Background Drawing Box */}
          <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-sm transform -rotate-1"></div>
          <div className="absolute -inset-2 border border-gray-200 rounded-sm transform rotate-1 bg-white/50 -z-10"></div>
          
          {/* Fish Image (Vertical Placement) */}
          <div className="relative z-10 h-[80%] w-full flex items-center justify-center">
             <img 
              src="https://picsum.photos/seed/longfish/400/800" 
              alt="Pla Kador Ling" 
              className="h-full w-auto object-contain drop-shadow-2xl filter sepia-[.3] contrast-110" 
             />
             
             {/* Floating Annotation */}
             <div className="absolute top-10 right-0 md:-right-12 w-32 bg-paper p-2 shadow-md border border-gray-100 rotate-6 transform transition-transform hover:rotate-0 hover:scale-110 cursor-help">
               <p className="font-hand text-indigo-deep text-lg leading-tight">{t.tag_rare}</p>
             </div>
          </div>
        </div>

        <p className="font-sans text-gray-600 max-w-xl mx-auto text-lg leading-relaxed mt-8">
           {t.hero_desc}
        </p>
      </section>

      {/* 2. Cool Detail Description */}
      <section className="max-w-5xl mx-auto px-6 py-20 bg-white/50 rounded-3xl mt-10 border border-white shadow-sm">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           
           {/* Left: Texture Visuals */}
           <div className="order-2 md:order-1 relative group">
              <div className="aspect-square bg-indigo-50 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                 <img src="https://picsum.photos/seed/indigo/800/800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Indigo Dye" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-indigo-deep/20 rounded-full border-dashed animate-spin-slow"></div>
              
              {/* Badge */}
              <div className="absolute bottom-0 right-0 bg-indigo-deep text-white w-20 h-20 rounded-full flex items-center justify-center text-center p-2 font-serif text-xs shadow-xl z-20">
                 {t.indigo_badge}
              </div>
           </div>

           {/* Right: Text */}
           <div className="order-1 md:order-2 space-y-8">
              <div className="flex items-center gap-4">
                <h2 className="font-serif text-3xl text-indigo-deep italic">{t.mission_title}</h2>
                <div className="h-px bg-indigo-deep flex-1"></div>
              </div>
              
              <p className="font-sans text-gray-600 font-light text-lg leading-loose">
                {t.mission_desc}
              </p>

              <div className="flex flex-col gap-4">
                 <div className="flex items-start gap-4">
                    <div className="p-2 bg-indigo-100 rounded text-indigo-deep"><Waves size={20}/></div>
                    <div>
                      <h4 className="font-bold font-serif text-gray-800">{t.wisdom_title}</h4>
                      <p className="text-sm text-gray-500">{t.wisdom_desc}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="p-2 bg-mangrove/20 rounded text-mangrove"><Anchor size={20}/></div>
                    <div>
                      <h4 className="font-bold font-serif text-gray-800">{t.cons_title}</h4>
                      <p className="text-sm text-gray-500">{t.cons_desc}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. CTA */}
      <div className="text-center py-16">
        <button className="group relative inline-flex items-center justify-center px-12 py-4 font-serif text-lg text-white transition-all duration-200 bg-mangrove rounded-sm shadow-xl hover:bg-[#6d4520] hover:-translate-y-1">
          <span className="mr-3">{t.cta}</span>
          <Info className="w-5 h-5 opacity-70 group-hover:opacity-100" />
        </button>
      </div>

    </div>
  );
};
