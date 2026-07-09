import React from 'react';
import Logo from './Logo';
import { Star, Shield, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4A4A37] text-white border-t border-[#E8C89A]/20 pt-20 pb-10 overflow-hidden relative">
      {/* Subtle radial lighting from bottom to mimic glowing light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-[#E8C89A]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          
          {/* Main Gold Circle Logo in Center */}
          <div className="flex flex-col items-center space-y-3">
            <Logo size={100} variant="circle" color="gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#B7B68A] font-semibold mt-4">
              Maison de Réception & Haute Gastronomie
            </span>
          </div>

          {/* Slogan */}
          <p className="font-serif italic text-lg text-[#E8C89A] max-w-lg leading-relaxed">
            « L'élégance au cœur de vos événements. Chaque pièce est pensée comme un bijou, chaque réception comme une œuvre d'art. »
          </p>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-sans uppercase tracking-[0.15em] text-[#FFFDF9]/80">
            <a href="#signature" className="hover:text-[#E8C89A] transition-colors">Créations Signature</a>
            <span className="text-[#E8C89A]/30 hidden sm:inline">•</span>
            <a href="#contact" className="hover:text-[#E8C89A] transition-colors">Prendre Contact</a>
          </div>

          <div className="h-[1px] bg-[#E8C89A]/20 w-full max-w-4xl my-2"></div>

          {/* Copyrights & Accents */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl text-[10px] font-sans tracking-widest text-[#B7B68A] uppercase gap-6 md:gap-0">
            <span>
              © {currentYear} La Maison dreyyy. Tous droits réservés.
            </span>
            <div className="flex items-center gap-1">
              <Shield size={10} className="text-[#D8B26A]" />
              <span>Gastronomie événementielle d'exception</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>Façonné avec</span>
              <Heart size={10} className="text-[#D8B26A] fill-[#D8B26A]" />
              <span>pour l'Art de Recevoir</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
