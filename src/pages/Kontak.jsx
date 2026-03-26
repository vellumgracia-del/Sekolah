import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Kontak() {
  return (
    <div className="space-y-8 animate-fade-in relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-10 drop-shadow-sm border-l-8 border-amber-400 pl-6 py-2 bg-white/40 rounded-r-2xl backdrop-blur-sm">
        Hubungi Kami
      </h1>

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 bg-white/90 p-10 md:p-12 rounded-3xl shadow-2xl border-t-8 border-blue-900 border-x border-b border-gray-100">
          <h3 className="text-4xl font-extrabold text-blue-900 mb-10 tracking-tight">Informasi Kontak Langsung</h3>
          <div className="space-y-8">
            <div className="flex items-start p-4 hover:bg-blue-50 transition-colors rounded-2xl group cursor-pointer border border-transparent hover:border-blue-100">
              <div className="p-4 bg-amber-100 rounded-full mr-6 group-hover:bg-amber-400 transition-colors shadow-sm">
                <MapPin className="w-8 h-8 text-amber-600 group-hover:text-blue-950" />
              </div>
              <div>
                <strong className="block text-2xl text-blue-950 mb-1 font-extrabold">Alamat Kampus:</strong>
                <span className="text-gray-700 text-lg font-medium">Jl. Pendidikan No. 10, Kota Contoh, 14000</span>
              </div>
            </div>
            
            <div className="flex items-start p-4 hover:bg-blue-50 transition-colors rounded-2xl group cursor-pointer border border-transparent hover:border-blue-100">
              <div className="p-4 bg-blue-100 rounded-full mr-6 group-hover:bg-blue-800 transition-colors shadow-sm">
                <Phone className="w-8 h-8 text-blue-700 group-hover:text-amber-400" />
              </div>
              <div>
                <strong className="block text-2xl text-blue-950 mb-1 font-extrabold">Telepon (Humas):</strong>
                <span className="text-gray-700 text-lg font-medium">(021) 123-4567</span>
              </div>
            </div>
            
            <div className="flex items-start p-4 hover:bg-blue-50 transition-colors rounded-2xl group cursor-pointer border border-transparent hover:border-blue-100">
              <div className="p-4 bg-amber-100 rounded-full mr-6 group-hover:bg-amber-400 transition-colors shadow-sm">
                <Mail className="w-8 h-8 text-amber-600 group-hover:text-blue-950" />
              </div>
              <div>
                <strong className="block text-2xl text-blue-950 mb-1 font-extrabold">Email Resmi:</strong>
                <span className="text-gray-700 text-lg font-medium">info@sekolah-unggulan.sch.id</span>
              </div>
            </div>
            
            <div className="flex items-start p-4 hover:bg-green-50 transition-colors rounded-2xl group cursor-pointer border border-transparent hover:border-green-100">
              <div className="p-4 bg-green-100 rounded-full mr-6 group-hover:bg-green-500 transition-colors shadow-sm">
                <MessageSquare className="w-8 h-8 text-green-700 group-hover:text-white" />
              </div>
              <div>
                <strong className="block text-2xl text-blue-950 mb-1 font-extrabold">WhatsApp Center:</strong>
                <span className="text-gray-700 text-lg font-medium">+62 812-3456-7890</span>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-extrabold text-blue-900 mt-14 mb-6 border-b-2 border-amber-400 pb-2 inline-block">Media Sosial Kami</h3>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all">
              <FaInstagram className="w-6 h-6 mr-2" /> Instagram
            </a>
            <a href="#" className="flex items-center px-6 py-3 bg-[#1877F2] text-white rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all">
              <FaFacebook className="w-6 h-6 mr-2" /> Facebook
            </a>
            <a href="#" className="flex items-center px-6 py-3 bg-[#FF0000] text-white rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all">
              <FaYoutube className="w-6 h-6 mr-2" /> YouTube
            </a>
          </div>
        </div>
        
        <div className="md:col-span-2 bg-gradient-to-br from-blue-900 to-blue-800 p-10 rounded-3xl shadow-2xl relative overflow-hidden h-max">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
          <h3 className="text-3xl font-extrabold text-white mb-2 relative z-10">Kirim Pesan Cepat</h3>
          <p className="text-blue-200 font-medium mb-8 relative z-10">Kami akan membalas pesan Anda dalam 1x24 jam kerja.</p>
          
          <form className="space-y-5 relative z-10">
            <div>
              <label className="block text-sm font-bold text-blue-200 mb-2">Nama Lengkap</label>
              <input type="text" placeholder="Masukkan nama..." className="w-full p-4 rounded-xl border-none bg-white/10 text-white placeholder-blue-300 focus:ring-2 focus:ring-amber-400 backdrop-blur-sm" />
            </div>
            <div>
              <label className="block text-sm font-bold text-blue-200 mb-2">Alamat Email</label>
              <input type="email" placeholder="contoh@email.com" className="w-full p-4 rounded-xl border-none bg-white/10 text-white placeholder-blue-300 focus:ring-2 focus:ring-amber-400 backdrop-blur-sm" />
            </div>
            <div>
              <label className="block text-sm font-bold text-blue-200 mb-2">Subjek Pesan</label>
              <select className="w-full p-4 rounded-xl border-none bg-white/10 text-blue-950 focus:ring-2 focus:ring-amber-400 backdrop-blur-sm" defaultValue="">
                 <option value="" disabled>-- Pilih Subjek --</option>
                 <option value="1">Pertanyaan Umum</option>
                 <option value="2">Informasi PPDB</option>
                 <option value="3">Kerjasama Eksternal</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-blue-200 mb-2">Isi Pesan</label>
              <textarea placeholder="Tuliskan pesan Anda selengkapnya..." rows="5" className="w-full p-4 rounded-xl border-none bg-white/10 text-white placeholder-blue-300 focus:ring-2 focus:ring-amber-400 resize-none backdrop-blur-sm"></textarea>
            </div>
            <button type="button" className="w-full py-4 mt-4 bg-amber-400 text-blue-950 font-black text-xl rounded-xl hover:bg-amber-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition duration-300 transform hover:-translate-y-1">
              Kirim Pesan Sekarang
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
