import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronRight, X, Maximize2 } from 'lucide-react';
import certEG from '../assets/EG.jpg';
import certPOA from '../assets/POA.jpg';
import certMarketing from '../assets/MARKETING.jpg';

export default function Certificates({ t = {} }) {
  const [selectedImg, setSelectedImg] = useState(null);

  const myCerts = [
    {
      id: 1,
      title: "Electrical Engineering",
      issuer: "Badan Nasional Sertifikasi Profesi",
      date: "Des 2024",
      image: certEG
    },
    {
      id: 2,
      title: "Computer Operation",
      issuer: "Badan Nasional Sertifikasi Profesi",
      date: "Jan 2024",
      image: certPOA
    },
    {
      id: 3,
      title: "Konsultan Bisnis",
      issuer: "Cari Ilmu",
      date: "Des 2023",
      image: certMarketing
    }
  ];

  return (
    <section
      id="sertifikat"
      className="py-20 md:py-32 px-4 sm:px-6 bg-zinc-950/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter mb-12 md:mb-20 uppercase flex items-center gap-3 md:gap-6 text-white break-words"
        >
          <Award className="text-purple-500 shrink-0" size={32} />
          {t.certTitle || 'Sertifikat'}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {myCerts.map((c, index) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group relative"
            >
              
              <div className="aspect-[4/3] relative overflow-hidden bg-zinc-800">
                <img
                  src={c.image}
                  className="w-full h-full object-cover opacity-70 md:opacity-60 group-hover:opacity-100 transition-all duration-700 scale-105 md:scale-110 group-hover:scale-100"
                  alt={c.title}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute top-4 md:top-6 right-4 md:right-6 p-2.5 md:p-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-purple-500 transition-transform group-hover:scale-110">
                  <Award size={18} />
                </div>

                {/* Ikon Zoom */}
                <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedImg(c.image)}
                    className="cursor-pointer p-3 md:p-4 bg-purple-500 rounded-full text-white shadow-xl shadow-purple-500/20 transform md:translate-y-4 md:group-hover:translate-y-0 transition-all"
                  >
                    <Maximize2 size={22} />
                  </motion.div>
                </div>
              </div>

              <div className="p-5 md:p-8">
                <h4 className="font-black text-lg md:text-xl mb-3 tracking-tight italic uppercase text-white break-words leading-snug">
                  {c.title}
                </h4>

                <p className="text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-[0.15em] md:tracking-[0.3em] mb-5 md:mb-6 leading-relaxed break-words">
                  {t.issuedBy || 'Diterbitkan oleh'} {c.issuer} • {c.date}
                </p>

                <button
                  onClick={() => setSelectedImg(c.image)}
                  className="text-[10px] font-black text-purple-500 uppercase tracking-[0.2em] md:tracking-widest flex items-center gap-2 hover:text-white transition-colors group/btn"
                >
                  View Credentials

                  <ChevronRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Image Viewer */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-3 md:p-10 cursor-zoom-out"
          >
            
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-4 md:top-6 right-4 md:right-6 text-white bg-white/10 hover:bg-white/20 p-2.5 md:p-3 rounded-full backdrop-blur-lg z-50 transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={22} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center p-1 md:p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg}
                className="max-w-full max-h-[85vh] object-contain rounded-xl md:rounded-2xl shadow-2xl border border-white/10"
                alt="Sertifikat Diperbesar"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}