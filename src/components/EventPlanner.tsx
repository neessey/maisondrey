import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SignatureFood } from '../types';
import { Sparkles, Calendar, Users, ShoppingBag, Send, Phone, Trash2 } from 'lucide-react';

interface EventPlannerProps {
  selectedItems: SignatureFood[];
  onRemoveItem: (item: SignatureFood) => void;
  onClearAll: () => void;
  onBookClick: () => void;
}

export default function EventPlanner({ selectedItems, onRemoveItem, onClearAll, onBookClick }: EventPlannerProps) {
  const [guests, setGuests] = useState<number>(100);
  const [prestation, setPrestation] = useState<string>('Mariage');
  const [date, setDate] = useState<string>('');
  const [showRoyalQuote, setShowRoyalQuote] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [receptionLocation, setReceptionLocation] = useState<string>('');

  // Count metrics
  const multiplier = prestation === 'Mariage' ? 12 : prestation === 'Brunch' ? 10 : prestation === 'Corporate' ? 8 : 10;
const totalPiecesNeeded = guests * multiplier;

// Prix moyen d'une pièce sélectionnée
const totalSelectedPrice = selectedItems.reduce(
  (sum, item) => sum + item.price,
  0
);

const averagePricePerPiece =
  selectedItems.length > 0
    ? totalSelectedPrice / selectedItems.length
    : 0;

// Prix final estimatif
const totalPrice = Math.round(totalPiecesNeeded * averagePricePerPiece);
  const handleGenerateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert('Veuillez renseigner votre nom pour personnaliser votre écrin.');
      return;
    }
    setShowRoyalQuote(true);
  };

  const constructMessageText = () => {
    const list = selectedItems.map(item => `- ${item.title} (${item.frenchTitle})`).join('%0A');
    return `Bonjour La Maison dreyy,%0A%0AJe souhaite concevoir un événement d'exception :%0A- Nom : ${name}%0A- Email : ${email}%0A- Type : ${prestation}%0A- Invités : ${guests} convives%0A- Date souhaitée : ${date || 'À déterminer'}%0A- Lieu de Réception : ${receptionLocation || 'À déterminer'}%0A- %0A Pièces estimées : ${totalPiecesNeeded} pièces%0A%0AMes créations sélectionnées :%0A${list}%0A%0AMerci de me recontacter pour affiner mon projet d'orfèvrerie culinaire.`;
  };

  const handleSendWhatsApp = () => {
    const text = constructMessageText();
    window.open(`https://wa.me/2250702925688?text=${text}`, '_blank');
  };

  const handleSendEmail = () => {
    const text = constructMessageText();
    window.open(`mailto:contact@maisondreyy.com?subject=Demande%20de%20Reception%20D'Exception%20-%20La%20Maison%20dreyy&body=${text}`, '_blank');
  };

  return (
    <section id="concepteur" className="py-24 bg-[#FFFDF9] border-t border-[#E8C89A]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-[#B7B68A] font-semibold">
            Atelier Événementiel
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#4A4A37] tracking-tight mt-4">
            Le Concepteur de Buffet
          </h2>
          <div className="h-[1px] bg-[#E8C89A]/50 w-24 mx-auto mt-6"></div>
          <p className="font-sans text-sm text-[#4A4A37]/70 mt-6">
            Sélectionnez vos signatures culinaires préférées dans la section ci-dessus et configurez votre réception ci-dessous pour simuler votre écrin sur-mesure.
          </p>
        </div>

        {selectedItems.length === 0 ? (
          <div className="text-center border-2 border-dashed border-[#E8C89A]/30 p-12 bg-[#FBF8F3] max-w-2xl mx-auto">
            <ShoppingBag className="text-[#B7B68A] w-12 h-12 mx-auto mb-4 stroke-1 animate-pulse" />
            <h3 className="font-serif text-xl text-[#4A4A37] font-medium">Votre buffet est vide</h3>
            <p className="font-sans text-xs text-[#4A4A37]/70 mt-2 max-w-md mx-auto">
              Parcourez nos créations culinaires et ajoutez vos pièces favorites en cliquant sur les boutons d'ajout pour lancer la planification.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById('signature');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 bg-[#4A4A37] hover:bg-[#D8B26A] text-white font-sans text-[10px] uppercase tracking-[0.2em] font-semibold py-3 px-6 transition-all duration-300"
            >
              Découvrir les créations
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Planner Form / Controls - Left */}
            <div className="lg:col-span-7 bg-[#FBF8F3] border border-[#E8C89A]/30 p-8 md:p-10 shadow-sm space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-[#D8B26A] w-4 h-4" />
                  <h3 className="font-serif text-2xl text-[#4A4A37] tracking-tight">Configuration de l'événement</h3>
                </div>
                <button
                  onClick={onClearAll}
                  className="font-sans text-[9px] uppercase tracking-widest text-[#B7B68A] hover:text-[#4A4A37] flex items-center gap-1 transition-colors"
                >
                  <Trash2 size={10} /> Tout effacer
                </button>
              </div>

              {/* Grid of chosen items mini-cards */}
              <div>
                <p className="font-sans text-[10px] uppercase tracking-wider text-[#B7B68A] font-semibold mb-3">
                  Créations sélectionnées ({selectedItems.length})
                </p>
                <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2">
                  {selectedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 bg-[#FFFDF9] border border-[#E8C89A]/20 py-2 px-3 shadow-xs"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 object-cover rounded-none"
                      />
                      <div className="flex flex-col">
                        <span className="font-serif text-xs text-[#4A4A37] font-medium">{item.title}</span>
                        <span className="font-sans text-[8px] text-[#B7B68A] uppercase tracking-widest">{item.category}</span>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item)}
                        className="text-[#B7B68A] hover:text-[#4A4A37] ml-2 p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={10} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Controls Form */}
              <form onSubmit={handleGenerateQuote} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-[#4A4A37] font-semibold mb-2">
                      Type de réception
                    </label>
                    <select
                      value={prestation}
                      onChange={(e) => setPrestation(e.target.value)}
                      className="w-full bg-[#FFFDF9] border border-[#E8C89A]/40 py-3 px-4 text-xs font-sans text-[#4A4A37] outline-none focus:border-[#D8B26A]"
                    >
                      <option value="Mariage">Mariage d'Exception</option>
                      <option value="Corporate">Cocktail Corporatif</option>
                      <option value="Brunch">Brunch Couture</option>
                      <option value="Anniversaire">Événement Privé / Anniversaire</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-[#4A4A37] font-semibold mb-2">
                      Nombre d'invités ({guests})
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="10"
                        max="500"
                        step="10"
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="flex-1 accent-[#4A4A37]"
                      />
                      <span className="font-serif text-lg font-semibold text-[#4A4A37] w-12 text-right">
                        {guests}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-[#4A4A37] font-semibold mb-2">
                      Votre Nom / Maison
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="M. & Mme de ..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#FFFDF9] border border-[#E8C89A]/40 py-3 px-4 text-xs font-sans text-[#4A4A37] outline-none focus:border-[#D8B26A]"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-[#4A4A37] font-semibold mb-2">
                      Adresse Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="nom@exemple.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FFFDF9] border border-[#E8C89A]/40 py-3 px-4 text-xs font-sans text-[#4A4A37] outline-none focus:border-[#D8B26A]"
                    />
                  </div>
                </div>

                 <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-[#4A4A37] font-semibold mb-2">
                      Lieu de Réception 
                    </label>
                    <input
                      type="text"
                      placeholder="Château d'Angré ..."
                      value={receptionLocation}
                      onChange={(e) => setReceptionLocation(e.target.value)}
                      className="w-full bg-[#FFFDF9] border border-[#E8C89A]/40 py-3 px-4 text-xs font-sans text-[#4A4A37] outline-none focus:border-[#D8B26A]"
                    />
                  </div>

                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-[#4A4A37] font-semibold mb-2">
                    Date de Réception souhaitée
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#FFFDF9] border border-[#E8C89A]/40 py-3 px-4 text-xs font-sans text-[#4A4A37] outline-none focus:border-[#D8B26A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4A4A37] hover:bg-[#D8B26A] text-[#FFFDF9] font-sans text-xs uppercase tracking-[0.2em] py-4 font-semibold transition-all duration-300"
                >
                  Générer mon écrin d'exception
                </button>
              </form>
            </div>

            {/* Quote Visualizer Card - Right */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                {!showRoyalQuote ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="border-2 border-dashed border-[#E8C89A]/30 p-8 text-center bg-[#FBF8F3]/50 h-full flex flex-col justify-center items-center min-h-[400px]"
                  >
                    <Sparkles className="text-[#E8C89A] w-12 h-12 mb-4 animate-spin-slow" />
                    <h4 className="font-serif text-xl text-[#4A4A37] font-medium">Votre Devis Estimatif</h4>
                    <p className="font-sans text-xs text-[#4A4A37]/70 mt-2 max-w-xs leading-relaxed">
                      Complétez le formulaire de gauche et cliquez sur Générer pour sculpter votre fiche d'estimation d'exception.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#FFFDF9] border-2 border-[#E8C89A] p-8 md:p-10 shadow-xl relative overflow-hidden"
                  >
                    {/* Background gold logo watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none text-9xl font-serif text-[#E8C89A]">
                      MD
                    </div>

                    <div className="text-center pb-6 border-b border-[#E8C89A]/30">
                      <span className="font-serif text-2xl tracking-[0.2em] uppercase text-[#4A4A37] block">
                        La Maison dreyy
                      </span>
                      <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-[#B7B68A] mt-1 block">
                        Écrin de Réception d'Exception
                      </span>
                    </div>

                    {/* Guest & details layout */}
                    <div className="py-6 space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-sans uppercase tracking-wider text-[#B7B68A]">Client</span>
                        <span className="font-serif text-[#4A4A37] font-semibold">{name}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-sans uppercase tracking-wider text-[#B7B68A]">Prestation</span>
                        <span className="font-serif text-[#4A4A37] font-semibold">{prestation}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-sans uppercase tracking-wider text-[#B7B68A]">Nombre de convives</span>
                        <span className="font-serif text-[#4A4A37] font-semibold">{guests} personnes</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-sans uppercase tracking-wider text-[#B7B68A]">Date souhaitée</span>
                        <span className="font-serif text-[#4A4A37] font-semibold">
                          {date ? new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'À déterminer'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-sans uppercase tracking-wider text-[#B7B68A]">Catering par convive</span>
                        <span className="font-serif text-[#4A4A37] font-semibold">~{multiplier} pièces salées / sucrées</span>
                      </div>

                      <div className="h-[1px] bg-[#E8C89A]/30 w-full my-4"></div>

                      <div>
                        <span className="block font-sans text-[9px] uppercase tracking-wider text-[#B7B68A] font-semibold mb-2">
                          Menu personnalisé sélectionné :
                        </span>
                        <ul className="space-y-1 max-h-24 overflow-y-auto pr-2">
                          {selectedItems.map((item) => (
                            <li key={item.id} className="font-serif text-xs text-[#4A4A37] flex justify-between items-center">
                              <span>• {item.title}</span>
                              <span className="font-sans text-[8px] text-[#B7B68A] uppercase">{item.category}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-[1px] bg-[#E8C89A]/30 w-full my-4"></div>

                      <div className="flex justify-between items-end bg-[#FBF8F3] p-4 border border-[#E8C89A]/20">
                        <div>
                          <span className="font-sans text-[9px] uppercase tracking-widest text-[#B7B68A] block leading-none">
                            Volume estimé
                          </span>
                          <span className="font-serif italic text-xs text-[#4A4A37]/60 block mt-1">
                            Art de la table & service compris
                          </span>
                        </div>
                        <span className="font-serif text-2xl font-bold text-[#4A4A37] leading-none">
                          {totalPiecesNeeded.toLocaleString('fr-FR')} <span className="text-sm font-medium">pièces</span>
                        </span>
                      </div>
                    </div>

                    {/* Bridges buttons */}
                    <div className="space-y-3 pt-4">
  <button
    onClick={handleSendWhatsApp}
    className="w-full bg-[#4A4A37] hover:bg-[#D8B26A] text-white font-sans text-[11px] uppercase tracking-[0.25em] py-4 font-semibold transition-all duration-300"
  >
    Valider
  </button>

  <button
    onClick={() => setShowRoyalQuote(false)}
    className="w-full bg-transparent hover:bg-[#4A4A37]/5 text-[#B7B68A] font-sans text-[9px] uppercase tracking-widest py-2 transition-colors"
  >
    Modifier mon écrin
  </button>
</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
