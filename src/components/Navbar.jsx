import { Languages } from 'lucide-react';

const Navbar = ({ scrolled, lang, setLang, t }) => {
  return (
    <nav
      className={`fixed z-[100] transition-all duration-700 ease-in-out ${
        scrolled
          ? 'top-3 right-3 md:right-12 translate-x-0 w-max'
          : 'top-5 left-1/2 -translate-x-1/2 w-[95%] md:w-max max-w-[95vw]'
      }`}
    >
      <div
        className={`bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full flex items-center gap-3 md:gap-6 shadow-2xl transition-all duration-500 overflow-hidden ${
          scrolled ? 'px-4 py-2' : 'px-4 md:px-9 py-3 md:py-4'
        }`}
      >
        {!scrolled && (
          <div className="font-black text-purple-500 tracking-tighter text-base md:text-xl mr-2 md:mr-4 whitespace-nowrap">
            Nan_Dev
          </div>
        )}

        <div
          className={`flex flex-wrap justify-center gap-3 md:gap-10 ${
            scrolled ? 'hidden md:flex' : 'flex'
          }`}
        >
          {t.nav.map((item, i) => {
            const sectionMap = {
              about: 'tentang',
              contact: 'kontak',
              home: 'beranda',
              experience: 'pengalaman',
              certificates: 'sertifikat',
            };

            const href =
              sectionMap[item.toLowerCase()] || item.toLowerCase();

            return (
              <a
                key={i}
                href={`#${href}`}
                className="text-xs md:text-[10px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap"
              >
                {item}
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
          className="bg-white/10 hover:bg-white hover:text-black transition-all px-3 md:px-4 py-1.5 rounded-full text-xs md:text-[10px] font-black uppercase flex items-center gap-2 whitespace-nowrap"
        >
          <Languages size={14} /> {lang}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;