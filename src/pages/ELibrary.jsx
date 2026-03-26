import React from 'react';
import { BookOpenText, AlertTriangle, Search, BookMarked, Download } from 'lucide-react';

export default function ELibrary({ setActivePage }) {
  const books = [
    { title: "Panduan Kurikulum Merdeka Terintegrasi Digital", author: "Tim Kurikulum Sekolah Unggulan", type: "Panduan Akademik", link: "#", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200&h=300" },
    { title: "Koleksi Jurnal Ilmiah Pendidikan Terbaru (Q3 2025)", author: "Penerbit Global Nusantara", type: "Jurnal & Artikel", link: "#", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=200&h=300" },
    { title: "E-Book: Sejarah Indonesia Modern Paradigma Baru", author: "Dr. Bambang Sumanteri, M.Hum.", type: "Materi Pelajaran", link: "#", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=200&h=300" },
    { title: "Kumpulan Latihan Soal Matematika Lanjut (HOTS)", author: "MGMP Matematika", type: "Latihan Ujian", link: "#", cover: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=200&h=300" },
  ];

  return (
    <div className="space-y-8 animate-fade-in relative z-10 w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-10 drop-shadow-sm border-l-8 border-amber-400 pl-6 py-2 bg-white/40 rounded-r-2xl backdrop-blur-sm">
        Perpustakaan <span className="text-blue-700">Digital</span>
      </h1>

      <div className="bg-white/90 p-8 md:p-12 rounded-3xl shadow-2xl border-t-8 border-blue-900 w-full overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-bl-full opacity-50 mix-blend-multiply group-hover:scale-110 transition-transform duration-1000 -z-10"></div>
        
        <div className="md:flex justify-between items-center mb-12">
          <p className="text-xl text-gray-700 font-medium md:w-2/3 leading-relaxed mb-6 md:mb-0">
            Akses bebas gawai 24/7 ke ribuan koleksi buku digital eksklusif, materi pelajaran mutakhir terstruktur, dan jurnal ilmiah standar 
            internasional untuk mendukung revolusi sistem kegiatan belajar mengajar kita.
          </p>
          
          <div className="relative md:w-1/3">
            <input type="text" placeholder="Pencarian Cepat Judul / ISBN..." className="w-full pl-6 pr-14 py-4 rounded-full border-2 border-gray-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all font-medium text-blue-900 shadow-sm outline-none" />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button className="p-3 bg-blue-800 rounded-full text-amber-400 hover:bg-blue-700 hover:-translate-y-px transition-all shadow-md">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((b, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:border-amber-400 transition-all duration-300 relative overflow-hidden group/card flex flex-col h-full">
              <div className="absolute top-0 right-0 bg-amber-400/90 w-16 h-16 transform translate-x-8 -translate-y-8 rotate-45 group-hover/card:scale-[2] group-hover/card:rotate-[90deg] transition-all duration-500 z-0"></div>
              <BookOpenText className="w-8 h-8 text-blue-800 mb-4 transform group-hover/card:scale-110 transition-transform relative z-10" />
              
              <div className="flex-grow flex flex-col items-center justify-center -space-y-4 mb-8">
                <img src={b.cover} alt={b.cover} className="w-3/4 h-48 object-cover rounded-md shadow-[5px_5px_15px_rgba(0,0,0,0.3)] transform -rotate-[5deg] group-hover/card:rotate-0 transition-all duration-300 z-10 border border-white" />
                <div className="w-2/3 h-4 bg-black/20 rounded-full blur-[6px] translate-y-3"></div>
              </div>

              <span className="inline-block px-3 py-1 bg-white border border-gray-200 text-xs font-black uppercase text-amber-600 tracking-wider rounded-md mb-4 shadow-sm relative z-10">{b.type}</span>
              
              <h4 className="font-extrabold text-lg text-blue-950 line-clamp-2 leading-tight mb-2 hover:text-blue-700 transition relative z-10">{b.title}</h4>
              <p className="text-sm font-medium text-gray-500 mb-6 relative z-10">Oleh: {b.author}</p>
              
              <div className="mt-auto grid grid-cols-2 gap-2 relative z-10">
                <a href={b.link} className="flex justify-center items-center py-3 bg-blue-100 text-blue-800 font-extrabold rounded-lg hover:bg-blue-800 hover:text-white transition-colors border border-blue-200 text-sm shadow-sm">
                  <BookMarked className="w-4 h-4 mr-2" /> Baca e-Pub
                </a>
                <a href={b.link} className="flex justify-center items-center py-3 bg-white text-gray-700 font-extrabold rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-sm shadow-sm hover:text-green-600">
                  <Download className="w-4 h-4 mr-2" /> PDF (.3MB)
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border-l-[6px] border-l-amber-400 border border-amber-100 flex items-start shadow-sm hover:shadow-md transition">
          <div className="p-3 bg-amber-200 rounded-xl mr-5 shrink-0 animate-bounce shadow-sm">
            <AlertTriangle className="w-8 h-8 text-amber-700" />
          </div>
          <div>
            <h5 className="text-xl font-extrabold text-amber-900 mb-1">Akses Koleksi Terbatas</h5>
            <p className="text-amber-800 font-medium text-lg">
              Untuk koleksi ensiklopedia penuh, paper riset global, dan akses Jurnal Pendidikan Premium IEEE / Scopus, silakan mengautentikasikan diri melalui sistem login di <span className="font-black text-blue-800 hover:text-blue-600 hover:underline cursor-pointer transition-colors" onClick={() => setActivePage('portal')}>Portal Khusus Siswa & Pendidik.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
