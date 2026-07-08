import React from 'react';
import { motion } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { Star, Eye } from 'lucide-react';

export default function GallerySection() {
  return (
    <section id="galerie" className="py-24 bg-[#FFFDF9] border-t border-[#E8C89A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-[#B7B68A] font-semibold">
            Portfolios de Réceptions
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#4A4A37] tracking-tight mt-4">
            Le Carnet d'Inspirations
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] bg-[#E8C89A]/50 w-12"></div>
            <Star size={10} className="text-[#D8B26A] fill-[#D8B26A]" />
            <div className="h-[1px] bg-[#E8C89A]/50 w-12"></div>
          </div>
          <p className="font-sans text-sm md:text-base text-[#4A4A37]/70 mt-6">
            Pas de simple grille, mais un récit visuel de nos plus beaux événements. Plongez au cœur du luxe de tables dressées sous le soleil de l'après-midi et de buffets animés de rires précieux.
          </p>
        </div>

        {/* Storytelling Layout - Asymmetrical Elegant Magazine Spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch">
          
          {/* Column 1 - Tall Block (Left) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.4, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full overflow-hidden shadow-xl border-4 border-white group"
            >
              <img
                src={GALLERY_ITEMS[0].src}
                alt={GALLERY_ITEMS[0].caption}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif italic text-base text-[#E8C89A]">{GALLERY_ITEMS[0].caption}</p>
                <span className="font-sans text-[8px] uppercase tracking-widest text-white/70 mt-1 block">Signature Florale</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.4, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="bg-[#FBF8F3] border border-[#E8C89A]/30 p-8 md:p-10 flex flex-col justify-center space-y-4 h-full"
            >
              <span className="font-serif italic text-2xl text-[#D8B26A]">« La Beauté est dans les détails. »</span>
              <p className="font-sans text-xs md:text-sm text-[#4A4A37]/85 leading-relaxed">
                Notre bureau d'études événementielles sélectionne des fleurs fraîches de saison, des bougies parfumées de prestige et une vaisselle d'exception pour que l'harmonie soit totale.
              </p>
              <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-[#4A4A37] font-semibold pt-2">
                Maison Dreyy • Charte d'Harmonie
              </span>
            </motion.div>
          </div>

          {/* Column 2 - Large Block (Right) */}
          <div className="md:col-span-7 flex flex-col gap-8 md:gap-12">
            
            {/* Wide horizontal image with a description tag overlay */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.4, delay: 0.1, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/10] w-full overflow-hidden shadow-xl border-4 border-white group"
            >
              <img
                src={GALLERY_ITEMS[1].src}
                alt={GALLERY_ITEMS[1].caption}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif italic text-base text-[#E8C89A]">{GALLERY_ITEMS[1].caption}</p>
                <span className="font-sans text-[8px] uppercase tracking-widest text-white/70 mt-1 block">Art de la Table</span>
              </div>
            </motion.div>

            {/* Side-by-side lower cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.4, delay: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="relative aspect-square w-full overflow-hidden shadow-xl border-4 border-white group"
              >
                <img
                  src={GALLERY_ITEMS[2].src}
                  alt={GALLERY_ITEMS[2].caption}
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-serif italic text-sm text-[#E8C89A]">{GALLERY_ITEMS[2].caption}</p>
                  <span className="font-sans text-[8px] uppercase tracking-widest text-white/70 mt-1 block">Gastronomie</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.4, delay: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="relative aspect-square w-full overflow-hidden shadow-xl border-4 border-white group"
              >
                <img
                  src={GALLERY_ITEMS[3].src}
                  alt={GALLERY_ITEMS[3].caption}
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-serif italic text-sm text-[#E8C89A]">{GALLERY_ITEMS[3].caption}</p>
                  <span className="font-sans text-[8px] uppercase tracking-widest text-white/70 mt-1 block">Le Service</span>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
