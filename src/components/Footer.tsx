import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-4 bg-maroon-dark border-t border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-mandala opacity-5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
           className="mb-8"
        >
            <div className="font-script text-4xl text-gold gold-glow mb-4">Umer & Alisha</div>
            <div className="font-decorative text-gold/60 text-[10px] tracking-[0.5em] uppercase">December 12, 2026</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gold/30" />
            <Heart size={20} className="text-gold fill-gold animate-pulse" />
            <div className="h-[1px] w-12 bg-gold/30" />
          </div>

          <p className="font-serif text-2xl text-cream/90 italic">
            "We look forward to celebrating with you."
          </p>

          <p className="font-body text-cream/40 text-sm tracking-widest uppercase mt-12 pb-8">
            Made with love for a royal beginning
          </p>
        </motion.div>
      </div>

      {/* Corner Ornaments */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-ornament opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-ornament opacity-10 pointer-events-none -scale-x-100" />
    </footer>
  );
}
