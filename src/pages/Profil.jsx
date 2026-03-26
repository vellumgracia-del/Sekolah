import React from 'react';
import { Eye, Target, ArrowDown, Award, MapPin, Trophy } from 'lucide-react';

export default function Profil({ subPage, setSubPage }) {
  const tabs = [
    { key: 'sejarah', label: 'Sejarah Sekolah' },
    { key: 'visi-misi', label: 'Visi dan Misi' },
    { key: 'struktur', label: 'Struktur Organisasi' },
    { key: 'fasilitas', label: 'Fasilitas Sekolah' },
    { key: 'akreditasi', label: 'Akreditasi & Penghargaan' },
    { key: 'alamat', label: 'Alamat & Peta' }
  ];

  const renderContent = () => {
    switch (subPage) {
      case 'sejarah':
        return (
          <div className="space-y-6">
            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              Sekolah Unggulan didirikan pada tahun 1990 sebagai respons terhadap kebutuhan masyarakat akan lembaga pendidikan yang berfokus pada pengembangan karakter dan ilmu pengetahuan. Berawal dari 5 kelas dan 15 guru, kini kami telah berkembang menjadi salah satu sekolah terfavorit dengan lebih dari 1000 siswa dan 70 tenaga pendidik profesional. Sejak awal, komitmen kami adalah menyediakan lingkungan belajar yang kondusif dan inovatif.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              Puncak pencapaian awal adalah pada tahun 2005, saat Sekolah Unggulan mendapatkan Akreditasi 'A' pertama. Hingga kini, kami terus berupaya meningkatkan mutu pendidikan demi mencetak lulusan yang siap bersaing di kancah global.
            </p>
          </div>
        );
      case 'visi-misi':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-blue-50/80 border-l-8 border-blue-800 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-3xl font-extrabold text-blue-900 mb-4 flex items-center"><Eye className="w-8 h-8 mr-3 text-blue-700" /> Visi</h3>
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                Menjadi pusat pendidikan unggulan yang berlandaskan iman dan takwa, menghasilkan lulusan berprestasi, kreatif, mandiri, dan berbudaya lingkungan.
              </p>
            </div>
            <div className="p-8 bg-yellow-50/80 border-l-8 border-amber-400 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-3xl font-extrabold text-amber-600 mb-4 flex items-center"><Target className="w-8 h-8 mr-3 text-amber-500" /> Misi</h3>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 font-medium">
                <li>Meningkatkan kualitas pembelajaran yang aktif, inovatif, kreatif, efektif, dan menyenangkan.</li>
                <li>Mengembangkan potensi diri siswa melalui kegiatan ekstrakurikuler dan intrakurikuler.</li>
                <li>Membina karakter siswa agar memiliki integritas, etika, dan moral yang tinggi.</li>
                <li>Mengintegrasikan teknologi informasi dalam proses belajar-mengajar.</li>
              </ul>
            </div>
          </div>
        );
      case 'struktur':
        return (
          <div className="bg-gray-50/80 p-8 rounded-2xl shadow-inner text-center border overflow-hidden">
            <h3 className="text-3xl font-extrabold text-blue-900 mb-8">Struktur Organisasi Sekolah Unggulan</h3>
            <div className="inline-block p-6 border-2 border-blue-800 rounded-2xl shadow-xl bg-white/90">
              <div className="p-4 bg-gray-200 rounded-xl font-bold text-xl inline-block shadow-sm">Komite Sekolah</div>
              <ArrowDown className="w-8 h-8 mx-auto my-4 text-blue-800" />
              <div className="font-extrabold text-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-blue-950 px-8 py-4 rounded-xl inline-block shadow-lg">Kepala Sekolah (Dr. H. Ahmad Fauzi, M.Pd.)</div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-8">
                <div className="px-6 py-4 border-2 border-blue-200 rounded-xl shadow-md bg-blue-50/80 font-bold text-blue-900 w-full md:w-1/3">Wakil Kepala Bidang Kurikulum</div>
                <div className="px-6 py-4 border-2 border-blue-200 rounded-xl shadow-md bg-blue-50/80 font-bold text-blue-900 w-full md:w-1/3">Wakil Kepala Bidang Kesiswaan</div>
                <div className="px-6 py-4 border-2 border-blue-200 rounded-xl shadow-md bg-blue-50/80 font-bold text-blue-900 w-full md:w-1/3">Wakil Kepala Bidang Sarana & Prasarana</div>
              </div>
              <ArrowDown className="w-8 h-8 mx-auto my-4 text-blue-800" />
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="px-6 py-4 border-2 border-green-200 rounded-xl shadow-md bg-green-50/80 font-bold text-green-900 w-full md:w-1/3">Dewan Guru</div>
                <div className="px-6 py-4 border-2 border-green-200 rounded-xl shadow-md bg-green-50/80 font-bold text-green-900 w-full md:w-1/3">Tenaga Kependidikan</div>
                <div className="px-6 py-4 border-2 border-green-200 rounded-xl shadow-md bg-green-50/80 font-bold text-green-900 w-full md:w-1/3">Siswa-Siswi</div>
              </div>
            </div>
            <p className="mt-8 text-md font-medium text-gray-500 text-center">Struktur ini disusun berdasarkan tata kelola organisasi yang efektif dan efisien.</p>
          </div>
        );
      case 'fasilitas':
        const fasilitas = [
          { title: "Laboratorium Sains Terpadu", desc: "Dilengkapi peralatan canggih untuk eksperimen Fisika, Kimia, dan Biologi.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=250" },
          { title: "Perpustakaan Digital", desc: "Koleksi buku lengkap dan akses e-jurnal dari berbagai penerbit nasional dan internasional.", img: "https://images.unsplash.com/photo-1568667256549-094345858638?auto=format&fit=crop&q=80&w=400&h=250" },
          { title: "Lapangan Olahraga", desc: "Tersedia lapangan Futsal, Basket, dan Voli dengan permukaan berstandar internasional.", img: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80&w=400&h=250" },
          { title: "Ruang Kelas Multimedia", desc: "Setiap kelas dilengkapi Smart TV interaktif dan koneksi internet berkecepatan kencang.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400&h=250" },
          { title: "Auditorium Serbaguna", desc: "Kapasitas 1000 orang untuk acara wisuda, seminar, dan pertunjukan seni budaya.", img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=400&h=250" },
          { title: "Kantin Sehat", desc: "Menyediakan makanan bergizi dengan pengawasan ahli gizi sekolah dan pembayaran difital.", img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=400&h=250" }
        ];
        return (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fasilitas.map((f, i) => (
              <div key={i} className="bg-white/90 rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img src={f.img} alt={f.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-extrabold text-xl text-blue-900 mb-2 group-hover:text-amber-500 transition-colors">{f.title}</h4>
                  <p className="text-gray-600 font-medium">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'akreditasi':
        const penghargaan = [
          { title: "Sekolah Adiwiyata Nasional", year: 2025, desc: "Penghargaan atas komitmen sekolah dalam pelestarian lingkungan." },
          { title: "Juara Umum Olimpiade Sains Nasional (OSN)", year: 2024, desc: "Meraih total 5 medali emas, 3 perak, dan 2 perunggu." },
          { title: "Best Innovator School Award", year: 2023, desc: "Diberikan oleh Kementerian Pendidikan atas penerapan kurikulum berbasis proyek terbaik." }
        ];
        return (
          <div className="space-y-8">
            <div className="p-8 bg-green-50/90 rounded-2xl shadow-lg border-l-8 border-green-600 transform hover:scale-[1.01] transition-transform">
              <h3 className="text-3xl font-extrabold text-green-800 flex items-center mb-2"><Award className="w-10 h-10 mr-4" /> Status Akreditasi</h3>
              <p className="text-4xl font-black text-green-600 my-4 drop-shadow-sm">AKREDITASI 'A' (UNGGUL)</p>
              <p className="text-gray-800 text-lg font-medium">Berdasarkan hasil asesmen BAN-S/M tahun 2024. Berlaku hingga 2029.</p>
            </div>

            <h3 className="text-3xl font-extrabold text-blue-900 mb-6 border-b-2 border-amber-400 pb-2 inline-block">Penghargaan Terbaru</h3>
            <div className="grid gap-4">
              {penghargaan.map((p, i) => (
                <div key={i} className="flex items-start bg-white/90 p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all hover:border-amber-200">
                  <div className="bg-gradient-to-br from-amber-300 to-amber-500 p-3 rounded-xl shadow-inner mr-6 mt-1">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-900">{p.title} <span className="text-lg font-bold text-amber-500 ml-2 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">{p.year}</span></p>
                    <p className="text-lg text-gray-700 mt-2 font-medium">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'alamat':
        return (
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-3xl font-extrabold text-blue-900 flex items-center mb-6"><MapPin className="w-8 h-8 mr-3 text-amber-500" /> Peta Lokasi</h3>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.190695191069!2d106.81845197022202!3d-6.239275466547184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d9d7943485%3A0x6b772c72b2513f17!2sJakarta%20State%20University!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                  width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
            <div className="bg-white/90 p-8 rounded-2xl shadow-xl border-t-8 border-blue-900 flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-blue-900 mb-8">Informasi Kontak Cepat</h3>
              <div className="space-y-6">
                <div className="flex items-start bg-gray-50/50 p-4 rounded-xl">
                  <div className="bg-blue-100 p-3 rounded-full mr-4"><MapPin className="w-6 h-6 text-blue-700" /></div>
                  <div><strong className="block text-gray-900 text-lg mb-1">Alamat Utama:</strong> <span className="text-gray-700 font-medium">Jl. Pendidikan No. 10, Kel. Unggul Jaya, Kec. Cerdas, Kota Contoh, 14000.</span></div>
                </div>
                {/* ... other contacts ... */}
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
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-10 drop-shadow-sm border-l-8 border-amber-400 pl-6 py-2 bg-white/40 rounded-r-2xl backdrop-blur-sm">Profil Sekolah</h1>
      
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
