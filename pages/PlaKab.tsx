import React from 'react';
import { ArrowRight, Leaf, Palette, ScrollText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

export const PlaKab: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].plakab;

  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 overflow-hidden">

      {/* 1. Hero Section: Centered Fish */}
      <section className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center min-h-[85vh]">

        {/* Header Text */}
        <div className="space-y-2 mb-8">
          <motion.div
            initial={{ opacity: 0, rotate: 10 }}
            animate={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-hand text-2xl text-mangrove block">{t.rhythm}</span>
          </motion.div>

          <motion.h1
            className="font-thai font-bold text-5xl md:text-7xl text-indigo-deep"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.title}
          </motion.h1>

          <motion.p
            className="font-serif italic text-gray-500 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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

          {/* Decorative Frames (Sketch feel) */}
          <motion.div
            className="absolute inset-4 md:inset-10 border-2 border-dashed border-indigo-deep/20 rounded-lg"
            animate={{ rotate: [2, 1, 2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute inset-4 md:inset-10 border border-mangrove/20 rounded-lg bg-white/40"
            animate={{ rotate: [-1, -2, -1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          ></motion.div>

          {/* Fish Image */}
          <div className="relative z-10 w-64 md:w-96">
            <motion.img
              src="/images/kajub.jpg"
              alt="Pla Kab Illustration"
              className="w-full h-auto drop-shadow-2xl filter contrast-125 sepia-[.2]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            {/* Note Tag */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white p-3 shadow-md rotate-3 border border-gray-200 hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span className="font-hand text-xl text-indigo-deep">{t.pattern_tag}</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          className="font-sans text-gray-600 max-w-xl mx-auto text-lg leading-relaxed mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {t.hero_desc}
        </motion.p>
      </section>

      {/* 2. Cool Detail Description: "Field Notebook" Style */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: Detailed Story */}
          <div className="space-y-8">
            <Reveal direction="right" delay={0.2}>
              <div className="flex items-center gap-4">
                <div className="h-px bg-indigo-deep flex-1"></div>
                <h2 className="font-serif text-3xl text-indigo-deep italic">{t.dna_title}</h2>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.3}>
              <p className="font-sans text-gray-600 font-light text-lg leading-loose text-justify">
                {t.dna_desc}
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <Reveal direction="up" delay={0.4}>
                <motion.div
                  className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <Palette className="w-8 h-8 text-mangrove mb-3" />
                  <h4 className="font-serif font-bold text-gray-800">{t.mangrove}</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">{t.mangrove_desc}</p>
                </motion.div>
              </Reveal>

              <Reveal direction="up" delay={0.5}>
                <motion.div
                  className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <Leaf className="w-8 h-8 text-green-700 mb-3" />
                  <h4 className="font-serif font-bold text-gray-800">{t.onion}</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">{t.onion_desc}</p>
                </motion.div>
              </Reveal>
            </div>
          </div>

          {/* Right: Texture Visuals */}
          <Reveal direction="left" delay={0.4}>
            <div className="relative">
              <motion.div
                className="aspect-[4/5] bg-gray-100 rounded-sm overflow-hidden border-8 border-white shadow-xl"
                initial={{ rotate: 2 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.4 }}
              >
                <img src="https://hoshima-int.com/wp-content/uploads/2021/12/Cotton-Fabric.jpeg" className="w-full h-full object-cover" alt="Fabric Texture" />
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs uppercase text-gray-500">{t.fig_caption}</span>
                    <ScrollText size={16} className="text-indigo-deep" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Element */}
              <motion.div
                className="absolute -top-6 -left-6 bg-gold-soft text-white px-4 py-2 rounded-full font-serif italic shadow-lg"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {t.hand_screened}
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. CTA */}
      <div className="text-center py-12">
        <Reveal direction="up" delay={0.2}>
          <motion.button
            className="group relative inline-flex items-center justify-center px-10 py-4 font-serif text-lg text-white transition-all duration-200 bg-indigo-deep rounded-full hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-deep shadow-xl"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">{t.cta}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </Reveal>
      </div>

    </div>
  );
};
