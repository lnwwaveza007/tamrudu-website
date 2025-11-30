import React from 'react';
import { ArrowRight, Shield, Maximize2, Feather } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

export const PlaMor: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].plamor;

  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 overflow-hidden">

      {/* 1. Hero Section: Centered Fish */}
      <section className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center min-h-[85vh]">

        {/* Header Text */}
        <div className="space-y-2 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-hand text-2xl text-gold-soft -rotate-1 block">{t.texture_title}</span>
          </motion.div>

          <motion.h1
            className="font-thai font-bold text-5xl md:text-7xl text-indigo-deep"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {t.title}
          </motion.h1>

          <motion.p
            className="font-serif italic text-gray-500 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t.sub}
          </motion.p>
        </div>

        {/* Central Fish Visual */}
        <motion.div
          className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[2/1] flex items-center justify-center my-8 group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.img
            src="/images/pla-mor.jpg"
            alt="Pla Mor"
            className="w-full h-full object-contain drop-shadow-2xl filter contrast-110"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1, 0, -1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* 2. Cool Detail Description: Blueprint Style */}
        <section className="max-w-6xl mx-auto px-6 py-20 w-full">
          <Reveal width="100%">
            <div className="bg-indigo-deep text-paper p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">

              {/* Background Texture */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

              <div className="grid md:grid-cols-2 gap-12 relative z-10">

                {/* Left: Text */}
                <div className="space-y-8">
                  <Reveal delay={0.2} direction="right">
                    <h2 className="font-serif text-4xl text-gold-soft">{t.detail_title}</h2>
                  </Reveal>

                  <Reveal delay={0.3} direction="right">
                    <p className="font-sans text-blue-100 font-light leading-relaxed text-lg">
                      {t.detail_desc}
                    </p>
                  </Reveal>

                  <div className="space-y-4 pt-4">
                    <Reveal delay={0.4} direction="right">
                      <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                        <Shield className="text-gold-soft" />
                        <span className="font-serif text-lg">{t.feat_1}</span>
                      </div>
                    </Reveal>
                    <Reveal delay={0.5} direction="right">
                      <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                        <Feather className="text-gold-soft" />
                        <span className="font-serif text-lg">{t.feat_2}</span>
                      </div>
                    </Reveal>
                    <Reveal delay={0.6} direction="right">
                      <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                        <Maximize2 className="text-gold-soft" />
                        <span className="font-serif text-lg">{t.feat_3}</span>
                      </div>
                    </Reveal>
                  </div>
                </div>

                {/* Right: Visual */}
                <Reveal delay={0.4} direction="left">
                  <div className="h-full min-h-[300px] bg-white/5 rounded-lg border border-white/10 p-4 flex items-center justify-center relative">
                    <div className="absolute top-4 left-4 text-xs font-mono text-gold-soft tracking-widest">{t.fig_caption}</div>
                    <motion.img
                      src="https://inwfile.com/s-dy/ay87j1.jpg"
                      className="rounded shadow-lg w-3/4 h-3/4 object-cover rotate-3"
                      alt="Fabric Detail"
                      whileHover={{ scale: 1.05, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Sticker */}
                    <motion.div
                      className="absolute bottom-6 right-6 bg-paper text-indigo-deep px-3 py-1 text-xs font-bold uppercase tracking-widest transform -rotate-6 shadow"
                      initial={{ scale: 0, rotate: 0 }}
                      whileInView={{ scale: 1, rotate: -6 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      {t.approved}
                    </motion.div>
                  </div>
                </Reveal>

              </div>
            </div>
          </Reveal>
        </section >

        {/* 3. CTA */}
        <div className="text-center py-16">
          <Reveal delay={0.2} direction="up">
            <motion.button
              className="group relative inline-flex items-center justify-center px-12 py-5 font-serif text-xl text-indigo-deep transition-all duration-200 bg-gold-soft rounded-full shadow-xl hover:bg-white hover:text-indigo-deep"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-3">{t.cta}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Reveal>
        </div >


      </section >
    </div >
  );
};
