import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Phone, Calendar, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export default function Header({ onBookClick, onExploreClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoSize, setLogoSize] = useState(44);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setLogoSize(isScrolled ? 36 : 42);
      } else {
        setLogoSize(isScrolled ? 50 : 60);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    // run on scroll changes too to keep in sync
    handleResize();
  }, [isScrolled]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FFFDF9]/90 backdrop-blur-md shadow-sm border-b border-[#E8C89A]/20 py-2.5 md:py-3'
            : 'bg-transparent py-3 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Logo on Left */}
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer">
            <Logo size={logoSize} variant="combined" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {[ 'signature', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="font-sans text-xs uppercase tracking-[0.2em] text-[#4A4A37] hover:text-[#D8B26A] transition-colors duration-300 font-medium relative py-1 group"
              >
                { item === 'signature' ? 'Menu Signature' : 'Contact'}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D8B26A] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={onBookClick}
              className="bg-[#4A4A37] hover:bg-[#D8B26A] text-[#FFFDF9] font-sans text-xs uppercase tracking-[0.2em] font-semibold px-6 py-3 border border-transparent hover:border-[#E8C89A] transition-all duration-500 rounded-none shadow-sm flex items-center gap-2"
            >
              <Calendar size={14} />
              Commander
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#4A4A37] p-2 hover:text-[#D8B26A] transition-colors duration-300 z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#FFFDF9] z-40 pt-24 px-6 flex flex-col justify-between pb-12 lg:hidden"
          >
            <div className="flex flex-col gap-6 mt-4">
              {['signature', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="font-serif text-3xl tracking-wider text-left text-[#4A4A37] hover:text-[#D8B26A] transition-colors duration-300"
                >
                  {item === 'signature' ? 'Menu Signature' : 'Prendre Contact'}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-[1px] bg-[#E8C89A]/30 w-full mb-4"></div>
              <p className="font-serif italic text-[#B7B68A] text-center mb-2">
                L'élégance au cœur de vos événements.
              </p>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full bg-[#4A4A37] text-center text-[#FFFDF9] font-sans text-xs uppercase tracking-[0.2em] font-semibold py-4 border border-[#E8C89A]/30"
              >
               Commander
              </button>
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest text-[#B7B68A] hover:text-[#D8B26A]"
                >
                  Instagram
                </a>
                <span className="text-[#E8C89A]">•</span>
                <a
                  href="https://wa.me/33600000000"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest text-[#B7B68A] hover:text-[#D8B26A]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
