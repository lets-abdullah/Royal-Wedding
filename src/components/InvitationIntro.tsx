import { motion, AnimatePresence } from "motion/react";
import { MailOpen, Heart } from "lucide-react";
import { useState } from "react";

interface InvitationIntroProps {
  onOpenClick: () => void;
  onOpenComplete: () => void;
  isOpen: boolean;
}

export default function InvitationIntro({ onOpenClick, onOpenComplete, isOpen }: InvitationIntroProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const startAnimation = () => {
    onOpenClick();
    setIsAnimating(true);
    
    // Premium cinematic sequence:
    // 1. Curtains appear & open (0 - 2s) - Cinematic opening
    // 2. Reveal moment with particles (2s - 5s) - 3 second magical pause
    // 3. Curtains fade away and notify parent (5s+) - Smooth exit
    setTimeout(() => {
      setIsRevealed(true);
      setShowParticles(true);
    }, 2000);

    setTimeout(() => {
      // Now notify parent to show main content
      onOpenComplete();
    }, 5000);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.5, delay: 5.5, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[1000] bg-maroon-dark flex items-center justify-center p-6 overflow-hidden"
        >
          {/* 1. INITIAL COVER SCREEN */}
          {!isAnimating && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-[1100] max-w-lg w-full bg-ivory shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-[1px] border-gold/50 flex flex-col items-center justify-center text-center p-8 md:p-16 rounded-[2px]"
            >
              {/* Wax Seal Decoration */}
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 200, damping: 10 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(0,0,0,0.5)] border-4 border-maroon-dark z-20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-30" />
                <div className="text-maroon-dark font-display font-bold text-3xl relative z-10 select-none">A&D</div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-8"
              >
                <h2 className="font-decorative text-gold text-sm md:text-base mb-3 tracking-[0.4em] uppercase">The Wedding of</h2>
                <div className="h-px w-12 bg-gold/40 mx-auto mb-6" />
                <h1 className="font-script text-6xl md:text-7xl text-maroon-dark mb-8 leading-tight">Umer & Alisha</h1>
              </motion.div>

              <p className="font-serif text-maroon-light/80 text-base md:text-lg italic mb-12 max-w-xs mx-auto leading-relaxed">
                Together with our families, we invite you to share our joy.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#1e1e1e" }}
                whileTap={{ scale: 0.98 }}
                onClick={startAnimation}
                className="flex items-center gap-4 bg-maroon-dark text-gold px-12 py-4 rounded-sm font-serif font-bold uppercase tracking-[0.2em] text-xs hover:text-white transition-all shadow-2xl border border-gold/30 group"
              >
                Open Invitation
                <MailOpen size={18} className="group-hover:translate-y-[-2px] transition-transform" />
              </motion.button>
              
              <div className="absolute inset-4 border-[0.5px] border-gold/20 pointer-events-none" />
            </motion.div>
          )}

          {/* 2. CINEMATIC CURTAIN ANIMATION LAYER */}
          {isAnimating && (
            <div className="absolute inset-0 z-[1200] flex">
              {/* Left Curtain - Premium Royal Design */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ 
                  duration: 2.5, 
                  ease: [0.25, 0.46, 0.45, 0.94], // Premium easing curve
                  delay: 0.1 
                }}
                className="relative h-full w-1/2 bg-gradient-to-r from-maroon-dark via-maroon-dark to-maroon-light/20 shadow-[20px_0_50px_rgba(0,0,0,0.8)] border-r-[8px] border-gold self-stretch overflow-hidden"
              >
                {/* Luxury Velvet Texture Layers */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/velvet.png')] opacity-60 mix-blend-overlay" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-maroon-dark/30 to-gold/5" />
                
                {/* Premium Gold Fringe - Dense and Elegant */}
                <div className="absolute right-0 top-0 bottom-0 w-16 flex flex-col justify-around py-6 opacity-70">
                   {Array.from({length: 50}).map((_, i) => (
                     <motion.div
                       key={i}
                       initial={{ height: 6 }}
                       animate={{ height: [6, 8, 6] }}
                       transition={{ 
                         duration: 3, 
                         repeat: Infinity, 
                         delay: Math.random() * 2,
                         ease: "easeInOut"
                       }}
                       className="w-[1px] bg-gradient-to-b from-gold via-gold-light to-gold/20 rounded-full"
                     />
                   ))}
                </div>

                {/* Royal Crest on Curtain - More Prominent */}
                <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-25 hidden md:block">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.25 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="w-40 h-40 border-4 border-gold rounded-full flex items-center justify-center rotate-45 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                    >
                        <div className="text-gold font-display text-7xl -rotate-45 font-bold">A</div>
                    </motion.div>
                </div>

                {/* Subtle Fabric Movement Effect */}
                <motion.div
                  animate={{ 
                    x: [-2, 2, -2],
                    y: [-1, 1, -1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-30"
                />
              </motion.div>

              {/* Right Curtain - Premium Royal Design */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 2.5, 
                  ease: [0.25, 0.46, 0.45, 0.94], // Premium easing curve
                  delay: 0.1 
                }}
                className="relative h-full w-1/2 bg-gradient-to-l from-maroon-dark via-maroon-dark to-maroon-light/20 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] border-l-[8px] border-gold self-stretch overflow-hidden"
              >
                {/* Luxury Velvet Texture Layers */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/velvet.png')] opacity-60 mix-blend-overlay" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-maroon-dark/30 to-gold/5" />
                
                {/* Premium Gold Fringe - Dense and Elegant */}
                <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col justify-around py-6 opacity-70">
                   {Array.from({length: 50}).map((_, i) => (
                     <motion.div
                       key={i}
                       initial={{ height: 6 }}
                       animate={{ height: [6, 8, 6] }}
                       transition={{ 
                         duration: 3, 
                         repeat: Infinity, 
                         delay: Math.random() * 2,
                         ease: "easeInOut"
                       }}
                       className="w-[1px] bg-gradient-to-b from-gold via-gold-light to-gold/20 rounded-full"
                     />
                   ))}
                </div>

                {/* Royal Crest on Curtain - More Prominent */}
                <div className="absolute left-16 top-1/2 -translate-y-1/2 opacity-25 hidden md:block">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.25 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="w-40 h-40 border-4 border-gold rounded-full flex items-center justify-center -rotate-45 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                    >
                        <div className="text-gold font-display text-7xl rotate-45 font-bold">D</div>
                    </motion.div>
                </div>

                {/* Subtle Fabric Movement Effect */}
                <motion.div
                  animate={{ 
                    x: [2, -2, 2],
                    y: [1, -1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-gold/5 to-transparent opacity-30"
                />
              </motion.div>
            </div>
          )}

          {/* 3. MAGICAL REVEAL MOMENT */}
          {isAnimating && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
              className="absolute inset-0 z-[1150] flex flex-col items-center justify-center bg-maroon-dark text-center overflow-hidden"
            >
               {/* Enhanced Background with Depth */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615880484746-a134be9a27f3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale blur-[1px] scale-110" />
               <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/80 via-maroon-dark/40 to-maroon-dark/80" />
               
               <motion.div
                 initial={{ y: 60, opacity: 0, scale: 0.9 }}
                 animate={{ y: 0, opacity: 1, scale: 1 }}
                 transition={{ duration: 2, delay: 2.2, ease: "easeOut" }}
                 className="relative z-10"
               >
                  {/* Pulsing Heart with Glow */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2.5
                    }}
                    className="mb-8 relative"
                  >
                    <Heart size={80} className="text-gold opacity-90 mx-auto drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]" fill="currentColor" />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gold/20 rounded-full blur-xl"
                    />
                  </motion.div>
                  
                  {/* Couple Names with Dramatic Reveal */}
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 2.8 }}
                    className="font-script text-8xl md:text-[12rem] text-white gold-glow leading-none mb-6 drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                  >
                    Umer & Alisha
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 3.2 }}
                    className="font-serif text-gold tracking-[0.8em] uppercase text-base md:text-2xl opacity-90 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                  >
                    A Royal Wedding Celebration
                  </motion.p>
                  
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 3.5 }}
                    className="mt-12 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto opacity-50"
                  />
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3.8 }}
                    className="font-serif text-cream/70 italic text-xl mt-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                  >
                    The beginning of our forever...
                  </motion.p>
               </motion.div>
               
               {/* Enhanced Particle System */}
               {showParticles && (
                 <div className="absolute inset-0 pointer-events-none overflow-hidden">
                   {/* Sparkling Stars */}
                   {Array.from({length: 40}).map((_, i) => (
                      <motion.div
                        key={`star-${i}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0], 
                          scale: [0, 1.5, 0],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                           duration: Math.random() * 3 + 2, 
                           repeat: Infinity,
                           delay: Math.random() * 3,
                           ease: "easeInOut"
                        }}
                        className="absolute w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                        style={{ 
                          top: `${Math.random() * 100}%`, 
                          left: `${Math.random() * 100}%` 
                        }}
                      />
                   ))}
                   
                   {/* Floating Petals */}
                   {Array.from({length: 15}).map((_, i) => (
                      <motion.div
                        key={`petal-${i}`}
                        initial={{ opacity: 0, y: -20, rotate: 0 }}
                        animate={{ 
                          opacity: [0, 0.8, 0], 
                          y: [0, 100, 200],
                          rotate: [0, 90, 180],
                          x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50]
                        }}
                        transition={{ 
                           duration: Math.random() * 4 + 6, 
                           repeat: Infinity,
                           delay: Math.random() * 2,
                           ease: "easeOut"
                        }}
                        className="absolute w-3 h-6 bg-gradient-to-b from-gold/60 to-gold/20 rounded-full opacity-60"
                        style={{ 
                          top: `${Math.random() * 60}%`, 
                          left: `${Math.random() * 100}%` 
                        }}
                      />
                   ))}
                   
                   {/* Glowing Dust Particles */}
                   {Array.from({length: 25}).map((_, i) => (
                      <motion.div
                        key={`dust-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0, 0.6, 0],
                          scale: [0.5, 1.2, 0.5],
                          x: [0, Math.random() * 30 - 15],
                          y: [0, Math.random() * 30 - 15]
                        }}
                        transition={{ 
                           duration: Math.random() * 4 + 3, 
                           repeat: Infinity,
                           delay: Math.random() * 4,
                           ease: "easeInOut"
                        }}
                        className="absolute w-1 h-1 bg-gold/40 rounded-full blur-sm"
                        style={{ 
                          top: `${Math.random() * 100}%`, 
                          left: `${Math.random() * 100}%` 
                        }}
                      />
                   ))}
                 </div>
               )}
            </motion.div>
          )}

          {/* Enhanced Background Textures */}
          <div className="absolute inset-0 bg-mandala opacity-15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-black/70 pointer-events-none" />
          
          {/* Subtle Ambient Lighting */}
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
