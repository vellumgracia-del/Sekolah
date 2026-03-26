import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Galeri() {
  const [filter, setFilter] = useState('Semua');
  
  const photos = [
    { id: 1, title: "Lomba Sains Nasional", category: "Akademik", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400&h=300" },
    { id: 2, title: "Pentas Seni Budaya", category: "Seni", img: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=400&h=300" },
    { id: 3, title: "Pertandingan Futsal", category: "Olahraga", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=300" },
    { id: 4, title: "Bakti Sosial Osis", category: "Sosial", img: "https://images.unsplash.com/photo-1593113580332-ceb4b1a451e0?auto=format&fit=crop&q=80&w=400&h=300" },
    { id: 5, title: "Upacara Bendera Senin", category: "Umum", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=400&h=300" },
    { id: 6, title: "Workshop AI & IT", category: "Akademik", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=300" },
  ];

  const categories = ["Semua", "Akademik", "Seni", "Olahraga", "Sosial", "Umum"];
  
  const filteredPhotos = filter === 'Semua' ? photos : photos.filter(p => p.category === filter);

  return (
    <div className="space-y-8 animate-fade-in relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-10 drop-shadow-sm border-l-8 border-amber-400 pl-6 py-2 bg-white/40 rounded-r-2xl backdrop-blur-sm">
        Galeri Multimedia
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 border-2 ${
              filter === cat 
                ? 'bg-blue-800 text-white border-blue-800 shadow-md ring-2 ring-blue-300 ring-offset-2' 
                : 'bg-white/70 text-gray-700 hover:border-amber-400 border-transparent shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredPhotos.map((p) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              key={p.id} 
              className="group relative overflow-hidden rounded-2xl shadow-xl border-[6px] border-white/60 cursor-pointer hover:shadow-2xl hover:border-amber-400 transition-all duration-300"
            >
              <img src={p.img} alt={p.title} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="text-left"
                >
                  <p className="text-sm font-black uppercase text-amber-400 tracking-wider mb-2">{p.category}</p>
                  <h3 className="text-2xl font-extrabold text-white leading-tight">{p.title}</h3>
                </motion.div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 bg-amber-400/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-transform duration-300 group-hover:scale-110 shadow-xl">
                  <ZoomIn className="w-8 h-8 text-blue-950" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
