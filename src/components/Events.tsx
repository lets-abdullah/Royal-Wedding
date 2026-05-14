import { motion } from "motion/react";
import { HandMetal, Music, Heart, Sparkles } from "lucide-react";

const events = [
  {
    name: "The Engagement",
    date: "Dec 10, 2026",
    time: "7:00 PM",
    venue: "Hotel Taj Lake Palace",
    subtext: "RING CEREMONY",
    icon: <Sparkles className="text-gold" size={32} />,
    quote: '"The beginning of forever."',
    side: "left"
  },
  {
    name: "Mehendi Ceremony",
    date: "Dec 11, 2026",
    time: "11:00 AM",
    venue: "Poolside, The Oberoi Udaivilas",
    subtext: "HENNA & FOLK SONGS",
    icon: <HandMetal className="text-gold" size={32} />,
    quote: '"Color of love on hands."',
    side: "right"
  },
  {
    name: "Sangeet Night",
    date: "Dec 11, 2026",
    time: "8:00 PM",
    venue: "Grand Ballroom, Udaivilas",
    subtext: "DANCE & MUSIC",
    icon: <Music className="text-gold" size={32} />,
    quote: '"Dance the night away!"',
    side: "left"
  },
  {
    name: "The Wedding",
    date: "Dec 12, 2026",
    time: "5:00 PM",
    venue: "Jagmandir Island Palace",
    subtext: "PHERAS & RECEPTION",
    icon: <Heart className="text-gold" size={32} />,
    quote: '"The Royal Union."',
    side: "right"
  },
];

export default function Events() {
  return (
    <section className="py-24 px-4 bg-maroon-dark relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display text-gold mb-2">Wedding Events</h2>
          <p className="font-serif text-cream/60 tracking-widest text-xs uppercase italic">A celebration of love and tradition</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold/40 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {events.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center w-full mb-12 md:mb-24 ${event.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                {/* Event Details */}
                <motion.div 
                  initial={{ opacity: 0, x: event.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2 px-8 text-center md:text-left"
                >
                    <div className={`${event.side === 'right' ? 'md:text-left' : 'md:text-right'} space-y-1`}>
                        <h3 className="text-2xl md:text-3xl font-display text-gold">{event.name}</h3>
                        <div className="font-serif text-lg text-white font-bold">{event.date} | {event.time}</div>
                        <div className="font-serif text-cream/70 italic text-base">{event.venue}</div>
                        <div className="font-decorative text-gold/60 text-[10px] tracking-widest uppercase">{event.subtext}</div>
                    </div>
                </motion.div>

                {/* Timeline Dot */}
                <div className="relative z-10 my-8 md:my-0">
                    <div className="w-10 h-10 bg-maroon-dark border-4 border-gold rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                        <div className="w-2 h-2 bg-gold rounded-full" />
                    </div>
                </div>

                {/* Event Card/Icon */}
                <motion.div 
                  initial={{ opacity: 0, x: event.side === 'left' ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2 px-8"
                >
                    <div className={`p-8 bg-black/40 rounded-sm border border-gold/20 flex flex-col items-center gap-4 transition-all hover:bg-gold/10 group ${event.side === 'left' ? 'md:mr-auto' : 'md:ml-auto'} max-w-sm mx-auto md:mx-0`}>
                        <div className="p-4 bg-maroon-dark/50 rounded-lg group-hover:scale-110 transition-transform">
                            {event.icon}
                        </div>
                        <p className="font-serif italic text-gold/70 text-lg">{event.quote}</p>
                    </div>
                </motion.div>
              </div>
            ))}

            {/* Terminal Heart */}
            <div className="flex justify-center mt-12">
                 <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <Heart size={32} fill="currentColor" className="text-maroon-dark" />
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
