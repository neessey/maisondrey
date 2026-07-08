import React from 'react';
import { motion } from 'motion/react';
import { Star, Award, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      id: 'stat-1',
      value: '300+',
      label: 'Événements d\'Exception',
      description: 'Célébrés avec succès',
      icon: <Award className="text-[#D8B26A] w-5 h-5 mb-2" />
    },
    {
      id: 'stat-2',
      value: '★★★★★',
      label: 'Satisfaction Absolue',
      description: 'Recommandé par nos clients',
      icon: <Star className="text-[#D8B26A] fill-[#D8B26A] w-5 h-5 mb-2" />
    },
    {
      id: 'stat-3',
      value: '100%',
      label: 'Produits Frais',
      description: 'Sélectionnés le matin même',
      icon: <RefreshCw className="text-[#D8B26A] w-5 h-5 mb-2" />
    },
    {
      id: 'stat-4',
      value: '7j/7',
      label: 'Livraison & Installation',
      description: 'À l\'heure exacte convenue',
      icon: <Truck className="text-[#D8B26A] w-5 h-5 mb-2" />
    }
  ];

  return (
    <section className="py-20 bg-[#4A4A37] text-white overflow-hidden relative border-t border-b border-[#E8C89A]/30">
      {/* Background soft lighting overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,200,154,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center space-y-2 group"
            >
              {stat.icon}
              
              <span className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-[#E8C89A] ${stat.id === 'stat-2' ? 'tracking-normal' : ''}`}>
                {stat.value}
              </span>
              
              <div className="h-[1px] bg-[#E8C89A]/30 w-10 group-hover:w-16 transition-all duration-500 my-1"></div>
              
              <span className="font-sans text-xs md:text-sm uppercase tracking-widest text-[#FFFDF9] font-medium">
                {stat.label}
              </span>
              
              <span className="font-sans text-[10px] md:text-xs text-[#B7B68A] italic">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
