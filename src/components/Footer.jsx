import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 border-t-4 border-amber-400 text-white mt-12 pt-16 pb-8 relative z-10 shadow-[-10px_-10px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-blue-800 pb-12 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-extrabold mb-6 border-b-2 border-amber-400 pb-2 inline-block">Sekolah <span className="text-amber-400">Unggulan</span></h3>
            <p className="text-base text-blue-200 leading-relaxed">
              Menciptakan generasi unggul yang berakhlak mulia, berwawasan global, dan siap menghadapi masa depan dengan teknologi dan inovasi.
            </p>
            <p className="mt-6 text-sm font-semibold italic text-amber-300">"Berprestasi, Berinovasi, Berakhlak Mulia."</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-blue-800 pb-2">Tautan Cepat</h3>
            <ul className="space-y-4 text-blue-200 font-medium">
              <li><button className="hover:text-amber-400 hover:translate-x-1 transition-all duration-300">PPDB Online</button></li>
              <li><button className="hover:text-amber-400 hover:translate-x-1 transition-all duration-300">Portal Siswa/Guru</button></li>
              <li><button className="hover:text-amber-400 hover:translate-x-1 transition-all duration-300">Berita Terbaru</button></li>
              <li><button className="hover:text-amber-400 hover:translate-x-1 transition-all duration-300">Kalender Akademik</button></li>
              <li><button className="hover:text-amber-400 hover:translate-x-1 transition-all duration-300">Galeri Foto</button></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-blue-800 pb-2">Hubungi Kami</h3>
            <div className="space-y-4 text-blue-200">
              <p className="flex items-start"><MapPin className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0 mt-0.5" /> Jl. Pendidikan No. 10, Kota Contoh, ID 12345</p>
              <p className="flex items-center"><Phone className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0" /> (021) 123-4567</p>
              <p className="flex items-center"><Mail className="w-5 h-5 mr-3 text-amber-400 flex-shrink-0" /> info@sekolah-unggulan.sch.id</p>
            </div>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-blue-800 pb-2">Media Sosial</h3>
            <p className="text-blue-200 mb-6">Ikuti kami untuk update dan aktivitas terbaru dari lingkungan sekolah.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-amber-400 hover:text-blue-950 transition-all duration-300 hover:scale-110 shadow-lg"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-amber-400 hover:text-blue-950 transition-all duration-300 hover:scale-110 shadow-lg"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-amber-400 hover:text-blue-950 transition-all duration-300 hover:scale-110 shadow-lg"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-amber-400 hover:text-blue-950 transition-all duration-300 hover:scale-110 shadow-lg"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-400 font-medium">
          <p>&copy; {(new Date().getFullYear())} Sekolah Unggulan. Hak Cipta Dilindungi.</p>
          <p className="mt-2 md:mt-0">Ditenagai oleh React & Three.js</p>
        </div>
      </div>
    </footer>
  );
}
