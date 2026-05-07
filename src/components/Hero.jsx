import { motion } from 'framer-motion';
import { Phone, Download } from 'lucide-react';
import fotoProfil from '../assets/Foto.jpg';

const Hero = ({ t, waLink }) => {
  return (
    <section
      id="beranda"
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center w-full pt-28 md:pt-20">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <span className="text-purple-500 font-mono tracking-[0.1em] mb-4 md:mb-6 text-sm md:text-base block uppercase">
            {t.heroTitle}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 leading-[0.9] break-words">
            NANDA FITROH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              ARDIANSYAH.
            </span>
          </h1>

          <p className="text-slate-500 text-[11px] md:text-sm mb-8 md:mb-12 max-w-xl tracking-[0.15em] md:tracking-[0.2em] uppercase leading-relaxed font-light mx-auto lg:mx-0">
            {t.heroSub}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-6">
            <a
              href="#pengalaman"
              className="px-6 md:px-10 py-4 md:py-5 bg-white text-black font-black rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap"
            >
              {t.nav[2]}
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="px-6 md:px-10 py-4 md:py-5 border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center gap-2 md:gap-3 font-bold text-[10px] tracking-widest uppercase whitespace-nowrap"
            >
              <Phone size={16} /> WhatsApp
            </a>

            <a
              href="/CV_NANDA_FITROH.pdf"
              className="px-6 md:px-10 py-4 md:py-5 border border-white/10 rounded-full hover:bg-white/5 transition-all flex items-center gap-2 md:gap-3 font-bold text-[10px] tracking-widest uppercase whitespace-nowrap"
            >
              <Download size={16} /> CV
            </a>
          </div>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[340px] aspect-[3/4] rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/10 group shadow-2xl"
          >
            <img
              src={fotoProfil}
              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              alt="Profile"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;