import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PrestationsSection from './components/PrestationsSection';
import SignatureFoodSection from './components/SignatureFoodSection';
import EventPlanner from './components/EventPlanner';
import StatsSection from './components/StatsSection';
import ProcessSection from './components/ProcessSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { SignatureFood } from './types';
import { ShoppingBag, Star, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedItems, setSelectedItems] = useState<SignatureFood[]>([]);

  const handleToggleItem = (item: SignatureFood) => {
    setSelectedItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleRemoveItem = (item: SignatureFood) => {
    setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleClearAll = () => {
    setSelectedItems([]);
  };

  const scrollToSection = (id: string) => {
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
    <div className="min-h-screen bg-[#FFFDF9] text-[#4A4A37] flex flex-col relative">
      {/* Sticky Premium Navigation Header */}
      <Header
        onBookClick={() => scrollToSection('contact')}
        onExploreClick={() => scrollToSection('concept')}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onDiscoverClick={() => scrollToSection('concept')}
          onBookClick={() => scrollToSection('contact')}
        />

        {/* Second Section: Editorial About/Concept */}
        <AboutSection />

        {/* Stats Highlight Banner */}
        <StatsSection />

        {/* Signature Foods Showcase */}
        <SignatureFoodSection
          selectedItems={selectedItems}
          onToggleItem={handleToggleItem}
        />

        {/* Interactive Buffet Designer & Quote Planner Tool */}
        <EventPlanner
          selectedItems={selectedItems}
          onRemoveItem={handleRemoveItem}
          onClearAll={handleClearAll}
          onBookClick={() => scrollToSection('contact')}
        />

        {/* Protocol/Process Timeline Section */}
        <ProcessSection />

        {/* Premium Citations & Testimonials Slider */}
        <ReviewsSection />

        {/* Multi-channel Contact Hub & Vector Map */}
        <ContactSection />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating Buffet Cart Badge (Appears when items are selected) */}
      <AnimatePresence>
        {selectedItems.length > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => scrollToSection('concepteur')}
            className="fixed bottom-6 right-6 z-40 bg-[#4A4A37] hover:bg-[#D8B26A] text-[#FFFDF9] border border-[#E8C89A]/40 flex items-center gap-3 py-3.5 px-5 shadow-2xl rounded-none font-sans text-[10px] uppercase tracking-[0.2em] font-semibold cursor-pointer group transition-all"
            aria-label="Voir mon buffet"
          >
            <div className="relative">
              <ShoppingBag size={14} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#E8C89A] text-[#4A4A37] text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {selectedItems.length}
              </span>
            </div>
            <span>Mon Écrin ({selectedItems.length} créations)</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

