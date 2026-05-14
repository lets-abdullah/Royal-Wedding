import { motion } from "motion/react";

export default function GoldDivider() {
  return (
    <motion.div 
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex items-center justify-center gap-4 my-8 w-full max-w-lg mx-auto"
    >
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gold"
        >
          <path
            d="M50 10L60 40L90 50L60 60L50 90L40 60L10 50L40 40L50 10Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
          <path
            d="M50 20V80M20 50H80"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold to-transparent" />
    </motion.div>
  );
}
