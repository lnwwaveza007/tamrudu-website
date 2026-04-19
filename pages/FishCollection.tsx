import React, { useRef } from 'react';
import {
  ArrowRight, Leaf, Palette, ScrollText,
  Waves, Anchor, Info, Shield, Maximize2, Feather, ChevronDown
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

// ─── Section Divider ──────────────────────────────────────────────
const SectionDivider: React.FC<{ label: string }> = ({ label }) => (
  <div className="relative w-full flex items-center gap-6 max-w-5xl mx-auto px-6 py-4">
    <div className="flex-1 h-px bg-indigo-deep/15" />
    <span className="font-hand text-lg text-gold-soft whitespace-nowrap">{label}</span>
    <div className="flex-1 h-px bg-indigo-deep/15" />
  </div>
);

// ─── Main Component ───────────────────────────────────────────────
export const FishCollection: React.FC = () => {
  const { language } = useLanguage();
  const tkab = translations[language].plakab;
  const tkador = translations[language].plakador;
  const tmor = translations[language].plamor;
  const tnav = translations[language].nav;

  const kadorRef = useRef<HTMLElement>(null);
  const morRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-paper pt-24 pb-20 overflow-hidden">

      {/* ══════════════════════════════════════════
          SECTION 1 — PLA KAB
      ══════════════════════════════════════════ */}
      <section id="pla-kab" className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center min-h-[85vh]">

        {/* Header */}
        <div className="space-y-2 mb-8">
          <motion.div
            initial={{ opacity: 0, rotate: 10 }}
            animate={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-hand text-2xl text-mangrove block">{tkab.rhythm}</span>
          </motion.div>

          <motion.h2
            className="font-thai font-bold text-5xl md:text-7xl text-indigo-deep"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {tkab.title}
          </motion.h2>

          <motion.p
            className="font-serif italic text-gray-500 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {tkab.sub}
          </motion.p>
        </div>

        {/* Fish Visual */}
        <motion.div
          className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[2/1] flex items-center justify-center my-8 group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.div
            className="absolute inset-4 md:inset-10 border-2 border-dashed border-indigo-deep/20 rounded-lg"
            animate={{ rotate: [2, 1, 2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-4 md:inset-10 border border-mangrove/20 rounded-lg bg-white/40"
            animate={{ rotate: [-1, -2, -1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <div className="relative z-10 w-64 md:w-96">
            <motion.img
              src="/images/kajub.jpg"
              alt="Pla Kab Illustration"
              className="w-full h-auto drop-shadow-2xl filter contrast-125 sepia-[.2]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white p-3 shadow-md rotate-3 border border-gray-200 hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span className="font-hand text-xl text-indigo-deep">{tkab.pattern_tag}</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.p
          className="font-sans text-gray-600 max-w-xl mx-auto text-lg leading-relaxed mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {tkab.hero_desc}
        </motion.p>

        {/* Scroll hint */}
        <motion.button
          onClick={() => scrollTo(kadorRef)}
          className="mt-10 flex flex-col items-center gap-1 text-gray-400 hover:text-indigo-deep transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-sans uppercase tracking-widest">{tkador.title}</span>
          <ChevronDown size={20} />
        </motion.button>
      </section>

      {/* Detail — Pla Kab */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <Reveal direction="right" delay={0.2}>
              <div className="flex items-center gap-4">
                <div className="h-px bg-indigo-deep flex-1" />
                <h3 className="font-serif text-3xl text-indigo-deep italic">{tkab.dna_title}</h3>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.3}>
              <p className="font-sans text-gray-600 font-light text-lg leading-loose text-justify">
                {tkab.dna_desc}
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <Reveal direction="up" delay={0.4}>
                <motion.div
                  className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                >
                  <Palette className="w-8 h-8 text-mangrove mb-3" />
                  <h4 className="font-serif font-bold text-gray-800">{tkab.mangrove}</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">{tkab.mangrove_desc}</p>
                </motion.div>
              </Reveal>
              <Reveal direction="up" delay={0.5}>
                <motion.div
                  className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                >
                  <Leaf className="w-8 h-8 text-green-700 mb-3" />
                  <h4 className="font-serif font-bold text-gray-800">{tkab.onion}</h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">{tkab.onion_desc}</p>
                </motion.div>
              </Reveal>
            </div>
          </div>

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
                    <span className="font-mono text-xs uppercase text-gray-500">{tkab.fig_caption}</span>
                    <ScrollText size={16} className="text-indigo-deep" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-6 -left-6 bg-gold-soft text-white px-4 py-2 rounded-full font-serif italic shadow-lg"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {tkab.hand_screened}
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════════ */}
      <SectionDivider label="✦" />

      {/* ══════════════════════════════════════════
          SECTION 2 — PLA KADOR LING
      ══════════════════════════════════════════ */}
      <section id="pla-kador-ling" ref={kadorRef} className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-20 min-h-[85vh]">

        <div className="space-y-2 mb-12">
          <motion.div
            initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 2, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <span className="font-hand text-2xl text-indigo-deep block">{tkador.legend}</span>
          </motion.div>

          <motion.h2
            className="font-thai font-bold text-5xl md:text-7xl text-indigo-deep"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {tkador.title}
          </motion.h2>

          <motion.p
            className="font-serif italic text-gray-500 tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {tkador.sub}
          </motion.p>
        </div>

        <motion.div
          className="relative w-full max-w-lg aspect-[3/4] flex items-center justify-center my-4 group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/images/kadoorling.jpg"
            alt="Pla Kador Ling"
            className="w-full h-full object-contain drop-shadow-2xl filter contrast-110"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          className="font-sans text-gray-600 max-w-xl mx-auto text-lg leading-relaxed mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {tkador.hero_desc}
        </motion.p>

        <motion.button
          onClick={() => scrollTo(morRef)}
          className="mt-10 flex flex-col items-center gap-1 text-gray-400 hover:text-indigo-deep transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-sans uppercase tracking-widest">{tmor.title}</span>
          <ChevronDown size={20} />
        </motion.button>
      </section>

      {/* Detail — Pla Kador Ling */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <Reveal width="100%">
          <div className="bg-white/50 rounded-3xl mt-10 border border-white shadow-sm p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
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
                />
                <motion.div
                  className="absolute bottom-0 right-0 bg-indigo-deep text-white w-20 h-20 rounded-full flex items-center justify-center text-center p-2 font-serif text-xs shadow-xl z-20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {tkador.indigo_badge}
                </motion.div>
              </div>

              <div className="order-1 md:order-2 space-y-8">
                <Reveal direction="left" delay={0.3}>
                  <div className="flex items-center gap-4">
                    <h3 className="font-serif text-3xl text-indigo-deep italic">{tkador.mission_title}</h3>
                    <div className="h-px bg-indigo-deep flex-1" />
                  </div>
                </Reveal>
                <Reveal direction="left" delay={0.4}>
                  <p className="font-sans text-gray-600 font-light text-lg leading-loose">
                    {tkador.mission_desc}
                  </p>
                </Reveal>
                <div className="flex flex-col gap-4">
                  <Reveal direction="left" delay={0.5}>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-indigo-100 rounded text-indigo-deep"><Waves size={20} /></div>
                      <div>
                        <h4 className="font-bold font-serif text-gray-800">{tkador.wisdom_title}</h4>
                        <p className="text-sm text-gray-500">{tkador.wisdom_desc}</p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal direction="left" delay={0.6}>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-mangrove/20 rounded text-mangrove"><Anchor size={20} /></div>
                      <div>
                        <h4 className="font-bold font-serif text-gray-800">{tkador.cons_title}</h4>
                        <p className="text-sm text-gray-500">{tkador.cons_desc}</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════════ */}
      <SectionDivider label="✦" />

      {/* ══════════════════════════════════════════
          SECTION 3 — PLA MOR
      ══════════════════════════════════════════ */}
      <section id="pla-mor" ref={morRef} className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-20 min-h-[85vh]">

        <div className="space-y-2 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="font-hand text-2xl text-gold-soft -rotate-1 block">{tmor.texture_title}</span>
          </motion.div>

          <motion.h2
            className="font-thai font-bold text-5xl md:text-7xl text-indigo-deep"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {tmor.title}
          </motion.h2>

          <motion.p
            className="font-serif italic text-gray-500 tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {tmor.sub}
          </motion.p>
        </div>

        <motion.div
          className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[2/1] flex items-center justify-center my-8 group"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/images/pla-mor.jpg"
            alt="Pla Mor"
            className="w-full h-full object-contain drop-shadow-2xl filter contrast-110"
            animate={{ y: [0, -15, 0], rotate: [0, 1, 0, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          className="font-sans text-gray-600 max-w-xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {tmor.hero_desc}
        </motion.p>
      </section>

      {/* Detail — Pla Mor */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Reveal width="100%">
          <div className="bg-indigo-deep text-paper p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <Reveal delay={0.2} direction="right">
                  <h3 className="font-serif text-4xl text-gold-soft">{tmor.detail_title}</h3>
                </Reveal>
                <Reveal delay={0.3} direction="right">
                  <p className="font-sans text-blue-100 font-light leading-relaxed text-lg">{tmor.detail_desc}</p>
                </Reveal>
                <div className="space-y-4 pt-4">
                  <Reveal delay={0.4} direction="right">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                      <Shield className="text-gold-soft" />
                      <span className="font-serif text-lg">{tmor.feat_1}</span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.5} direction="right">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                      <Feather className="text-gold-soft" />
                      <span className="font-serif text-lg">{tmor.feat_2}</span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.6} direction="right">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                      <Maximize2 className="text-gold-soft" />
                      <span className="font-serif text-lg">{tmor.feat_3}</span>
                    </div>
                  </Reveal>
                </div>
              </div>

              <Reveal delay={0.4} direction="left">
                <div className="h-full min-h-[300px] bg-white/5 rounded-lg border border-white/10 p-4 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4 text-xs font-mono text-gold-soft tracking-widest">{tmor.fig_caption}</div>
                  <motion.img
                    src="https://inwfile.com/s-dy/ay87j1.jpg"
                    className="rounded shadow-lg w-3/4 h-3/4 object-cover rotate-3"
                    alt="Fabric Detail"
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-6 right-6 bg-paper text-indigo-deep px-3 py-1 text-xs font-bold uppercase tracking-widest transform -rotate-6 shadow"
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {tmor.approved}
                  </motion.div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════
          BACK TO HOME
      ══════════════════════════════════════════ */}
      <div className="w-full text-center py-12 flex flex-col items-center">
        <Reveal direction="up" delay={0.2}>
          <motion.a
            href="#/"
            className="group relative inline-flex items-center justify-center px-10 py-3 font-serif text-lg text-indigo-deep border transition-all duration-200 border-indigo-deep rounded-full hover:bg-indigo-deep hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">{tnav.back_home}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </Reveal>
      </div>

    </div>
  );
};
