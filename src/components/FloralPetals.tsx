import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FloralPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10,
      size: Math.random() * 15 + 10,
      rotation: Math.random() * 360,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.3,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ 
            x: `${petal.x}vw`, 
            y: "-10vh", 
            rotate: petal.rotation,
            opacity: 0 
          }}
          animate={{
            y: "110vh",
            x: `${petal.x + (Math.random() * 10 - 5)}vw`,
            rotate: petal.rotation + 360,
            opacity: [0, petal.opacity, petal.opacity, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
          className="absolute"
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C12 2 4 6 4 13C4 17.5 7.5 21 12 21C16.5 21 20 17.5 20 13C20 6 12 2 12 2Z"
              fill="#d4af37"
              fillOpacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
