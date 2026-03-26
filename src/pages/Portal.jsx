import React from 'react';
import { LogIn, Key, GraduationCap, LayoutDashboard } from 'lucide-react';

export default function Portal() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center animate-fade-in relative z-10 w-full px-4">
      <div className="bg-white/90 p-10 md:p-14 rounded-[2.5rem] shadow-2xl border-t-[12px] border-blue-900 w-full max-w-xl relative overflow-hidden group hover:shadow-[0_20px_60px_rgba(30,64,175,0.2)] transition-shadow duration-500">
        <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-amber-400 rounded-full mix-blend-multiply opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 w-24 h-24 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <LayoutDashboard className="w-12 h-12 text-amber-400" />
            </div>
            <h3 className="text-4xl font-black text-blue-950 tracking-tight">Portal Khusus</h3>
            <p className="text-gray-500 font-medium mt-2">Masuk ke Sistem Informasi Akademik Sekolah Terpadu</p>
          </div>
          
          <form className="space-y-6">
            <div className="relative">
              <label htmlFor="role" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Pilih Peran Pengguna</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <GraduationCap className="h-5 w-5 text-gray-400" />
                </div>
                <select id="role" className="w-full pl-12 p-4 rounded-xl border-2 border-gray-200 bg-white font-medium text-blue-950 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all appearance-none">
                  <option>Siswa Aktif</option>
                  <option>Guru & Karyawan</option>
                  <option>Orang Tua / Wali Murid</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Username / NIP / NISN</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input type="text" id="username" placeholder="Masukkan ID Pengguna" className="w-full pl-12 p-4 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all font-medium text-blue-950 placeholder-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2 ml-1">Kata Sandi (Password)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-gray-400" />
                </div>
                <input type="password" id="password" placeholder="••••••••••••" className="w-full pl-12 p-4 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 transition-all font-medium text-blue-950 placeholder-gray-300 tracking-widest" />
              </div>
            </div>
            
            <div className="pt-2 pb-6">
              <button type="submit" className="w-full py-4 bg-blue-800 text-white text-xl font-black rounded-xl hover:bg-blue-700 transition duration-300 shadow-[0_10px_20px_rgba(30,64,175,0.3)] hover:shadow-[0_15px_30px_rgba(30,64,175,0.4)] flex justify-center items-center transform hover:-translate-y-1">
                <LogIn className="w-6 h-6 mr-3 text-amber-400" /> Akses Portal
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100 inline-block">
                Lupa password? <a href="#" className="font-bold text-blue-700 hover:text-amber-500 transition-colors">Ajukan Reset Sistem</a>
              </p>
            </div>
            
            {/* Quick Feature Chips */}
            <div className="mt-8 pt-8 border-t-2 border-dashed border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-4">Layanan Digital Integratif</p>
              <div className="flex justify-center flex-wrap gap-2 text-center text-xs font-bold text-blue-800">
                <span className="px-4 py-2 bg-blue-50 rounded-full border border-blue-100 hover:bg-blue-100 cursor-pointer transition-colors">E-Learning Moodle</span>
                <span className="px-4 py-2 bg-blue-50 rounded-full border border-blue-100 hover:bg-blue-100 cursor-pointer transition-colors">Rapor e-Raport</span>
                <span className="px-4 py-2 bg-amber-50 text-amber-800 border border-amber-100 rounded-full hover:bg-amber-100 cursor-pointer transition-colors">Absensi RFID</span>
                <span className="px-4 py-2 bg-blue-50 rounded-full border border-blue-100 hover:bg-blue-100 cursor-pointer transition-colors">Keuangan Siswa</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
