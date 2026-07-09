import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="concept" className="py-24 md:py-32 bg-[#FFFDF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Gigantic framed image on the left with elegant border/shadow offsets */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 aspect-[3/4] w-full max-w-lg mx-auto border-8 border-white shadow-2xl overflow-hidden"
            >
              <img
                src="/assets/reception-table.jpeg"
                alt="Table de réception d'exception"
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-[2000ms]"
              />
              {/* Gold border accent inside */}
              <div className="absolute inset-4 border border-[#E8C89A]/40 pointer-events-none"></div>
            </motion.div>
            
            {/* Elegant decorative background elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#B7B68A]/10 -z-0 pointer-events-none"></div>
            <div className="absolute -top-10 -left-10 text-9xl font-serif text-[#E8C89A]/10 -z-0 pointer-events-none select-none">
              MD
            </div>
          </div>

          {/* Text Content on the right */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="text-[#D8B26A] w-4 h-4 animate-pulse" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B7B68A] font-semibold">
                  L'Art de Recevoir
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#4A4A37] tracking-tight leading-tight">
                Nous créons des souvenirs.
              </h2>

              <p className="font-serif italic text-xl md:text-2xl text-[#D8B26A] leading-relaxed">
                Chaque réception est pensée comme une expérience gastronomique où le raffinement rencontre la convivialité.
              </p>

              <div className="h-[1px] bg-[#E8C89A]/40 w-24 my-6"></div>

              <p className="font-sans text-sm md:text-base text-[#4A4A37]/80 leading-relaxed space-y-4">
                La Maison dreyy ne propose pas de simples buffets. Nous concevons de véritables scénographies culinaires sur-mesure. Notre approche mêle la rigueur de la gastronomie à l'élégance contemporaine des plus belles réceptions internationales. 
                <br /><br />
                Que ce soit pour un mariage intimiste dans un château séculaire, un lancement de produit pour une maison de haute couture ou un brunch dominical, nos maîtres de cérémonie et créateurs culinaires subliment vos instants les plus précieux avec un professionnalisme d'orfèvre.
              </p>

              <div className="pt-6">
                <div className="border border-[#B7B68A] hover:border-[#D8B26A] p-4 bg-[#FBF8F3] max-w-md">
                  <p className="font-serif italic text-xs text-[#B7B68A]">
                    « Notre ambition n'est pas simplement de nourrir vos convives, mais de suspendre le temps pour leur offrir un voyage sensoriel inoubliable. »
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-[#4A4A37] font-semibold text-right mt-2">
                    — La Chef du restaurant, La Maison dreyy
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
