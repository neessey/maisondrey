import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onDiscoverClick: () => void;
  onBookClick: () => void;
}
const heroImages = [
  "/assets/hero1.jpg",
  "/assets/hero2.jpg",
  "/assets/hero3.jpg",
  "/assets/hero4.jpg",
  "/assets/hero5.jpg",
];

export default function Hero({ onDiscoverClick, onBookClick }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev: any) => (prev + 1) % heroImages.length);
  }, 5000); // change toutes les 5 secondes

  return () => clearInterval(interval);
}, []);
return (
  <section className="relative min-h-screen md:h-screen w-full flex items-center justify-center overflow-hidden bg-[#4A4A37] pt-28 pb-24 md:py-0">
    {/* Background Slider */}
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover scale-105 animate-[slowZoom_7s_linear_forwards]"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#4A4A37]/35 to-[#FFFDF9]" />
      <div className="absolute inset-0 bg-black/20" />
    </div>

    {/* Floating Sparkles */}
    <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40">
      <div className="absolute top-1/4 left-1/3 animate-pulse duration-[3000ms]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
            fill="#E8C89A"
          />
        </svg>
      </div>

      <div className="absolute top-2/3 right-1/4 animate-pulse duration-[4000ms]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
            fill="#E8C89A"
          />
        </svg>
      </div>
    </div>

    {/* Hero */}
    <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-10 text-center flex flex-col items-center">

      {/* Pretitle */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4 md:mb-5 max-w-full px-2"
      >
        <span className="h-[1px] w-4 sm:w-8 bg-[#E8C89A]" />

        <span className="font-sans text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.12em] sm:tracking-[0.3em] md:tracking-[0.28em] uppercase text-[#E8C89A] font-semibold">
          Maison de Réception & Gastronomie
        </span>

        <span className="h-[1px] w-4 sm:w-8 bg-[#E8C89A]" />
      </motion.div>

      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="font-serif
          text-[4rem]
          xs:text-[5rem]
          sm:text-[6rem]
          md:text-[5.8rem]
          lg:text-[7rem]
          tracking-wider
          text-ivory
          uppercase
          leading-none
          font-light
          drop-shadow-sm"
      >
        La Maison Dreyy
      </motion.h1>

      {/* Sous-titre */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="font-serif italic
          text-xl
          sm:text-2xl
          md:text-2xl
          lg:text-[1.7rem]
          text-champagne
          mt-4
          md:mt-6
          tracking-wide"
      >
        L'élégance au cœur de vos événements.
      </motion.p>

      {/* Séparateur */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="flex items-center gap-4 w-full max-w-40 md:max-w-44 my-5 md:my-6"
      >
        <div className="h-px bg-champagne/30 flex-1" />
        <Sparkles className="text-champagne w-3.5 h-3.5" />
        <div className="h-px bg-champagne/30 flex-1" />
      </motion.div>

      {/* Boutons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-2 w-full max-w-xl justify-center px-4 sm:px-0"
      >
        <button
          type="button"
          onClick={onDiscoverClick}
          className="flex-1
            bg-ivory
            text-olive-dark
            border border-champagne
            text-[11px]
            md:text-[13px]
            uppercase
            tracking-[0.25em]
            py-3
            md:py-3.5
            px-6
            md:px-8
            font-semibold
            transition-all
            duration-500
            hover:scale-105"
        >
          Commander
        </button>

        <button
          type="button"
          onClick={onBookClick}
          className="flex-1
            bg-champagne
            hover:bg-[#D8B26A]
            text-olive-dark
            border border-champagne
            hover:border-[#D8B26A]
            text-[11px]
            md:text-[13px]
            uppercase
            tracking-[0.25em]
            py-3
            md:py-3.5
            px-6
            md:px-8
            font-semibold
            transition-all
            duration-500
            shadow-lg
            shadow-black/10
            hover:scale-105"
        >
          Nous contacter
        </button>
      </motion.div>
    </div>
  </section>
);
}