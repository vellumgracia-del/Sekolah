import React from 'react';
import { BookOpen, UserCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SDM({ subPage, setSubPage }) {
  const tabs = [
    { key: 'guru', label: 'Database Guru & Karyawan' },
    { key: 'kurikulum', label: 'Informasi Kurikulum' }
  ];

  const teachers = [
    { name: "Siti Rahayu, S.Pd., M.A.", field: "Bahasa Inggris", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Dr. Budi Santoso", field: "Fisika & Sains", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Lina Marlina, S.T.", field: "Informatika & Robotika", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "H. Abdullah, M.Hum.", field: "Sejarah & Sosiologi", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Rina Wijaya, S.E.", field: "Ekonomi", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Ahmad Dani, S.Or.", field: "Penjaskes & Olahraga", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" },
  ];

  const renderContent = () => {
    switch (subPage) {
      case 'guru':
        return (
          <div className="space-y-8">
            <p className="text-xl text-gray-800 mb-8 font-medium leading-relaxed bg-white/60 p-6 rounded-2xl shadow-inner inline-block w-full">
              Sekolah kami didukung oleh lebih dari 70 tenaga pendidik profesional, bersertifikasi, dan berdedikasi tinggi. 
              Berikut adalah representasi tim unggulan yang membimbing masa depan anak bangsa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/90 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 p-8 text-center border-t-8 border-amber-400 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-blue-100/50 w-32 h-32 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700 z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="relative inline-block w-32 h-32 mb-6">
                      <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
                      <img src={t.photo} alt={t.name} className="w-full h-full object-cover rounded-full border-[6px] border-white shadow-xl relative z-10" />
                    </div>
                    
                    <h4 className="font-extrabold text-2xl text-blue-950 mb-2 truncate">{t.name}</h4>
                    <p className="text-md font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-full inline-block shadow-sm mb-4">{t.field}</p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                      <button className="text-sm text-blue-800 font-bold border-2 border-blue-800 rounded-full px-6 py-2 hover:bg-blue-800 hover:text-white transition-colors mt-2 uppercase tracking-wide">Lihat Profil Lengkap</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <button className="px-8 py-4 bg-blue-800 text-white font-black text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center">
                <UserCircle2 className="w-6 h-6 mr-3 text-amber-400" /> Tampilkan Semua SDM
              </button>
            </div>
          </div>
        );
      case 'kurikulum':
        return (
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                 <BookOpen className="w-64 h-64" />
              </div>
              <h3 className="text-4xl font-black mb-4 flex items-center relative z-10"><BookOpen className="w-10 h-10 mr-4 text-amber-400" /> Kurikulum Sekolah</h3>
              <p className="font-medium text-xl leading-relaxed text-blue-100 relative z-10 max-w-3xl">
                Sekolah Unggulan menerapkan Kurikulum Merdeka yang Terintegrasi dengan Program Keunggulan Berbasis Digital dan Karakter Internasional 
                (Digital & Character Based Excellence Program).
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 p-8 rounded-3xl shadow-lg border-l-8 border-amber-400 hover:shadow-xl transition-shadow">
                <h4 className="font-extrabold text-2xl text-blue-950 mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4 shadow-sm text-amber-600">1</span> 
                  Fokus Program Utama
                </h4>
                <ul className="space-y-4 text-gray-800 font-medium text-lg ml-2">
                  <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">►</span> Proyek Penguatan Profil Pelajar Pancasila (P5)</li>
                  <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">►</span> Pembelajaran Berbasis Proyek (Project-Based Learning)</li>
                  <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">►</span> Penguasaan Bahasa Inggris dan Mandarin Intensif</li>
                  <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">►</span> Literasi Digital, Coding Dasar, dan AI Literacy</li>
                </ul>
              </div>
              <div className="bg-white/90 p-8 rounded-3xl shadow-lg border-l-8 border-blue-600 hover:shadow-xl transition-shadow flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-2xl text-blue-950 mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 shadow-sm text-blue-700">2</span> 
                    Sistem Penilaian
                  </h4>
                  <p className="text-gray-800 font-medium text-lg leading-relaxed mb-6">
                    Meninggalkan cara hafalan murni, sistem penilaian kami menggunakan kombinasi progresif: asesmen formatif, sumatif, dan presentasi portofolio aktif. Kami menekankan evaluasi pada proses pembelajaran dan pengembangan karakter empati siswa.
                  </p>
                </div>
                <button className="w-full mt-4 text-center bg-blue-50 text-blue-800 border-2 border-blue-200 font-bold py-4 rounded-xl shadow-sm hover:bg-blue-800 hover:text-white hover:border-blue-800 transition-all">
                  Unduh Dokumen Panduan Kurikulum (.PDF)
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Sub halaman tidak ditemukan.</div>;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-10 drop-shadow-sm border-l-8 border-amber-400 pl-6 py-2 bg-white/40 rounded-r-2xl backdrop-blur-sm">
        Data / SDM
      </h1>
      
      <div className="flex flex-wrap gap-2 md:gap-4 mb-8 pb-4 border-b-2 border-blue-100">
        {tabs.map(tab => (
          <button 
            key={tab.key}
            onClick={() => setSubPage(tab.key)}
            className={`px-6 py-3 text-sm md:text-base font-extrabold rounded-xl transition-all duration-300 shadow-sm ${
              tab.key === subPage 
                ? 'bg-blue-800 text-white shadow-md transform -translate-y-1 scale-105' 
                : 'text-gray-700 bg-white/70 hover:text-blue-800 hover:bg-white hover:shadow-md'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="glass p-8 md:p-12 rounded-3xl shadow-xl min-h-[400px]">
        {renderContent()}
      </div>
    </div>
  );
}
