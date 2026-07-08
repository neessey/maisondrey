import React from 'react';
import { motion } from 'motion/react';
import { PRESTATIONS } from '../data';
import { Check, Star, CornerDownRight } from 'lucide-react';

export default function PrestationsSection() {
  return (
    <section id="prestations" className="py-24 bg-[#FFFDF9] border-t border-[#E8C89A]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-[#B7B68A] font-semibold">
            Nos Prestations 
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#4A4A37] tracking-tight mt-4 leading-tight">
            Des moments d'exception façonnés sur-mesure
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] bg-[#E8C89A]/50 w-12"></div>
            <Star size={10} className="text-[#D8B26A] fill-[#D8B26A]" />
            <div className="h-[1px] bg-[#E8C89A]/50 w-12"></div>
          </div>
          <p className="font-sans text-sm md:text-base text-[#4A4A37]/70 mt-6 max-w-2xl mx-auto">
            Chaque réception de la Maison Drey est une pièce unique. Nous allions l'art de la table, la décoration florale et la haute cuisine pour donner vie à vos rêves les plus audacieux.
          </p>
        </div>

        {/* Editorial Blocks */}
        <div className="space-y-32 md:space-y-48">
          {PRESTATIONS.map((prestation, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={prestation.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                
                {/* Image Block with overlays and elegant frame */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} relative`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-video lg:aspect-[16/10] w-full overflow-hidden shadow-2xl border border-[#E8C89A]/20"
                  >
                    <img
                      src={prestation.image}
                      alt={prestation.title}
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-[3000ms]"
                    />
                    {/* Golden Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Visual Stamp on top right */}
                    <div className="absolute top-4 right-4 bg-[#FFFDF9]/95 backdrop-blur-sm border border-[#E8C89A]/30 py-2 px-3 flex items-center gap-2">
                      <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-[#4A4A37] font-semibold">
                        Maison Dreyy • {prestation.title}
                      </span>
                    </div>

                    {/* Image caption inside on bottom left */}
                    <div className="absolute bottom-6 left-6 text-white max-w-md hidden md:block">
                      <p className="font-serif italic text-lg leading-tight text-[#E8C89A]">
                        {prestation.subtitle}
                      </p>
                    </div>
                  </motion.div>

                  {/* Absolute Decorative Gold Trim */}
                  <div className={`absolute -inset-4 border border-[#E8C89A]/20 -z-10 pointer-events-none ${isEven ? 'translate-x-3 translate-y-3' : '-translate-x-3 translate-y-3'}`}></div>
                </div>

                {/* Text Content Block */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center space-y-6`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    {/* Order Number & Subtitle */}
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-3xl md:text-4xl text-[#E8C89A]/60 font-light">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="h-[1px] bg-[#E8C89A] w-12"></div>
                      <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B7B68A] font-semibold">
                        Service Haute Couture
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#4A4A37] tracking-tight leading-tight">
                      {prestation.title}
                    </h3>

                    {/* Category Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {prestation.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-sans text-[10px] tracking-wider uppercase text-[#4A4A37]/75 px-3 py-1 bg-[#FBF8F3] border border-[#E8C89A]/30 rounded-none font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm md:text-base text-[#4A4A37]/80 leading-relaxed">
                      {prestation.description}
                    </p>

                    {/* Signature Quote */}
                    <div className="border-l-2 border-[#D8B26A] pl-4 py-1 mt-6">
                      <p className="font-serif italic text-xs md:text-sm text-[#B7B68A] leading-relaxed">
                        {prestation.quote}
                      </p>
                    </div>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
