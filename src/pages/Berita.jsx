import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Berita() {
  const articles = [
    { id: 1, title: "Sekolah Unggulan Jadi Tuan Rumah Kompetisi Robotika Nasional", date: "28 Okt 2025", category: "Prestasi", image: "https://images.unsplash.com/photo-1561089489-f13d5e730d72?auto=format&fit=crop&q=80&w=400&h=250" },
    { id: 2, title: "Lomba Desain Batik Digital Meriahkan Bulan Bahasa", date: "24 Okt 2025", category: "Kegiatan", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=400&h=250" },
    { id: 3, title: "Simulasi Ujian Berbasis Komputer Sukses Digelar", date: "20 Okt 2025", category: "Akademik", image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=400&h=250" },
    { id: 4, title: "Pelatihan Guru Bersertifikasi Google Educator Level 2", date: "15 Okt 2025", category: "SDM", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400&h=250" },
    { id: 5, title: "Juara 1 Futsal Antar Pelajar Sekota Madyaguru", date: "05 Okt 2025", category: "Olahraga", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=250" },
    { id: 6, title: "Menerima Kunjungan Studi Banding dari Jepang", date: "28 Sep 2025", category: "Internasional", image: "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&q=80&w=400&h=250" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-10 drop-shadow-sm border-l-8 border-amber-400 pl-6 py-2 bg-white/40 rounded-r-2xl backdrop-blur-sm">
        Berita & Informasi
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <motion.div 
            key={a.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/90 rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={a.image} alt={a.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 right-4"><span className="px-4 py-1 pb-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-amber-400 text-blue-900 shadow-md">{a.category}</span></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm border-b-2 border-blue-100 inline-block w-max pb-1 text-gray-500 mb-4 font-bold flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-800" /> {a.date}
              </p>
              
              <h3 className="text-2xl font-extrabold text-blue-950 mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                {a.title}
              </h3>
              
              <p className="text-gray-600 line-clamp-3 font-medium mb-6 flex-grow">
                Tim Lingkungan Hidup Sekolah Unggulan berhasil membawa pulang penghargaan bergengsi dalam program tahunan ini...
              </p>
              
              <button className="flex items-center text-blue-800 font-extrabold uppercase tracking-wide hover:text-amber-500 transition-colors mt-auto w-max group/btn">
                Baca Selengkapnya
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-blue-950 rounded-full font-extrabold text-lg hover:from-amber-300 hover:to-amber-400 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
          Muat Lebih Banyak Berita
        </button>
      </div>
    </div>
  );
}
