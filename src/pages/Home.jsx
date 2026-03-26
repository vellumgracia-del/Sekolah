import React, { useState, useEffect } from 'react';
import { Newspaper, Megaphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  { img: "https://images.unsplash.com/photo-1546410531-bea5aadcb6ce?q=80&w=1200&auto=format&fit=crop", title: "Wadah Pengembangan Bakat Siswa" },
  { img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop", title: "Fasilitas Terbaik untuk Pembelajaran" },
  { img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop", title: "Masa Depan Cerah Dimulai Di Sini" },
];

export default function Home({ setActivePage }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-12">
      {/* Hero Slider */}
      <section className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px] md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img src={slides[currentSlide].img} alt="Slider" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center pb-20">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center p-4 drop-shadow-lg"
              >
                {slides[currentSlide].title}
              </motion.h1>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-amber-400 w-8' : 'bg-white/60 hover:bg-white'}`} 
            />
          ))}
        </div>
      </section>

      {/* Sambutan Kepala Sekolah */}
      <section className="glass rounded-2xl p-8 border-t-4 border-blue-800 shadow-xl backdrop-blur-md bg-white/70">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Sambutan Kepala Sekolah</h2>
        <div className="md:flex items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0 mx-auto">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Kepala Sekolah" className="rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.2)] w-40 h-48 object-cover border-4 border-white transform -rotate-2" />
          </div>
          <div>
            <p className="text-xl text-gray-800 leading-relaxed italic mb-6">
              "Selamat datang di website resmi Sekolah Unggulan! Kami berkomitmen penuh untuk menjadi lembaga pendidikan terdepan yang tidak hanya mencetak siswa cerdas secara akademis, tetapi juga memiliki karakter kuat dan keterampilan abad ke-21. Mari bersama-sama wujudkan masa depan gemilang bagi putra-putri kita."
            </p>
            <p className="text-right font-bold text-2xl text-blue-900">- Bpk. Dr. H. Ahmad Fauzi, M.Pd.</p>
            <p className="text-right text-md text-gray-600 font-medium tracking-wider uppercase">Kepala Sekolah</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Berita Terbaru */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-amber-400 pb-2 flex items-center">
            <Newspaper className="w-8 h-8 mr-3 text-amber-500" /> Berita Terbaru
          </h2>
          <div className="space-y-6">
            <article className="glass p-6 rounded-xl shadow-lg hover:-translate-y-1 transition duration-300 border-l-4 border-l-blue-600 bg-white/80">
              <p className="text-sm text-blue-800 font-bold mb-2">25 Oktober 2025</p>
              <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-700 mb-3 transition-colors cursor-pointer">Sekolah Unggulan Meraih Penghargaan Sekolah Adiwiyata Nasional</h3>
              <p className="text-gray-700 line-clamp-2 text-lg">Tim Lingkungan Hidup Sekolah Unggulan berhasil membawa pulang penghargaan bergengsi Sekolah Adiwiyata Nasional berkat program penghijauan dan daur ulang sampah yang inovatif...</p>
              <button className="text-amber-600 font-bold mt-3 hover:text-amber-700 inline-block focus:outline-none">Baca Selengkapnya &rarr;</button>
            </article>
            <article className="glass p-6 rounded-xl shadow-lg hover:-translate-y-1 transition duration-300 border-l-4 border-l-blue-600 bg-white/80">
              <p className="text-sm text-blue-800 font-bold mb-2">10 Oktober 2025</p>
              <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-700 mb-3 transition-colors cursor-pointer">Siswa Kelas XII Lolos Seleksi Internasional Youth Exchange Program</h3>
              <p className="text-gray-700 line-clamp-2 text-lg">Prestasi membanggakan, tiga siswa kami terpilih untuk mengikuti program pertukaran pelajar ke Jepang dan Korea Selatan selama satu semester penuh...</p>
              <button className="text-amber-600 font-bold mt-3 hover:text-amber-700 inline-block focus:outline-none">Baca Selengkapnya &rarr;</button>
            </article>
          </div>
          <button 
            onClick={() => setActivePage('berita')}
            className="mt-8 w-full text-center text-lg py-4 bg-blue-800 text-white rounded-xl hover:bg-blue-700 transition duration-300 font-bold shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            Lihat Semua Berita
          </button>
        </div>

        {/* Pengumuman Penting */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-amber-400 pb-2 flex items-center">
            <Megaphone className="w-8 h-8 mr-3 text-amber-500" /> Pengumuman
          </h2>
          <div className="glass p-6 rounded-xl shadow-xl border-t-8 border-t-amber-400 space-y-5 bg-white/80">
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-red-600 font-extrabold flex items-center"><span className="w-2 h-2 rounded-full bg-red-600 mr-2 animate-pulse"></span> URGENT | 28 Okt 2025</p>
              <p className="font-bold text-gray-900 mt-1 text-lg">Perubahan Jadwal Ujian Tengah Semester</p>
              <p className="text-sm text-gray-600 mt-1">Mohon perhatikan revisi jadwal UTS terbaru di Portal Siswa.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <p className="text-sm text-blue-800 font-bold">INFO | 20 Okt 2025</p>
              <p className="font-bold text-gray-900 mt-1 text-lg">Kegiatan Jalan Sehat Hari Pahlawan</p>
              <p className="text-sm text-gray-600 mt-1">Wajib diikuti seluruh siswa dan guru pada 9 November.</p>
            </div>
            <div>
              <p className="text-sm text-blue-800 font-bold">PPDB | 15 Okt 2025</p>
              <p className="font-bold text-gray-900 mt-1 text-lg">Pembukaan Gelombang II PPDB</p>
              <p className="text-sm text-gray-600 mt-1">Pendaftaran dibuka mulai 1 November 2025.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
