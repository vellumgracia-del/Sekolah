import React from 'react';
import { Calendar as CalendarIcon, ListChecks } from 'lucide-react';

export default function Kalender() {
  const events = [
    { date: "25 Nov 2025", title: "Rapat Orang Tua & Pembagian Rapor Tengah Semester", type: "Akademik", color: "amber" },
    { date: "1-10 Des 2025", title: "Ujian Akhir Semester (UAS) Ganjil", type: "Akademik", color: "blue" },
    { date: "24 Des 2025 - 1 Jan 2026", title: "Libur Akhir Semester Ganjil & Hari Raya", type: "Libur", color: "red" },
    { date: "15 Jan 2026", title: "Hari Pertama Sekolah Semester Genap", type: "Umum", color: "green" },
    { date: "20 Feb 2026", title: "Try Out Nasional Tahap I (Kelas XII)", type: "Akademik", color: "purple" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-10 drop-shadow-sm border-l-8 border-amber-400 pl-6 py-2 bg-white/40 rounded-r-2xl backdrop-blur-sm">
        Kalender Akademik
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 bg-white/90 p-10 rounded-3xl shadow-xl border border-gray-100">
          <h3 className="text-3xl font-extrabold text-blue-900 mb-8 border-b-2 border-amber-400 pb-2 inline-block">Jadwal Utama Bulan November 2025</h3>
          <div className="aspect-video bg-blue-50/50 rounded-2xl flex items-center justify-center border-4 border-dashed border-blue-200">
            <div className="text-center p-8">
              <CalendarIcon className="w-20 h-20 text-blue-300 mx-auto mb-4" />
              <p className="text-blue-800 text-2xl font-bold">Tampilan Kalender Interaktif akan dimuat di sini.</p>
              <p className="text-blue-600 mt-2 font-medium">Modul kalender sedang dalam pengembangan.</p>
            </div>
          </div>
          <p className="mt-6 text-md text-gray-600 font-medium bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center">
            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3 font-bold text-xs shrink-0">i</span>
            Gunakan Portal Khusus untuk melihat jadwal spesifik per kelas dan personalisasi pengingat.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 opacity-20 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
            <ListChecks className="w-48 h-48 text-amber-400" />
          </div>
          
          <h3 className="text-2xl font-extrabold text-white mb-8 flex items-center relative z-10 border-b border-blue-700 pb-4">
            <ListChecks className="w-8 h-8 mr-3 text-amber-400" /> Daftar Kegiatan Penting
          </h3>
          
          <ul className="space-y-4 relative z-10">
            {events.map((e, i) => (
              <li key={i} className="p-5 bg-white/10 backdrop-blur-lg rounded-2xl shadow-sm border-l-4 border-l-amber-400 hover:bg-white/20 transition-colors duration-300">
                <p className="text-xs font-black uppercase tracking-wider text-amber-300 mb-1">{e.type}</p>
                <p className="font-bold text-white text-lg leading-tight mb-3">{e.title}</p>
                <p className="text-sm font-medium text-blue-200 flex items-center bg-blue-950/50 w-max px-3 py-1 rounded-full"><CalendarIcon className="w-3.5 h-3.5 mr-2 text-amber-400" /> {e.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
