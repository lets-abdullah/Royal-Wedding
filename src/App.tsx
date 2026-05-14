/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Events from "./components/Events";
import LocationRSVP from "./components/LocationRSVP";
import Footer from "./components/Footer";
import FloralPetals from "./components/FloralPetals";
import InvitationIntro from "./components/InvitationIntro";
import MusicToggle from "./components/MusicToggle";
import { motion, useScroll, useSpring } from "motion/react";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const fadeInAudio = () => {
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    audio.volume = 0;
    audio.currentTime = 0;
    audio.muted = isMuted;

    const targetVolume = 0.25;
    const fadeStep = 0.02;

    audio.play().then(() => {
      let vol = 0;
      const interval = setInterval(() => {
        if (audio && vol < targetVolume) {
          vol = Math.min(targetVolume, vol + fadeStep);
          audio.volume = vol;
        } else {
          clearInterval(interval);
        }
      }, 100);
    }).catch((e: unknown) => console.log("Audio play blocked:", e));
  };

  const handleOpenClick = () => {
    fadeInAudio();
  };

  const handleOpenComplete = () => {
    setIsOpened(true);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <main className="relative selection:bg-gold selection:text-maroon-dark overflow-x-hidden">
      {/* Background Music - Romantic Instrumental */}
      <audio 
        ref={audioRef}
        loop
        preload="auto"
        id="bg-music"
        src="/audio.mp3" // Attached song file placed in public/audio.mp3
      />

      <InvitationIntro isOpen={isOpened} onOpenClick={handleOpenClick} onOpenComplete={handleOpenComplete} />

      {isOpened && (
        <>
          {/* Progress Bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1 bg-gold z-[100] origin-left" 
            style={{ scaleX }} 
          />

          {/* Floating Animations */}
          <FloralPetals />

          {/* Music Controls */}
          <MusicToggle 
            isMuted={isMuted}
            onToggleMute={() => setIsMuted(!isMuted)}
          />

          {/* Sections */}
          <Hero />
          <OurStory />
          <Events />
          <LocationRSVP />
          <Footer />
        </>
      )}
    </main>
  );
}
