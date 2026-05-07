import { useState, useEffect } from 'react';
import BackgroundCinematic from './components/BackgroundCinematic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const [lang, setLang] = useState('id');
  const [scrolled, setScrolled] = useState(false);

  // Efek Scroll untuk Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    id: {
      nav: ['Beranda', 'Tentang', 'Pengalaman', 'Sertifikat', 'Kontak'],
      heroTitle: 'HALO,SAYA ',
      heroSub: 'Supervisor Penjualan & Mahasiswa Sistem Informasi yang bersemangat dalam bidang pemasaran, pengembangan bisnis, dan solusi pemrograman.',
      aboutHeader: 'Tentang Saya',
      aboutSub: 'Menggabungkan Marketing dengan Logika .',
      aboutDesc: 'Saya saat ini bekerja sebagai Supervisor Penjualan (SPV Penjualan) sekaligus menempuh pendidikan di bidang Sistem Informasi. Perpaduan pengalaman profesional di dunia marketing dan pembelajaran teknologi membuat saya memiliki fokus dalam pengembangan strategi pemasaran, analisis bisnis, serta coding untuk solusi digital. Saya tertarik menggabungkan kemampuan penjualan dan teknologi untuk menciptakan inovasi yang efektif bagi perkembangan bisnis.',
      stats: ['Tahun Pengalaman', 'Proyek Digital', 'Peningkatan penjualan'],
      experienceTitle: 'Perjalanan Karir',
      certTitle: 'Sertifikasi Keahlian',
      contactTitle: 'Mari Terhubung',
      waText: 'HUBUNGI SAYA VIA WHATSAPP',
      exp1 : 'Mengelola tim sales, menganalisis performa penjualan, membangun relasi pelanggan, dan mengoptimalkan pencapaian target.',
      exp2 : 'Menjalankan proses produksi rumput laut dari pengecekan, pencucian, quality control, hingga pemasakan.',
      exp3 : 'Menjalankan proses produksi rumput laut dari pengecekan, pencucian, quality control, hingga pemasakan.',
      issuedBy: "Diterbitkan oleh",
      Cont : 'Siap mewujudkan visi digital Anda dengan strategi marketing dan efisiensi kode.'
    },
    en: {
      nav: ['Home', 'About', 'Experience', 'Certificates', 'Contact'],
      heroTitle: "HI, I'M",
      heroSub: 'Sales Supervisor & Information Systems Student passionate in marketing, business growth, and coding solutions.',
      aboutHeader: 'About Me',
      aboutSub: 'Combining Marketing with Logic',
      aboutDesc: 'I am currently working as a Sales Supervisor while pursuing a degree in Information Systems. The combination of my professional experience in marketing and academic background in technology has shaped my focus on marketing strategy development, business analysis, and coding for digital solutions. I am passionate about combining sales expertise and technology to create effective innovations that drive business growth.',
      stats: ['Years Experience', 'Digital Projects', 'Sales Growth'],
      experienceTitle: 'Work Experience',
      certTitle: 'Professional Certifications',
      contactTitle: "Let's Connect",
      waText: 'CONTACT ME VIA WHATSAPP',
      exp1: 'Managing sales teams, analyzing sales performance, building customer relationships, and optimizing target achievement.',
      exp2: 'Handling the seaweed production process starting from material inspection, washing, quality control, to the cooking process.',
      exp3: 'Supervising the seaweed production process to ensure quality standards and smooth operations from start to finish.',
      issuedBy: "Issued by",
      Cont : 'Ready to bring your digital vision to life through marketing strategy and coding efficiency.'
    }
  };

  const t = content[lang];
  const waLink = "https://wa.me/6283110830267";

  return (
    <div className="text-white selection:bg-purple-500/30 scroll-smooth font-sans overflow-x-hidden">
      <BackgroundCinematic />

      {/* --- ADAPTIVE NAVBAR --- */}
      <Navbar scrolled={scrolled} lang={lang} setLang={setLang} t={t} />

      {/* --- 1. HERO SECTION --- */}
      <Hero t={t} waLink={waLink} />

      {/* --- 2. ABOUT SECTION --- */}
      <About t={t} />

      {/* --- 3. EXPERIENCE SECTION --- */}
      <Experience t={t} />

      {/* --- 4. SERTIFIKAT SECTION --- */}
      <Certificates t={t} />

      {/* --- 5. CONTACT SECTION --- */}
      <Contact t={t} waLink={waLink} />

      <Footer />
    </div>
  );
}
