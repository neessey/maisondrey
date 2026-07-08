import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const activeReview = REVIEWS[activeIndex];

  return (
    <section id="avis" className="py-24 bg-[#FFFDF9] border-t border-[#E8C89A]/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-[#B7B68A] font-semibold">
            Témoignages de Prestige
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#4A4A37] tracking-tight mt-4">
            Paroles d'Exception
          </h2>
          <div className="h-[1px] bg-[#E8C89A]/50 w-16 mx-auto mt-6"></div>
        </div>

        {/* High-End Editorial Citation Layout with Slideshow */}
        <div className="relative bg-[#FBF8F3] border border-[#E8C89A]/30 p-8 md:p-16 shadow-lg min-h-[420px] flex flex-col justify-between">
          
          {/* Elegant Top Decorative Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFFDF9] border border-[#E8C89A]/30 px-4 py-1.5 flex items-center gap-2">
            {[...Array(activeReview.rating)].map((_, idx) => (
              <Star key={idx} size={10} className="text-[#D8B26A] fill-[#D8B26A]" />
            ))}
          </div>

          <div className="absolute top-10 right-10 text-[#E8C89A]/15 pointer-events-none select-none">
            <Quote size={120} className="stroke-1" />
          </div>

          {/* Animate quote and details together */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 my-auto"
            >
              {/* Quote Text */}
              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-[#4A4A37] italic leading-relaxed text-center max-w-3xl mx-auto">
                {activeReview.text}
              </blockquote>

              {/* Author Info with Photo */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6">
                
                {/* Elegant Circular Portrait with gold frame */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#E8C89A] shadow-md shrink-0">
                  <img
                    src={activeReview.image}
                    alt={activeReview.author}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover scale-105"
                  />
                </div>

                <div className="text-center md:text-left">
                  <cite className="not-italic font-serif text-base md:text-lg text-[#4A4A37] font-semibold block leading-none">
                    {activeReview.author}
                  </cite>
                  <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-[#B7B68A] mt-1.5 block font-medium">
                    {activeReview.role}
                  </span>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls - Left & Right elegant buttons */}
          <div className="flex items-center justify-between w-full pt-10 border-t border-[#E8C89A]/20 mt-8">
            <div className="flex gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1 transition-all duration-300 rounded-none ${
                    activeIndex === idx ? 'w-8 bg-[#4A4A37]' : 'w-2 bg-[#E8C89A]/40 hover:bg-[#E8C89A]'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="p-2 border border-[#E8C89A]/30 text-[#4A4A37] hover:text-[#D8B26A] hover:border-[#D8B26A] transition-colors bg-[#FFFDF9] cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 border border-[#E8C89A]/30 text-[#4A4A37] hover:text-[#D8B26A] hover:border-[#D8B26A] transition-colors bg-[#FFFDF9] cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
