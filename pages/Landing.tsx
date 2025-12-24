import React from 'react';
import { ArrowRight, Leaf, Droplets, Waves, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

interface LandingProps {
  onNavigate: (path: string) => void;
}

export const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const t = translations[language].landing;

  return (
    <div className="min-h-screen flex flex-col bg-paper justify-center items-center">
      {/* Intro Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with better overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-paper/20 backdrop-blur-[2px] z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper/10 via-paper/40 to-paper z-10" />
          <img
            src="/images/hero-bg.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30 mix-blend-multiply transition-transform duration-[20s] hover:scale-110 ease-linear"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-deep/5 text-indigo-deep border border-indigo-deep/10 text-xs md:text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
              {t.sub_hero}
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-indigo-deep leading-tight mb-8 drop-shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Tam Rudu
          </motion.h1>

          <motion.p
            className="font-sans font-light text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.hero_desc}
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => onNavigate('/pla-kab')}
              className="group relative px-10 py-4 bg-indigo-deep text-paper overflow-hidden rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative font-serif italic z-10 flex items-center gap-3 text-lg">
                {t.cta} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-indigo-deep/40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="py-24 px-6 md:px-12 relative">
        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl text-indigo-deep mb-4">Our Values</h2>
              <div className="h-1 w-20 bg-gold-soft mx-auto rounded-full" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Leaf, title: t.val_1_title, desc: t.val_1_desc, color: 'text-mangrove', delay: 0.2 },
              { icon: Droplets, title: t.val_2_title, desc: t.val_2_desc, color: 'text-indigo-deep', delay: 0.3 },
              { icon: Waves, title: t.val_3_title, desc: t.val_3_desc, color: 'text-gold-soft', delay: 0.4 }
            ].map((item, idx) => (
              <Reveal key={idx} delay={item.delay} direction="up">
                <motion.div
                  className="bg-white/40 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/60 shadow-sm hover:shadow-xl transition-all duration-500 group"
                  whileHover={{ y: -8 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-6 ${item.color} flex items-center justify-center bg-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon size={32} />
                  </div>
                  <h3 className="font-serif text-2xl text-indigo-deep mb-4 text-center">{item.title}</h3>
                  <p className="font-sans text-gray-600 font-light text-center leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Line OA Contact Section */}
      <section className="py-24 px-6 md:px-12 flex-col">
        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.2} direction="up">
            <div className="relative bg-gradient-to-br from-[#06C755]/10 to-transparent p-12 md:p-16 rounded-[2.5rem] overflow-hidden border border-[#06C755]/20 text-center">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#06C755]/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#06C755]/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

              <h2 className="relative font-serif text-4xl md:text-5xl text-indigo-deep mb-6">
                {t.line_title}
              </h2>
              <p className="relative font-sans text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                {t.line_desc}
              </p>

              <div className="relative flex justify-center">
                <a
                  href="https://line.me/R/ti/p/@891hgjgk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#06C755] text-white font-sans font-bold text-lg rounded-full shadow-lg hover:bg-[#05b34c] hover:shadow-[#06C755]/40 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.771.039 1.086l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  <span>{t.line_button}</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facebook Feed Section */}
      <section className="pb-24 px-6 md:px-12 flex flex-col items-center">
        <div className="max-w-4xl mx-auto flex flex-col w-full items-center">
          <Reveal delay={0.2} direction="up">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-indigo-deep mb-4">
                {t.fb_title}
              </h2>
              <p className="font-sans text-gray-600 text-lg mb-6">
                {t.fb_desc}
              </p>
              <div className="h-0.5 w-16 bg-gray-300 mx-auto rounded-full" />
            </div>
          </Reveal>

          <Reveal delay={0.4} direction="up">
            <div className="relative w-full flex justify-center">
              <div
                className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl border border-indigo-deep/10 bg-white"
                style={{ minHeight: '500px' }}
              >
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKMUTT&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%"
                  height="500"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
