import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicToggleProps {
  isMuted: boolean;
  onToggleMute: () => void;
}

export default function MusicToggle({ isMuted, onToggleMute }: MusicToggleProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggleMute}
        className="w-12 h-12 rounded-full bg-maroon-dark/90 text-gold border border-gold/30 shadow-[0_8px_24px_rgba(212,175,55,0.25)] flex items-center justify-center transition-all"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </motion.button>
    </div>
  );
}
