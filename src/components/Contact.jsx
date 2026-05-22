import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, Github, Linkedin, Mail } from 'lucide-react';

const LogoNAF = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="relative inline-flex items-center justify-center mb-10 md:mb-12 group cursor-pointer"
  >
    {/* HD Aura Background */}
    <div className="absolute -inset-6 md:-inset-8 bg-purple-600/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    <div className="relative flex items-center px-4 md:px-8 py-3 md:py-4">
      
      {/* N */}
      <motion.span
        whileHover={{ y: -5, rotate: -2 }}
        className="text-5xl sm:text-6xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 relative z-10 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
      >
        N
      </motion.span>

      {/* A */}
      <div className="relative -ml-1 md:-ml-4">
        <motion.span
          animate={{
            textShadow: [
              "0 0 20px rgba(168,85,247,0.4)",
              "0 0 40px rgba(168,85,247,0.8)",
              "0 0 20px rgba(168,85,247,0.4)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl sm:text-6xl md:text-8xl font-black italic tracking-tighter text-purple-500 relative z-20"
        >
          A
        </motion.span>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-400 blur-[40px] opacity-20 z-0" />
      </div>

      {/* F */}
      <motion.span
        whileHover={{ y: -5, rotate: 2 }}
        className="text-5xl sm:text-6xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-zinc-500 via-zinc-200 to-white -ml-1 md:-ml-4 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
      >
        F
      </motion.span>

      {/* Glossy Overlay */}
      <motion.div
        animate={{ x: ['-150%', '150%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none z-30"
      />
    </div>

    {/* Minimalist Tech Bar */}
    <div className="absolute -bottom-2 w-full flex items-center justify-center gap-2">
      <div className="h-[2px] w-4 bg-zinc-800 rounded-full" />

      <motion.div
        animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-[2px] w-10 md:w-12 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
      />

      <div className="h-[2px] w-4 bg-zinc-800 rounded-full" />
    </div>
  </motion.div>
);

const defaultTranslations = {
  contactTitle: "Berkolaborasi",
  waText: "WhatsApp",
  emailText: "fitrohnanda74@gmail.com"
};

const socialLinks = [
  {
    icon: <Instagram size={22} />,
    href: "https://www.instagram.com/fitroh_ardiansyah/",
    label: "Instagram",
    color: "#E4405F"
  },
  {
    icon: <Github size={22} />,
    href: "https://github.com/Nan-Devv",
    label: "GitHub",
    color: "#fff"
  },
  {
    icon: <Linkedin size={22} />,
    href: "https://www.linkedin.com/in/nanda-fitroh-ardiansyah-79a1a4365/",
    label: "LinkedIn",
    color: "#0A66C2"
  }
];

const Contact = ({ t = defaultTranslations, waLink = "#" }) => {
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=nandafitrohardiansyah2812@gmail.com&su=Halo nanda${t.emailText}`;

  return (
    <section
      id="kontak"
      className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-black"
    >
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] md:h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <LogoNAF />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 uppercase leading-tight text-white break-words"
        >
          {t.contactTitle}
          <span className="text-purple-500">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 text-sm md:text-lg font-light mb-10 md:mb-12 max-w-lg mx-auto leading-relaxed px-2"
        >
          {t.Cont}
        </motion.p>

        <div className="flex flex-col items-center gap-8 md:gap-10">
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-6 md:px-8 py-4 rounded-xl transition-all hover:bg-purple-600 hover:text-white font-bold text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-widest w-full sm:w-auto"
            >
              {t.waText}
              <Phone size={18} />
            </motion.a>

            <motion.a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center gap-3 bg-zinc-900 border border-white/10 px-6 md:px-8 py-4 rounded-xl transition-all hover:border-purple-500/50 hover:bg-zinc-800 text-white font-bold text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-widest w-full sm:w-auto"
            >
              Email
              <Mail size={18} />
            </motion.a>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-8 md:gap-12">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, color: link.color }}
                className="text-zinc-600 transition-all duration-300"
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Email Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            className="text-zinc-700 font-mono text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.5em] mt-4 md:mt-8 break-all px-2"
          >
            {t.emailText}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;