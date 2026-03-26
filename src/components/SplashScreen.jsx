import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { School } from 'lucide-react';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress
    const duration = 2500;
    const interval = 50;
    let current = 0;
    
    const timer = setInterval(() => {
      current += (100 / (duration / interval));
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
      setProgress(current);
    }, interval);
    
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-900 overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Animated Background geometric patterns */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full border-[1px] border-amber-300 border-dashed opacity-30" 
          />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[-30%] left-[-20%] w-[80vw] h-[80vw] rounded-full border-[2px] border-blue-400 opacity-20" 
          />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center relative z-10"
        >
          {/* Logo container */}
          <motion.div 
            animate={{ 
              rotateY: [0, 360],
              y: [0, -10, 0]
            }}
            transition={{ 
              rotateY: { duration: 3, repeat: Infinity, ease: "linear" },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl mb-8 relative"
          >
            {/* Inner glow */}
            <div className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-xl" />
            <School className="w-16 h-16 text-amber-400 drop-shadow-lg" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2 tracking-tight">
            Sekolah Unggulan
          </h1>
          <p className="text-blue-200 text-lg md:text-xl font-medium tracking-wide mb-12">
            Masa Depan Cerah Dimulai Di Sini
          </p>

          {/* Progress Bar Container */}
          <div className="w-64 h-2 bg-blue-950/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
            <motion.div 
              className="h-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="mt-4 text-blue-300 text-sm font-semibold tracking-widest">
            MEMUAT... {Math.round(progress)}%
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
