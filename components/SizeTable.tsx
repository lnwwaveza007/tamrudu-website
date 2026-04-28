import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const sizeData = [
  { size: 'S',    chest: 34, length: 25,   arm: 7.5 },
  { size: 'M',    chest: 37, length: 27,   arm: 8   },
  { size: 'L',    chest: 40, length: 28,   arm: 9   },
  { size: 'XL',   chest: 43, length: 29,   arm: 10  },
  // { size: 'XXL',  chest: 46, length: 29.5, arm: 11  },
  // { size: 'XXXL', chest: 50, length: 30,   arm: 11  },
];

const labels = {
  th: {
    button: 'ตารางไซส์',
    title: 'ตารางไซส์ (UNISEX)',
    unit: 'หน่วย: นิ้ว',
    size: 'ขนาด / SIZE',
    chest: 'รอบอก / CHEST',
    length: 'ความยาว / LENGTH',
    arm: 'ความยาวแขน / ARM LENGTH',
    note: '**หมายเหตุ: อาจมีความคลาดเคลื่อน +/- ไม่เกินครึ่งนิ้ว**',
  },
  en: {
    button: 'Size Guide',
    title: 'Size Chart (UNISEX)',
    unit: 'Unit: inches',
    size: 'SIZE',
    chest: 'CHEST',
    length: 'LENGTH',
    arm: 'ARM LENGTH',
    note: '**Note: Measurements may vary ± 0.5 inches**',
  },
};

export const SizeTable: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const l = labels[language];

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-5 py-2.5 border border-indigo-deep text-indigo-deep font-serif rounded-full hover:bg-indigo-deep hover:text-white transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Ruler className="w-4 h-4" />
        {l.button}
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-indigo-deep text-white">
                <div className="flex items-center gap-3">
                  <Ruler className="w-5 h-5 text-gold-soft" />
                  <h3 className="font-serif text-lg">{l.title}</h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Diagram hint */}
              <div className="px-6 pt-5 pb-2 flex items-center justify-between">
                <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">{l.unit}</p>
                <div className="flex gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="inline-block w-3 h-0.5 bg-indigo-deep/40 border-dashed border-t border-indigo-deep/60"></span>
                    {l.chest}
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="px-6 pb-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-indigo-deep/20">
                      {[l.size, l.chest, l.length, l.arm].map((h) => (
                        <th
                          key={h}
                          className="py-3 px-2 text-center font-serif text-indigo-deep text-xs uppercase tracking-wide whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeData.map((row, i) => (
                      <motion.tr
                        key={row.size}
                        className="border-b border-gray-100 hover:bg-indigo-50/50 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        <td className="py-3 px-2 text-center font-bold font-serif text-indigo-deep text-base">
                          {row.size}
                        </td>
                        <td className="py-3 px-2 text-center text-gray-700">{row.chest}</td>
                        <td className="py-3 px-2 text-center text-gray-700">{row.length}</td>
                        <td className="py-3 px-2 text-center text-gray-700">{row.arm}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Note */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center font-sans italic">{l.note}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
