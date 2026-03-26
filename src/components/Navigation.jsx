import React, { useState } from 'react';
import { School, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const ProfilLinks = [
    { id: 'sejarah', label: 'Sejarah Sekolah' },
    { id: 'visi-misi', label: 'Visi & Misi' },
    { id: 'struktur', label: 'Struktur Organisasi' },
    { id: 'fasilitas', label: 'Fasilitas' },
    { id: 'akreditasi', label: 'Akreditasi & Penghargaan' },
    { id: 'alamat', label: 'Alamat & Peta' },
  ];

  const SdmLinks = [
    { id: 'guru', label: 'Data Guru & Karyawan' },
    { id: 'kurikulum', label: 'Informasi Kurikulum' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-xl border-b border-gray-200/50 shadow-sm transition-all duration-300"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center mr-3 transform transition-transform group-hover:scale-105 shadow-md">
              <School className="w-6 h-6 text-amber-400" />
            </div>
            <span className="text-2xl font-extrabold text-blue-900 tracking-tight">Sekolah <span className="text-amber-500">Unggulan</span></span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-3 items-center">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`px-3 py-2 rounded-md font-semibold transition-all duration-200 ${
                activePage === 'home' ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
              }`}
            >
              Beranda
            </button>
            
            {/* Profil Dropdown */}
            <div className="relative group" onMouseLeave={() => setActiveDropdown(null)}>
              <button 
                onMouseEnter={() => setActiveDropdown('profil')}
                onClick={() => toggleDropdown('profil')}
                className={`flex items-center px-3 py-2 rounded-md font-semibold transition-all duration-200 ${
                  ProfilLinks.some(l => l.id === activePage) ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                Profil <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'profil' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden z-50 transform origin-top border border-gray-100"
                  >
                    <div className="py-2">
                      {ProfilLinks.map(link => (
                        <button
                          key={link.id}
                          onClick={() => handleNavClick(link.id)}
                          className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                            activePage === link.id ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-l-4 border-transparent'
                          }`}
                        >
                          {link.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SDM Dropdown */}
            <div className="relative group" onMouseLeave={() => setActiveDropdown(null)}>
              <button 
                onMouseEnter={() => setActiveDropdown('sdm')}
                onClick={() => toggleDropdown('sdm')}
                className={`flex items-center px-3 py-2 rounded-md font-semibold transition-all duration-200 ${
                  SdmLinks.some(l => l.id === activePage) ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                Data/SDM <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'sdm' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden z-50 transform origin-top border border-gray-100"
                  >
                    <div className="py-2">
                      {SdmLinks.map(link => (
                        <button
                          key={link.id}
                          onClick={() => handleNavClick(link.id)}
                          className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                            activePage === link.id ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-l-4 border-transparent'
                          }`}
                        >
                          {link.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => handleNavClick('berita')} className={`px-3 py-2 rounded-md font-semibold transition-all duration-200 ${activePage === 'berita' ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'}`}>Berita</button>
            <button onClick={() => handleNavClick('galeri')} className={`px-3 py-2 rounded-md font-semibold transition-all duration-200 ${activePage === 'galeri' ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'}`}>Galeri</button>
            <button onClick={() => handleNavClick('kalender')} className={`px-3 py-2 rounded-md font-semibold transition-all duration-200 ${activePage === 'kalender' ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'}`}>Kalender</button>
            <button onClick={() => handleNavClick('kontak')} className={`px-3 py-2 rounded-md font-semibold transition-all duration-200 ${activePage === 'kontak' ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'}`}>Kontak</button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={() => handleNavClick('ppdb')}
              className="px-5 py-2.5 text-blue-800 border-2 border-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-300 font-bold shadow-sm hover:shadow-md"
            >
              PPDB Online
            </button>
            <button 
              onClick={() => handleNavClick('portal')}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-blue-950 rounded-full hover:from-amber-300 hover:to-yellow-400 transition-all duration-300 font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Portal Khusus
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center relative z-50">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden relative z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="px-4 py-6 space-y-2">
              <button 
                onClick={() => handleNavClick('home')}
                className={`w-full text-left px-4 py-3 rounded-lg font-bold text-lg ${activePage === 'home' ? 'bg-blue-50 text-blue-700' : 'text-gray-800 hover:bg-gray-50'}`}
              >Beranda</button>
              
              {/* Profil Mobile */}
              <div className="space-y-1">
                <button 
                  onClick={() => toggleDropdown('mobile-profil')}
                  className="w-full flex justify-between items-center px-4 py-3 rounded-lg font-bold text-lg text-gray-800 hover:bg-gray-50"
                >
                  Profil Sekolah <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-profil' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-profil' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-6 space-y-1 overflow-hidden"
                    >
                      {ProfilLinks.map(link => (
                        <button
                          key={link.id}
                          onClick={() => handleNavClick(link.id)}
                          className={`w-full text-left px-4 py-2 rounded-lg font-medium ${activePage === link.id ? 'text-blue-700 font-bold' : 'text-gray-600'}`}
                        >
                          {link.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SDM Mobile */}
              <div className="space-y-1">
                <button 
                  onClick={() => toggleDropdown('mobile-sdm')}
                  className="w-full flex justify-between items-center px-4 py-3 rounded-lg font-bold text-lg text-gray-800 hover:bg-gray-50"
                >
                  Data/SDM <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'mobile-sdm' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'mobile-sdm' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-6 space-y-1 overflow-hidden"
                    >
                      {SdmLinks.map(link => (
                        <button
                          key={link.id}
                          onClick={() => handleNavClick(link.id)}
                          className={`w-full text-left px-4 py-2 rounded-lg font-medium ${activePage === link.id ? 'text-blue-700 font-bold' : 'text-gray-600'}`}
                        >
                          {link.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button onClick={() => handleNavClick('berita')} className="w-full text-left px-4 py-3 rounded-lg font-bold text-lg text-gray-800 hover:bg-gray-50">Berita & Informasi</button>
              <button onClick={() => handleNavClick('galeri')} className="w-full text-left px-4 py-3 rounded-lg font-bold text-lg text-gray-800 hover:bg-gray-50">Galeri Multimedia</button>
              <button onClick={() => handleNavClick('kalender')} className="w-full text-left px-4 py-3 rounded-lg font-bold text-lg text-gray-800 hover:bg-gray-50">Kalender Akademik</button>
              <button onClick={() => handleNavClick('kontak')} className="w-full text-left px-4 py-3 rounded-lg font-bold text-lg text-gray-800 hover:bg-gray-50">Kontak</button>
              
              <div className="pt-4 space-y-3">
                <button onClick={() => handleNavClick('ppdb')} className="w-full py-4 bg-blue-800 text-white rounded-xl font-bold text-lg shadow-md">PPDB Online</button>
                <button onClick={() => handleNavClick('portal')} className="w-full py-4 bg-amber-400 text-blue-950 rounded-xl font-bold text-lg shadow-md">Portal Khusus</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
