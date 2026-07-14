import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SIGNATURE_FOODS } from '../data';
import { SignatureFood } from '../types';
import { Sparkles, Utensils, Heart, X, Plus, Check } from 'lucide-react';

interface SignatureFoodSectionProps {
  selectedItems: SignatureFood[];
  onToggleItem: (item: SignatureFood) => void;
}

export default function SignatureFoodSection({ selectedItems, onToggleItem }: SignatureFoodSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Tout');
  const [focusedFood, setFocusedFood] = useState<SignatureFood | null>(null);

  const categories = ['Tout', 'Salé', 'Sucré', 'Non Alcoolisé', 'Alcoolisé', 'Forfait'];

  const filteredFoods = activeCategory === 'Tout'
    ? SIGNATURE_FOODS
    : SIGNATURE_FOODS.filter((food: any) => food.category === activeCategory);

  const isItemSelected = (id: string) => selectedItems.some((item: any) => item.id === id);

  return (
    <section id="signature" className="py-24 bg-[#FFFDF9] border-t border-[#E8C89A]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-[#B7B68A] font-semibold">
            Signature Culinaires
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#4A4A37] tracking-tight mt-4">
            Nos Créations Emblématiques
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] bg-[#E8C89A]/50 w-12"></div>
            <Utensils size={12} className="text-[#D8B26A]" />
            <div className="h-[1px] bg-[#E8C89A]/50 w-12"></div>
          </div>
          <p className="font-sans text-sm md:text-base text-[#4A4A37]/70 mt-6">
            Des créations culinaires pensées pour sublimer les moments qui comptent. Une carte gourmande, élaborée avec soin pour offrir une expérience aussi belle que savoureuse.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#B7B68A]">
  Cliquez sur le <span className="text-[#D8B26A] font-bold">+</span> de chaque création pour l'ajouter à votre sélection.
</p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-sans text-xs uppercase tracking-[0.2em] px-6 py-3 transition-all duration-300 rounded-none cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#4A4A37] text-[#FFFDF9] border border-[#4A4A37] shadow-md shadow-black/10'
                  : 'bg-transparent text-[#4A4A37] hover:text-[#D8B26A] border border-[#E8C89A]/30 hover:border-[#D8B26A]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredFoods.map((food : any) => {
              const selected = isItemSelected(food.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  key={food.id}
                  className="group relative h-96 w-full cursor-pointer overflow-hidden border border-[#E8C89A]/20 shadow-md flex flex-col justify-end p-6 bg-[#4A4A37]"
                >
                  {/* Photo plein écran background */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={food.image}
                      alt={food.title}
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-out opacity-80"
                    />
                    {/* Shadow overlay gradient to read text perfectly */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent"></div>
                  </div>

                  {/* Header stamp / Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center justify-between w-[calc(100%-2rem)]">
                    <span className="font-sans text-[8px] uppercase tracking-[0.25em] bg-[#FFFDF9]/95 text-[#4A4A37] py-1 px-2 font-bold">
                      {food.category}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleItem(food);
                      }}
                      className={`p-2 transition-all duration-300 rounded-none border ${
                        selected
                          ? 'bg-[#E8C89A] border-[#E8C89A] text-[#4A4A37]'
                          : 'bg-black/40 backdrop-blur-sm border-white/20 text-white hover:bg-[#FFFDF9] hover:text-[#4A4A37]'
                      }`}
                      aria-label="Sélectionner la création"
                    >
                      {selected ? <Check size={12} className="stroke-[3]" /> : <Plus size={12} />}
                    </button>
                  </div>

                  {/* Content details shown on hover or tap */}
                  <div className="relative z-10 flex flex-col space-y-2 text-[#FFFDF9]" onClick={() => setFocusedFood(food)}>
                    <span className="font-serif italic text-xs text-[#E8C89A] tracking-wider leading-none">
                      {food.frenchTitle}
                    </span>
                    <h3 className="font-serif text-2xl tracking-wide uppercase font-medium leading-none">
                      {food.title}
                    </h3>
                    
                    {/* Collapsible description on hover */}
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <p className="font-sans text-xs text-[#FFFDF9]/80 mt-2 line-clamp-3 leading-relaxed">
                        {food.description}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center gap-2">
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#E8C89A] group-hover:text-white transition-colors">
                        Découvrir la création
                      </span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[#E8C89A] group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Signature Food Details Overlay Modal */}
      <AnimatePresence>
  {focusedFood && (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md">
      <div className="flex min-h-full items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.35 }}
          className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-[#E8C89A]/30 bg-[#FFFDF9] shadow-2xl max-h-[95vh] overflow-y-auto"
        >
          {/* Close */}
          <button
            onClick={() => setFocusedFood(null)}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:bg-white"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[650px]">
              <img
                src={focusedFood.image}
                alt={focusedFood.title}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <span className="absolute bottom-5 left-5 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#4A4A37]">
                {focusedFood.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-5 sm:p-8">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#D8B26A]" />

                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B7B68A] font-semibold">
                    Création d'Art
                  </span>
                </div>

                <h2 className="mt-5 font-serif text-3xl sm:text-4xl text-[#4A4A37] leading-tight">
                  {focusedFood.title}
                </h2>

                <p className="mt-2 font-serif italic text-[#D8B26A] text-base">
                  {focusedFood.frenchTitle}
                </p>

                <p className="mt-6 text-sm sm:text-base leading-8 text-[#4A4A37]/75">
                  {focusedFood.description}
                </p>

                <div className="my-8 border-y border-[#E8C89A]/30 py-5 flex items-center justify-between">
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B7B68A]">
                    Prix
                  </span>

                  <span className="font-serif text-2xl sm:text-3xl text-[#4A4A37]">
                    {focusedFood.price.toLocaleString()} FCFA
                  </span>
                {focusedFood.unit && (
    <span className="text-xs uppercase tracking-[0.2em] text-[#B7B68A]">
      {focusedFood.unit}
    </span>
  )}
</div>

                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] font-semibold text-[#4A4A37] mb-3">
                    La note du Chef
                  </p>

                  <p className="font-serif italic text-[#B7B68A] leading-7">
                    {focusedFood.highlight}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => {
                    onToggleItem(focusedFood);
                    setFocusedFood(null);
                  }}
                  className={`w-full sm:flex-1 py-4 text-[11px] uppercase tracking-[0.25em] font-semibold transition ${
                    isItemSelected(focusedFood.id)
                      ? 'border border-[#D8B26A] bg-transparent text-[#B7B68A]'
                      : 'bg-[#4A4A37] text-white hover:bg-[#D8B26A]'
                  }`}
                >
                  {isItemSelected(focusedFood.id)
                    ? 'Retirer du Buffet'
                    : 'Ajouter au Buffet'}
                </button>

                <button
                  onClick={() => setFocusedFood(null)}
                  className="w-full sm:w-auto border border-[#E8C89A]/40 bg-[#FBF8F3] px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-[#4A4A37] transition hover:bg-[#E8C89A]/10"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )}
</AnimatePresence>
    </section>
  );
}
