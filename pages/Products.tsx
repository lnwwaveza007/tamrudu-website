import React, { useState } from 'react';
import { ArrowRight, Leaf, Droplets, ShoppingBag, Star, ChevronRight, Shirt } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/Reveal';

interface Product {
  id: string;
  image: string;
  nameKey: keyof typeof translations['th']['products'];
  descKey: keyof typeof translations['th']['products'];
  tagKey: keyof typeof translations['th']['products'];
  accentColor: string;
  badgeColor: string;
  detailPath?: string; // optional link to detail page/section
}

const shirtProducts: Product[] = [
  {
    id: 'pla-kab',
    image: '/images/kajub.jpg',
    nameKey: 'plakab_name',
    descKey: 'plakab_desc',
    tagKey: 'plakab_tag',
    accentColor: 'from-teal-400/20 to-cyan-300/10',
    badgeColor: 'bg-teal-100 text-teal-700',
    detailPath: '#/fish-collection#pla-kab',
  },
  {
    id: 'pla-kador-ling',
    image: '/images/kadoorling.jpg',
    nameKey: 'plakador_name',
    descKey: 'plakador_desc',
    tagKey: 'plakador_tag',
    accentColor: 'from-indigo-400/20 to-blue-300/10',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    detailPath: '#/fish-collection#pla-kador-ling',
  },
  {
    id: 'pla-mor',
    image: '/images/pla-mor.jpg',
    nameKey: 'plamor_name',
    descKey: 'plamor_desc',
    tagKey: 'plamor_tag',
    accentColor: 'from-amber-400/20 to-orange-300/10',
    badgeColor: 'bg-amber-100 text-amber-700',
    detailPath: '#/fish-collection#pla-mor',
  },
];

const naturalProducts: Product[] = [
  {
    id: 'sea-salt',
    image: '/images/products/sea_salt.png',
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
    id: 'fiber',
    image: '/images/products/fiber.png',
    nameKey: 'fiber_name',
    descKey: 'fiber_desc',
    tagKey: 'fiber_tag',
    accentColor: 'from-emerald-400/20 to-green-300/10',
    badgeColor: 'bg-emerald-100 text-emerald-700',
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

// ─── Product Card ─────────────────────────────────────────────────────────────
const ProductCard: React.FC<{
  product: Product;
  tp: typeof translations['th']['products'];
  isShirt?: boolean;
}> = ({ product, tp, isShirt }) => {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer p-2"
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      {/* Shadow Container */}
      <div className="relative rounded-3xl transition-all duration-500 shadow-xl group-hover:shadow-2xl">
        {/* Content Container */}
        <div className="relative bg-white/60 backdrop-blur-md rounded-3xl border border-white/80 overflow-hidden">

          {/* Gradient glow on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${product.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

          {/* Image Area */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-b from-paper/80 to-white/60 flex items-center justify-center p-6">
            <motion.img
              src={product.image}
              alt={tp[product.nameKey]}
              className="h-full w-full object-contain drop-shadow-xl"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            />
            {/* Tag badge */}
            <div className={`absolute top-4 left-4 ${product.badgeColor} text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full`}>
              {tp[product.tagKey]}
            </div>
            {/* Shirt badge */}
            {isShirt && (
              <div className="absolute top-4 right-4 bg-indigo-deep/10 text-indigo-deep text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex items-center gap-1">
                <Shirt size={10} />
                <span>Shirt</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="relative p-6 pt-5">
            <h3 className="font-serif text-2xl text-indigo-deep mb-2 group-hover:text-indigo-900 transition-colors">
              {tp[product.nameKey]}
            </h3>
            <p className="font-sans text-gray-500 text-sm leading-relaxed font-light line-clamp-3">
              {tp[product.descKey]}
            </p>

            {/* Expand on hover */}
            <AnimatePresence>
              {active && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-indigo-deep/10 flex flex-wrap gap-3">
                    {isShirt && product.detailPath && (
                      <a
                        href={product.detailPath}
                        className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-indigo-deep hover:text-mangrove transition-colors group/btn"
                      >
                        <span>{tp.view_details}</span>
                        <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    )}
                    {!isShirt && (
                      <a
                        href="https://line.me/R/ti/p/@891hgjgk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-indigo-deep hover:text-mangrove transition-colors group/btn"
                      >
                        <span>{tp.order_line}</span>
                        <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
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

      {/* ── Fish Shirt Products ── */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <CategoryDivider
          icon={<Shirt size={18} />}
          label={tp.category_shirts}
          delay={0.1}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {shirtProducts.map((product, index) => (
            <Reveal key={product.id} delay={0.1 + index * 0.08} direction="up" overflowVisible={true}>
              <ProductCard product={product} tp={tp} isShirt />
            </Reveal>
          ))}
        </div>
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
              <ProductCard product={product} tp={tp} />
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
