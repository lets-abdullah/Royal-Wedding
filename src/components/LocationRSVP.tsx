import { motion } from "motion/react";
import { Send, MapPin, Mail, Crown } from "lucide-react";
import { useState, FormEvent } from "react";

export default function LocationRSVP() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    attending: "yes",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your RSVP!");
  };

  return (
    <div className="w-full">
      {/* Location Section */}
      <section className="py-24 px-4 bg-cream text-maroon-dark">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Blessings Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 bg-ivory p-12 border-2 border-gold/30 rounded-sm relative flex flex-col items-center justify-center text-center shadow-xl"
          >
            <div className="absolute top-0 right-0 p-4">
                <Crown size={24} className="text-gold" />
            </div>
            
            <h2 className="text-3xl font-display text-maroon-dark mb-8">Blessings From</h2>
            
            <div className="space-y-6">
              <div>
                <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold block mb-1">Groom's Parents</span>
                <p className="font-serif text-lg font-bold">Mr & Mrs Chaudhary</p>
              </div>
              
              <div>
                <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold block mb-1">Bride's Parents</span>
                <p className="font-serif text-lg font-bold">Mr. Vikram & Mrs. Anjali Mehta</p>
              </div>

              <div className="pt-2">
                <span className="font-script text-2xl text-gold">And Grandparents</span>
              </div>
            </div>
          </motion.div>
          
          {/* Venue Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 bg-white p-6 rounded-sm shadow-2xl border border-black/5 flex flex-col"
          >
            <div className="text-center mb-6">
                <h3 className="text-2xl font-display text-maroon-dark">The Royal Venue</h3>
            </div>
            
            <div className="relative flex-1 rounded-sm overflow-hidden border border-gold/20 min-h-[300px]">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0!2d71.4753705!3d30.1727732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b314a9cd04f0d%3A0xd7ad912d1a013172!2sGreenland%20Banquet%20Hall!5e0!3m2!1sen!2s!4v1710000000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Greenland Banquet Hall Location"
                ></iframe>
                <div className="absolute inset-0 bg-maroon-dark/5 pointer-events-none" />
                <div className="absolute top-4 left-4">
                    <button className="bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-serif text-blue-600 flex items-center gap-1 shadow-md border border-black/10">
                        Open in Maps <MapPin size={12} />
                    </button>
                </div>
            </div>
            
            <div className="text-center mt-6 space-y-4">
                <p className="font-serif text-lg text-maroon-dark">Greenland Banquet Hall, Multan</p>
                <a 
                    href="https://www.google.com/maps/dir//Greenland+Banquet+Hall,+Haideri+Colony,+Vehari+Rd,+Mumtazabad,+Multan,+60000,+Pakistan/@30.1649426,71.4873673,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x393b314a9cd04f0d:0xd7ad912d1a013172!2m2!1d71.4753705!2d30.1727732?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-maroon-dark text-white px-6 py-2 rounded-full font-serif text-xs uppercase tracking-widest flex items-center gap-2 mx-auto hover:bg-black transition-colors inline-flex"
                >
                    <MapPin size={12} className="text-gold" />
                    Get Directions
                </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-24 px-4 bg-maroon-dark relative">
        <div className="max-w-md mx-auto relative z-20">
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-maroon-light/30 backdrop-blur-md p-10 rounded-sm border border-gold/40 shadow-2xl space-y-8 flex flex-col items-center"
          >
            <div className="bg-maroon-dark p-4 rounded-lg border border-gold/20 mb-2">
                <Mail size={32} className="text-gold" />
            </div>
            
            <div className="text-center">
                <h2 className="text-3xl font-display text-gold mb-2">RSVP</h2>
                <p className="font-serif text-cream/70 text-[10px] uppercase tracking-widest">Please confirm your presence by November 1st</p>
            </div>

            <div className="w-full space-y-6">
              <div className="space-y-2">
                <label className="text-gold text-[10px] uppercase font-bold tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your name"
                  className="w-full bg-black/40 border border-gold/20 p-3 outline-none text-cream font-serif text-sm focus:border-gold transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-gold text-[10px] uppercase font-bold tracking-widest">Number of Guests</label>
                <select 
                  className="w-full bg-black/40 border border-gold/20 p-3 outline-none text-cream font-serif text-sm focus:border-gold transition-colors appearance-none cursor-pointer"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-gold text-[10px] uppercase font-bold tracking-widest block text-center">Attending?</label>
                <div className="flex justify-center gap-8">
                  <label className="flex items-center gap-2 cursor-pointer group text-xs font-serif text-cream">
                    <input 
                      type="radio" 
                      name="attending" 
                      className="accent-gold" 
                      checked={formData.attending === 'yes'}
                      onChange={() => setFormData({...formData, attending: 'yes'})}
                    />
                    Joyfully Accepts
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group text-xs font-serif text-cream">
                    <input 
                      type="radio" 
                      name="attending" 
                      className="accent-gold" 
                      checked={formData.attending === 'no'}
                      onChange={() => setFormData({...formData, attending: 'no'})}
                    />
                    Regretfully Declines
                  </label>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gold text-maroon-dark py-3 font-serif font-bold uppercase tracking-widest text-sm hover:bg-gold-light transition-all shadow-lg"
              >
                Send Confirmation
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
