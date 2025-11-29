import React from 'react';
import { ArrowRight, Leaf, Palette, ScrollText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export const PlaKab: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].plakab;

  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 overflow-hidden">
      
      {/* 1. Hero Section: Centered Fish */}
      <section className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center min-h-[85vh]">
        
        {/* Header Text */}
        <div className="space-y-2 mb-8 animate-in slide-in-from-top-10 duration-700">
          <span className="font-hand text-2xl text-mangrove rotate-[-2deg] block">{t.rhythm}</span>
          <h1 className="font-thai font-bold text-5xl md:text-7xl text-indigo-deep">{t.title}</h1>
          <p className="font-serif italic text-gray-500 tracking-wider">{t.sub}</p>
        </div>

        {/* Central Fish Visual */}
        <div className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[2/1] flex items-center justify-center my-8 group">
          
          {/* Decorative Frames (Sketch feel) */}
          <div className="absolute inset-4 md:inset-10 border-2 border-dashed border-indigo-deep/20 rounded-lg transform rotate-2 transition-transform duration-700 group-hover:rotate-1"></div>
          <div className="absolute inset-4 md:inset-10 border border-mangrove/20 rounded-lg transform -rotate-1 transition-transform duration-700 group-hover:-rotate-2 bg-white/40"></div>
          
          {/* Fish Image */}
          <div className="relative z-10 w-64 md:w-96 transform transition-transform duration-500 group-hover:scale-105">
             <img 
              src="https://picsum.photos/seed/fish1/800/600" 
              alt="Pla Kab Illustration" 
              className="w-full h-auto drop-shadow-2xl filter contrast-125 sepia-[.2]" 
             />
             {/* Note Tag */}
             <div className="absolute -bottom-8 -right-8 bg-white p-3 shadow-md rotate-3 border border-gray-200 hidden md:block">
               <span className="font-hand text-xl text-indigo-deep">{t.pattern_tag}</span>
             </div>
          </div>
        </div>

        <p className="font-sans text-gray-600 max-w-xl mx-auto text-lg leading-relaxed mt-4">
           {t.hero_desc}
        </p>
      </section>

      {/* 2. Cool Detail Description: "Field Notebook" Style */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
           
           {/* Left: Detailed Story */}
           <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-px bg-indigo-deep flex-1"></div>
                <h2 className="font-serif text-3xl text-indigo-deep italic">{t.dna_title}</h2>
              </div>
              
              <p className="font-sans text-gray-600 font-light text-lg leading-loose text-justify">
                {t.dna_desc}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                   <Palette className="w-8 h-8 text-mangrove mb-3" />
                   <h4 className="font-serif font-bold text-gray-800">{t.mangrove}</h4>
                   <p className="font-sans text-xs text-gray-500 mt-1">{t.mangrove_desc}</p>
                </div>
                <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                   <Leaf className="w-8 h-8 text-green-700 mb-3" />
                   <h4 className="font-serif font-bold text-gray-800">{t.onion}</h4>
                   <p className="font-sans text-xs text-gray-500 mt-1">{t.onion_desc}</p>
                </div>
              </div>
           </div>

           {/* Right: Texture Visuals */}
           <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden border-8 border-white shadow-xl transform rotate-2">
                 <img src="https://picsum.photos/seed/texture1/600/800" className="w-full h-full object-cover" alt="Fabric Texture" />
                 <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 backdrop-blur-sm">
                   <div className="flex justify-between items-center">
                     <span className="font-mono text-xs uppercase text-gray-500">{t.fig_caption}</span>
                     <ScrollText size={16} className="text-indigo-deep" />
                   </div>
                 </div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -top-6 -left-6 bg-gold-soft text-white px-4 py-2 rounded-full font-serif italic shadow-lg">
                {t.hand_screened}
              </div>
           </div>
        </div>
      </section>

      {/* 3. CTA */}
      <div className="text-center py-12">
        <button className="group relative inline-flex items-center justify-center px-10 py-4 font-serif text-lg text-white transition-all duration-200 bg-indigo-deep rounded-full hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-deep shadow-xl hover:-translate-y-1">
          <span className="mr-2">{t.cta}</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

    </div>
  );
};
