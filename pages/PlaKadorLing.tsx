import React from 'react';
import { Waves, Anchor, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

export const PlaKadorLing: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].plakador;

  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 overflow-hidden">

      {/* 1. Hero Section: Centered Fish */}
      <section className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center min-h-[85vh]">

        {/* Header Text */}
        <div className="space-y-2 mb-12">
          <motion.div
            initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 2, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          >
            <span className="font-hand text-2xl text-indigo-deep block">{t.legend}</span>
          </motion.div>

          <motion.h1
            className="font-thai font-bold text-5xl md:text-7xl text-indigo-deep"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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

        {/* Central Fish Visual - Long & Vertical */}
        <motion.div
          className="relative w-full max-w-lg aspect-[3/4] flex items-center justify-center my-4 group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            src="/images/kadoorling.jpg"
            alt="Pla Kador Ling"
            className="w-full h-full object-contain drop-shadow-2xl filter contrast-110"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>


        <motion.p
          className="font-sans text-gray-600 max-w-xl mx-auto text-lg leading-relaxed mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {t.hero_desc}
        </motion.p>
      </section >

      {/* 2. Cool Detail Description */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <Reveal width="100%">
          <div className="bg-white/50 rounded-3xl mt-10 border border-white shadow-sm p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Left: Texture Visuals */}
              <div className="order-2 md:order-1 relative group">
                <Reveal direction="right" delay={0.2}>
                  <div className="aspect-square bg-indigo-50 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                    <motion.img
                      src="https://www.nstda.or.th/agritec/wp-content/uploads/2021/06/textile-suannok-1.jpg"
                      className="w-full h-full object-cover"
                      alt="Indigo Dye"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </Reveal>

                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-indigo-deep/20 rounded-full border-dashed"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>

                {/* Badge */}
                <motion.div
                  className="absolute bottom-0 right-0 bg-indigo-deep text-white w-20 h-20 rounded-full flex items-center justify-center text-center p-2 font-serif text-xs shadow-xl z-20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {t.indigo_badge}
                </motion.div>
              </div>

              {/* Right: Text */}
              <div className="order-1 md:order-2 space-y-8">
                <Reveal direction="left" delay={0.3}>
                  <div className="flex items-center gap-4">
                    <h2 className="font-serif text-3xl text-indigo-deep italic">{t.mission_title}</h2>
                    <div className="h-px bg-indigo-deep flex-1"></div>
                  </div>
                </Reveal>

                <Reveal direction="left" delay={0.4}>
                  <p className="font-sans text-gray-600 font-light text-lg leading-loose">
                    {t.mission_desc}
                  </p>
                </Reveal>

                <div className="flex flex-col gap-4">
                  <Reveal direction="left" delay={0.5}>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-indigo-100 rounded text-indigo-deep"><Waves size={20} /></div>
                      <div>
                        <h4 className="font-bold font-serif text-gray-800">{t.wisdom_title}</h4>
                        <p className="text-sm text-gray-500">{t.wisdom_desc}</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal direction="left" delay={0.6}>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-mangrove/20 rounded text-mangrove"><Anchor size={20} /></div>
                      <div>
                        <h4 className="font-bold font-serif text-gray-800">{t.cons_title}</h4>
                        <p className="text-sm text-gray-500">{t.cons_desc}</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section >

      {/* 3. CTA */}
      <div className="text-center py-16">
        <Reveal direction="up" delay={0.2}>
          <motion.button
            className="group relative inline-flex items-center justify-center px-12 py-4 font-serif text-lg text-white transition-all duration-200 bg-mangrove rounded-sm shadow-xl hover:bg-[#6d4520]"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-3">{t.cta}</span>
            <Info className="w-5 h-5 opacity-70 group-hover:opacity-100" />
          </motion.button>
        </Reveal>
      </div >

    </div >
  );
};
