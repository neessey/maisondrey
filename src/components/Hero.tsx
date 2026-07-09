import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onDiscoverClick: () => void;
  onBookClick: () => void;
}

export default function Hero({ onDiscoverClick, onBookClick }: HeroProps) {
  return (
    <section className="relative min-h-screen md:h-screen w-full flex items-center justify-center overflow-hidden bg-[#4A4A37] pt-28 pb-24 md:py-0">
      {/* Background Video with subtle dark gold overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
  autoPlay
  muted
  loop
  playsInline
  className="object-cover w-full h-full"
>
  <source src="/assets/hero.mp4" type="video/mp4" />
</video>
        {/* Soft elegant gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#4A4A37]/35 to-[#FFFDF9]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Sparkles in the Background */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40">
        <div className="absolute top-1/4 left-1/3 animate-pulse duration-[3000ms]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#E8C89A" />
          </svg>
        </div>
        <div className="absolute top-2/3 right-1/4 animate-pulse duration-[4000ms]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#E8C89A" />
          </svg>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-10 text-center flex flex-col items-center">
        {/* Small subtle pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4 md:mb-6 max-w-full px-2"
        >
          <span className="h-[1px] w-4 sm:w-8 bg-[#E8C89A] shrink-0"></span>
          <span className="font-sans text-[8px] sm:text-[10px] md:text-xs tracking-[0.12em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#E8C89A] font-semibold text-center">
            Maison de Réception & Haute Gastronomie
          </span>
          <span className="h-[1px] w-4 sm:w-8 bg-[#E8C89A] shrink-0"></span>
        </motion.div>

        {/* Text énorme: La Maison dreyy */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[4rem] xs:text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] tracking-wider sm:tracking-widest text-ivory uppercase select-none leading-none drop-shadow-sm font-light"
        >
          La Maison dreyy
        </motion.h1>

        {/* Subtitle: L'élégance au cœur de vos événements */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic  text-xl sm:text-2xl md:text-3xl lg:text-3xl text-champagne mt-4 sm:mt-6 md:mt-8 tracking-wide sm:tracking-wider"
        >
          L'élégance au cœur de vos événements.
        </motion.p>

        {/* Decorative central star line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="flex items-center gap-4 w-full max-w-40 md:max-w-50 my-5 md:my-8"
        >
          <div className="h-px bg-champagne/30 flex-1"></div>
          <Sparkles className="text-champagne w-3.5 h-3.5 md:w-4 md:h-4 animate-spin-slow" />
          <div className="h-px bg-champagne/30 flex-1"></div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-1 w-full justify-center px-4 sm:px-0"
        >
          <button
            type="button"
            onClick={onDiscoverClick}
            className="flex-1 bg-ivory text-olive-dark border border-champagne font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] py-3 md:py-4 px-6 md:px-8 font-semibold transition-all duration-500 rounded-none cursor-pointer"
          >
            Commander
          </button>
          <button
            type="button"
            onClick={onBookClick}
            className="flex-1 bg-champagne hover:bg-[#D8B26A] text-olive-dark border border-champagne hover:border-[#D8B26A] font-sans text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] py-3 md:py-4 px-6 md:px-8 font-semibold transition-all duration-500 rounded-none shadow-lg shadow-black/10 cursor-pointer"
          >
            Nous contacter
          </button>
        </motion.div>
      </div>
    </section>
  );
}
