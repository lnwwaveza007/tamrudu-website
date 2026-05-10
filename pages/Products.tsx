import React, { useState } from 'react';
import { ArrowRight, Leaf, Droplets, ShoppingBag, Star, ChevronRight, Shirt, BookOpen, X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { createPortal } from 'react-dom';

// ─── Image Modal Component ───────────────────────────────────────────────────
const ImageModal: React.FC<{ isOpen: boolean; onClose: () => void; imageSrc: string }> = ({ isOpen, onClose, imageSrc }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out"
          onClick={onClose}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/80 rounded-full p-2 z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X size={24} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            src={imageSrc}
            alt="Full screen preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};



// ─── Shirt Data ──────────────────────────────────────────────────────────────
interface FishPattern {
  id: string;
  patternThumb: string;
  accentColor: string;
  badgeColor: string;
  storyPath: string;
  nameKey: 'plakab_name' | 'plakador_name' | 'plamor_name';
  descKey: 'plakab_desc' | 'plakador_desc' | 'plamor_desc';
  tagKey: 'plakab_tag' | 'plakador_tag' | 'plamor_tag';
}

const fishPatterns: FishPattern[] = [
  {
    id: 'pla-kab',
    patternThumb: '/images/kajub.jpg',
    accentColor: 'from-teal-400/20 to-cyan-300/10',
    badgeColor: 'bg-teal-100 text-teal-700',
    storyPath: '#/fish-collection#pla-kab',
    nameKey: 'plakab_name',
    descKey: 'plakab_desc',
    tagKey: 'plakab_tag',
  },
  {
    id: 'pla-kador-ling',
    patternThumb: '/images/kadoorling.jpg',
    accentColor: 'from-indigo-400/20 to-blue-300/10',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    storyPath: '#/fish-collection#pla-kador-ling',
    nameKey: 'plakador_name',
    descKey: 'plakador_desc',
    tagKey: 'plakador_tag',
  },
  {
    id: 'pla-mor',
    patternThumb: '/images/pla-mor.jpg',
    accentColor: 'from-amber-400/20 to-orange-300/10',
    badgeColor: 'bg-amber-100 text-amber-700',
    storyPath: '#/fish-collection#pla-mor',
    nameKey: 'plamor_name',
    descKey: 'plamor_desc',
    tagKey: 'plamor_tag',
  },
];

const shirtStyles = [
  { id: 'style1', image: '/images/products/shirt1.png' },
  { id: 'style2', image: '/images/products/shirt2.png' },
];

// ─── Natural Product Data ─────────────────────────────────────────────────────
interface NaturalProduct {
  id: string;
  image: string;
  nameKey: keyof typeof translations['th']['products'];
  descKey: keyof typeof translations['th']['products'];
  tagKey: keyof typeof translations['th']['products'];
  accentColor: string;
  badgeColor: string;
}

const naturalProducts: NaturalProduct[] = [
  {
    id: 'sea-salt',
    image: '/images/products/spa-salt.png',
    nameKey: 'sea_salt_name',
    descKey: 'sea_salt_desc',
    tagKey: 'sea_salt_tag',
    accentColor: 'from-sky-400/20 to-blue-300/10',
    badgeColor: 'bg-sky-100 text-sky-700',
  },
  {
    id: 'nose-rice-berry',
    image: '/images/products/nose_rice_berry.png',
    nameKey: 'nose_rice_name',
    descKey: 'nose_rice_desc',
    tagKey: 'nose_rice_tag',
    accentColor: 'from-amber-400/20 to-yellow-300/10',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 'nampik',
    image: '/images/products/nampik.png',
    nameKey: 'nampik_name',
    descKey: 'nampik_desc',
    tagKey: 'nampik_tag',
    accentColor: 'from-red-400/20 to-orange-300/10',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    id: 'coconut-soap',
    image: '/images/products/coconut_soap.png',
    nameKey: 'coconut_name',
    descKey: 'coconut_desc',
    tagKey: 'coconut_tag',
    accentColor: 'from-orange-400/20 to-amber-200/10',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
  {
    id: 'rice-berry',
    image: '/images/products/rice_berry.png',
    nameKey: 'riceberry_name',
    descKey: 'riceberry_desc',
    tagKey: 'riceberry_tag',
    accentColor: 'from-violet-400/20 to-purple-300/10',
    badgeColor: 'bg-violet-100 text-violet-700',
  },
  {
    id: 'dyed-silk',
    image: '/images/products/dyed_silk.png',
    nameKey: 'dyed_silk_name',
    descKey: 'dyed_silk_desc',
    tagKey: 'dyed_silk_tag',
    accentColor: 'from-purple-400/20 to-pink-300/10',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
];

// ─── Category Divider ─────────────────────────────────────────────────────────
const CategoryDivider: React.FC<{ icon: React.ReactNode; label: string; delay?: number }> = ({ icon, label, delay = 0 }) => (
  <Reveal delay={delay} direction="up" overflowVisible>
    <div className="flex items-center gap-4 mb-10 mt-4">
      <div className="flex-1 h-px bg-indigo-deep/15" />
      <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-deep/15 bg-white/60 backdrop-blur-sm shadow-sm">
        <span className="text-indigo-deep">{icon}</span>
        <span className="font-serif italic text-indigo-deep text-lg tracking-wide">{label}</span>
      </div>
      <div className="flex-1 h-px bg-indigo-deep/15" />
    </div>
  </Reveal>
);

// ─── Shirt Card (1 card, pattern × style) ────────────────────────────────────
const ShirtCard: React.FC<{ tp: typeof translations['th']['products'] }> = ({ tp }) => {
  const [activePattern, setActivePattern] = useState(0);
  const [activeStyle, setActiveStyle] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pattern = fishPatterns[activePattern];
  const style = shirtStyles[activeStyle];

  const handlePatternChange = (i: number) => {
    setActivePattern(i);
  };

  return (
    <>
    <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} imageSrc={style.image} />
    <motion.div
      className="relative w-full max-w-sm mx-auto p-2"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
        <div className="relative bg-white/60 backdrop-blur-md rounded-3xl border border-white/80 overflow-hidden">

          {/* Gradient glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${pattern.accentColor} transition-all duration-500 pointer-events-none`} />

          {/* Shirt Image */}
          <div 
            className="relative h-72 overflow-hidden bg-gradient-to-b from-paper/80 to-white/60 flex items-center justify-center p-6 cursor-zoom-in group/img"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors z-10 flex items-center justify-center pointer-events-none">
              <ZoomIn className="text-black/0 group-hover/img:text-indigo-deep/50 w-8 h-8 transition-colors transform scale-50 group-hover/img:scale-100 duration-300" />
            </div>
            <AnimatePresence mode="wait">
              <motion.img
                key={`${pattern.id}-${style.id}`}
                src={style.image}
                alt="Handmade Shirt"
                className="h-full w-full object-contain drop-shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>

            {/* Pattern badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={pattern.tagKey}
                className={`absolute top-4 left-4 ${pattern.badgeColor} text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
              >
                {tp[pattern.tagKey]}
              </motion.div>
            </AnimatePresence>

            {/* Shirt badge */}
            <div className="absolute top-4 right-4 bg-indigo-deep/10 text-indigo-deep text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex items-center gap-1">
              <Shirt size={10} />
              <span>Shirt</span>
            </div>
          </div>

          <div className="relative px-6 pt-5 pb-5 space-y-5">

            {/* Style toggle — 2 image dots, no label */}
            <div className="flex gap-3">
              {shirtStyles.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStyle(i)}
                  className={`relative w-11 h-11 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    i === activeStyle
                      ? 'border-indigo-deep scale-110 shadow-md'
                      : 'border-transparent opacity-55 hover:opacity-90 hover:scale-105'
                  }`}
                  aria-label={`Shirt style ${i + 1}`}
                >
                  <img src={s.image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Name + story */}
            <div>
              <h3 className="font-serif text-2xl text-indigo-deep mb-1">
                {tp.shirt_name}
              </h3>

              <a
                href={pattern.storyPath}
                className="mt-2 inline-flex items-center gap-2 text-sm font-sans font-semibold text-indigo-deep hover:text-mangrove transition-colors group/btn"
              >
                <BookOpen size={14} />
                <span>{tp.read_story}</span>
                <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

// ─── Natural Product Card ─────────────────────────────────────────────────────
const NaturalCard: React.FC<{
  product: NaturalProduct;
  tp: typeof translations['th']['products'];
}> = ({ product, tp }) => {
  const [active, setActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} imageSrc={product.image} />
    <motion.div
      className="relative group cursor-pointer p-2"
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative rounded-3xl transition-all duration-500 shadow-xl group-hover:shadow-2xl">
        <div className="relative bg-white/60 backdrop-blur-md rounded-3xl border border-white/80 overflow-hidden">

          <div className={`absolute inset-0 bg-gradient-to-br ${product.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

          <div 
            className="relative h-64 overflow-hidden bg-gradient-to-b from-paper/80 to-white/60 flex items-center justify-center p-6 cursor-zoom-in group/img"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors z-10 flex items-center justify-center pointer-events-none">
              <ZoomIn className="text-black/0 group-hover/img:text-indigo-deep/50 w-8 h-8 transition-colors transform scale-50 group-hover/img:scale-100 duration-300" />
            </div>
            <motion.img
              src={product.image}
              alt={tp[product.nameKey]}
              className="h-full w-full object-contain drop-shadow-xl"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            />
            <div className={`absolute top-4 left-4 ${product.badgeColor} text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
              {tp[product.tagKey]}
            </div>
          </div>

          <div className="relative p-6 pt-5">
            <h3 className="font-serif text-2xl text-indigo-deep mb-2 group-hover:text-indigo-900 transition-colors">
              {tp[product.nameKey]}
            </h3>
            <p className="font-sans text-gray-500 text-sm leading-relaxed font-light line-clamp-3">
              {tp[product.descKey]}
            </p>

            <AnimatePresence>
              {active && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-indigo-deep/10">
                    <a
                      href="https://line.me/R/ti/p/@891hgjgk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-indigo-deep hover:text-mangrove transition-colors group/btn"
                    >
                      <span>{tp.order_line}</span>
                      <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
export const Products: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const tp = t.products;

  return (
    <div className="min-h-screen bg-paper pt-24 pb-20">

      {/* Hero Header */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-deep/5 via-transparent to-gold-soft/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">

          <Reveal delay={0.1}>
            <motion.span
              className="inline-block py-1 px-4 rounded-full bg-mangrove/10 text-mangrove border border-mangrove/20 text-xs font-bold tracking-[0.2em] uppercase mb-6"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {tp.sub_hero}
            </motion.span>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="font-serif text-5xl md:text-7xl text-indigo-deep mb-6 leading-tight">
              {tp.hero_title}
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-sans font-light text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {tp.hero_desc}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10 text-sm text-gray-500 font-sans">
              <div className="flex items-center gap-2">
                <Leaf size={16} className="text-mangrove" />
                <span>{tp.badge_natural}</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets size={16} className="text-indigo-deep" />
                <span>{tp.badge_origin}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-gold-soft" />
                <span>{tp.badge_quality}</span>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── Handmade Shirt — single card, 3 variants ── */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <CategoryDivider
          icon={<Shirt size={18} />}
          label={tp.category_shirts}
          delay={0.1}
        />
        <Reveal delay={0.15} direction="up" overflowVisible>
          <ShirtCard tp={tp} />
        </Reveal>
      </section>

      {/* ── Natural Goods ── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <CategoryDivider
          icon={<Leaf size={18} />}
          label={tp.category_natural}
          delay={0.1}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {naturalProducts.map((product, index) => (
            <Reveal key={product.id} delay={0.1 + index * 0.08} direction="up" overflowVisible={true}>
              <NaturalCard product={product} tp={tp} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-5xl mx-auto px-6 pb-8 flex justify-center">
        <Reveal delay={0.2} direction="up" overflowVisible={true}>
          <div className="relative bg-indigo-deep text-paper rounded-3xl p-10 md:p-14 overflow-hidden text-center shadow-2xl">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gold-soft/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-mangrove/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <ShoppingBag className="w-10 h-10 text-gold-soft mx-auto mb-4" />
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                {tp.cta_title}
              </h2>
              <p className="font-sans text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                {tp.cta_desc}
              </p>
              <a
                href="https://line.me/R/ti/p/@891hgjgk"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-[#06C755] text-white font-sans font-bold text-lg rounded-full shadow-lg hover:bg-[#05b34c] hover:shadow-[#06C755]/40 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.771.039 1.086l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                <span>{tp.cta_button}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Back to Home */}
      <div className="text-center pt-4 pb-8 flex justify-center">
        <Reveal delay={0.1} direction="up" overflowVisible={true}>
          <motion.a
            href="#/"
            className="group inline-flex items-center justify-center px-10 py-3 font-serif text-lg text-indigo-deep border border-indigo-deep rounded-full hover:bg-indigo-deep hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">{t.nav.back_home}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </Reveal>
      </div>

    </div>
  );
};
