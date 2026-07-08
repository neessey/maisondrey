import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook, Sparkles, Check } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '100',
    type: 'Mariage',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '100',
        type: 'Mariage',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FFFDF9] border-t border-[#E8C89A]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-[#B7B68A] font-semibold">
            Relations Clients
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#4A4A37] tracking-tight mt-4">
            Donner Vie à Votre Rêve
          </h2>
          <div className="h-[1px] bg-[#E8C89A]/50 w-20 mx-auto mt-6"></div>
          <p className="font-sans text-sm text-[#4A4A37]/70 mt-6">
            Prenez contact avec notre conseiller privé. De la première esquisse créative à la gestion d'un buffet d'exception, nous sommes à vos côtés.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-stretch">
          
          {/* Contact Details & Premium Vector Map - Left (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <Sparkles className="text-[#D8B26A] w-4 h-4" />
                <h3 className="font-serif text-2xl text-[#4A4A37] tracking-tight">Nos Bureaux & Ateliers</h3>
              </div>

              <div className="space-y-6">
                
                <a
                  href="tel:+225 0702925688"
                  className="flex items-start gap-4 p-4 bg-[#FBF8F3] hover:bg-[#E8C89A]/10 border border-[#E8C89A]/20 transition-all duration-300 group"
                >
                  <Phone size={18} className="text-[#D8B26A] mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block font-sans text-[10px] uppercase tracking-widest text-[#B7B68A] font-semibold">Téléphone Direct</span>
                    <span className="font-serif text-[#4A4A37] font-medium block mt-1">+225 07 02 92 56 88</span>
                    <span className="font-sans text-[10px] text-[#4A4A37]/60 block mt-0.5">Relations privées & professionnels (8h - 18h)</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/2250504272827"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 bg-[#FBF8F3] hover:bg-[#E8C89A]/10 border border-[#E8C89A]/20 transition-all duration-300 group"
                >
                  <MessageCircle size={18} className="text-[#25D366] mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block font-sans text-[10px] uppercase tracking-widest text-[#B7B68A] font-semibold">Conseiller WhatsApp</span>
                    <span className="font-serif text-[#4A4A37] font-medium block mt-1">Ligne Directe Événements</span>
                    <span className="font-sans text-[10px] text-[#4A4A37]/60 block mt-0.5">Réponse instantanée en un clic</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-[#FBF8F3] border border-[#E8C89A]/20">
                  <MapPin size={18} className="text-[#D8B26A] mt-1" />
                  <div>
                    <span className="block font-sans text-[10px] uppercase tracking-widest text-[#B7B68A] font-semibold">Notre Restaurant</span>
                    <span className="font-serif text-[#4A4A37] font-medium block mt-1">Abidjan, Côte d'Ivoire</span>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 space-y-3">
                <span className="block font-sans text-[10px] uppercase tracking-widest text-[#B7B68A] font-semibold">Suivre Notre Art de Vivre</span>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/la.maison.dreyy/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#E8C89A]/30 hover:border-[#D8B26A] bg-[#FFFDF9] text-[#4A4A37] hover:text-[#D8B26A] transition-all text-xs font-sans tracking-wider uppercase font-semibold"
                  >
                    <Instagram size={14} /> Instagram
                  </a>
                  <a
                    href="https://facebook.com/la.maison.dreyy/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#E8C89A]/30 hover:border-[#D8B26A] bg-[#FFFDF9] text-[#4A4A37] hover:text-[#D8B26A] transition-all text-xs font-sans tracking-wider uppercase font-semibold"
                  >
                    <Facebook size={14} /> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Contact Form - Right (7 cols) */}
          <div className="lg:col-span-7 bg-[#FBF8F3] border border-[#E8C89A]/30 p-8 md:p-12 shadow-md flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 pb-2">
                    <Mail size={16} className="text-[#D8B26A]" />
                    <h3 className="font-serif text-2xl text-[#4A4A37] tracking-tight">Formulaire de Contact</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-[#4A4A37] font-semibold mb-2">
                        Nom complet
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="M. de Rohan-Chabot"
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nom@exemple.com"
                        className="w-full bg-[#FFFDF9] border border-[#E8C89A]/40 py-3 px-4 text-xs font-sans text-[#4A4A37] outline-none focus:border-[#D8B26A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-[#4A4A37] font-semibold mb-2">
                        Téléphone
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+225 01 02 03 04 05"
                        className="w-full bg-[#FFFDF9] border border-[#E8C89A]/40 py-3 px-4 text-xs font-sans text-[#4A4A37] outline-none focus:border-[#D8B26A]"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-[#4A4A37] font-semibold mb-2">
                        Type de Réception
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full bg-[#FFFDF9] border border-[#E8C89A]/40 py-3 px-4 text-xs font-sans text-[#4A4A37] outline-none focus:border-[#D8B26A]"
                      >
                        <option value="Mariage">Mariage</option>
                        <option value="Corporate">Corporate / Séminaire</option>
                        <option value="Brunch">Brunch d'Exception</option>
                        <option value="Anniversaire">Événement Privé / Anniversaire</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-[#4A4A37] font-semibold mb-2">
                      Nombre d'invités estimé
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#FFFDF9] border border-[#E8C89A]/40 py-3 px-4 text-xs font-sans text-[#4A4A37] outline-none focus:border-[#D8B26A]"
                    >
                      <option value="01-20">De 01 à 20 convives</option>
                      <option value="20-50">De 20 à 50 convives</option>
                      <option value="50-100">De 50 à 100 convives</option>
                      <option value="100-200">De 100 à 200 convives</option>
                      <option value="200+">Plus de 200 convives</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] uppercase tracking-widest text-[#4A4A37] font-semibold mb-2">
                      Décrivez-nous votre projet d'exception
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Lieu de réception, ambiance souhaitée, inspirations..."
                      className="w-full bg-[#FFFDF9] border border-[#E8C89A]/40 py-3 px-4 text-xs font-sans text-[#4A4A37] outline-none focus:border-[#D8B26A] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#4A4A37] hover:bg-[#D8B26A] text-[#FFFDF9] font-sans text-xs uppercase tracking-[0.25em] py-4 font-semibold transition-all duration-300 rounded-none shadow-md"
                  >
                    Envoyer ma demande d'exception
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full flex flex-col justify-center items-center text-center p-8 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E8C89A]/10 border border-[#D8B26A] flex items-center justify-center">
                    <Check className="text-[#D8B26A] w-8 h-8 stroke-[3]" />
                  </div>
                  <div className="space-y-3">
                    <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#B7B68A] font-semibold">
                      Demande Reçue avec Succès
                    </span>
                    <h3 className="font-serif text-3xl text-[#4A4A37] tracking-tight">
                      Votre projet est entre nos mains.
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-[#4A4A37]/80 max-w-md mx-auto leading-relaxed">
                      Notre conseiller privé étudie actuellement votre scénographie et votre concept de réception. Un devis de prestige sur-mesure vous sera formulé par email ou téléphone sous 24 heures.
                    </p>
                  </div>
                  <div className="h-[1px] bg-[#E8C89A]/30 w-16"></div>
                  <p className="font-serif italic text-xs text-[#B7B68A]">
                    « Merci de faire confiance à la Maison Drey pour orner vos plus belles célébrations. »
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
