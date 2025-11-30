import React from 'react';
import { ArrowRight, Shield, Maximize2, Feather } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export const PlaMor: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].plamor;

  return (
    <div className="min-h-screen bg-paper pt-24 pb-20">

      {/* 1. Hero Section: Centered Fish */}
      <section className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center min-h-[85vh]">

        {/* Header Text */}
        <div className="space-y-2 mb-8 animate-in slide-in-from-top-10 duration-700">
          <span className="font-hand text-2xl text-gold-soft -rotate-1 block">{t.texture_title}</span>
          <h1 className="font-thai font-bold text-5xl md:text-7xl text-indigo-deep">{t.title}</h1>
          <p className="font-serif italic text-gray-500 tracking-wider">{t.sub}</p>
        </div>

        {/* Central Fish Visual */}
        <div className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[2/1] flex items-center justify-center my-8 group">
          <img
            src="/images/pla-mor.jpg"
            alt="Pla Mor"
            className="w-full h-full object-contain drop-shadow-2xl filter contrast-110"
          />
        </div>
        {/* 2. Cool Detail Description: Blueprint Style */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="bg-indigo-deep text-paper p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">

              {/* Left: Text */}
              <div className="space-y-8">
                <h2 className="font-serif text-4xl text-gold-soft">{t.detail_title}</h2>
                <p className="font-sans text-blue-100 font-light leading-relaxed text-lg">
                  {t.detail_desc}
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <Shield className="text-gold-soft" />
                    <span className="font-serif text-lg">{t.feat_1}</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <Feather className="text-gold-soft" />
                    <span className="font-serif text-lg">{t.feat_2}</span>
                  </div>
                  <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <Maximize2 className="text-gold-soft" />
                    <span className="font-serif text-lg">{t.feat_3}</span>
                  </div>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="h-full min-h-[300px] bg-white/5 rounded-lg border border-white/10 p-4 flex items-center justify-center relative">
                <div className="absolute top-4 left-4 text-xs font-mono text-gold-soft tracking-widest">{t.fig_caption}</div>
                <img src="https://inwfile.com/s-dy/ay87j1.jpg" className="rounded shadow-lg w-3/4 h-3/4 object-cover rotate-3" alt="Fabric Detail" />

                {/* Sticker */}
                <div className="absolute bottom-6 right-6 bg-paper text-indigo-deep px-3 py-1 text-xs font-bold uppercase tracking-widest transform -rotate-6 shadow">
                  {t.approved}
                </div>
              </div>

            </div>
          </div>
        </section >

        {/* 3. CTA */}
        <div className="text-center py-16">
          <button className="group relative inline-flex items-center justify-center px-12 py-5 font-serif text-xl text-indigo-deep transition-all duration-200 bg-gold-soft rounded-full shadow-xl hover:bg-white hover:text-indigo-deep hover:-translate-y-1">
            <span className="mr-3">{t.cta}</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div >


      </section >
    </div >
  );
};
