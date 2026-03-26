import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import Portal from './pages/Portal';
import Profil from './pages/Profil';
import SDM from './pages/SDM';
import Berita from './pages/Berita';
import Galeri from './pages/Galeri';
import Kalender from './pages/Kalender';
import Kontak from './pages/Kontak';
import PPDB from './pages/PPDB';
import ELibrary from './pages/ELibrary';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'portal': return <Portal />;
      // Profil subpages
      case 'sejarah':
      case 'visi-misi':
      case 'struktur':
      case 'fasilitas':
      case 'akreditasi':
      case 'alamat':
        return <Profil subPage={activePage} setSubPage={setActivePage} />;
      // SDM subpages
      case 'guru':
      case 'kurikulum':
        return <SDM subPage={activePage} setSubPage={setActivePage} />;
      case 'berita': return <Berita />;
      case 'galeri': return <Galeri />;
      case 'kalender': return <Kalender />;
      case 'kontak': return <Kontak />;
      case 'ppdb': return <PPDB />;
      case 'elibrary': return <ELibrary setActivePage={setActivePage} />;
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <>
      <ThreeBackground />
      
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <motion.div 
          className="min-h-screen flex flex-col relative z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation activePage={activePage} setActivePage={setActivePage} />
          
          <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
