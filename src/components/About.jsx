import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, Linkedin } from 'lucide-react';
import { IDCard } from './IDCard';
import profileImg from '../assets/Fotoku.jpg';

const defaultTranslations = {
  aboutHeader: "Tentang Saya",
  aboutSub: "Perpaduan logika kode dan estetika desain.",
  aboutDesc:
    "Saya membantu bisnis dan individu mengubah ide menjadi solusi digital yang indah dan berfungsi. Fokus saya adalah pada performa dan pengalaman pengguna.",
  stats: ['Tahun Pengalaman', 'Proyek Selesai', 'KLIEN PUAS']
};

const socialLinks = [
  {
    icon: <Instagram size={24} />,
    href: "https://instagram.com/nandafitroh",
    label: "Instagram"
  },
  {
    icon: <Github size={24} />,
    href: "https://github.com/nandafitroh",
    label: "GitHub"
  },
  {
    icon: <Linkedin size={24} />,
    href: "https://linkedin.com/in/nandafitroh",
    label: "LinkedIn"
  }
];

const About = ({ t = defaultTranslations }) => {
  return (
    <section
      id="tentang"
      className="py-16 md:py-20 px-4 md:px-10 bg-black min-h-fit selection:bg-purple-500/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto border border-purple-500/30 rounded-[2rem] md:rounded-[3rem] bg-zinc-950/40 backdrop-blur-md p-5 md:p-10 relative">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-purple-900/10 rounded-full blur-[120px] -z-10" />

        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center relative z-20">

          {/* 3D Interactive ID Card */}
          <div className="lg:col-span-5 flex items-center justify-center min-h-[350px] md:min-h-[500px]">
            <div className="w-full flex justify-center scale-90 sm:scale-100">
              <IDCard
                name="Nanda Fitroh Ardiansyah"
                role="Marketing and Coding"
                avatar={profileImg}
                idNumber="28-12-2000"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-white break-words"
            >
              {t.aboutHeader}
              <span className="text-purple-500">.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 italic text-[11px] md:text-sm mb-4 underline decoration-purple-500/40 underline-offset-8 tracking-[0.25em] md:tracking-widest uppercase font-mono"
            >
              {t.aboutSub}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-sm md:text-lg leading-relaxed mb-10 md:mb-16 font-light max-w-xl mx-auto lg:mx-0"
            >
              {t.aboutDesc}
            </motion.p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-white/10">
              {[
                { n: '3+', l: t.stats[0] },
                { n: '10+', l: t.stats[1] },
                { n: '35%', l: t.stats[2] }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <h3 className="text-2xl md:text-4xl font-black text-white hover:text-purple-500 transition-colors tracking-tighter mb-2">
                    {s.n}
                  </h3>

                  <p className="text-[9px] md:text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] md:tracking-widest leading-tight">
                    {s.l}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="mt-10 md:mt-16 flex justify-center lg:justify-start gap-6 md:gap-8 text-zinc-500">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 transition-all hover:scale-110 drop-shadow-[0_0_8px_rgba(168,85,247,0)] hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 md:mt-20 text-center opacity-20 pointer-events-none">
        <p className="text-[9px] md:text-[10px] font-mono tracking-[0.5em] md:tracking-[1em] uppercase text-white">
          Scroll to explore
        </p>
      </div>
    </section>
  );
};

export default About;