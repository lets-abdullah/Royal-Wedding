import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-maroon-dark">
      {/* Background silhouette (simulated with gradient and opacity) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615880484746-a134be9a27f3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/40 via-maroon-dark/20 to-maroon-dark z-0" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl flex flex-col items-center">
        {/* Om Symbol */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
           <svg width="60" height="60" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
              <path d="M64 8C33.1 8 8 33.1 8 64C8 94.9 33.1 120 64 120C94.9 120 120 94.9 120 64C120 33.1 94.9 8 64 8ZM64 112C37.5 112 16 90.5 16 64C16 37.5 37.5 16 64 16C90.5 16 112 37.5 112 64C112 90.5 90.5 112 64 112Z" fill="currentColor" opacity="0"/>
              <path d="M84.5 58.7C81.4 55.6 77.2 54 72.8 54C68.4 54 64.2 55.6 61.1 58.7C58 61.8 56.4 66 56.4 70.4C56.4 74.8 58 79 61.1 82.1C64.2 85.2 68.4 86.8 72.8 86.8C77.2 86.8 81.4 85.2 84.5 82.1C87.6 79 89.2 74.8 89.2 70.4C89.2 66 87.6 61.8 84.5 58.7ZM72.8 78.8C70.6 78.8 68.5 78 66.9 76.4C65.3 74.8 64.4 72.7 64.4 70.4C64.4 68.1 65.2 66 66.9 64.4C68.5 62.8 70.6 62 72.8 62C75 62 77.1 62.8 78.7 64.4C80.3 66 81.2 68.1 81.2 70.4C81.2 72.7 80.4 74.8 78.7 76.4C77.1 78 75 78.8 72.8 78.8Z" fill="currentColor"/>
              <path d="M48.8 54.4C46.3 52 43 50.6 39.4 50.6C35.8 50.6 32.5 52 30 54.4C27.5 56.8 26.2 60.1 26.2 63.6C26.2 67.1 27.6 70.4 30 72.8C32.5 75.2 35.8 76.6 39.4 76.6C43 76.6 46.3 75.2 48.8 72.8C51.3 70.4 52.6 67.1 52.6 63.6C52.6 60.1 51.2 56.8 48.8 54.4ZM39.4 68.6C38.1 68.6 36.8 68.1 35.9 67.1C35 66.2 34.2 64.9 34.2 63.6C34.2 62.3 34.7 61 35.7 60.1C36.6 59.2 37.9 58.7 39.2 58.7C40.5 58.7 41.8 59.2 42.7 60.1C43.6 61 44.4 62.3 44.4 63.6C44.4 64.9 43.9 66.2 42.9 67.1C42.1 68.1 40.8 68.6 39.4 68.6Z" fill="currentColor"/>
              <path d="M102 44C102 40.7 99.3 38 96 38C92.7 38 90 40.7 90 44C90 47.3 92.7 50 96 50C99.3 50 102 47.3 102 44Z" fill="currentColor"/>
              <path d="M96 26C88.3 26 82 32.3 82 40H86C86 34.5 90.5 30 96 30C101.5 30 106 34.5 106 40V44H110V40C110 32.3 103.7 26 96 26Z" fill="currentColor"/>
           </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-gold text-xs md:text-sm tracking-[0.4em] uppercase mb-12"
        >
          Together with our families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="font-script text-6xl md:text-8xl text-white gold-glow leading-tight mb-12"
        >
          Umer & Alisha
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-serif text-cream/80 text-lg md:text-xl mb-16 italic text-balance"
        >
          Invite you to join us in the celebration of our love
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-64 h-[1px] bg-gold/40" />
          <div className="font-serif text-2xl text-white tracking-[0.2em] px-8 py-2 uppercase">
            December 12, 2026
          </div>
          <div className="w-64 h-[1px] bg-gold/40" />
          
          <div className="mt-4 font-serif text-lg tracking-[0.3em] text-cream/70 uppercase">
            Multan, Pakistan
          </div>
        </motion.div>
      </div>

      {/* Decorative Ornaments (Corners as per tradition) */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-ornament opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-ornament opacity-10 pointer-events-none rotate-180" />
    </section>
  );
}
