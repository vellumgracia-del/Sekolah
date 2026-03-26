import React from 'react';
import { GraduationCap, CheckCircle, ListPlus, Users, FileText, Banknote, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PPDB() {
  const steps = [
    { num: "01", title: "Pendaftaran Online", desc: "Isi formulir pendaftaran secara lengkap dan unggah dokumen persyaratan di website PPDB dengan akun yang telah dibuat.", icon: <FileText className="w-8 h-8 text-blue-800" /> },
    { num: "02", title: "Pembayaran Biaya Formulir", desc: "Lakukan pembayaran biaya pendaftaran sebesar Rp250.000 melalui transfer virtual account bank yang tersedia.", icon: <Banknote className="w-8 h-8 text-blue-800" /> },
    { num: "03", title: "Seleksi & Tes Potensi", desc: "Calon siswa mengikuti tes tertulis (TPA & TKA) dan sesi wawancara langsung sesuai jadwal yang ditentukan.", icon: <ClipboardCheck className="w-8 h-8 text-blue-800" /> },
    { num: "04", title: "Pengumuman Hasil Akhir", desc: "Hasil seleksi diumumkan melalui website ini dan dikirimkan secara paralel melalui email pendaftar yang terdaftar.", icon: <Users className="w-8 h-8 text-blue-800" /> },
  ];

  return (
    <div className="space-y-8 animate-fade-in relative z-10 w-full overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-10 drop-shadow-sm border-l-8 border-amber-400 pl-6 py-2 bg-white/40 rounded-r-2xl backdrop-blur-sm">
        PPDB Online <span className="text-blue-700">2026/2027</span>
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Registration Flow */}
        <div className="lg:col-span-2 bg-white/90 p-10 md:p-12 rounded-3xl shadow-xl border-t-8 border-blue-900">
          <h3 className="text-3xl font-extrabold text-blue-900 mb-10 border-b-2 border-amber-400 pb-2 inline-flex items-center">
            <GraduationCap className="w-10 h-10 mr-4 text-amber-500" /> Alur Pendaftaran Siswa
          </h3>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[3.25rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent">
            {steps.map((s, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Timeline Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-amber-400 shadow-md md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-6 md:left-1/2 transform -translate-x-1/2 hover:scale-125 hover:bg-amber-300 transition-all z-10">
                   <div className="text-blue-900 font-extrabold text-sm">{s.num}</div>
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="flex items-start mb-3">
                    <div className="p-3 bg-blue-50 rounded-xl mr-4 shrink-0 shadow-sm">{s.icon}</div>
                    <h4 className="font-extrabold text-xl text-blue-950">{s.title}</h4>
                  </div>
                  <p className="text-gray-600 font-medium ml-[4.5rem]">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <h4 className="text-2xl font-extrabold text-blue-900 mt-16 mb-8 border-b-2 border-amber-400 pb-2 inline-block">Persyaratan Dokumen Asli</h4>
          <div className="grid sm:grid-cols-2 gap-6 text-gray-800 font-bold bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
            <p className="flex items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"><CheckCircle className="w-8 h-8 mr-3 text-green-500 shrink-0" /> Akta Kelahiran (Scan)</p>
            <p className="flex items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"><CheckCircle className="w-8 h-8 mr-3 text-green-500 shrink-0" /> Kartu Keluarga (Scan)</p>
            <p className="flex items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"><CheckCircle className="w-8 h-8 mr-3 text-green-500 shrink-0" /> Rapor Legalisir</p>
            <p className="flex items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"><CheckCircle className="w-8 h-8 mr-3 text-green-500 shrink-0" /> Pas Foto 3x4 (2 lbr)</p>
          </div>
        </div>

        {/* Action Sidebar */}
        <div className="lg:col-span-1 h-min space-y-8">
          <div className="bg-gradient-to-b from-blue-900 flex flex-col to-blue-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 rounded-bl-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <h3 className="text-2xl font-extrabold text-white mb-2">Status PPDB Skrng</h3>
            <div className="bg-white p-4 rounded-xl shadow-inner text-center my-6 transform group-hover:scale-[1.02] transition-transform">
              <p className="text-3xl sm:text-4xl font-black text-green-600 uppercase animate-pulse">Gelombang II Dibuka!</p>
            </div>
            
            <a href="#" className="block w-full text-center py-5 bg-amber-400 text-blue-950 text-xl font-black rounded-xl hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] transition duration-300 shadow-lg transform hover:-translate-y-1 my-4 mt-auto select-none">
              <ListPlus className="w-7 h-7 inline-block mr-2" /> Mulai Pendaftaran 
            </a>
          </div>

          <div className="bg-white/90 p-8 rounded-3xl shadow-xl border border-gray-100">
            <h4 className="font-extrabold text-2xl text-blue-900 mb-6 border-b border-gray-200 pb-2">Cek Hasil Seleksi</h4>
            <p className="text-gray-600 font-medium mb-6">Masukkan nomor pendaftaran Anda untuk melihat status kelulusan secara real-time.</p>
            <form>
              <input type="text" placeholder="Masukkan 10 digit NOP" className="w-full font-mono font-bold tracking-widest text-center p-4 rounded-xl border-2 border-blue-200 mb-4 focus:ring-4 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all placeholder:font-sans placeholder:tracking-normal placeholder:font-normal placeholder:text-left shadow-inner" />
              <button type="submit" className="w-full p-4 bg-blue-800 text-white font-extrabold text-lg rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex justify-center items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-amber-400" /> Lihat Hasil
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
