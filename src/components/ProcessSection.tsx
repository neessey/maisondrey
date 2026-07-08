import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import { Star, ArrowDown } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="processus" className="py-24 bg-[#FFFDF9] border-t border-[#E8C89A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-[#B7B68A] font-semibold">
            Le Parcours d'Art
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#4A4A37] tracking-tight mt-4">
            Le Déroulement d'un Instant Sacré
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] bg-[#E8C89A]/50 w-12"></div>
            <Star size={10} className="text-[#D8B26A]" />
            <div className="h-[1px] bg-[#E8C89A]/50 w-12"></div>
          </div>
          <p className="font-sans text-sm text-[#4A4A37]/70 mt-6">
            De notre premier échange à la mise en scène finale le jour de votre réception, découvrez les étapes de notre protocole d'excellence pour façonner votre événement.
          </p>
        </div>

        {/* Timeline Layout with Centered Vertical Animated Line */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Centered Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1px] bg-[#E8C89A]/40 -translate-x-1/2 -z-0">
            {/* Animated gold growth overlay */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 2.2, ease: 'easeInOut' }}
              className="w-full bg-[#D8B26A] origin-top"
            />
          </div>

          <div className="space-y-16 md:space-y-24 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.id}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Left/Right Text Content Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-[#FFFDF9] border border-[#E8C89A]/20 p-6 md:p-8 shadow-sm hover:border-[#D8B26A]/50 transition-all duration-300 relative group"
                    >
                      {/* Hover subtle gold scale accent */}
                      <div className="absolute inset-0 border border-transparent group-hover:border-[#E8C89A] transition-all duration-300 pointer-events-none"></div>

                      <span className="font-serif text-3xl md:text-4xl text-[#E8C89A] font-light leading-none">
                        {step.num}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl text-[#4A4A37] tracking-tight mt-2 font-medium">
                        {step.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-[#4A4A37]/80 leading-relaxed mt-3">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Centered Node Circle / Bullet */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="w-8 h-8 rounded-full bg-[#FFFDF9] border-2 border-[#D8B26A] flex items-center justify-center shadow-md shadow-black/5"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#4A4A37] animate-pulse"></span>
                    </motion.div>
                  </div>

                  {/* Empty/Spacing Side on Desktop */}
                  <div className="hidden md:block md:w-1/2"></div>

                </div>
              );
            })}
          </div>

          {/* Bottom final arrow indicator */}
          <div className="absolute -bottom-16 left-4 md:left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#D8B26A]">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </div>

        </div>

        {/* Process helper quote */}
        <div className="mt-32 text-center max-w-xl mx-auto">
          <p className="font-serif italic text-sm text-[#B7B68A]">
            « De l'ébauche créative à la communion finale de vos convives, notre protocole d'exception assure une fluidité totale à chaque étape. »
          </p>
        </div>

      </div>
    </section>
  );
}
