import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = ({ t }) => {
  const experiences = [
    {
      year: "2023 - PRESENT",
      role: "Sales Supervisor",
      company: "PT Arta Kencana Sentosa Indonesia",
      desc: t.exp1,
      skills: ["Sales Management", "Data Analysis", "Customer Relationship Management"]
    },
    {
      year: "2022 - 2023",
      role: "Operator Produksi",
      company: "PT Indonesia Lifa Algae Karaginan International",
      desc: t.exp2,
      skills: ["Quality Control", "Chemical Handling", "Production Management"]
    },
    {
      year: "Jun 2021 - Agust 2021",
      role: "Collection Recovery Field",
      company: "PT Federal International Finance",
      desc: t.exp3,
      skills: ["Field Reporting", "Communication Skills", "Negotiation"]
    }
  ];

  return (
    <section
      id="pengalaman"
      className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 md:mb-24 gap-6 md:gap-8">
        
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase flex items-center gap-3 break-words">
          <Briefcase
            className="text-purple-500 drop-shadow-[0_0_6px_rgba(168,85,247,0.6)] shrink-0"
            size={32}
          />
          {t.experienceTitle || "EXPERIENCE"}.
        </h2>

        <p className="text-slate-500 text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.5em] uppercase italic border-b border-purple-500/30 pb-2 text-left md:text-right">
          Professional Journey / 2021 - 2026
        </p>
      </div>

      <div className="relative">
        
        {/* Garis Tengah Timeline */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/0 via-purple-500 to-purple-500/0 hidden md:block" />

        <div className="space-y-14 md:space-y-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              
              {/* Titik di Garis */}
              <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 z-10 hidden md:block">
                <div className="w-4 h-4 bg-black border-2 border-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
              </div>

              {/* Year Label */}
              <div
                className={`w-full md:w-1/2 ${
                  i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <span className="text-3xl sm:text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-zinc-600 tracking-tighter italic leading-none break-words">
                  {exp.year}
                </span>
              </div>

              {/* Content Box */}
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ x: i % 2 === 0 ? 10 : -10 }}
                  className="p-5 sm:p-6 md:p-12 bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-[2rem] md:rounded-[3rem] hover:border-purple-500/30 transition-all duration-500 group"
                >
                  
                  <div className="flex items-start sm:items-center gap-4 mb-5 md:mb-6">
                    <div className="p-3 bg-purple-600/20 rounded-2xl text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">
                      <Briefcase size={22} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight break-words">
                        {exp.role}
                      </h3>

                      <p className="text-purple-500 font-mono text-[9px] md:text-[10px] tracking-[0.15em] md:tracking-widest font-black uppercase break-words leading-relaxed">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {exp.skills.map((skill, si) => (
                      <span
                        key={si}
                        className="px-3 md:px-4 py-1.5 bg-white/5 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] md:tracking-widest text-slate-500 border border-white/5 group-hover:border-purple-500/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;