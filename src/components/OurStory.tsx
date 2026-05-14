import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function OurStory() {
  return (
    <section className="py-24 px-4 bg-cream text-maroon-dark overflow-hidden relative">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display mb-4">Our Story</h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="flex flex-col items-center gap-12 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            {/* Umer Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 ring-1 ring-gold/20">
                <img 
                  src="https://scontent.fmux1-1.fna.fbcdn.net/v/t51.82787-15/655647826_17984162921969028_1712024458697180023_n.webp?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHmB40X2gcoXFjQmJ41VwEDxdHXy-pUotvF0dfL6lSi24Kje6SCR2OSYVIqdtWcq7Zr6sY8HGOaXSxH8XywKjwp&_nc_ohc=KW86TiOy_fAQ7kNvwGrTaeH&_nc_oc=Adro7Ihhxtegov2rA-WQMW31ONmuCu19b9FOMPI3f8VS1uYbJPsfRgjJeS9X2GU4h759RrMsHabgelg4V5_HWqQ-&_nc_zt=23&_nc_ht=scontent.fmux1-1.fna&_nc_gid=Oq2Wp-3-naFetl7IM8BXTg&_nc_ss=7b2a8&oh=00_Af6c54CnkN_fCFWrXt4r-4bR1DwSbw_VYN3aHXjEbvn73A&oe=6A0B4808" 
                  alt="Umer" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-script text-4xl text-maroon-dark mb-2">Umer</h3>
              <p className="font-serif italic text-maroon-light/60 text-xs max-w-[200px] mx-auto">
                "The moment I saw her, I knew my search was over."
              </p>
            </motion.div>

            {/* Heart Divider */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gold hidden md:block"
            >
              <Heart size={48} fill="currentColor" />
            </motion.div>

            {/* Alisha Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 ring-1 ring-gold/20">
                <img 
                  src="https://images.pexels.com/photos/17691640/pexels-photo-17691640.jpeg" 
                  alt="Alisha" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-script text-4xl text-maroon-dark mb-2">Alisha</h3>
              <p className="font-serif italic text-maroon-light/60 text-xs max-w-[200px] mx-auto">
                "In him, I found my love, my best friend, and my home."
              </p>
            </motion.div>
          </div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center font-display text-xl md:text-2xl leading-relaxed text-maroon-dark text-balance"
          >
            Love is not just about finding the right person, but creating the right relationship. 
            It's not about how much love you have in the beginning but how much love you build until the end. 
            We are starting our forever, and we want you to be part of it.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
